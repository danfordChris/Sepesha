<?php

namespace app\controllers;

use app\models\Families;
use app\models\FamiliesSearch;
use app\models\FamilyMember;
use app\models\FamilyMembersSearch;
use app\models\User;
use Yii;
use yii\data\ActiveDataProvider;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * FamiliesController implements the CRUD actions for Families model.
 */
class FamiliesController extends Controller
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
     * Lists all Families models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new FamiliesSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Families model.
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
     * Creates a new Families model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Families();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['update', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Families model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
  
    
     public function actionUpdate($id)
     {
         $membermodel = new FamilyMember();
         $model = $this->findModel($id);
         $searchModel = new FamilyMembersSearch();
     
         if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
             return $this->redirect(['update', 'id' => $model->id]);
         }
         $membermodel->familyid = $model->id;
         if ($membermodel->load($this->request->post())) {
             if ($membermodel->save()) {
                 Yii::$app->session->setFlash('success', "Family member added successfully.");
             }
             return $this->redirect(Yii::$app->request->url);
         }
     
         $dataProviderMembers = new ActiveDataProvider([
             'query' => FamilyMember::find()->where(['familyid' => $model->id]),
         ]);
     
         return $this->render('update', [
             'model' => $model,
             'membermodel' => $membermodel,
             'dataProviderMembers' => $dataProviderMembers,
             'searchModel' => $searchModel
         ]);
     }

    /**
     * Deletes an existing Families model.
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
     * Finds the Families model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Families the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Families::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
