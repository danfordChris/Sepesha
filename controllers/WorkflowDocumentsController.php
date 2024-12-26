<?php

namespace app\controllers;

use Yii;
use app\models\User;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use app\models\WorkflowDocuments;
use yii\web\NotFoundHttpException;
use app\models\WorkflowDocumentsSearch;
use yii\helpers\ArrayHelper;
use yii\web\Response;
use yii\widgets\ActiveForm;

/**
 * WorkflowDocumentsController implements the CRUD actions for WorkflowDocuments model.
 */
class WorkflowDocumentsController extends Controller
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
     * Lists all WorkflowDocuments models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new WorkflowDocumentsSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new WorkflowDocuments();
        if (Yii::$app->request->isAjax) {
            Yii::$app->response->format = Response::FORMAT_JSON;
           
            return ActiveForm::validate($model);
        }
        
        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model,
        ]);
    }

    /**
     * Displays a single WorkflowDocuments model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        return $this->render('view', [
            'model' => $this->findModel($number),
        ]);
    }

    /**
     * Creates a new WorkflowDocuments model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
  
public function actionCreate()
{
    $model = new WorkflowDocuments();

    if ($this->request->isPost) {
        if ($model->load($this->request->post())) {
            // Check if the record already exists
            $existingRecord = WorkflowDocuments::find()
                ->where(['wid' => $model->wid, 'stid' => $model->stid, 'doctype_id' => $model->doctype_id])
                ->one();

            if ($existingRecord) {
                $message = "A record with the same Workflow Name, Stage , and Name already exists.";
                if (Yii::$app->request->isAjax) {
                    Yii::$app->response->format = Response::FORMAT_JSON;
                    return [
                        'success' => false,
                        'message' => $message,
                        'content' => $this->renderAjax('create', ['model' => $model]),
                    ];
                } else {
                    Yii::$app->session->setFlash('error', $message);
                    return $this->render('create', ['model' => $model]);
                }
            }

            if ($model->save()) {
                if (Yii::$app->request->isAjax) {
                    Yii::$app->response->format = Response::FORMAT_JSON;
                    return ['success' => true, 'message' => "Workflow Documents have been added Successfully"];
                } else {
                    Yii::$app->session->setFlash('success', "Workflow Documents have been added Successfully");
                    return $this->redirect(['index', 'id' => $model->id]);
                }
            } else {
                $message = "Failed to add Workflow Documents. Please check the input values.";
                if (Yii::$app->request->isAjax) {
                    Yii::$app->response->format = Response::FORMAT_JSON;
                    return [
                        'success' => false,
                        'message' => $message,
                        'content' => $this->renderAjax('create', ['model' => $model]),
                    ];
                } else {
                    Yii::$app->session->setFlash('error', $message);
                }
            }
        }
    } else {
        $model->loadDefaultValues();
    }

    if (Yii::$app->request->isAjax) {
        return $this->renderAjax('create', ['model' => $model]);
    } else {
        return $this->render('create', ['model' => $model]);
    }
}

    /**
     * Updates an existing WorkflowDocuments model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Workflow Documents have been updated Successfully");
            return $this->redirect(['index', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing WorkflowDocuments model.
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
     * Finds the WorkflowDocuments model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return WorkflowDocuments the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = WorkflowDocuments::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
