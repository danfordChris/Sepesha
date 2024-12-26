<?php

namespace app\controllers;

use app\models\CustomHelper;
use app\models\FitpersonShelterPlacement;
use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\Reintegrations;
use app\models\ShelterOrFitpersonAssessment;
use app\models\ShelterOrFitpersonAssessmentSearch;
use Yii;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * ShelterOrFitpersonAssessmentController implements the CRUD actions for ShelterOrFitpersonAssessment model.
 */
class ShelterOrFitpersonAssessmentController extends Controller
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
     * Lists all ShelterOrFitpersonAssessment models.
     *
     * @return string
     */
    public function actionAllPlacements()
    {
        $searchModel = new ShelterOrFitpersonAssessmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('all-placements', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionIndex($tool, $ref)
    {

        $reintegrationModel = $this->findReintegrations($ref);
        $intakeModel = $this->findIntakeByID($reintegrationModel->intake_id);

        $model = new ShelterOrFitpersonAssessment();
        $model->intake_id = $intakeModel->id;

        $_SESSION['tool_data'] = $tool;
        $_SESSION['reintegration_ref'] = $ref;

        Yii::$app->user->setReturnUrl(['shelter-or-fitperson-assessment/index', 'tool' => $_SESSION['tool_data'], 'ref' => $_SESSION['reintegration_ref']]);

        if (CustomHelper::getPlacement($intakeModel->id) != null) {
            $placement = CustomHelper::getPlacement($intakeModel->id);
            $model->placementid = $placement->id;
        }

        $searchModel = new ShelterOrFitpersonAssessmentSearch();
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

        $intakeModel = $this->findIntake($ref);

        $model = new ShelterOrFitpersonAssessment();
        $model->intake_id = $intakeModel->id;

        $_SESSION['tool_data'] = $tool;
        $_SESSION['reintegration_ref'] = $ref;

        Yii::$app->user->setReturnUrl(['shelter-or-fitperson-assessment/manage', 'tool' => $_SESSION['tool_data'], 'ref' => $_SESSION['reintegration_ref']]);

        if (CustomHelper::getPlacement($intakeModel->id) != null) {
            $placement = CustomHelper::getPlacement($intakeModel->id);
            $model->placementid = $placement->id;
        }

        $searchModel = new ShelterOrFitpersonAssessmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $intakeModel->id]);

        return $this->render('manage', [
            'model' => $model,
            'dataProvider' => $dataProvider,
            'intake' =>  $intakeModel

        ]);
    }

    /**
     * Displays a single ShelterOrFitpersonAssessment model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($ref)
    {
        return $this->render('view', [
            'model' => $this->findByReference($ref),
        ]);
    }

    /**
     * Creates a new ShelterOrFitpersonAssessment model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new ShelterOrFitpersonAssessment();

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
                Yii::$app->user->setReturnUrl(['shelter-or-fitperson-assessment/index', 'tool' => $toolitem, 'ref' => $ref]);
                if ($model->save()) {
                    IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey(), $refno);

                    Yii::$app->session->setFlash('success', "Assessment added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to add Assessment");
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

    /**
     * Updates an existing ShelterOrFitpersonAssessment model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */

    public function actionUpdate($ref)
    {
        $model = $this->findByReference($ref);

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['reintegration_ref'];

        if ($this->request->isPost && $model->load($this->request->post())) {
            Yii::$app->user->setReturnUrl(['shelter-or-fitperson-assessment/index', 'tool' => $toolitem, 'ref' => $ref]);
            if ($model->save()) {

                Yii::$app->session->setFlash('success', "Assessment updated successfully");
                return $this->goBack();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to add Assessment");
                return $this->goBack();
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionUpdateatIntake($ref)
    {
        $model = $this->findByReference($ref);

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['reintegration_ref'];

        if ($this->request->isPost && $model->load($this->request->post())) {
            Yii::$app->user->setReturnUrl(['shelter-or-fitperson-assessment/manage', 'tool' => $toolitem, 'ref' => $ref]);
            if ($model->save()) {

                Yii::$app->session->setFlash('success', "Assessment updated successfully");
                return $this->goBack();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to add Assessment");
                return $this->goBack();
            }
        }

        return $this->render('updateat-intake', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing ShelterOrFitpersonAssessment model.
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
     * Finds the ShelterOrFitpersonAssessment model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return ShelterOrFitpersonAssessment the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = ShelterOrFitpersonAssessment::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findByReference($ref)
    {
        if (($model = ShelterOrFitpersonAssessment::findOne(['refno' => $ref])) !== null) {
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

    protected function findIntakeById($id)
    {
        if (($model = Intake::findOne(['id' => $id])) !== null) {
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
