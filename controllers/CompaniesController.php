<?php

namespace app\controllers;

use Yii;
use yii\web\Response;
use yii\web\Controller;
use app\models\Companies;
use yii\web\UploadedFile;
use yii\filters\VerbFilter;
use app\models\CompaniesSearch;
use app\models\User;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;

/**
 * CompaniesController implements the CRUD actions for Companies model.
 */
class CompaniesController extends Controller
{
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
                            return  User::auth('create_companies');
                        }
                    ],

                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_companies');
                        }
                    ],

                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_companies');
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
     * Lists all Companies models.
     * @return mixed
     */
    protected function Auth()
    {

        if (Yii::$app->user->isGuest) {
            return  $this->redirect(['/site/login']);
        } else {

            $inid = \Yii::$app->user->identity->id;
            return $inid;
        }
    }

    // public function actionIndex()
    // {
    //     $this->Auth();
    //     $model = new Companies;
    //     $searchModel = new CompaniesSearch;
    //     $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());

    //     return $this->render('index', [
    //         'dataProvider' => $dataProvider,
    //         'searchModel' => $searchModel,
    //         'model' => $model,
    //     ]);
    // }

    public function actionIndex()
    {
        // $this->Auth();
        $model = new Companies;
        $searchModel = new CompaniesSearch;

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $logo = UploadedFile::getInstance($model, 'logo');
                $model->logo = time() . '.' . $logo->extension;
                if ($model->save()) {
                    $logo->saveAs('uploads/' . $model->logo);
                    Yii::$app->session->setFlash('success', "Company Added Successfully");
                    return $this->redirect(['index']);
                } else
                    Yii::$app->session->setFlash('danger', 'Failed to Add Company!.');
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
     * Displays a single Companies model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        $this->Auth();
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->company_id]);
        } else {
            return $this->render('view', ['model' => $model]);
        }
    }

    /**
     * Creates a new Companies model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $this->Auth();
        $model = new Companies;

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->company_id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Companies model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $this->Auth();
        $model = $this->findModel($id);

        $existingLogo = $model->logo;

        if ($model->load(Yii::$app->request->post())) {
            //get instance of logo
            $logo = UploadedFile::getInstance($model, 'logo');

            if ($logo) {
                $model->logo = time() . '.' . $logo->extension;
            } else {
                // If no new logo is being uploaded, restore the existing logo
                $model->logo = $existingLogo;
            }

            if ($model->save()) {

                if ($logo) {
                    $logo->saveAs('uploads/' . $model->logo);
                }
                Yii::$app->session->setFlash('success', "Company " . $model->company_name . " Details Updated successfully");
                return $this->redirect(['index', 'id' => $model->company_id]);
            }
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Companies model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->Auth();
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Companies model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Companies the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Companies::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    public function actionFetchDistricts()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $districtid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getDistrictsFromDatabase($districtid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getDistrictsFromDatabase($regionId)
    {
        $districts = Yii::$app->db->createCommand('SELECT did, name FROM districts WHERE rid=:regionId')->bindValue('regionId', $regionId)->queryAll();
        $result = [];

        foreach ($districts as $district) {
            $result[] = ['id' => $district['did'], 'name' => $district['name']];
        }

        return $result;
    }
}