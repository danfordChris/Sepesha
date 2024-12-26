<?php

namespace app\controllers;

use app\models\DocumentTypes;
use app\models\DocumentTypesSearch;
use app\models\User;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * DocumentTypesController implements the CRUD actions for DocumentTypes model.
 */
class DocumentTypesController extends Controller
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
                        'actions' => ['index', 'create', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('create_document_types');
                        }
                    ],

                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_document_types');
                        }
                    ],

                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_document_types');
                        }
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
     * Lists all DocumentTypes models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new DocumentTypesSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new DocumentTypes();

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }

    /**
     * Displays a single DocumentTypes model.
     * @param int $docuid Docuid
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
     * Creates a new DocumentTypes model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new DocumentTypes();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                Yii::$app->session->setFlash('success', "Document type have been added Successfully");
                return $this->redirect(['index', 'id' => $model->docuid]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing DocumentTypes model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $docuid Docuid
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);
    
        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Document type have been updated Successfully");
            return $this->redirect(['index', 'rca' => Yii::$app->getSecurity()->hashData($model->docuid, 'gmtdev')]);
        }
    
        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing DocumentTypes model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $docuid Docuid
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($docuid)
    {
        $this->findModel($docuid)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the DocumentTypes model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $docuid Docuid
     * @return DocumentTypes the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($docuid)
    {
        if (($model = DocumentTypes::findOne(['docuid' => $docuid])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
