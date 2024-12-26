<?php

namespace app\controllers;

use Yii;
use app\models\User;
use app\models\Intake;
use yii\web\Controller;
use app\models\Approval;
use app\models\WfStages;
use app\models\Workflow;
use yii\web\UploadedFile;
use app\models\Attachment;
use app\models\SystemRoles;
use yii\filters\VerbFilter;
use app\models\CustomHelper;
use app\models\Reintegrations;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use yii\web\NotFoundHttpException;
use yii\web\ForbiddenHttpException;
use app\models\ReintegrationsSearch;

/**
 * ReintegrationsController implements the CRUD actions for Reintegrations model.
 */
class ReintegrationsController extends Controller
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
     * Lists all Reintegrations models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new ReintegrationsSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionManage($ref)
    {
        $model = $this->findReintegrations($ref);
        $attachmentModel = Attachment::populateAttachmentFields($model);
        $attachments = Attachment::find()->where(['wid' => $model->wid, 'owner_id' => $model->intake_id])->all();

        CustomHelper::setMainUrl();
        $_SESSION['ref'] = $ref;

        $modelApproval = new Approval;
        $modelApproval->reqid = $model->refno;
        $modelApproval->wid = $model->wid;
        $stno = $model->stid;
        $modelApproval->sno = $stno;

        $this->addAttachementFunction($attachmentModel);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Reintegration updated successfully");
            return $this->refresh();
        }
        return $this->render('manage', [
            'model' => $model,
            'attachments' => $attachments,
            'attachmentModel' => $attachmentModel,
            'modelApproval' => $modelApproval,
        ]);
    }

    /**
     * Displays a single Reintegrations model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($ref)
    {
        return $this->render('view', [
            'model' => $this->findReintegrations($ref),
        ]);
    }


    public function actionViewcasereintegrations($ref)
    {
        return $this->render('index', [
            'dataProvider' => $this->findAllReintegrationsByIntake($ref),
        ]);
    }

    /**
     * Creates a new Reintegrations model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate($ref)
    {
        $model = new Reintegrations();
        $intake = $this->findIntake($ref);
        $model->reintegration_date = date('Y-m-d');
        $model->benid = $intake->beneficiary_id;
        $model->intake_id = $intake->id;
        $model->refno = Yii::$app->security->generateRandomString(20);
        $attachment = UploadedFile::getInstance($model, 'attachment');

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($attachment) {
                    $uploadPath = Yii::getAlias('@webroot/uploads/documents/reintegrations/');
                    if (!is_dir($uploadPath)) {
                        mkdir($uploadPath, 0755, true);
                    }
                    $fileName = Yii::$app->security->generateRandomString() . '.' . $attachment->extension;
                    $filePath = $uploadPath . $fileName;

                    if ($attachment->saveAs($filePath)) {
                        $model->attachment = $fileName;
                    } else {
                        Yii::$app->session->setFlash('error', 'Failed to upload the file.');
                    }
                }

                if ($model->save()) {
                    return $this->redirect(['index', 'id' => $model->id]);
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
            'intake' => $intake
        ]);
    }

    public function actionAttend($ref)
    {
        $mainModel = $this->findReintegrations($ref);
        $modelApproval = new Approval;
        $modelApproval->reqid = $mainModel->refno;
        $modelApproval->wid = $mainModel->wid;
        $stno = $mainModel->stid;
        $modelApproval->sno = $stno;
        $maxStage = Workflow::findOne($mainModel->wid)->stages;

        if (! SystemRoles::isOnWorkflow($mainModel->wid, $mainModel->stid)) {
            throw new ForbiddenHttpException(Yii::t('app', 'You are not authorized to perform this action. If you believe you should have access, please contact your system administrator.'));
        }

        if (!CustomHelper::MandatoryWorkflowToolsAreFilled($mainModel->wid, $mainModel->stid, $mainModel->intake_id)) {
            throw new ForbiddenHttpException(Yii::t('app', 'Please fill all mandatory tools at this stage  before you submit your request'));
        }

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
                return $this->redirect(['index']);
            }

            return $this->redirect(['index']);
        }

        return $this->render('attend', [
            'modelApproval' => $modelApproval,
            'mainModel' => $mainModel,
        ]);
    }



    /**
     * Updates an existing Reintegrations model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($ref)
    {
        $model = $this->findReintegrations($ref);

        $attachmentModel = Attachment::populateAttachmentFields($model);
        $this->addAttachementFunction($attachmentModel);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        }

        return $this->render('update', [
            'model' => $model,
            'attachmentModel' => $attachmentModel
        ]);
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
                //return $attachmentModel->getErrors();
            }
        }
    }


    /**
     * Deletes an existing Reintegrations model.
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
     * Finds the Reintegrations model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Reintegrations the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */




    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }




    protected function findReintegrations($id)
    {
        if (($model = Reintegrations::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findModel($id)
    {
        if (($model = Reintegrations::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }


    public function findAllReintegrationsByIntake($ref)
    {
        $query = Reintegrations::find()->where(['intake_id' => $ref]);
        return new ActiveDataProvider([
            'query' => $query,
        ]);
    }
}
