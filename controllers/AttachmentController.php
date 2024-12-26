<?php

namespace app\controllers;

use Yii;
use yii\web\Response;
use app\models\Intake;
use yii\web\Controller;
use yii\web\UploadedFile;
use app\models\Attachment;
use app\models\Beneficiary;
use yii\filters\VerbFilter;
use app\models\CustomHelper;
use yii\filters\AccessControl;
use app\models\AttachmentSearch;
use yii\web\NotFoundHttpException;

/**
 * AttachmentController implements the CRUD actions for Attachment model.
 */
class AttachmentController extends Controller
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

            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }

    /**
     * Lists all Attachment models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new AttachmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionIndexIntake($intake)
    {
        $this->layout = "intake";

        $intakeModel = $this->findIntake($intake);
        $model = new Attachment();
        $model->owner_id = $intakeModel->id;
        $workflow = $intakeModel->wid;
        $intakeId = $intakeModel->refno;
        $beneficiary = $this->findBeneficiary($intakeModel->beneficiary_id);
        $this->view->params['intakeRefno'] = $intakeId;
        $this->view->params['beneficiaryName'] = $beneficiary->getFullName();
        $this->view->params['beneficiaryPhoto'] = $beneficiary->photo;

        $searchModel = new AttachmentSearch();
        $dataProvider = $searchModel->searchIntake($this->request->queryParams, $model->owner_id);

        return $this->render('index-intake', [
            'model' => $model,
            'workflow' => $workflow,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Attachment model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Attachment model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Attachment();

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {

                // save workflow document
                $docAttached = UploadedFile::getInstance($model, 'attachment');
                $docLocation = '/uploads/documents/intakes/';
                if (is_object($docAttached)) {
                    $filePath = CustomHelper::saveNewDocument($docAttached, $docLocation);
                    // Generate the URL
                    $baseUrl = Yii::$app->request->baseUrl;
                    $url = $baseUrl . $docLocation . basename($filePath);
                    // Save URL to the database
                    $model->attachment = $url;
                }


                if ($model->save(false)) {
                    Yii::$app->session->setFlash('success', "Action is Successfully !");
                    return $this->redirect(['index']);
                }

                return $this->redirect(['index']);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Attachment model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
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
     * Deletes an existing Attachment model.
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


    public function actionAjaxDelete($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;

        $attachment = Attachment::findOne($id);

        if ($attachment) {
            // Remove the file from the uploads/documents folder
            $filePath = Yii::getAlias('@webroot/' . $attachment->attachment);
            if (file_exists($filePath)) {
                if (unlink($filePath)) {
                    if ($attachment->delete()) {
                        return ['success' => true, 'message' => 'Attachment deleted successfully'];
                    }
                }
            }

            // Delete the attachment from the database

        }

        return ['success' => false, 'message' => 'Failed to delete the attachment' . $filePath];
    }

    /**
     * Finds the Attachment model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Attachment the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Attachment::findOne(['id' => $id])) !== null) {
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

    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['refno' => $id])) !== null) {
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
}
