<?php

namespace app\controllers;

use app\models\CustomHelper;
use app\models\WellbeingSubdomainsOption;
use app\models\WellbeingSubdomainsOptionSearch;
use Yii;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * WellbeingSubdomainsOptionController implements the CRUD actions for WellbeingSubdomainsOption model.
 */
class WellbeingSubdomainsOptionController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),
            [
                'verbs' => [
                    'class' => VerbFilter::className(),
                    'actions' => [
                        'delete' => ['POST'],
                    ],
                ],
            ]
        );
    }

    /**
     * Lists all WellbeingSubdomainsOption models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $model = new WellbeingSubdomainsOption();
        $searchModel = new WellbeingSubdomainsOptionSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single WellbeingSubdomainsOption model.
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
     * Creates a new WellbeingSubdomainsOption model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new WellbeingSubdomainsOption();

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Wellbeing Question Option is added successfully");
                    return $this->redirect(['index']);
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing WellbeingSubdomainsOption model.
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
            Yii::$app->session->setFlash('success', "Wellbeing Sub-Domain Option updated successfully");
            return $this->redirect(['index']);
        }


        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing WellbeingSubdomainsOption model.
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
     * Finds the WellbeingSubdomainsOption model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return WellbeingSubdomainsOption the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = WellbeingSubdomainsOption::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
