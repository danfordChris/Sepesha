<?php

namespace app\modules\billing\controllers;

use app\models\Companies;
use app\models\Trips;
use Yii;
use Exception;
use yii\web\Response;
use yii\web\Controller;
use backend\models\Company;
use yii\filters\VerbFilter;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;
use app\modules\billing\models\Bill;
use app\modules\billing\models\Model;
use app\modules\billing\models\BillItem;
use app\modules\credit\models\PayControl;
use app\modules\billing\models\BillSearch;
use app\modules\credit\models\CreditControl;
use yii\data\ActiveDataProvider;

/**
 * BillingController implements the CRUD actions for Bill model.
 */
class BillingController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::class,
                'rules' => [
                    [
                        'allow' => true,
                        //'actions'=>['index','view','create','update','delete'],
                        'roles' => ['@'],
                        // 'matchCallback' => function ($rule, $action) {
                        //     return User::hasRole(Role::RPAS_ADMIN);
                        // }
                    ]



                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'delete' => ['POST'],
                    'cancel' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Bill models.
     * @return mixed
     */
    public function actionIndex($bid)
    {
        $business = $this->loadCompany($bid);
        $searchModel = new Bill();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams, $business->id);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'business'=>$business
        ]);
    }

    public function actionIndexall()
    {

        $searchModel = new BillSearch();
        $dataProvider = $searchModel->searchAll(Yii::$app->request->queryParams);

        return $this->render('indexall', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,

        ]);
    }

    /**
     * Displays a single Bill model.
     * @param string $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Bill model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate($bid)
    {

        $business = $this->loadCompany($bid);
        $searchModel = new BillSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams,$business->id);
        $model = new Bill();
        $model->refid=$business->id;
        $model->bill_date = date('Y-m-d');
        $model->billid = Yii::$app->getSecurity()->generateRandomString(15);
        $model->business_id = 1;
        $model->erate = 1;
        $orderNo = "";
        $countOrders = Bill::find()->count();
        if ($countOrders) {
            $orderNo = '0' . ($countOrders + 1);
            $model->billno = $orderNo;
        } else {
            $model->billno = '0' . (1);
        }

        $modelsItem = [new BillItem()];
        if ($model->load(Yii::$app->request->post())) {

            $modelsItem = Model::createMultiple(BillItem::class);
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
                        $model->CustomerTransaction();
                        foreach ($modelsItem as $modelItem) {
                            $modelItem->itemid = Yii::$app->getSecurity()->generateRandomString(15);
                            $modelItem->billid = $model->billid;
                            // add customer transaction
                            if (!($flag = $modelItem->save(false))) {
                                $transaction->rollBack();
                                break;
                            }
                        }
                    }

                    if (!$model->CustomerTransaction()) {
                        $transaction->rollBack();
                        \Yii::$app->session->setFlash('error', 'Failed to update customer account ,please contact system administrator!');
                        return $this->redirect(['create', 'bid' => $model->refid]);
                    }


                    if ($flag) {
                        $transaction->commit();
                        \Yii::$app->session->setFlash('success', 'Bill  Created successfully!');
                        return $this->redirect(['create', 'bid' => $model->refid]);
                    }
                } catch (Exception $e) {
                    $transaction->rollBack();
                    \Yii::$app->session->setFlash('error', 'Failed to create ,please contact system administrator!');
                    return $this->redirect(['create', 'bid' => $model->refid]);
                }
            }
        }
        return $this->render('create', [
            'model' => $model,
            'business' => $business,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'modelsItem' => (empty($modelsItem)) ? [new BillItem()] : $modelsItem
        ]);
    }

    /**
     * Updates an existing Bill model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param string $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */

    public function actionUpdate($bid)
    {
        $model = $this->findModel($bid);
        $modelsItem = $model->billItems;
        $business = $this->loadCompany($model->business_id);

        if ($model->status == 'CANCELLED') {
            \Yii::$app->session->setFlash('error', 'Invoice is already cancelled can not be updated !');
            return $this->redirect(['create', 'bid' => $model->refid]);
        }


        if ($model->load(Yii::$app->request->post())) {

            $oldIDs = ArrayHelper::map($modelsItem, 'itemid', 'itemid');
            $modelsItem = Model::createMultiple(BillItem::class, $modelsItem);
            Model::loadMultiple($modelsItem, Yii::$app->request->post());
            $deletedIDs = array_diff($oldIDs, array_filter(ArrayHelper::map($modelsItem, 'itemid', 'itemid')));

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

                        if (!empty($deletedIDs)) {
                            BillItem::deleteAll(['itemid' => $deletedIDs]);
                        }
                        foreach ($modelsItem as $modelItem) {
                            $modelItem->itemid = Yii::$app->getSecurity()->generateRandomString(15);
                            $modelItem->billid = $model->billid;

                            if (!($flag = $modelItem->save(false))) {
                                $transaction->rollBack();
                                break;
                            }
                        }
                    }

                    if (!$model->CustomerTransaction()) {
                        $transaction->rollBack();
                        \Yii::$app->session->setFlash('error', 'Failed to update customer account ,please contact system administrator!');
                        return $this->redirect(['create', 'bid' => $model->refid]);
                    }

                    if ($flag) {
                        $transaction->commit();
                        $model->total_amount = $model->getBillItemTotal();
                        $model->save(false);
                        \Yii::$app->session->setFlash('success', 'Bill updated  successfully!');
                        return $this->redirect(['create', 'bid' => $model->refid]);
                    }
                } catch (Exception $e) {
                    $transaction->rollBack();
                    \Yii::$app->session->setFlash('error', $e->getMessage());
                    return $this->redirect(['create', 'bid' => $model->refid]);
                }
            }
        }

        return $this->render('update', [
            'model' => $model,
            'business' => $business,
            'modelsItem' => (empty($modelsItem)) ? [new BillItem()] : $modelsItem
        ]);
    }

    /**
     * Deletes an existing Bill model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param string $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($bid)
    {

        $transaction = \Yii::$app->db->beginTransaction();
        try {
            $model = $this->findModel($bid);
            $model->status = 'CANCELLED';
            $model->deleted_at = date('Y-m-d H:i:s');
            $model->deleted_by = Yii::$app->user->id;
            if ($model->save(false)) {
                if (
                    !CreditControl::updateAll(['status' => 0], 'refno = :refno', [':refno' => $model->billno]) &&
                    !BillItem::updateAll(['status' => $model->status], 'billid = :Oldbillid', [':Oldbillid' => $model->billid])
                ) {
                    $transaction->rollBack();
                    \Yii::$app->session->setFlash('error', 'Failed  to update customer account,please contact system administrator!');
                    return $this->redirect(['create', 'bid' => $model->refid]);
                }
                $transaction->commit();
                \Yii::$app->session->setFlash('success', 'Invoice cancelled   successfully!');
                return $this->redirect(['create', 'bid' => $model->refid]);
            } else {
                $transaction->rollBack();
                \Yii::$app->session->setFlash('error', 'Failed to cancel bill,please contact system administrator!');
                return $this->redirect(['create', 'bid' => $model->refid]);
            }


        } catch (Exception $e) {
            $transaction->rollBack();
            \Yii::$app->session->setFlash('danger', $e->getMessage());
            return $this->redirect(['create', 'bid' => $model->refid]);

        }

        return $this->redirect(['create', 'bid' => $model->refid]);
    }



    public function actionInvoice($did)
    {

        $model = $this->findModel($did);
        $modelDbt = new PayControl();
        $modelDbt->cdate = date('Y-m-d');
        $modelDbt->ctype = 'dbt';
        $modelDbt->refno = $model->billno;
        $modelDbt->type = 'invoice';
        $modelDbt->cid = $model->cid;
        $modelDbt->descr = 'payment for invoice #' . $model->billno;
        $modelDbt->crdid = Yii::$app->security->generateRandomString(10);

        $debits= new ActiveDataProvider([
           'query'=>PayControl::find()->where(['type'=>'invoice','ctype'=>'dbt','refno'=>$model->billno]),
        ]);

        if ($modelDbt->load(Yii::$app->request->post())) {
            $transaction = \Yii::$app->db->beginTransaction();
            try {

                if($modelDbt->damount>$model->getInvoiceBalance()){
                    \Yii::$app->session->setFlash('error', 'You cannot pay amount greater than invoice balance is : '.$model->currency.' '. number_format((float)$model->getInvoiceBalance()));
                    return $this->render('invoice', ['model' => $model, 'modelDbt' => $modelDbt,'debits'=>$debits]);
                }

                if ($modelDbt->save(false)) {
                    //if bill is partially paid
                    if($model->getInvoiceBalance()==0){
                        $model->payment_status = 'PAID';
                    }else{
                        $model->payment_status = 'PARTIAL';
                    }

                    $model->save(false);

                    Yii::$app->session->setFlash('success', "Malipo yamefanikiwa kuifadhiwa!");
                    $transaction->commit();
                    return $this->redirect(['invoice', 'did' => $model->billid]);
                } else {
                    $transaction->rollBack();
                    \Yii::$app->session->setFlash('error', 'Failed to create ,please contact system administrator!');
                    return $this->render('invoice', ['model' => $model, 'modelDbt' => $modelDbt,'debits'=>$debits]);
                }
            } catch (Exception $e) {
                $transaction->rollBack();
                \Yii::$app->session->setFlash('danger', $e->getMessage());
                return $this->render('invoice', ['model' => $model, 'modelDbt' => $modelDbt,'debits'=>$debits]);
                // return $this->refresh();
            }
        }
        return $this->render('invoice', ['model' => $model, 'modelDbt' => $modelDbt,'debits'=>$debits]);
    }


    public function actionPrintInvoice($bid){
        $model = $this->findModel($bid);
        $items=BillItem::find()->where(['billid' => $model->billid,'status'=>'ACTIVE'])->all();
        $billItems = new ActiveDataProvider([
            'query' => BillItem::find()->where(['billid' => $model->billid]),
        ]);
     return $this->render('print_invoice',['billItems'=>$billItems,'model'=>$model,'items'=>$items]);

    }


    /**
     * Finds the Bill model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $id
     * @return Bill the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Bill::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function loadCompany($id)
    {
        if (($model = Trips::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
