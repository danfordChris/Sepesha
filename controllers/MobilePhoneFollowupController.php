<?php

namespace app\controllers;

use app\models\Beneficiary;
use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\MobilePhoneFollowup;
use app\models\MobilePhoneFollowupSearch;
use app\models\Reintegrations;
use app\models\WorkflowTools;
use Yii;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * MobilePhoneFollowupController implements the CRUD actions for MobilePhoneFollowup model.
 */
class MobilePhoneFollowupController extends Controller
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
     * Lists all MobilePhoneFollowup models.
     *
     * @return string
     */


    public function actionIndex($tool, $ref)
    {

        $intakeModel = $this->findReintegrations($ref);
        $model = new MobilePhoneFollowup();
        $model->intakeid = $intakeModel->id;
        $intakeId = $intakeModel->refno;
        $beneficiary = $this->findBeneficiary($intakeModel->benid);

        $_SESSION['tool_data'] = $tool;
        $_SESSION['intake_ref'] = $ref;

        $searchModel = new MobilePhoneFollowupSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intakeid' => $intakeModel->id]);

        $toolModel = $this->findWorkflowTool($tool);
        $wid =  $toolModel->wid;
        $stid =  $toolModel->stid;

        return $this->render('index', [
            'model' => $model,
            'dataProvider' => $dataProvider,
            'intake' =>  $intakeModel,
            'workflow' => $wid,
            'stage' =>   $stid,

        ]);
    }


    /**
     * Displays a single MobilePhoneFollowup model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);

        $intakeModel = $this->findIntakeById($model->intakeid);
        $intakeId = $intakeModel->refno;
        $beneficiary = $this->findBeneficiary($intakeModel->beneficiary_id);


        return $this->render('view', [
            'model' => $model,
        ]);
    }

    /**
     * Creates a new MobilePhoneFollowup model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */


    public function actionCreate()
    {
        $model = new MobilePhoneFollowup();

        $toolitem = $_SESSION['tool_data'];
        $intakeitem = $_SESSION['intake_ref'];
        $intakeModel = $this->findReintegrations($intakeitem);
        $refno = Yii::$app->security->generateRandomString(20);
        $toolModel = $this->findWorkflowTool($toolitem);
        $wid =  $toolModel->wid;
        $stid =  $toolModel->stid;

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $intakes = $this->findIntakeById($model->intakeid);
                Yii::$app->user->setReturnUrl(['mobile-phone-followup/index', 'tool' => $toolitem, 'ref' => $intakeitem]);
                if ($model->save()) {
                    IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey(), $refno);

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
     * Updates an existing MobilePhoneFollowup model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {

        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);

        $intakeModel = $this->findIntakeById($model->intakeid);
        $intakeId = $intakeModel->refno;
        $beneficiary = $this->findBeneficiary($intakeModel->beneficiary_id);

        if ($this->request->isPost && $model->load($this->request->post())) {
            $intakes = $this->findIntakeById($model->intakeid);
            Yii::$app->user->setReturnUrl(['mobile-phone-followup/index', 'tool' => $_SESSION['tool_data'], 'ref' => $_SESSION['intake_ref']]);
            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Mobile Follow Up updated successfully");
                return $this->goBack();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to update Mobile Follow Up");
                return $this->goBack();
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing MobilePhoneFollowup model.
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
     * Finds the MobilePhoneFollowup model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return MobilePhoneFollowup the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = MobilePhoneFollowup::findOne(['id' => $id])) !== null) {
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

    protected function findReintegrations($id)
    {
        if (($model = Reintegrations::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
