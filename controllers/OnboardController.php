<?php

namespace app\controllers;

use Yii;
use app\models\User;
use yii\web\Controller;
use app\models\Approval;
use app\models\WfStages;
use app\models\Workflow;
use yii\web\UploadedFile;
use app\models\Attachment;
use app\models\ClientInfo;
use app\models\UserSearch;
use app\models\SystemRoles;
use yii\filters\VerbFilter;
use app\models\CustomHelper;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use yii\web\NotFoundHttpException;
use yii\web\ForbiddenHttpException;
use app\models\DriverVehicleAssignment;
use app\models\DriverVehicleAssignmentSearch;
use app\models\Vehicle;
use app\models\VehicleSearch;

/**
 * DriverVehicleAssignmentsController implements the CRUD actions for DriverVehicleAssignment model.
 */
class OnboardController extends Controller
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
     * Lists all DriverVehicleAssignment models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $model = new DriverVehicleAssignment();
        $searchModel = new VehicleSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }


    public function actionVendor()
    {

        $query = ClientInfo::find()->andWhere(['role'=>'vendor','status'=>10])->orderBy('created_at desc');
        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);
        return $this->render('vendor_list', [
            'dataProvider' => $dataProvider,
        ]);
    }


    public function actionAttendVendor($ref)
    {
        $mainModel = $this->loadClientInfor($ref);

        $modelApproval = new Approval;
        $modelApproval->reqid = $mainModel->auth_key;
        $modelApproval->wid = $mainModel->wid;
        $stno = $mainModel->stid;
        $modelApproval->sno = $stno;
        $maxStage = Workflow::findOne($mainModel->wid)->stages;

        $approvalsWf = CustomHelper::getApprovalLogs($mainModel->wid, $mainModel->auth_key);

        if (!SystemRoles::isOnWorkflow($mainModel->wid, $mainModel->stid)) {
            throw new ForbiddenHttpException(Yii::t('app', 'You are not authorized to perform this action. If you believe you should have access, please contact your system administrator.'));
        }
        $attachmentModel = Attachment::populateAttachmentFields($mainModel);
        $this->addAttachementFunction($attachmentModel);


        if ($this->request->isPost && $modelApproval->load($this->request->post()) && $modelApproval->validate()) {
            $stage = WfStages::find()->where(['wid' => $mainModel->wid, 'sno' => $modelApproval->sno])->one();
            $modelApproval->wfsname = $stage->sname;

            //if workflow has attachment then save it;
            // save workflow document
            $docAttached = UploadedFile::getInstance($modelApproval, 'attachment');
            $docLocation = '/uploads/documents/approvals';
            if (is_object($docAttached)) {
                $filePath = CustomHelper::saveNewDocument($docAttached, $docLocation);
                // Generate the URL
                $baseUrl = Yii::$app->request->baseUrl;
                $url = $baseUrl . $docLocation . basename($filePath);
                // Save URL to the database
                $modelApproval->attachment = $url;
            }

            if ($modelApproval->wfs == 'Y') {
                $sno = $mainModel->stid = $stage->nextstage;
                $mainModel->wfstatus =  $modelApproval->wfstatus  = $stage->okname;
                if ($sno > $maxStage) {
                    $mainModel->wfstatus = 'A';
                    $mainModel->is_verified = 1;
                    $mainModel->requserinput='N';
                    $mainModel->approved_by = Yii::$app->user->id;
                    $mainModel->approved_date = date('Y-m-d H:i:s');
                }
            } else {
                $mainModel->stid = $stage->backstage;
                if($mainModel->stid==1){
                    $mainModel->requserinput='Y';
                }
                $mainModel->wfstatus = $modelApproval->wfstatus  = $stage->notokname;
            }

             $modelApproval->stid = $mainModel->stid;
            if ($modelApproval->save()) {
                $mainModel->save(false);
                Yii::$app->session->setFlash('success', "Action submitted  Successfully !");
                return $this->redirect(['vendor']);
            }

            return $this->redirect(['vendor']);
        }

        return $this->render('attend_vendor', [
            'modelApproval' => $modelApproval,
            'mainModel' => $mainModel,
            'approvalsWf' => $approvalsWf,
            'attachmentModel' => $attachmentModel
        ]);
    }




    public function actionAttend($ref)
    {
        $mainModel = $this->loadVehicle($ref);
        $modelApproval = new Approval;
        $modelApproval->reqid = $mainModel->id;
        $modelApproval->wid = $mainModel->wid;
        $stno = $mainModel->stid;
        $modelApproval->sno = $stno;
        $maxStage = Workflow::findOne($mainModel->wid)->stages;
        $approvalsWf = CustomHelper::getApprovalLogs($mainModel->wid, $mainModel->id);

        if (!SystemRoles::isOnWorkflow($mainModel->wid, $mainModel->stid)) {
            throw new ForbiddenHttpException(Yii::t('app', 'You are not authorized to perform this action. If you believe you should have access, please contact your system administrator.'));
        }
        $attachmentModel = Attachment::populateAttachmentFields($mainModel);
        $this->addAttachementFunction($attachmentModel);


        if ($this->request->isPost && $modelApproval->load($this->request->post()) && $modelApproval->validate()) {
            $stage = WfStages::find()->where(['wid' => $mainModel->wid, 'sno' => $modelApproval->sno])->one();
            $modelApproval->wfsname = $stage->sname;

            //if workflow has attachment then save it;
            // save workflow document
            $docAttached = UploadedFile::getInstance($modelApproval, 'attachment');
            $docLocation = '/uploads/documents/approvals';
            if (is_object($docAttached)) {
                $filePath = CustomHelper::saveNewDocument($docAttached, $docLocation);
                // Generate the URL
                $baseUrl = Yii::$app->request->baseUrl;
                $url = $baseUrl . $docLocation . basename($filePath);
                // Save URL to the database
                $modelApproval->attachment = $url;
            }

            if ($modelApproval->wfs == 'Y') {
                $sno = $mainModel->stid = $stage->nextstage;
                $mainModel->wfstatus =  $modelApproval->wfstatus  = $stage->okname;
                if ($sno > $maxStage) {
                    $mainModel->status = 'A';
                    $mainModel->approved_by = Yii::$app->user->id;
                    $mainModel->approved_at = date('Y-m-d H:i:s');
                    $mainModel->requserinput='N';
                }
            } else {
                $mainModel->stid = $stage->backstage;
                if($mainModel->stid==1){
                    $mainModel->requserinput='Y';
                }
                $mainModel->wfstatus = $modelApproval->wfstatus  = $stage->notokname;
            }


            $modelApproval->stid = $mainModel->stid;

            if ($modelApproval->save()) {
                $mainModel->save(false);
                Yii::$app->session->setFlash('success', "Action submitted Successfully !");
                return $this->redirect(['index']);
            }

            return $this->redirect(['index']);
        }

        return $this->render('attend', [
            'modelApproval' => $modelApproval,
            'mainModel' => $mainModel,
            'approvalsWf' => $approvalsWf,
            'attachmentModel' => $attachmentModel
        ]);
    }

    /**
     * Displays a single DriverVehicleAssignment model.
     * @param string $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->loadVehicle($id),
        ]);
    }

    public function actionViewVendor($id)
    {
        return $this->render('view_vendor', [
            'model' => $this->loadClientInfor($id),
        ]);
    }

    /**
     * Creates a new DriverVehicleAssignment model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $auth = Yii::$app->user->identity->id;
        $model = new DriverVehicleAssignment();
        $model->driver_id = $auth;
        if ($this->request->isPost) {

            if ($model->load($this->request->post())) {

                if ($model->save()) {
                    return $this->redirect(['index', 'id' => $model->id]);
                }
            }
        }
        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing DriverVehicleAssignment model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param string $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }



    /**
     * Finds the DriverVehicleAssignment model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $id ID
     * @return DriverVehicleAssignment the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {

        if (($model = DriverVehicleAssignment::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }


    protected function loadVehicle($id)
    {

        if (($model = Vehicle::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function loadClientInfor($id)
    {

        if (($model = ClientInfo::findOne(['auth_key' => $id,'status' => 10])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }



    protected function findDriver($id)
    {
        if (($model = User::findOne(['auth_key' => $id, 'status' => 10])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }


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

            }
        }
    }


}