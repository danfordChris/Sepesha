<?php

namespace app\controllers;

use Yii;
use app\models\User;
use yii\web\Controller;
use app\models\Approval;
use app\models\Attachment;
use app\models\WfStages;
use app\models\Workflow;
use yii\web\UploadedFile;
use yii\filters\VerbFilter;
use app\models\CustomHelper;
use app\models\CaseTransfers;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;
use app\models\CaseTransfersSearch;
use app\models\Intake;
use yii\data\ActiveDataProvider;

/**
 * TransfersController implements the CRUD actions for CaseTransfers model.
 */
class TransfersController extends Controller
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
     * Lists all CaseTransfers models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new CaseTransfersSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new CaseTransfers();

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }


    public function actionReport()
    {
        $searchModel = new CaseTransfersSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new CaseTransfers();
        return $this->render('report', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }


    /**
     * Displays a single CaseTransfers model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */

    public function actionView($ref)
    {

        return $this->render('view', [
            'model' => $this->findCaseTransferByRefno($ref),
        ]);
    }

    public function actionViewcasetransfers($ref)
    {
        // $hashedRef = hash('sha256', $ref);

        return $this->render('index', [
            'dataProvider' => $this->findAllTransfersByIntake($ref),
        ]);
    }



    /**
     * Creates a new CaseTransfers model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    // public function actionCreate($ref)


    public function actionCreate($ref)
    {
        $model = new CaseTransfers();
        $intake = $this->findIntake($ref);
        $model->benid = $intake->beneficiary_id;
        $model->intake_id = $intake->id;
        $model->refno = Yii::$app->security->generateRandomString(15);
        $model->wid = CustomHelper::CASE_TRANSFER_WORKFLOW;
        $attachment = UploadedFile::getInstance($model, 'attachment');

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($attachment) {
                    $uploadPath = Yii::getAlias('@webroot/uploads/documents/transfers/');
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


    /**
     * Updates an existing CaseTransfers model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($ref)
    {
        $model = $this->findCaseTransferByRefno($ref);
        $attachmentModel = Attachment::populateAttachmentFields($model);
        $this->addAttachementFunction($attachmentModel);
        // attachment end
        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', 'Data updated successfully.');
            return $this->redirect(['index', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        }

        return $this->render('update', [
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
    public function actionAttend($ref)
    {
        $mainModel = $this->findCaseTransferByRefno($ref);
        $modelApproval = new Approval;
        $modelApproval->reqid = $mainModel->refno;
        $modelApproval->wid = $mainModel->wid;
        $stno = $mainModel->stid;
        $modelApproval->sno = $stno;
        $maxStage = Workflow::findOne($mainModel->wid)->stages;

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
                return $this->redirect(['index']);
            }

            return $this->redirect(['index']);
        }

        return $this->render('attend', [
            'modelApproval' => $modelApproval,
            'mainModel' => $mainModel,
            'approvalsWf' => $approvalsWf
        ]);
    }

    /**
     * Deletes an existing CaseTransfers model.
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
     * Finds the CaseTransfers model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CaseTransfers the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */

    protected function findCaseTransferByRefno($id)
    {
        if (($model = CaseTransfers::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findModel($id)
    {
        if (($model = CaseTransfers::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }




    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    public function findAllTransfersByIntake($ref)
    {
        $query = CaseTransfers::find()->where(['intake_id' => $ref]);
        return new ActiveDataProvider([
            'query' => $query,
        ]);
    }
}
