<?php

namespace app\controllers;

use app\models\CustomHelper;
use Yii;
use app\models\User;
use yii\web\Controller;
use app\models\FeeCategory;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use app\models\FeeCategorySearch;
use yii\web\NotFoundHttpException;

/**
 * FeesController implements the CRUD actions for FeeCategory model.
 */
class FeesController extends Controller
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
     * Lists all FeeCategory models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new FeeCategorySearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new FeeCategory();
        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                Yii::$app->session->setFlash('success', "Data saved added successfully.");
                return $this->redirect(['index', 'id' => $model->id]);
            }
        }

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model,
        ]);
    }

    /**
     * Displays a single FeeCategory model.
     * @param string $id ID
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
     * Creates a new FeeCategory model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new FeeCategory();
        $model->id= CustomHelper::getUuid();
        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                Yii::$app->session->setFlash('success', "Data saved added successfully.");
                return $this->redirect(['index', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing FeeCategory model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param string $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        if ($this->request->isPost && $model->load($this->request->post())) {

            if($model->save()){
                Yii::$app->session->setFlash('success', "Data saved added successfully.".json_encode($model->errors));
                return $this->redirect(['index', 'id' => $model->id]);
            }
            Yii::$app->session->setFlash('failure', "Failed to save data.".json_encode($model->errors));

        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing FeeCategory model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param string $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the FeeCategory model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $id ID
     * @return FeeCategory the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = FeeCategory::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}