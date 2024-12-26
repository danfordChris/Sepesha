<?php

namespace app\controllers;

use app\models\Jobtitles;
use app\models\JobtitlesSearch;
use app\models\User;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * JobtitlesController implements the CRUD actions for Jobtitles model.
 */
class JobtitlesController extends Controller
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
                            return  User::auth('create_job_titles');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_job_titles');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_job_titles');
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
     * Lists all Jobtitles models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new JobtitlesSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new Jobtitles();

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }

    /**
     * Displays a single Jobtitles model.
     * @param int $jtid Jtid
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
     * Creates a new Jobtitles model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Jobtitles();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['index', 'jtid' => $model->jtid]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Jobtitles model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $jtid Jtid
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);
    
        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['index', 'rca' => Yii::$app->getSecurity()->hashData($model->jtid, 'gmtdev')]);
        }
    
        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Jobtitles model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $jtid Jtid
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($jtid)
    {
        $this->findModel($jtid)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Jobtitles model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $jtid Jtid
     * @return Jobtitles the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($jtid)
    {
        if (($model = Jobtitles::findOne(['jtid' => $jtid])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
