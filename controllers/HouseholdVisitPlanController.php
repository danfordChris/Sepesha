<?php

namespace app\controllers;

use app\models\Beneficiary;
use app\models\HouseholdVisitPlan;
use app\models\HouseholdVisitPlanSearch;
use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\Reintegrations;
use Yii;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * HouseholdVisitPlanController implements the CRUD actions for HouseholdVisitPlan model.
 */
class HouseholdVisitPlanController extends Controller
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
                    'class' => VerbFilter::class,
                    'actions' => [
                        'delete' => ['POST'],
                    ],
                ],
            ]
        );
    }

    /**
     * Lists all HouseholdVisitPlan models.
     *
     * @return string
     */

    public function actionIndex($tool, $ref)
    {

        $reintegrationModel = $this->findReintegrations($ref);
        $intakeModel = $this->findIntakeByID($reintegrationModel->intake_id);

        $model = new HouseholdVisitPlan();
        $model->intake_id = $intakeModel->id;

        $_SESSION['tool_data'] = $tool;
        $_SESSION['reintegration_ref'] = $ref;

        $searchModel = new HouseholdVisitPlanSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $reintegrationModel->intake_id]);

        return $this->render('index', [
            'model' => $model,
            'dataProvider' => $dataProvider,
            'intakeModel' =>  $reintegrationModel,

        ]);
    }

    /**
     * Displays a single HouseholdVisitPlan model.
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

    public function actionViewSession($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        return $this->render('view-session', [
            'model' => $this->findModel($number),
        ]);
    }

    /**
     * Creates a new HouseholdVisitPlan model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new HouseholdVisitPlan();

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['reintegration_ref'];

        $reintegrationModel = $this->findReintegrations($ref);
        $intakeModel = $this->findIntakeByID($reintegrationModel->intake_id);

        $model->refno = Yii::$app->security->generateRandomString(20);
        $model->familyid = $intakeModel->beneficiary_id;
        $refno = $model->refno;
        $wid =  $reintegrationModel->wid;
        $stid =  $reintegrationModel->stid;


        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $intakes = $this->findIntakeById($model->intake_id);
                Yii::$app->user->setReturnUrl(['household-visit-plan/index', 'tool' => $toolitem, 'ref' => $ref]);
                IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey(), $reintegrationModel->refno);
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Family Session Plan added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to Family Session Plan");
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

    public function actionUpdateSession($id)
    {
        $model = $this->findModel($id);
        return $this->renderAjax('_form_session', [
            'model' => $model,
        ]);
    }

    public function actionAddRecord($plan)
    {
        if (Yii::$app->request->isAjax && Yii::$app->request->isPost) {
            $model = $this->findModel($plan);

            if ($model->load(Yii::$app->request->post())) {
                if ($model->save(false)) {
                    return json_encode(['status' => 'success']);
                } else {
                    return json_encode(['status' => 'error', 'errors' => $model->errors]);
                }
            }

            return json_encode(['status' => 'error', 'errors' => $model->errors]);
        }

        throw new \yii\web\BadRequestHttpException('Invalid request.');
    }

    /**
     * Updates an existing HouseholdVisitPlan model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['reintegration_ref'];

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $intakes = $this->findIntakeById($model->intake_id);
                Yii::$app->user->setReturnUrl(['household-visit-plan/index', 'tool' => $toolitem, 'ref' => $ref]);
                $model->review_date = date('Y-m-d');
                if ($model->save(false)) {
                    Yii::$app->session->setFlash('success', "Family Session Details added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to add Family SEssion Details");
                    return $this->goBack();
                }
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing HouseholdVisitPlan model.
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
     * Finds the HouseholdVisitPlan model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return HouseholdVisitPlan the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = HouseholdVisitPlan::findOne(['id' => $id])) !== null) {
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
