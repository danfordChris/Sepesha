<?php

namespace app\controllers;

use app\models\CsiDomains;
use app\models\CsiDomainsSearch;
use app\models\CsiSubdomains;
use app\models\CsiSubdomainsSearch;
use app\models\User;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * CsiDomainsController implements the CRUD actions for CsiDomains model.
 */
class CsiDomainsController extends Controller
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
                            return  User::auth('create_csi_domains');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_csi_domains');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_csi_domains');
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
     * Lists all CsiDomains models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $model = new CsiDomains();
        $searchModel = new CsiDomainsSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single CsiDomains model.
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
     * Creates a new CsiDomains model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new CsiDomains();
        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                Yii::$app->session->setFlash('success', "Csi Domain added successfully");
                return $this->redirect(['index', 'id' => $model->id]);
            }
        } else {
            Yii::$app->session->setFlash('danger', "Failed to add Csi Domain");
            $model->loadDefaultValues();
        }
        return $this->render('create', [
            'model' => $model,
        ]);
    }


    /**
     * Updates an existing CsiDomains model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    // public function actionUpdate($rca)
    // {
    //     $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

    //     $model = $this->findModel($number);

    //     if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
    //         Yii::$app->session->setFlash('success', "Csi Domain Updated Successfully");
    //         return $this->redirect(['index']);
    //     }

    //     return $this->render('update', [
    //         'model' => $model,
    //     ]);
    // }
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);
        $csiSubdomainsModel = new CsiSubdomains(); // Instantiate the CsiSubdomains model

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Csi Domain Updated Successfully");
            return $this->redirect(['index']);
        }

        return $this->render('update', [
            'model' => $model,
            'csiSubdomainsModel' => $csiSubdomainsModel, // Pass the CsiSubdomains model to the view
        ]);
    }



    public function actionSubdomain($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);
        $subdomainModel = new CsiSubdomains();
        $subdomainModel->domain_id = $model->id;
        $searchModel = new CsiSubdomainsSearch();
        $subdomainDataProvider = $searchModel->search($this->request->queryParams);
        $subdomainDataProvider->query->andWhere(['domain_id' => $model->id]);
        if ($this->request->isPost && $subdomainModel->load($this->request->post()) && $subdomainModel->save()) {
            Yii::$app->session->setFlash('success', "Subdomin added Successfully");
            return $this->refresh();
        }
        return $this->render('subdomain', [
            'model' => $model,
            'subdomainModel' => $subdomainModel,
            'subdomainDataProvider' => $subdomainDataProvider
        ]);
    }


    /**
     * Deletes an existing CsiDomains model.
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
     * Finds the CsiDomains model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CsiDomains the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CsiDomains::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
