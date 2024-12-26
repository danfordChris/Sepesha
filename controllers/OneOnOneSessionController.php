<?php

namespace app\controllers;

use app\models\Beneficiary;
use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\OneOnOneSession;
use app\models\OneOnOneSessionSearch;
use app\models\Reintegrations;
use Yii;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * OneOnOneSessionController implements the CRUD actions for OneOnOneSession model.
 */
class OneOnOneSessionController extends Controller
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
     * Lists all OneOnOneSession models.
     *
     * @return string
     */
    public function actionMainPage()
    {
        $searchModel = new OneOnOneSessionSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionIndex($tool, $ref)
    {

        $reintegrationModel = $this->findReintegrations($ref);
        $intakeModel = $this->findIntakeByID($reintegrationModel->intake_id);

        $model = new OneOnOneSession();
        $model->intake_id = $intakeModel->id;

        $_SESSION['tool_data'] = $tool;
        $_SESSION['reintegration_ref'] = $ref;

        $searchModel = new OneOnOneSessionSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $reintegrationModel->intake_id]);

        return $this->render('index', [
            'model' => $model,
            'dataProvider' => $dataProvider,
            'intake' =>  $reintegrationModel,

        ]);
    }

    public function actionManage($tool, $ref)
    {

        // $reintegrationModel = $this->findReintegrations($ref);
        $intakeModel = $this->findIntake($ref);

        $model = new OneOnOneSession();
        $model->intake_id = $intakeModel->id;

        $_SESSION['tool_data'] = $tool;
        $_SESSION['reintegration_ref'] = $ref;

        $searchModel = new OneOnOneSessionSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $intakeModel->id]);

        return $this->render('manage', [
            'model' => $model,
            'dataProvider' => $dataProvider,
            'intake' =>  $intakeModel,

        ]);
    }

    /**
     * Displays a single OneOnOneSession model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($ref)
    {
        return $this->render('view', [
            'model' => $this->findModel($ref),
        ]);
    }

    /**
     * Creates a new OneOnOneSession model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */

    public function actionCreate()
    {
        $model = new OneOnOneSession();

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['reintegration_ref'];

        $reintegrationModel = $this->findReintegrations($ref);
        $intakeModel = $this->findIntakeByID($reintegrationModel->intake_id);

        $model->refno = Yii::$app->security->generateRandomString(20);
        $refno = $model->refno;
        $wid =  $reintegrationModel->wid;
        $stid =  $reintegrationModel->stid;


        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                Yii::$app->user->setReturnUrl(['one-on-one-session/index', 'tool' => $toolitem, 'ref' => $ref]);
                if ($model->save()) {

                    IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey, $reintegrationModel->refno);

                    Yii::$app->session->setFlash('success', "One on One Session added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to add One on One Session");
                    return $this->goBack();
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionCreateatIntake()
    {
        $model = new OneOnOneSession();

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['reintegration_ref'];

        $intakeModel = $this->findIntake($ref);

        $model->refno = Yii::$app->security->generateRandomString(20);
        $refno = $model->refno;
        $wid =  $intakeModel->wid;
        $stid =  $intakeModel->stid;


        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                Yii::$app->user->setReturnUrl(['one-on-one-session/manage', 'tool' => $toolitem, 'ref' => $ref]);
                if ($model->save()) {

                    IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey, $intakeModel->refno);

                    Yii::$app->session->setFlash('success', "One on One Session added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to add One on One Session");
                    return $this->goBack();
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('createat-intake', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing OneOnOneSession model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($ref)
    {
        $model = $this->findModel($ref);

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['reintegration_ref'];

        if ($this->request->isPost && $model->load($this->request->post())) {
            Yii::$app->user->setReturnUrl(['one-on-one-session/index', 'tool' => $toolitem, 'ref' => $ref]);
            if ($model->save()) {

                Yii::$app->session->setFlash('success', "One on One Session updated successfully");
                return $this->goBack();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to add One on One Session");
                return $this->goBack();
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionUpdateatIntake($ref)
    {
        $model = $this->findModel($ref);

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['reintegration_ref'];

        if ($this->request->isPost && $model->load($this->request->post())) {
            Yii::$app->user->setReturnUrl(['one-on-one-session/manage', 'tool' => $toolitem, 'ref' => $ref]);
            if ($model->save()) {

                Yii::$app->session->setFlash('success', "One on One Session updated successfully");
                return $this->goBack();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to add One on One Session");
                return $this->goBack();
            }
        }

        return $this->render('updateat-intake', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing OneOnOneSession model.
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
     * Finds the OneOnOneSession model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return OneOnOneSession the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = OneOnOneSession::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findIntakeByID($id)
    {
        if (($model = Intake::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findBeneficiary($id)
    {
        if (($model = Beneficiary::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findReintegrations($id)
    {
        if (($model = Reintegrations::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
