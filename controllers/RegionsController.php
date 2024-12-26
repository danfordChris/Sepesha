<?php

namespace app\controllers;

use Yii;
use app\models\User;
use app\models\Regions;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\RegionsSearch;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;

/**
 * RegionsController implements the CRUD actions for Regions model.
 */
class RegionsController extends Controller
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
                            return  User::auth('create_regions');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_regions');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_regions');
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

    protected function Auth()
    {

        if (Yii::$app->user->isGuest) {
            return  $this->redirect(['/site/login']);
        } else {

            $inid = \Yii::$app->user->identity->id;
            return $inid;
        }
    }
    /**
     * Lists all Regions models.
     * @return mixed
     */
    public function actionIndex()
    {
        $this->Auth();
        $model = new Regions;
        $searchModel = new RegionsSearch;
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());

        return $this->render('index', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
            'model' => $model,
        ]);
    }

    /**
     * Displays a single Regions model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($rca)
    {
        $this->Auth();
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        } else {
            return $this->render('view', ['model' => $model]);
        }
    }

    /**
     * Creates a new Regions model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $this->Auth();
        $model = new Regions;

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['index', 'id' => $model->region_id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Regions model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($rca)
    {
        $this->Auth();
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Regions model.
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


    public function actionLists($id)
    {
        $countRegions = Regions::find()
            ->where(['region_country_name' => $id])
            ->count();

        $regions = Regions::find()
            ->where(['region_country_name' => $id])
            ->all();

        if ($countRegions > 0) {
            foreach ($regions as $region) {
                echo "<option value='" . $region->region_id . "'>" . $region->region_name . "</option>";
            }
        } else {
            echo "<option> --- </option>";
        }
    }

    /**
     * Finds the Regions model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Regions the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Regions::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }



    public function actionSms()
    {
        echo "moses";
        // $client = new Client();
        // $headers = [
        //   'Authorization' => 'Basic dGVzdDE6MTIzNDU2',
        //   'Content-Type' => 'application/json',
        //   'Accept' => 'application/json'
        // ];
        // $body = '{
        //   "messages": [
        //     {
        //       "from": "N-SMS",
        //       "to": "255786434435",
        //       "text": "Your message 1 from Moses"
        //     },
        //     {
        //       "from": "N-SMS",
        //       "to": "255786434435",
        //       "text": "Moses Test Message"
        //     }
        //   ],
        //   "reference": "test123"
        // }';
        // $request = new Request('POST', 'https://messaging-service.co.tz/api/sms/v1/text/multi', $headers, $body);
        // $res = $client->sendAsync($request)->wait();
        // echo $res->getBody();
    }
}
