<?php

namespace app\controllers;

use app\models\Beneficiary;
use app\models\FitpersonShelterPlacement;
use app\models\FitpersonShelterPlacementSearch;
use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\User;
use app\models\WorkflowTools;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * FitpersonShelterPlacementController implements the CRUD actions for FitpersonShelterPlacement model.
 */
class FitpersonShelterPlacementController extends Controller
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
     * Lists all FitpersonShelterPlacement models.
     *
     * @return string
     */
    public function actionIndex($tool, $ref)
    {

        $intakeModel = $this->findIntake($ref);
        $model = new FitpersonShelterPlacement();
        $model->intake_id = $intakeModel->id;

        if ($intakeModel->services == 4) {
            $model->type = 26;
        } else {
            $model->type = 27;
        }

        $_SESSION['tool_data'] = $tool;
        $_SESSION['intake_ref'] = $ref;

        $searchModel = new FitpersonShelterPlacementSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $intakeModel->id]);

        return $this->render('index', [
            'model' => $model,
            'dataProvider' => $dataProvider,
            'intake' =>  $intakeModel,

        ]);
    }

    public function actionReport()
    {
        $searchModel = new FitpersonShelterPlacementSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new FitpersonShelterPlacement();
        return $this->render('report', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }


    /**
     * Displays a single FitpersonShelterPlacement model.
     * @param int $id ID
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
     * Creates a new FitpersonShelterPlacement model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new FitpersonShelterPlacement();

        $toolitem = $_SESSION['tool_data'];
        $intakeitem = $_SESSION['intake_ref'];
        $intakeModel = $this->findIntake($intakeitem);
        $refno = Yii::$app->security->generateRandomString(20);
        $toolModel = $this->findWorkflowTool($toolitem);
        $wid =  $intakeModel->wid;
        $stid =  $intakeModel->stid;

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                Yii::$app->user->setReturnUrl(['fitperson-shelter-placement/index', 'tool' => $toolitem, 'ref' => $intakeitem]);
                if ($model->save()) {
                    IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey(), $intakeModel->refno);

                    Yii::$app->session->setFlash('success', "Placement added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to add Placement");
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
     * Updates an existing FitpersonShelterPlacement model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);

        if ($this->request->isPost && $model->load($this->request->post())) {
            $intakes = $this->findIntakeById($model->intakeid);
            Yii::$app->user->setReturnUrl(['fitperson-shelter-placement/index', 'tool' => $_SESSION['tool_data'], 'ref' => $_SESSION['intake_ref']]);
            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Placement Details updated successfully");
                return $this->goBack();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to update Placement Details Details");
                return $this->goBack();
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionDischargeChild($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $tool = $_SESSION['tool_data'];
        $ref =  $_SESSION['intake_ref'];

        Yii::$app->user->setReturnUrl(['fitperson-shelter-placement/index', 'tool' => $tool, 'ref' => $ref]);

        if (FitpersonShelterPlacement::getIsPlacement($number)) {
            Yii::$app->session->setFlash('success', "Discharged successfully");
            return $this->goBack();
        } else {
            Yii::$app->session->setFlash('danger', "Discharge Failed");
            return $this->goBack();
        }
    }

    public function actionPlaceChild($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $tool = $_SESSION['tool_data'];
        $ref =  $_SESSION['intake_ref'];

        Yii::$app->user->setReturnUrl(['fitperson-shelter-placement/index', 'tool' => $tool, 'ref' => $ref]);

        if (FitpersonShelterPlacement::getNoPlacement($number)) {
            Yii::$app->session->setFlash('success', "Child successfully returned");
            return $this->goBack();
        } else {
            Yii::$app->session->setFlash('danger', "Placement failed");
            return $this->goBack();
        }
    }


    /**
     * Deletes an existing FitpersonShelterPlacement model.
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
     * Finds the FitpersonShelterPlacement model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return FitpersonShelterPlacement the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = FitpersonShelterPlacement::findOne(['id' => $id])) !== null) {
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

    protected function findWorkflowTool($id)
    {
        if (($model = WorkflowTools::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
