<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\AccountCodes;
use yii\filters\AccessControl;
use app\models\AccountCodesSearch;
use yii\web\NotFoundHttpException;

/**
 * AccountCodesController implements the CRUD actions for AccountCodes model.
 */
class AccountCodesController extends Controller
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
        ];
    }

    /**
     * Lists all AccountCodes models.
     *
     * @return string
     */
    // public function actionIndex()
    // {
    //     $searchModel = new AccountCodesSearch();
    //     $dataProvider = $searchModel->search($this->request->queryParams);

    //     return $this->render('index', [
    //         'searchModel' => $searchModel,
    //         'dataProvider' => $dataProvider,
    //     ]);
    // }

    public function actionIndex()
    {
        // $this->Auth();
        $model = new AccountCodes();
        $searchModel = new AccountCodesSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->save()) {
                    // return var_dump($model->updated_by);
                    Yii::$app->session->setFlash('success', "Account Code Added Successfully");
                    return $this->redirect(['index']);
                } else
                    Yii::$app->session->setFlash('danger', 'Failed to Add Account Code!.');
            } else {

                $model->loadDefaultValues();
            }
        }

        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single AccountCodes model.
     * @param int $coid Coid
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($coid)
    {
        return $this->render('view', [
            'model' => $this->findModel($coid),
        ]);
    }

    /**
     * Creates a new AccountCodes model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new AccountCodes();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'coid' => $model->coid]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing AccountCodes model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $coid Coid
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    // public function actionUpdate($coid)
    // {
    //     $model = $this->findModel($coid);

    //     if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
    //         return $this->redirect(['view', 'coid' => $model->coid]);
    //     }

    //     return $this->render('update', [
    //         'model' => $model,
    //     ]);
    // }

    public function actionUpdate($coid)
    {
        $model = $this->findModel($coid);

        if ($this->request->isPost && $model->load($this->request->post())) {
            if ($model->save(false)) {
                Yii::$app->session->setFlash('success', "Account Code: " . $model->code . " Details Updated successfully");
                return $this->redirect(['index']);
            } else
                Yii::$app->session->setFlash('danger', 'Failed to update details!.');
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing AccountCodes model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $coid Coid
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($coid)
    {
        $this->findModel($coid)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the AccountCodes model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $coid Coid
     * @return AccountCodes the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($coid)
    {
        if (($model = AccountCodes::findOne(['coid' => $coid])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
