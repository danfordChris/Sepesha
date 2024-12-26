<?php

namespace app\controllers;

use app\models\CustomHelper;
use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\WellbeingAssessment;
use app\models\WellbeingAssessmentSearch;
use app\models\WellbeingAssessmentsItem;
use Yii;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * WellbeingAssessmentController implements the CRUD actions for WellbeingAssessment model.
 */
class WellbeingAssessmentController extends Controller
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
     * Lists all WellbeingAssessment models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $model = new WellbeingAssessment();
        $searchModel = new WellbeingAssessmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionManage($tool, $ref)
    {
        $modelIntake = $this->findIntake($ref);
        $intakeId = $modelIntake->id;
        $_SESSION['tool_data'] = $tool;
        $_SESSION['intake_ref'] = $ref;
        $model = new WellbeingAssessment();
        $model->intake_id = $intakeId;
        $model->assessment_date = date('Y-m-d');
        $searchModel = new WellbeingAssessmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $intakeId]);

        return $this->render('manage', [
            'model' => $model,
            'intake' => $modelIntake,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single WellbeingAssessment model.
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
     * Creates a new WellbeingAssessment model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */


    public function actionCreate()
    {
        $model = new WellbeingAssessment();
        $toolitem = $_SESSION['tool_data'];
        $intakeitem = $_SESSION['intake_ref'];
        $intakeModel = $this->findIntake($intakeitem);
        $refno = Yii::$app->security->generateRandomString(20);
        $wid =  $intakeModel->wid;
        $stid =  $intakeModel->stid;
        $model->intake_id = $intakeModel->id;
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey(), $intakeModel->refno);
            Yii::$app->session->setFlash('success', "Wellbeing Assessment added ,proceed to questions");
            return $this->redirect(['update-wellbeing-assessment', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        } else {
            Yii::$app->session->setFlash('error', "failed to save data");
            return $this->redirect(['manage', 'tool' => $toolitem, 'ref' => $intakeitem]);
        }
    }

    /**
     * Updates an existing WellbeingAssessment model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Wellbeing Assessment updated successfully");
            return $this->redirect(['index']);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionUpdateWellbeingAssessment($rca)
    {

        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);
        $id = $model->id;

        $modelIntake = $this->findIntakeByID($model->intake_id);
        $intakeId = $modelIntake->refno;

        $modelAssItem = new WellbeingAssessmentsItem();
        if ($modelAssItem->load(Yii::$app->request->post())) {
            $modelAssItem->assessment_id = $model->id;
            if (!empty($modelAssItem->abuseDetails) && is_array($modelAssItem->abuseDetails)) {
                foreach ($modelAssItem->abuseDetails as $abuseDetail) {
                    if (!empty($abuseDetail['type'])) {
                        $abuseDetails = $modelAssItem->abuseDetails;
                        $modelAssItem->all_data = json_encode($abuseDetails);
                        break;
                    }
                }
            }

            if (!empty($modelAssItem->drugDetails) && is_array($modelAssItem->drugDetails)) {
                foreach ($modelAssItem->drugDetails as $drugDetail) {
                    if (!empty($drugDetail['name'])) {
                        $drugDetails = $modelAssItem->drugDetails;
                        $modelAssItem->all_data = json_encode($drugDetails);
                        break;
                    }
                }
            }
            $modelAssItem->domain_id = CustomHelper::getQuestionDomain($modelAssItem->subdomain_id);
            $modelAssItem->save() ? Yii::$app->session->setFlash('success', "Wellbeing Option Response added successfully") : Yii::$app->session->setFlash('error', "Data failed to save");;;
            return $this->redirect(['update-wellbeing-assessment', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        }


        if ($model->load(Yii::$app->request->post()) && $model->save()) {

            Yii::$app->session->setFlash('success', "Wellbeing Assessment updated successfully");
            return $this->redirect(['update-wellbeing-assessment', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        }

        $qqq = WellbeingAssessmentsItem::find()->where(['assessment_id' => $id]);
        $assessmentDomainItems = new ActiveDataProvider([
            'query' => $qqq,
        ]);


        return $this->render('update-wellbeing-assessment', [
            'model' => $model,
            'modelIntake' => $modelIntake,
            'modelAssItem' => new WellbeingAssessmentsItem(),
            'assessmentDomainItems' => $assessmentDomainItems,
        ]);
    }

    /**
     * Deletes an existing WellbeingAssessment model.
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
     * Finds the WellbeingAssessment model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return WellbeingAssessment the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = WellbeingAssessment::findOne(['id' => $id])) !== null) {
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
}
