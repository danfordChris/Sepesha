<?php

namespace app\controllers;

use Yii;
use kartik\mpdf\Pdf;
use yii\helpers\Url;
use app\models\Model;
use yii\web\Response;
use app\models\Invoice;
use yii\base\Exception;
use yii\web\Controller;
use app\models\Approval;
use app\models\Vouchers;
use app\models\WfStages;
use app\models\Workflow;
use app\models\SystemRoles;
use yii\filters\VerbFilter;
use yii\widgets\ActiveForm;
use app\models\AccountCodes;
use app\models\ExchangeRate;
use yii\helpers\ArrayHelper;
use app\models\EmailTemplate;
use app\models\InvoiceSearch;
use app\models\AccountEntries;
use app\models\VouchersSearch;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use yii\bootstrap5\BootstrapAsset;
use yii\web\NotFoundHttpException;
use app\models\AccountEntriesSearch;
use app\models\AccountEntriesInvoice;

/**
 * VouchersController implements the CRUD actions for Vouchers model.
 */
class InvoicesController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::class,
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],


                ],
            ],
        ];
    }

    /**
     * Lists all Vouchers models.
     *
     * @return string
     */
    public function actionIndex()
    {
        // $acccode = AccountCodes::find()->where(['coid' => $modelEntry->entryid, 'status' => 1])->one();
        // $modelEntry->account_code = $acccode->code;
        // $modelEntry->name = $acccode->name;

        $acccode = Invoice::getAccountCode(AccountCodes::ENTRY_RECEIVABLE);
        if (!$acccode) {
            Yii::$app->session->setFlash('error', "Please set account Receivables code to continue with Invoice Entry !");
        }
        $transaction = Yii::$app->db->beginTransaction();
        $model = new Invoice;
        $model->wid = 2;
        $model->vid = Yii::$app->security->generateRandomString(10);
        $model->transact_date = date('Y-m-d');
        $searchModel = new InvoiceSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        if ($model->load($this->request->post())) {
            if (!$acccode) {
                Yii::$app->session->setFlash('error', "Please set account Receivables code to continue with Invoice Entry !");
                return $this->render('index', [
                    'model' => $model,
                    'searchModel' => $searchModel,
                    'dataProvider' => $dataProvider,
                ]);
            }
            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Invoice  Created Successfully ,please add items");
                return $this->redirect(['items', 'vid' => $model->vid]);
            } else {
                Yii::$app->session->setFlash('error', "Failed to save Invoice");
                return $this->redirect(['index']);
            }
        }

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionInvoice()
    {
        $acccode = Invoice::getAccountCode(AccountCodes::ENTRY_REVENUE);
        if (!$acccode) {
            Yii::$app->session->setFlash('error', "Please set account Revenue code to continue with Invoice Entry !");
        }

        $model = new Invoice;
        $model->vid = Yii::$app->security->generateRandomString(10);
        $model->transact_date = date('Y-m-d');

        $wid = $model->wid = 2; // invoice workflow
        $nst = $model->stid = 1;
        $modelsItem = [new AccountEntriesInvoice()];
        if ($model->load(Yii::$app->request->post())) {

            $stage = WfStages::find()->where(['wid' => $wid, 'sno' => $nst])->one();
            $model->wfstatus = $stage->sname;
            $model->erate =  ExchangeRate::getExchangeRate($model->currency);
            $modelsItem = Model::createMultiple(AccountEntriesInvoice::class);
            Model::loadMultiple($modelsItem, Yii::$app->request->post());
            // ajax validation
            if (Yii::$app->request->isAjax) {
                Yii::$app->response->format = Response::FORMAT_JSON;
                return ArrayHelper::merge(
                    ActiveForm::validateMultiple($modelsItem),
                    ActiveForm::validate($model)
                );
            }
            // validate all models
            $valid = $model->validate();
            $valid = Model::validateMultiple($modelsItem) && $valid;

            if ($valid) {
                $transaction = \Yii::$app->db->beginTransaction();
                try {
                    if ($flag = $model->save(false)) {
                        $wid = $model->wid;
                        $stid = $model->stid;
                        // $subject ='Export Permit Request';
                        // $service = 'Export Permit';
                        $stagename = Yii::$app->db->createCommand("SELECT sname FROM wfstages WHERE wid = '$wid' AND sno = '$stid'")->queryOne(false);
                        foreach ($modelsItem as $modelItem) {
                            $acccode = AccountCodes::getAccountCodeById($modelItem->entryid);
                            $modelItem->quantity = 1;
                            $modelItem->entry_type = AccountCodes::CREDIT_TRANSACTION;
                            $modelItem->category = AccountCodes::ENTRY_REVENUE;
                            $currency = $modelItem->currency = $model->currency;
                            $modelItem->name = $acccode['name'];
                            $modelItem->customer_id = $model->customer_id;
                            $modelItem->transact_id = $model->vid;
                            $modelItem->dramount = 0;
                            $modelItem->transact_date = $model->transact_date;
                            $modelItem->fyid = AccountCodes::CurrentFinancialYear();
                            $modelItem->unit_price = $modelItem->cramount;
                            $modelItem->account_code =  $acccode['code'];
                            $modelItem->wid = $model->wid;
                            $modelItem->stid = $model->stid;
                            $modelItem->erate =  ExchangeRate::getExchangeRate($currency);

                            if (!($flag = $modelItem->save(false))) {
                                $transaction->rollBack();
                                break;
                            }
                        }
                    }
                    if ($flag) {
                        $transaction->commit();
                        Yii::$app->session->setFlash('success', "Your Request has been successfully submitted for approval");
                        return $this->redirect(['index']);
                    }
                } catch (Exception $e) {
                    $transaction->rollBack();
                }
            }
        }

        return $this->render('create', [
            'model' => $model,
            'modelsItem' => (empty($modelsItem)) ? [new AccountEntriesInvoice()] : $modelsItem
        ]);
    }



    public function actionView($vid)
    {
        $model = $this->findModel($vid);
        return $this->render('view', [
            'creditsRevenue' => $this->creditsRevenue($model),
            'debitsReceivables' => $this->debitsReceivables($model),
            'approvals' => $this->approvalListData($model),
            'model' => $model,
        ]);
    }



    public function actionAttend($vid)
    {
        $acccode = Invoice::getAccountCode(AccountCodes::ENTRY_RECEIVABLE);
        if (!$acccode) {
            Yii::$app->session->setFlash('error', "Please set account Receivables code to continue with Invoice Entry !");
        }
        $transaction = Yii::$app->db->beginTransaction();
        $model = $this->findModel($vid);
        $modelApproval = new Approval();
        $wid = $modelApproval->wid = $model->wid;
        $rid = $modelApproval->reqid = $model->vid;
        $stno = $model->stid;
        $modelApproval->stid = $stno;

        // if (!SystemRoles::isOnWorkflow($wid, $stno)) {
        //     Yii::$app->session->setFlash('danger', 'You are not authorized !');
        //     return $this->redirect(['index']);
        // }

        $maxStage = Workflow::findOne($model->wid);
        if ($modelApproval->load(Yii::$app->request->post())) {
            $stage = WfStages::find()->where(['wid' => $model->wid, 'sno' => $modelApproval->stid])->one();

            $modelApproval->wfsname = $stage->sname;
            $model->wfstatus = $stage->sname;
            if ($modelApproval->wfs == 'Y') {
                $messageType = 'success';
                $message = 'Your Request has been successfully submitted';
                $modelApproval->wfstatus = $stage->actok;
                $stno = $stno + 1;
                $model->stid = $stno;
            } else {
                $modelApproval->wfstatus = $stage->actnotok;
                if ($stno == 1) {
                    $model->requserinput = 'Y';
                    $stno = $stno;
                } else {
                    $stno = $stno - 1;
                }
                $model->stid = $stno;
                $messageType = 'success';
                $message = 'Process returned';
            }

            $modelApproval->stid = $stno;

            if ($stno > $maxStage->stages) {
                $model->status = "A";
                $message = 'Approved successfully !';
                try {
                    $modelApproval->save();
                    $model->save(false);

                    $IntrySaved = AccountEntries::SaveEntry(
                        AccountCodes::DEBIT_TRANSACTION,
                        $acccode['code'],
                        $acccode['coid'],
                        $acccode['category'],
                        AccountCodes::INVOICE_TRANSACTION,
                        $acccode['category'],
                        date('Y-m-d'),
                        $model->currency,
                        $model->customer_id,
                        $model->vid,
                        0,
                        $model->amount,
                        $model->erate ?? 1
                    );

                    if ($IntrySaved) {
                        $transaction->commit();
                        Yii::$app->db->createCommand("UPDATE account_entries SET status = 'A' WHERE transact_id =:rid")->bindParam(':rid', $rid)->execute();
                        Yii::$app->session->setFlash($messageType, $message);
                        return $this->redirect(['index']);
                    } else {
                        $transaction->rollBack();
                        Yii::$app->session->setFlash('danger', 'Failed to Create Items!.');
                        return $this->redirect(['index']);
                    }
                } catch (\Exception $e) {
                    $transaction->rollBack();
                    Yii::$app->session->setFlash('danger', 'Failed to Create Main !.');
                    return $this->redirect(['index']);
                    throw $e;
                }
            } else {
                $modelApproval->save();
                $model->save(false);
                // $this->sendNotification($wid,$stno,'Training Fund Invoice');
                $transaction->commit();
                Yii::$app->session->setFlash($messageType, $message);
                return $this->redirect(['index']);
            }
        }

        return $this->render('attend', [
            'creditsRevenue' => $this->creditsRevenue($model),
            'debitsReceivables' => $this->debitsReceivables($model),
            'approvals' => $this->approvalListData($model),
            'model' => $model,
            'modelApproval' => $modelApproval

        ]);
    }


    public function actionReceipt($vid)
    {
        $transaction = Yii::$app->db->beginTransaction();
        $model = $this->findModel($vid);
        $modelEntry = new AccountEntries();
        $pays = new ActiveDataProvider([
            'query' => AccountEntries::find()->where([
                'transact_id' => $model->vid,
                'status' => ['A', 'N'],
                'category' => AccountCodes::RECEIPT_TRANSACTION,
            ])
        ]);

        $acccodeP = Invoice::getAccountCode(AccountCodes::ENTRY_RECEIVABLE);
        if (!$acccodeP) {
            Yii::$app->session->setFlash('error', "Please set account Receivables code to continue with Entry !");
        }

        $modelEntry->entry_type = AccountCodes::DEBIT_TRANSACTION;
        $modelEntry->category = AccountCodes::RECEIPT_TRANSACTION;
        $modelEntry->currency = $model->currency;
        $modelEntry->erate = $model->erate;
        $modelEntry->customer_id = $model->customer_id;
        $modelEntry->transact_id = $model->vid;
        $modelEntry->cramount = 0;
        $modelEntry->wid = 3;
        $modelEntry->stid = 1;
        $modelEntry->fyid = AccountCodes::CurrentFinancialYear();
        $modelEntry->transact_date = date('Y-m-d');

        if ($modelEntry->load($this->request->post())) {
            if (($model->getInvoiceBalance() < $modelEntry->dramount)) {
                Yii::$app->session->setFlash('danger', 'Failed , Entry amount must but be less or equal to ' . number_format($model->getInvoiceBalance(), 2) . ' ' . $model->currency);
                return $this->render('receipt', [
                    'model' => $model,
                    'pays' => $pays,
                    'creditsReceivable' => $this->creditsReceivable($model),
                    'debitBank' => $this->debitBank($model),
                    'approvals' => $this->approvalListData($model),
                    'modelEntry' => $modelEntry
                ]);
            } elseif ($modelEntry->dramount == 0) {
                Yii::$app->session->setFlash('danger', 'Failed ,You cannot post payment with zero(0) amount !');
                return $this->render('receipt', [
                    'model' => $model,
                    'pays' => $pays,
                    'creditsReceivable' => $this->creditsReceivable($model),
                    'debitBank' => $this->debitBank($model),
                    'approvals' => $this->approvalListData($model),
                    'modelEntry' => $modelEntry
                ]);
            }

            $acccode = AccountCodes::find()->where(['coid' => $modelEntry->entryid, 'status' => 1])->one();
            $modelEntry->account_code = $acccode->code;
            $modelEntry->name = $acccode->name;

            try {
                $modelEntry->save();
                //SAVE receivables AS DR
                $IntrySaved = AccountEntries::SaveEntry(
                    AccountCodes::CREDIT_TRANSACTION,
                    $acccodeP['code'],
                    $acccodeP['coid'],
                    $acccodeP['category'],
                    AccountCodes::RECEIPT_TRANSACTION,
                    $acccodeP['category'],
                    date('Y-m-d'),
                    $model->currency,
                    $model->customer_id,
                    $modelEntry->id,
                    $modelEntry->dramount,
                    0,
                    $model->erate ?? 1
                );

                if ($IntrySaved) {
                    $transaction->commit();
                    Yii::$app->session->setFlash('success', 'Saved successfully');
                    return $this->refresh();
                } else {
                    $transaction->rollBack();
                    Yii::$app->session->setFlash('error', "Failed to record receipt !");
                    return $this->refresh();
                }
            } catch (\Exception $e) {
                $transaction->rollBack();
                Yii::$app->session->setFlash('error', "Failed to record receipt !");
                return $this->refresh();
                throw $e;
            }
        }

        return $this->render('receipt', [
            'model' => $model,
            'pays' => $pays,
            'creditsReceivable' => $this->creditsReceivable($model),
            'debitBank' => $this->debitBank($model),
            'approvals' => $this->approvalListData($model),
            'modelEntry' => $modelEntry
        ]);
    }

    /**
     * Creates a new Vouchers model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Vouchers();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {

                return $this->redirect(['items', 'vid' => $model->vid]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }



    public function actionUpdate($vid)
    {
        $model = $this->findModel($vid);

        if ($this->request->isPost && $model->load($this->request->post())) {
            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Voucher: " . $model->vno . " Details Updated successfully");
                return $this->redirect(['index']);
            } else
                Yii::$app->session->setFlash('danger', 'Failed to update details!.');
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionConfirm($vid)
    {
        $model = $this->findModel($vid);
        $modelApproval = new Approval();
        $modelApproval->wid = $wid = $model->wid;
        $modelApproval->stid = $model->stid;

        if (($model->amount != $model->getVoucherEntryBalance())) {
            Yii::$app->session->setFlash('danger', 'Failed , Entry amount must but be  equal to ' . number_format($model->getVoucherEntryBalance(), 2) . ' ' . $model->currency);
            return $this->redirect(['index']);
        }

        $stage = WfStages::find()->where(['wid' => $wid, 'sno' => $model->stid])->one();
        if ($this->request->isPost && $model->load($this->request->post()) && $modelApproval->load($this->request->post())) {

            $model->stid = 2;
            $modelApproval->wfstatus = $stage['actok'];
            $modelApproval->wfs = $stage['okchar'];
            $modelApproval->wfsname = $stage['sname'];
            $modelApproval->wfsname = $stage['sname'];
            $modelApproval->reqid = $model->vid;
            $stage = WfStages::find()->where(['wid' => $model->wid, 'sno' => $model->stid])->one();
            $model->wfstatus = $stage['sname'];
            if ($model->save()) {
                $modelApproval->save();

                //send message notification
                $this->sendNotification($model->wid, $model->stid, 'TRAINING FUND APPROVAL');
                Yii::$app->session->setFlash('success', "Request has been successful Sent to <b>$stage->sname</b> stage For Further Processing");

                return $this->redirect(['index']);
            } else
                Yii::$app->session->setFlash('danger', 'Failed to update details!.');
        }
    }




    public function sendNotification($wid, $stno, $subject)
    {
        $qn = "SELECT CONCAT(e.fname,' ',e.sname),e.email FROM employees e INNER JOIN wfroles wr ON e.empid = wr.empid WHERE wr.wid = '$wid' AND wr.stid = '$stno' ";
        $qn .= "AND DATEDIFF(CURDATE(),fdate) >= 0 AND DATEDIFF(tdate,CURDATE()) >= 0";

        $rst = Yii::$app->db->createCommand($qn)->queryAll(false);
        if (!empty($rst)) {
            foreach ($rst as $rs) {
                $message = "Dear <b>$rs[0]</b>,<br/> </b> A request for $subject has been submited for your Action.
                          Please attend <br/> ";
                $message .= "<br/>========================<br/><b>Do not reply to this email as is for notification purpose only</b>";
                EmailTemplate::logEmail($rs[1], $subject, $message);
            }
        }
    }


    public function actionCancel($vid)
    {
        $model = $this->findModel($vid);

        if ($this->request->isPost && $model->load($this->request->post())) {
            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Voucher: " . $model->vno . " Details Updated successfully");
                return $this->redirect(['index']);
            } else
                Yii::$app->session->setFlash('danger', 'Failed to update details!.');
        }
        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Vouchers model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $vid Vid
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($vid)
    {
        $this->findModel($vid)->delete();

        return $this->redirect(['index']);
    }


    public function approvalListData($model)
    {
        $approvals = Approval::find()->where(['reqid' => $model->vid])->orderBy('cdate desc')->all();
        return $approvals;
    }


    // invoice

    public function creditsRevenue($model)
    {
        $creditsRevenue = new ActiveDataProvider([
            'query' => AccountEntriesInvoice::find()->where([
                'transact_id' => $model->vid,
                'status' => ['A', 'N'],
                'category' => AccountCodes::ENTRY_REVENUE
            ]),
        ]);

        return $creditsRevenue;
    }



    //invoice
    public function  debitsReceivables($model)
    {
        $debitsReceivables = new ActiveDataProvider([
            'query' => AccountEntriesInvoice::find()->where([
                'transact_id' => $model->vid,
                'status' => ['A', 'N'],
                'category' => AccountCodes::ENTRY_RECEIVABLE,
                'entry_type' => AccountCodes::DEBIT_TRANSACTION
            ]),
        ]);
        return $debitsReceivables;
    }


    //receipt
    public function creditsReceivable($model)
    {
        $credits = new ActiveDataProvider([
            'query' => AccountEntriesInvoice::find()->where([
                'transact_id' => $model->vid,
                'status' => ['A', 'N'],
                'category' => AccountCodes::RECEIPT_TRANSACTION,
                'entry_type' => AccountCodes::CREDIT_TRANSACTION
            ]),
        ]);

        return $credits;
    }


    //receipt
    public function debitBank($model)
    {
        $debits = new ActiveDataProvider([
            'query' => AccountEntriesInvoice::find()->where([
                'transact_id' => $model->vid,
                'status' => ['A', 'N'],
                'category' => AccountCodes::RECEIPT_TRANSACTION,
                'entry_type' => AccountCodes::DEBIT_TRANSACTION
            ]),
        ]);

        return $debits;
    }


    public function actionPrintInv($vid)
    {
        $model = $this->findModel($vid);
        $itemsData = AccountEntriesInvoice::find()->where([
            'transact_id' => $model->vid,
            'status' => ['A', 'N'],
            'category' => AccountCodes::ENTRY_REVENUE,
            'entry_type' => 'CREDIT'
        ])->all();

        $this->layout = "plain";
        return $this->render('print_invoice_normal', [
            'model' => $model,
            'items' => $itemsData,
            'tbIheader' => $this->headingDetails(),
        ]);
    }

    public function actionInvoicePrint($vid)
    {
        $model = $this->findModel($vid);
        // $searchModel = new VouchersSearch();
        // $searchModel->vid = $vid;
        // $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        Yii::$app->response->format = \yii\web\Response::FORMAT_RAW;

        $searcheEntry = new AccountEntriesSearch();
        $creditsRevenue = $searcheEntry->search(Yii::$app->request->queryParams);
        $creditsRevenue->query->andWhere(['transact_id' => $model->vid, 'entry_type' => 'CREDIT']);

        $userptr = '';
        if (!Yii::$app->user->isGuest) {
            $userptr = Yii::$app->user->identity->fullname;
        } else {
        }
        $userptr = '';
        $pdf = new Pdf([
            // 'mode' => Pdf::MODE_CORE,
            'mode' => Pdf::MODE_UTF8,
            'format' => Pdf::FORMAT_A4,
            'destination' => Pdf::DEST_BROWSER,
            'filename' => 'Payment Voucher' . strtolower(Yii::$app->controller->id) . '-' . $model->created_at . '.pdf',
            //'destination' => Pdf::DEST_DOWNLOAD,
            'content' => $this->renderPartial('print_invoice', [
                'model' => $model,
                //'searchModel' => $searchModel,
                //'dataProvider' => $dataProvider,
                'tbIheader' => $this->headingDetails(),
                'creditsRevenue' => $creditsRevenue,

            ]),
            'cssFile' => '@vendor/kartik-v/yii2-mpdf/src/assets/kv-mpdf-bootstrap.min.css',

            // 'options' => [
            //     'showWatermarkText' => true
            // ],
            // 'methods' => [
            //     //'SetWatermarkText' => ['NOT APPROVED'],
            //     // 'SetHeader '=>$tbH,
            //     // 'SetFooter' => $tbHFooter,
            // ]
        ]);
        return $pdf->render();
    }


    public function actionReceiptPrint($vid)
    {
        $model = $this->loadAccountEntry($vid);
        //Yii::$app->response->format = \yii\web\Response::FORMAT_RAW;
        // $searcheEntry = new AccountEntriesSearch();
        // $receipt = $searcheEntry->search(Yii::$app->request->queryParams);
        // $receipt->query->andWhere(['transact_id' => $model->vid, 'category' => AccountCodes::RECEIPT_TRANSACTION]);
        $ccword = $model->currency == 'TZS' ? 'Tanzanian Shilling Only' : 'U.S Dollar Only';
        $userptr = '';
        if (!Yii::$app->user->isGuest) {
            $userptr = Yii::$app->user->identity->fullname;
        } else {
        }
        $userptr = '';
        $pdf = new Pdf([
            // 'mode' => Pdf::MODE_CORE,
            'mode' => Pdf::MODE_UTF8,
            'format' => Pdf::FORMAT_A4,
            'destination' => Pdf::DEST_BROWSER,
            'filename' => 'Payment Voucher' . strtolower(Yii::$app->controller->id) . '-' . $model->created_at . '.pdf',
            //'destination' => Pdf::DEST_DOWNLOAD,
            'content' => $this->renderPartial('print_receipt', [
                'model' => $model,
                'tbIheader' => $this->headingDetails(),
                'ccword ' =>  $ccword,
            ]),
            'cssFile' => '@vendor/kartik-v/yii2-mpdf/src/assets/kv-mpdf-bootstrap.min.css',

        ]);
        return $pdf->render();
    }


    protected function findModel($vid)
    {
        if (($model = Invoice::findOne(['vid' => $vid])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function loadAccountEntry($vid)
    {
        if (($model = AccountEntries::findOne(['id' => $vid])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }


    public function headingDetails()
    {
        $d = Yii::$app->db->createCommand("SELECT name,paddress,address,tel,email,website FROM companyinfo")->queryOne(false);

        $logo = Url::to('@web/uploads/tcaa.png', true);
        $nembo = Url::to('@web/uploads/tz.jpg', true);
        if ($d) {
            $tbIheader = "<table cellpadding=1  cellspacing=0 width=100% ><tr>";
            // $tbIheader .= "<td align=center><img src='" . $logo . "'  width='150px' /></td>";
            $tbIheader .= "<td align=center><span style='font-size: 16px;'>THE UNITED REPUBLIC OF TANZANIA</span><br />";
            $tbIheader .= "<span style='font-size: 15px;font-weight:bold'>$d[0]</span><br /><span style='font-size: 13px;'>$d[1]</span><br />";
            $tbIheader .= "<span style='font-size: 13px;'>$d[2]</span><br /><span style='font-size: 12px;'>Tel:$d[3]&nbsp;&nbsp;Email:$d[4]&nbsp;&nbsp;Website:$d[5]</span><br /><br />";
            $tbIheader .= "</td>";
            $tbIheader .= "</tr></table>";
        } else {
            $tbIheader = "<table class='table table-bordered'><tr class='alert alert-danger'><th colspan=4>INVALID REQUEST</th></tr></table>";
        }
        return  $tbIheader;
    }
}