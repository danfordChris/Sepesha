<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\Customer;
use yii\filters\VerbFilter;
use app\models\CustomerSearch;
use app\models\User;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;

/**
 * CustomerController implements the CRUD actions for Customer model.
 */
class CustomerController extends Controller
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
     * Lists all Customer models.
     *
     * @return string
     */
    public function actionIndex()
    {
        // $this->Auth();
        $model = new Customer();
        $searchModel = new CustomerSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Shareholder Added Successfully");
                    return $this->redirect(['index']);
                } else
                    Yii::$app->session->setFlash('danger', 'Failed to Add Shareholder!.');
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

    public function actionIndexContacts()
    {
        // $this->Auth();
        $model = new Customer();
        $searchModel = new CustomerSearch();
        $dataProvider = $searchModel->searchcontacts(Yii::$app->request->getQueryParams());
        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Contact Added Successfully");
                    return $this->redirect(['index-contacts']);
                } else
                    Yii::$app->session->setFlash('danger', 'Failed to Add Contact!.');
            } else {

                $model->loadDefaultValues();
            }
        }


        return $this->render('index-contacts', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }


    /**
     * Displays a single Customer model.
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

    public function actionViewBeneficiary($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        return $this->render('view-beneficiary', [
            'model' => $this->findModel($number),
        ]);
    }

    /**
     * Creates a new Customer model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Customer();
        Yii::info('Rules found:');
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

    public function actionCreateContacts()
    {
        $model = new Customer();
        Yii::info('Rules found:');
        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['index']);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create-contacts', [
            'model' => $model,
        ]);
    }

    public function actionCreateCaregivers()
    {
        $model = new Customer();
        Yii::info('Rules found:');
        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['index']);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create-caregivers', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Customer model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);
        $model->phone = trim($model->phone, '255');

        if ($this->request->isPost && $model->load($this->request->post())) {

            if ($model->save(false)) {
                Yii::$app->session->setFlash('success', "Customer: " . $model->name . "  Updated successfully");
                return $this->redirect(['index']);
            } else
                Yii::$app->session->setFlash('danger', 'Failed to update details!.');
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionUpdateBeneficiary($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);

        if ($this->request->isPost && $model->load($this->request->post())) {

            if ($model->save(false)) {
                Yii::$app->session->setFlash('success', "Contact: " . $model->name . "  Updated successfully");
                return $this->redirect(['../beneficiary/index']);
            } else
                Yii::$app->session->setFlash('danger', 'Failed to update details!.');
        }

        return $this->render('update-beneficiary', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Customer model.
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
     * Finds the Customer model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Customer the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Customer::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
