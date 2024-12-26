<?php

namespace app\controllers;

use Yii;
use app\models\Trips;
use yii\web\Controller;
use app\models\Expenses;
use yii\filters\VerbFilter;
use app\models\ExpensesSearch;
use app\models\User;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;

/**
 * ExpensesController implements the CRUD actions for Expenses model.
 */
class ExpensesController extends Controller
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
     * Lists all Expenses models.
     *
     * @return string
     */

    public function actionIndex($hd)
    {
        $searchModel = new ExpensesSearch();

        $model = new Expenses();

        $trip = $this->loadTrip($hd);

        $model->trip_id = $trip->id;
        $model->transact_date = $trip->start_date;
        $model->busid = $trip->bus_id;



        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Expense Added Successfully");
                    return $this->redirect(['index', 'hd' => $model->trip_id]);
                } else
                    Yii::$app->session->setFlash('danger', 'Failed to Add Expense!.');
            } else {

                $model->loadDefaultValues();
            }
        }

        $dataProvider = $searchModel->search($this->request->queryParams, $trip->id);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionIndexPlain()
    {
        $searchModel = new ExpensesSearch();

        $model = new Expenses();

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Expense Added Successfully");
                    return $this->redirect(['index-plain']);
                } else
                    Yii::$app->session->setFlash('danger', 'Failed to Add Expense!.');
            } else {

                $model->loadDefaultValues();
            }
        }

        $dataProvider = $searchModel->search1($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionIndexReport()
    {
        $model = new Expenses;
        $searchModel = new ExpensesSearch;

        $dataProvider = $searchModel->search1($this->request->queryParams);

        return $this->render('index-report', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
            'model' => $model,
        ]);
    }


    /**
     * Displays a single Expenses model.
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
     * Creates a new Expenses model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Expenses();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Expenses model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $hd =$model->trip_id;
        if ($this->request->isPost && $model->load($this->request->post())) {

            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Expense Updated successfully");
                 if($model->trip_id==null){
                    return $this->redirect(['index-plain']);
                 }
                 else {
                     return $this->redirect(['index', 'hd' => $hd]);
                 }

            } else
                Yii::$app->session->setFlash('danger', 'Failed to update details!.');
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }


    /**
     * Deletes an existing Expenses model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();
        Yii::$app->session->setFlash('success', "Expense Deleted successfully");
        return $this->redirect(['index-plain']);
    }

    /**
     * Finds the Expenses model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Expenses the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Expenses::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function loadTrip($id)
    {
        if (($model = Trips::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
