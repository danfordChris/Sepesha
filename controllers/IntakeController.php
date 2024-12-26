<?php

namespace app\controllers;

use Yii;
use app\models\User;
use app\models\Intake;
use yii\web\Controller;
use app\models\Approval;
use app\models\CarePlan;
use app\models\WfStages;
use app\models\Workflow;
use yii\web\UploadedFile;
use app\models\Attachment;
use app\models\Beneficiary;
use yii\filters\VerbFilter;
use app\models\CustomHelper;
use app\models\IntakeSearch;
use yii\filters\AccessControl;
use app\models\BeneficiaryContact;
use yii\web\NotFoundHttpException;
use app\models\CsdAttendanceSearch;
use app\models\BeneficiaryContactSearch;
use app\models\CaseClosure;
use app\models\CaseworkerIntakeAssignment;
use app\models\SystemRoles;
use yii\web\ForbiddenHttpException;

/**
 * IntakeController implements the CRUD actions for Intake model.
 */
class IntakeController extends Controller
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
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('admin');
                        }
                    ],
                    [
                        'allow' => true,
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('case_worker');
                        }
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }
    /**
     * Lists all Intake models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new IntakeSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionIndexBeneficiary($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = new Intake();
        $model->beneficiary_id = $number;
        $beneficiary = $this->findBeneficiary($number);
        $searchModel = new IntakeSearch();
        $dataProvider = $searchModel->searchBeneficiary($this->request->queryParams, $number);

        return $this->render('index-beneficiary', [
            'beneficiary' => $beneficiary,
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionReport()
    {
        $searchModel = new IntakeSearch();
        $dataProvider = $searchModel->searchReport($this->request->queryParams);
        $model = new Intake();
        return $this->render('report', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }




    public function actionManage($ref)
    {
        $model = $this->findModel($ref);
        $attachmentModel = Attachment::populateAttachmentFields($model);
        $this->addAttachementFunction($attachmentModel);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save(false)) {
            Yii::$app->session->setFlash('success', "Intake updated successfully");
            return $this->refresh();
        }
        return $this->render('manage', [
            'model' => $model,
            'attachmentModel' => $attachmentModel
        ]);
    }



    // function to upload attachment
    public function addAttachementFunction($attachmentModel)
    {
        if (Yii::$app->request->isPost &&  $attachmentModel->load(Yii::$app->request->post())) {
            $attachmentModel->attachment = UploadedFile::getInstance($attachmentModel, 'attachment');
            $attachmentModel->name = $attachmentModel->doc->documenttypeName->name ?? 'non';
            if ($attachmentModel->upload() && $attachmentModel->save()) {
                Yii::$app->session->setFlash('success', 'Attachment uploaded successfully.');
                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('error', 'Failed to upload attachment');
                return $this->refresh();
                //return $attachmentModel->getErrors();
            }
        }
    }


    public function actionCare($ref)
    {
        $model = $this->findModel($ref);
        return $this->render('manage', [
            'model' => $model,

        ]);
    }


    public function actionBeneficiaryIntake($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = new Intake();
        $beneficiary = $this->findBeneficiary($number);
        $beneid = $beneficiary->id;
        $searchModel = new IntakeSearch();
        $dataProvider = $searchModel->searchBeneficiary($this->request->queryParams, $beneid);
        $searchContacts = new BeneficiaryContactSearch();

        $contactProvider = $searchContacts->searchBeneficiary($this->request->queryParams, $beneid);

        $searchModel = new CsdAttendanceSearch();
        $dataProviderCsd = $searchModel->searchAttendance($this->request->queryParams, $beneid);
        $contacts = new BeneficiaryContact();

        return $this->render('beneficairy_intake', [
            'beneficiary' => $beneficiary,
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'contactProvider' => $contactProvider,
            'dataProviderCsd' => $dataProviderCsd,
            'contacts' => $contacts
        ]);
    }

    /**
     * Displays a single Intake model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($ref)
    {
        return $this->render('view', [
            'model' => $this->findModel($ref),
        ]);
    }




    /**
     * Creates a new Intake model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = new Intake();
        $model->beneficiary_id = $number;

        $contacts = new BeneficiaryContact();
        $searchContacts = new BeneficiaryContactSearch();
        $contactProvider = $searchContacts->searchBeneficiary($this->request->queryParams, $number);

        $searchModel = new CsdAttendanceSearch();
        $dataProvider = $searchModel->searchAttendance($this->request->queryParams, $number);

        $beneficiary = $this->findBeneficiary($number);

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $model->refno = $model->getReferenceNumber();
                if ($model->save()) {

                    return $this->redirect(['index']);
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'beneficiary' => $beneficiary,
            'model' => $model,
            'dataProvider' => $dataProvider,
            'contacts' => $contacts,
            'contactProvider' => $contactProvider,

        ]);
    }


    public function actionCreateIntake($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = new Intake();
        $beneficiary = $this->findBeneficiary($number);
        $beneid = $model->beneficiary_id = $beneficiary->id;
        $contacts = new BeneficiaryContact();
        $searchContacts = new BeneficiaryContactSearch();
        $contactProvider = $searchContacts->searchBeneficiary($this->request->queryParams, $beneid);

        $searchModel = new CsdAttendanceSearch();
        $dataProvider = $searchModel->searchAttendance($this->request->queryParams, $beneid);


        $model->refno = $model->getReferenceNumber();

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Intake Successfully Added");
                    return $this->redirect(['beneficiary-intake', 'rca' => Yii::$app->getSecurity()->hashData($beneid, 'gmtdev')]);
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create_intake', [
            'beneficiary' => $beneficiary,
            'model' => $model,
            'dataProvider' => $dataProvider,
            'contacts' => $contacts,
            'contactProvider' => $contactProvider,

        ]);
    }

    public function actionSubmitBeneficiaryIntake($intake)
    {

        $this->layout = "intake";

        $model = $this->findModel($intake);
        $intakeId = $model->refno;

        $beneficiary = $this->findBeneficiary($model->beneficiary_id);

        $this->view->params['intakeRefno'] = $intakeId;

        $this->view->params['beneficiaryName'] = $beneficiary->getFullName();
        $this->view->params['beneficiaryPhoto'] = $beneficiary->photo;

        if ($model->services) {
            $model->services = explode(",", $model->services);
        }

        $contacts = new BeneficiaryContact();
        $searchContacts = new BeneficiaryContactSearch();
        $contactProvider = $searchContacts->searchBeneficiary($this->request->queryParams, $intakeId);

        $searchModel = new CsdAttendanceSearch();
        $dataProvider = $searchModel->searchAttendance($this->request->queryParams, $intakeId);

        $careplan = new CarePlan();
        $careplan->intake_id = $model->id;
        $careplan->type = 1;

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $model->stid = 2;
                if ($model->save()) {
                    return $this->redirect(['/beneficiary/index']);
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('submit-beneficiary-intake', [
            'beneficiary' => $beneficiary,
            'model' => $model,
            'dataProvider' => $dataProvider,
            'contacts' => $contacts,
            'contactProvider' => $contactProvider,
            'careplan' => $careplan

        ]);
    }


    /**
     * Updates an existing Intake model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {

        $model = $this->findModel($id);

        if ($model->services) {
            $model->services = explode(",", $model->services);
        }

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['benefiiary/index']);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionIntakeStatus($ref)
    {
        $model = $this->findModel($ref);
        $approvalsWf = CustomHelper::getApprovalLogsAllWorkflow($model->refno);
        return $this->render('intake_status', [
            'model' => $model,
            'approvalsWf' => $approvalsWf
        ]);
    }


    /**
     * Deletes an existing Intake model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    public function actionAttend($intake)
    {
        $intake = $this->findModel($intake);
        $modelApproval = new Approval;
        $modelCaseWorker = new CaseworkerIntakeAssignment();
        $modelApproval->reqid = $intake->refno;
        $modelApproval->wid = $intake->wid;
        $stno = $intake->stid;
        $modelApproval->sno = $stno;
        $maxStage = Workflow::findOne($intake->wid)->stages;

        $attachmentModel = Attachment::populateAttachmentFields($intake);
        $attachments = Attachment::find()->where(['wid' => $intake->wid, 'owner_id' => $intake->id])->all();

        CustomHelper::setMainUrl();
        $_SESSION['ref'] = $intake->refno;

        if (! SystemRoles::isOnWorkflow($intake->wid, $intake->stid)) {
            throw new ForbiddenHttpException(Yii::t('app', 'You are not authorized to perform this action. If you believe you should have access, please contact your system administrator.'));
        }

        $approvalsWf = CustomHelper::getApprovalLogs($intake->wid, $intake->refno);

        if ($this->request->isPost && $modelApproval->load($this->request->post()) && $modelApproval->validate()) {
            $stage = WfStages::find()->where(['wid' => $intake->wid, 'sno' => $modelApproval->sno])->one();
            $modelApproval->wfsname = $stage->sname;

            //if workflow has attachment then save it;
            // save workflow document
            $docAttached = UploadedFile::getInstance($modelApproval, 'attachment');
            $docLocation = '/uploads/documents/approvals/';
            if (is_object($docAttached)) {
                $filePath = CustomHelper::saveNewDocument($docAttached, $docLocation);
                // Generate the URL
                $baseUrl = Yii::$app->request->baseUrl;
                $url = $baseUrl . $docLocation . basename($filePath);
                // Save URL to the database
                $modelApproval->attachment = $url;
            }

            if ($modelApproval->wfs == 'Y') {
                $sno = $intake->stid = $stage->nextstage;
                $intake->wfstatus =  $modelApproval->wfstatus  = $stage->okname;
                if ($sno > $maxStage) {
                    $intake->status = 'A';
                    $intake->approved_by = Yii::$app->user->id;
                    $intake->approved_date = date('Y-m-d');

                    if ($intake->status == 'A' && $modelCaseWorker->load($this->request->post())) {
                        $modelCaseWorker->intake_id = $intake->id;
                        $modelCaseWorker->benid = $intake->beneficiary_id;
                        $modelCaseWorker->assign_date = $intake->approved_date;
                        $modelCaseWorker->save();
                    }
                }
            } else {
                $intake->stid = $stage->backstage;
                $intake->wfstatus = $modelApproval->wfstatus  = $stage->notokname;
            }

            $modelApproval->stid = $intake->stid;
            $modelApproval->benid = $intake->beneficiary_id;
            $modelApproval->intake_id = $intake->id;
            if ($modelApproval->save()) {
                $intake->save(false);
                Yii::$app->session->setFlash('success', "Action is Successfully !");
                return $this->redirect(['index']);
            }

            return $this->redirect(['index']);
        }

        return $this->render('attend', [
            'modelApproval' => $modelApproval,
            'intake' => $intake,
            'approvalsWf' => $approvalsWf,
            'modelCaseWorker' => $modelCaseWorker,
            'attachments' => $attachments,
            'attachmentModel' => $attachmentModel,
        ]);
    }
    /**
     * Finds the Intake model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Intake the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Intake::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['beneficiary_id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findBeneficiary($id)
    {
        if (($model = Beneficiary::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }


    protected function findCaseClosureByRefno($id)
    {
        if (($model = CaseClosure::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
