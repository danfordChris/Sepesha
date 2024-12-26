<?php

namespace app\controllers;

use app\models\CustomHelper;
use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\YlwsLinkAssociation;
use app\models\YouthDailyActivity;
use app\models\YouthDailyActivitySearch;
use Yii;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * YouthDailyActivityController implements the CRUD actions for YouthDailyActivity model.
 */
class YouthDailyActivityController extends Controller
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
     * Lists all YouthDailyActivity models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $model = new YouthDailyActivity();
        $searchModel = new YouthDailyActivitySearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionManage($tool, $ref)
    {
        $youthModel = $this->findYlwsLinkAssociationByRefno($ref);
        $intakeModel = $this->findIntakeByID($youthModel->intake_id);
        $youthGroup = CustomHelper::getBeneficiaryGroup($youthModel->bgroup_id ?? '');

        $model = new YouthDailyActivity();
        $model->intake_id = $intakeModel->id ?? '';
        $model->empid = Yii::$app->user->identity->userid ?? '';
        $model->trx_id = $youthModel->id;
        $model->beneid = $intakeModel->beneficiary_id ?? '';
        $model->group_id = $youthModel->bgroup_id ?? '';
        $model->region_id = $youthGroup->region_id ?? '';
        $model->district_id = $youthGroup->district_id ?? '';

        $_SESSION['tool_data'] = $tool;
        $_SESSION['youth_ref'] = $ref;

        $searchModel = new YouthDailyActivitySearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $youthModel->intake_id]);

        return $this->render('manage', [
            'model' => $model,
            'dataProvider' => $dataProvider,
            'intakeModel' =>  $youthModel,

        ]);
    }

    /**
     * Displays a single WorkflowTools model.
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
     * Creates a new WorkflowTools model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */


    public function actionCreate()
    {
        $model = new YouthDailyActivity();

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['youth_ref'];

        $youthModel = $this->findYlwsLinkAssociationByRefno($ref);
        $intakeModel = $this->findIntakeByID($youthModel->intake_id);

        $youthModel->refno = Yii::$app->security->generateRandomString(20);
        $wid =  $youthModel->wid;
        $stid =  $youthModel->stid;


        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                Yii::$app->user->setReturnUrl(['youth-daily-activity/manage', 'tool' => $toolitem, 'ref' => $ref]);
                IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey(), $youthModel->refno);
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Youth Daily Activities added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to Add Youth Daily Activity");
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

    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['youth_ref'];

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                Yii::$app->user->setReturnUrl(['youth-daily-activity/manage', 'tool' => $toolitem, 'ref' => $ref]);
                if ($model->save(false)) {
                    Yii::$app->session->setFlash('success', "Youth Daily Activities updated successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to add Youth Daily Activity Details");
                    return $this->goBack();
                }
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing YouthDailyActivity model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */



    /**
     * Deletes an existing YouthDailyActivity model.
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
     * Finds the YouthDailyActivity model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return YouthDailyActivity the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = YouthDailyActivity::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findYlwsLinkAssociationByRefno($id)
    {
        if (($model = YlwsLinkAssociation::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findIntakeByID($id)
    {
        if (($model = Intake::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
