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
use app\models\Beneficiary;
use app\models\SystemRoles;
use yii\filters\VerbFilter;
use app\models\CustomHelper;
use app\models\CarePlanSearch;
use app\models\CarePlanTarget;
use app\models\Reintegrations;
use yii\filters\AccessControl;
use app\models\IntakeWorkflowTool;
use app\models\YlwsLinkAssociation;
use yii\web\NotFoundHttpException;
use yii\web\ForbiddenHttpException;

/**
 * CarePlanController implements the CRUD actions for CarePlan model.
 */
class CarePlanController extends Controller
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
     * Lists all CarePlan models.
     *
     * @return string
     */
    public function actionManage($tool, $ref)
    {

        //$this->layout = "intake";
        $intakeModel = $this->findIntake($ref);
        $intakeId = $intakeModel->refno;
        $_SESSION['tool_data'] = $tool;
        $model = new CarePlan();
        $searchModel = new CarePlanSearch();
        $dataProvider = $searchModel->searchIntake($this->request->queryParams, $intakeModel->id);
        if ($this->request->isPost && $intakeModel->load($this->request->post()) && $intakeModel->save()) {
            Yii::$app->session->setFlash('success', "Updated Care plan added successfully");

            return $this->refresh();
        }


        return $this->render('manage', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'intake' => $intakeModel,
        ]);
    }

    public function actionYouthManage($tool, $ref)
    {

        //$this->layout = "intake";
        $intakeModel = $this->findYlwsLinkAssociationByRefno($ref);
        $intakeId = $intakeModel->refno;
        $_SESSION['tool_data'] = $tool;
        $_SESSION['ref'] = $ref;

        $model = new CarePlan();
        $searchModel = new CarePlanSearch();
        $dataProvider = $searchModel->searchIntake($this->request->queryParams, $intakeModel->id);
        if ($this->request->isPost && $intakeModel->load($this->request->post()) && $intakeModel->save()) {
            Yii::$app->session->setFlash('success', "Updated Care plan added successfully");

            return $this->refresh();
        }


        return $this->render('youth-manage', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'intake' => $intakeModel,
        ]);
    }

    public function actionReintegrationManage($tool, $ref)
    {

        //$this->layout = "intake";
        $reintegrationModel = $this->findReintegrations($ref);
        $intakeModel = $this->findIntakeByID($reintegrationModel->intake_id);


        $intakeId = $intakeModel->refno;
        $_SESSION['tool_data'] = $tool;

        $model = $this->findCareplan($reintegrationModel->intake_id);
        // $model = new CarePlan();
        $searchModel = new CarePlanSearch();
        $dataProvider = $searchModel->searchIntake($this->request->queryParams, $intakeModel->id);
        if ($this->request->isPost && $intakeModel->load($this->request->post()) && $intakeModel->save()) {
            Yii::$app->session->setFlash('success', "Updated Care plan added successfully");

            return $this->refresh();
        }


        return $this->render('reintegration-manage', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'intake' => $reintegrationModel,
        ]);
    }


    public function actionIndex()
    {

        $model = new CarePlan();
        $searchModel = new CarePlanSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['type' => 2]);


        return $this->render('main-page', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            // 'intake' => $intakeModel,
        ]);
    }




    public function actionAll()
    {

        $model = new CarePlan();
        $searchModel = new CarePlanSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        return $this->render('all', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single CarePlan model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($ref)
    {

        $model = $this->findByRefno($ref);
        $intake = $this->findIntakeById($model->intake_id);
        return $this->render('view', [
            'model' => $model,
            'intake' => $intake
        ]);
    }

    public function actionYouthView($ref)
    {

        $model = $this->findByRefno($ref);
        $intake = $this->findIntakeById($model->intake_id);
        return $this->render('youth-view', [
            'model' => $model,
            'intake' => $intake
        ]);
    }

    /**
     * Creates a new CarePlan model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate($intake)


    {
        $toolitem = $_SESSION['tool_data'];
        $model = new CarePlan();
        $intakeModel = $this->findIntake($intake);
        $model->intake_id = $intakeModel->id;
        $model->benid = $intakeModel->beneficiary_id;
        $model->refno = Yii::$app->security->generateRandomString(20);
        $model->stid = 1;
        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->type == 2) {
                    $model->wid = CustomHelper::CAREPLAN_WORKFLOW;
                } elseif ($model->type == 1) {
                    $model->wid = CustomHelper::CASE_INTAKE_WORKFLOW;
                }
                if ($model->save()) {
                    IntakeWorkflowTool::insertData($toolitem, $model->intake_id, $model->wid, $model->stid, $model::tableName(), get_class($model), $model->primaryKey(), $intakeModel->refno);

                    foreach ($model->targets as $value) {
                        $target = new CarePlanTarget();
                        $target->careplanid = $model->id;
                        $target->targetid = $value;
                        $target->save(false);
                    }
                    Yii::$app->session->setFlash('success', "Care plan added successfully");

                    return $this->redirect(['manage', 'tool' => $toolitem, 'ref' => $intakeModel->refno]);
                } else {
                    Yii::$app->session->setFlash('danger', "Failed");
                    return $this->refresh();
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
            'intake' => $intakeModel
        ]);
    }

    public function actionCreateYouth($intake)


    {
        $toolitem = $_SESSION['tool_data'];
        $model = new CarePlan();
        $intakeModel = $this->findYlwsLinkAssociationByRefno($intake);
        $model->intake_id = $intakeModel->id;
        $model->benid = $intakeModel->beneficiary_id;
        $model->refno = Yii::$app->security->generateRandomString(20);
        $model->stid = 1;
        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {

                $model->wid = CustomHelper::CAREPLAN_WORKFLOW;

                $redir =  $this->redirect(['youth-manage', 'tool' => $toolitem, 'ref' => $intakeModel->refno]);


                if ($model->save()) {
                    IntakeWorkflowTool::insertData($toolitem, $model->intake_id, $model->wid, $model->stid, $model::tableName(), get_class($model), $model->primaryKey(), $intakeModel->refno);

                    foreach ($model->targets as $value) {
                        $target = new CarePlanTarget();
                        $target->careplanid = $model->id;
                        $target->targetid = $value;
                        $target->save(false);
                    }
                    Yii::$app->session->setFlash('success', "Care plan added successfully");
                } else {
                    Yii::$app->session->setFlash('danger', "Failed");
                    return $redir;
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create-youth', [
            'model' => $model,
            'intake' => $intakeModel
        ]);
    }



    public function actionAttend($ref)
    {

        $mainModel = $this->findByRefno($ref);
        $modelApproval = new Approval;
        $modelApproval->reqid = $mainModel->refno;
        $modelApproval->wid = $mainModel->wid;
        $stno = $mainModel->stid;
        $modelApproval->sno = $stno;
        $maxStage = Workflow::findOne($mainModel->wid)->stages;

        if (! SystemRoles::isOnWorkflow($mainModel->wid, $mainModel->stid)) {
            throw new ForbiddenHttpException(Yii::t('app', 'You are not authorized to perform this action. If you believe you should have access, please contact your system administrator.'));
        }


        $approvalsWf = CustomHelper::getApprovalLogs($mainModel->wid, $mainModel->refno);
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
                    $mainModel->approved_date = date('Y-m-d');
                }
            } else {
                $mainModel->stid = $stage->backstage;
                $mainModel->wfstatus = $modelApproval->wfstatus  = $stage->notokname;
            }

            $modelApproval->stid = $mainModel->stid;
            $modelApproval->benid = $mainModel->benid;
            $modelApproval->intake_id = $mainModel->intake_id;
            if ($modelApproval->save()) {
                $mainModel->save(false);
                Yii::$app->session->setFlash('success', "Action is Successfully !");
                return $this->redirect(['all']);
            }

            return $this->redirect(['all']);
        }

        return $this->render('attend', [
            'modelApproval' => $modelApproval,
            'mainModel' => $mainModel,
            'approvalsWf' => $approvalsWf
        ]);
    }


    /**
     * Updates an existing CarePlan model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    // public function actionUpdate($ref)
    // {

    //     // $this->layout = "intake";

    //     $model = $this->findByRefno($ref);
    //     $intake = $this->findIntakeById($model->intake_id);
    //     if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
    //         return $this->goBack();
    //     }
    //     return $this->render('update', [
    //         'model' => $model,
    //         'intake' => $intake
    //     ]);
    // }



    public function actionUpdate($ref)
    {
        $model = $this->findByRefno($ref);
        $intake = $this->findIntakeById($model->intake_id);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {

            return $this->render('update', [
                'model' => $model,
                'intake' => $intake,
            ]);
        }

        return $this->render('update', [
            'model' => $model,
            'intake' => $intake
        ]);
    }

    /**
     * Deletes an existing CarePlan model.
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

    /**
     * Finds the CarePlan model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CarePlan the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CarePlan::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }


    protected function findByRefno($id)
    {
        if (($model = CarePlan::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }



    protected function findIntakeById($id)
    {
        if (($model = Intake::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findCareplan($id)
    {
        if (($model = Careplan::findOne(['intake_id' => $id])) !== null) {
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

    protected function findReintegrations($id)
    {
        if (($model = Reintegrations::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findYlwsLinkAssociationByRefno($id)
    {
        if (($model = YlwsLinkAssociation::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
