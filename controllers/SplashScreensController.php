<?php

namespace app\controllers;

use app\models\SplashScreens;
use app\models\SplashScreensSearch;
use App\Models\User;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * SplashScreensController implements the CRUD actions for SplashScreens model.
 */
class SplashScreensController extends Controller
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
     * Lists all SplashScreens models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new SplashScreensSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new SplashScreens();

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' =>$model
        ]);
    }
    /**
     * Displays a single SplashScreens model.
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
     * Creates a new SplashScreens model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */

public function actionCreate()
{
    $model = new SplashScreens();
    if ($this->request->isPost) {
        if ($model->load($this->request->post())) {
            $splashPic = UploadedFile::getInstance($model, 'photo');
            if ($splashPic) {
                $pic = time() . 'splashphoto.' . $splashPic->extension;
                $protocol = Yii::$app->request->getIsSecureConnection() ? 'https' : 'http';
                $baseUrl = Yii::getAlias('@web');  
                $model->photo = $protocol . '://' . Yii::$app->request->serverName . $baseUrl . '/uploads/' . $pic;
            }
            if ($model->save()) {
                if ($splashPic) {
                    $splashPic->saveAs(Yii::getAlias('@webroot') . '/uploads/' . $pic);
                }
                Yii::$app->session->setFlash('success', 'Data saved successfully.');
                return $this->redirect(['index']);
            } else {
                Yii::$app->session->setFlash('failure', 'Failed to save data!');
            }
        }
    }
    return $this->render('create', [
        'model' => $model,
    ]);
}

    /**
     * Updates an existing SplashScreens model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param string $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $oldPhoto = $model->photo;
        if ($this->request->isPost && $model->load($this->request->post())) {
            $splashPic = UploadedFile::getInstance($model, 'photo');
            if ($splashPic) {
                $pic = time() . 'splashphoto.' . $splashPic->extension;
                $protocol = Yii::$app->request->getIsSecureConnection() ? 'https' : 'http';
                $baseUrl = Yii::getAlias('@web');
                $model->photo = $protocol . '://' . Yii::$app->request->serverName . $baseUrl . '/uploads/' . $pic;
                $splashPic->saveAs(Yii::getAlias('@webroot') . '/uploads/' . $pic);
                if ($oldPhoto && file_exists(Yii::getAlias('@webroot') . '/uploads/' . basename($oldPhoto))) {
                    unlink(Yii::getAlias('@webroot') . '/uploads/' . basename($oldPhoto));
                }
            } else {
                $model->photo = $oldPhoto;
            }
            if ($model->save()) {
                Yii::$app->session->setFlash('success', 'Data saved successfully.');
                return $this->redirect(['index', 'id' => $model->id]); 
            } else {
                Yii::$app->session->setFlash('failure', 'Failed to save data!');
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }
    

    /**
     * Deletes an existing SplashScreens model.
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
     * Finds the SplashScreens model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $id ID
     * @return SplashScreens the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = SplashScreens::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
