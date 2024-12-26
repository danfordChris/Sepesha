<?php

namespace app\controllers;

use Yii;
use app\models\User;
use kartik\mpdf\Pdf;
use app\models\Intake;
use yii\web\Controller;
use app\models\Approval;
use app\models\WfStages;
use app\models\Workflow;
use yii\web\UploadedFile;
use app\models\Attachment;
use app\models\CaseClosure;
use app\models\SystemRoles;
use yii\filters\VerbFilter;
use app\models\CustomHelper;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use app\models\CaseClosureSearch;
use yii\web\NotFoundHttpException;
use yii\web\ForbiddenHttpException;

/**
 * ClosuresController implements the CRUD actions for CaseClosure model.
 */
class ClosuresController extends Controller
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
     * Lists all CaseClosure models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new CaseClosureSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new CaseClosure();

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }

    public function actionReport()
    {
        $searchModel = new CaseClosureSearch();
        $dataProvider = $searchModel->searchReport($this->request->queryParams);
        $model = new CaseClosure();
        return $this->render('report', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }

    public function actionTransferReport()
    {
        $searchModel = new CaseClosureSearch();
        $dataProvider = $searchModel->searchReport($this->request->queryParams);
        $model = new CaseClosure();
        return $this->render('transfer-report', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }

    /**
     * Displays a single CaseClosure model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($ref)
    {
        return $this->render('view', [
            'model' => $this->findCaseClosureByRefno($ref),
        ]);
    }

    public function actionViewcaseclosure($ref)
    {
        return $this->render('index', [
            'dataProvider' => $this->findAllClosureByIntake($ref),
        ]);
    }


    // public function actionViewcaseclosure($ref) {
    //     $dataProvider = $this->findAllClosureByIntake($ref);
    //     return $this->render('index', [
    //         'dataProvider' => $dataProvider,
    //     ]);
    // }



    /**
     * Creates a new CaseClosure model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate($ref)
    {
        $model = new CaseClosure();
        $intake = $this->findIntake($ref);
        $model->benid = $intake->beneficiary_id;
        $model->intake_id = $intake->id;
        $model->open_date = $intake->intake_date;
        $model->refno = Yii::$app->security->generateRandomString(15);
        $model->wid = CustomHelper::CASE_CLOSURE_WORKFLOW;
        $attachment = UploadedFile::getInstance($model, 'attachment');

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($attachment) {
                    $uploadPath = Yii::getAlias('@webroot/uploads/documents/closures/');
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


    public function actionUpdateRequiredValue()
    {
        if (Yii::$app->request->isAjax) {
            $value = Yii::$app->request->post('required_value');

            Yii::$app->session->set('required_values', $value);

            return json_encode(['status' => 'success', 'message' => 'Session value updated', 'value' => $value]);
        }
    }





    public function actionAttend($ref)
    {
        $mainModel = $this->findCaseClosureByRefno($ref);
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
     * Updates an existing CaseClosure model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($ref)
    {

        $model = $this->findCaseClosureByRefno($ref);
        $attachmentModel = Attachment::populateAttachmentFields($model);
        $this->addAttachementFunction($attachmentModel);
        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
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
    /**
     * Deletes an existing CaseClosure model.
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
     * Finds the CaseClosure model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CaseClosure the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CaseClosure::findOne(['id' => $id])) !== null) {
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


    protected function findCaseClosureByRefno($id)
    {
        if (($model = CaseClosure::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    public function findAllClosureByIntake($ref)
    {
        $query = CaseClosure::find()->where(['intake_id' => $ref]);
        return new ActiveDataProvider([
            'query' => $query,
        ]);
    }



    public function actionPrint($ref)
    {

        $model = $this->findCaseClosureByRefno($ref);
        $pdf = new Pdf([
            'mode' => Pdf::MODE_UTF8,
            'format' => Pdf::FORMAT_A4,
            'destination' => Pdf::DEST_BROWSER,
            'content' => $this->renderPartial('print', [
                'model' => $model,

            ]),

            'cssFile' => '@vendor/kartik-v/yii2-mpdf/src/assets/kv-mpdf-bootstrap.min.css',
            'methods' => [
                'SetWatermarkText' => $model->status != 'A' ? ['NOT APPROVED'] : '',
                //'SetHeader' => [' header'],
                'SetFooter' => ['Printed by:  ' . User::name() . ' |Page {PAGENO}|Printed on: {DATE d/m/Y h:i:s}'],

            ]
        ]);

        return $pdf->render();
    }
}
