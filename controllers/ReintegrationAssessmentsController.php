<?php

namespace app\controllers;

use app\models\CustomHelper;
use Yii;
use app\models\User;
use app\models\Intake;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\WorkflowTools;
use app\models\Reintegrations;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use app\models\IntakeWorkflowTool;
use yii\web\NotFoundHttpException;
use app\models\ReintegrationAssessment;
use app\models\ReintegrationAssesmentNeed;
use app\models\ReintegrationAssessmentItem;
use app\models\ReintegrationAssessmentSearch;
use app\models\ReintegrationSubdomain;

/**
 * ReintegrationAssessmentsController implements the CRUD actions for ReintegrationAssessment model.
 */
class ReintegrationAssessmentsController extends Controller
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
     * Lists all ReintegrationAssessment models.
     *
     * @return string
     */




    public function actionIndex($tool, $ref)
    {

        $modelReintegrations = $this->findReintegrationsByRefno($ref);
        $intakeModel = $this->findIntakeByID($modelReintegrations->intake_id);
        $_SESSION['tool_data'] = $tool;
        // $_SESSION['reintegration_ref'] = $ref;

        $model = new ReintegrationAssessment();
        $model->intake_id = $intakeModel->id;
        $model->reg_date = date('Y-m-d');
        $model->beneid = $model->intake->beneficiary->id;

        $searchModel = new ReintegrationAssessmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $intakeModel->id]);

        $model->refno = Yii::$app->security->generateRandomString(15);

        if ($model->load($this->request->post()) && $model->save()) {
            IntakeWorkflowTool::insertData($tool, $intakeModel->id, $intakeModel->wid, $intakeModel->stid, $model::tableName(), get_class($model), $model->primaryKey, $intakeModel->refno);

            $subdomains = ReintegrationSubdomain::find()->all();
            foreach ($subdomains as $subdomain) {
                $assessmentDomainItem = new ReintegrationAssessmentItem();
                $assessmentDomainItem->assessment_id = $model->id;
                $assessmentDomainItem->domain_id = $subdomain->domain_id;
                $assessmentDomainItem->subdomain_id = $subdomain->id;
                $assessmentDomainItem->name = $subdomain->name;
                $assessmentDomainItem->redflag = $subdomain->redflag;
                $assessmentDomainItem->intake_id = $model->intake_id;
                $assessmentDomainItem->beneid = $model->intake->beneficiary->id;
                $assessmentDomainItem->save(false);
            }
            Yii::$app->session->setFlash('success', "Reintegration successful created !.");
            return $this->redirect(['update', 'ref' => $model->refno]);
            // return $this->refresh();
        }

        $toolModel = $this->findWorkflowTool($tool);
        $wid =  $toolModel->wid;
        $stid =  $toolModel->stid;


        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'intake' => $modelReintegrations,
            'workflow' => $wid,
            'stage' => $stid,

        ]);
    }

    /**
     * Displays a single ReintegrationAssessment model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($ref)
    {
        return $this->render('view', [
            'model' => $this->findReintegrationsByRefno($ref),
        ]);
    }



    /**
     * Creates a new ReintegrationAssessment model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new ReintegrationAssessment();
        $model->refno = Yii::$app->security->generateRandomString(15);

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['update', 'ref' => $model->refno]);
            }
        } else {

            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
            // 'intake' => $intake
        ]);
    }





    /**
     * Updates an existing ReintegrationAssessment model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($ref)
    {
        $model = $this->findReintegrationsAssessmentsByRefno($ref);
        $modelItem = new ReintegrationAssessmentItem();
        $modelNeeds = new ReintegrationAssesmentNeed();

        // if ($modelItem->load($this->request->post())) {
        //     $modelItem->assessment_id = $model->id;
        //     $modelItem->domain_id = $modelItem->sub->domain_id;
        //     $modelItem->name = $modelItem->sub->name;
        //     $modelItem->redflag = $modelItem->sub->redflag;
        //     if ($modelItem->save())
        //         return $this->refresh();
        // }

        if ($model->load($this->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Reintegration successful updated !.");
            return $this->redirect(Yii::$app->request->url);
        }


        if ($modelNeeds->load($this->request->post())) {
            $modelNeeds->rentegration_id = $model->id;
            $modelNeeds->intake_id = $model->intake_id;
            $modelNeeds->beneid = $model->intake->beneficiary_id;
            if ($modelNeeds->save())
                Yii::$app->session->setFlash('success', "Assessment need saved successfully.");
            return $this->redirect(Yii::$app->request->url);
        }


        $subdomains = ReintegrationAssessmentItem::find()
            ->where(['assessment_id' => $model->id])->orderBy('id asc')
            ->all();

        if (Yii::$app->request->post()) {
            $postData = Yii::$app->request->post('ReintegrationAssessmentItem', []);

            foreach ($subdomains as $index => $subdomain) {
                if (isset($postData[$index])) {
                    $subdomain->attention = $postData[$index]['attention'];
                    $subdomain->comment = $postData[$index]['comment'];
                    $subdomain->save(false);
                }
            }
            Yii::$app->session->setFlash('success', "Assessment Items saved successfully.");
            return $this->redirect(Yii::$app->request->url);
        }






        $dataProviderItem = new ActiveDataProvider([
            'query' => ReintegrationAssessmentItem::find()->where(['assessment_id' => $model->id]),
        ]);

        $dataProviderNeeds = new ActiveDataProvider([
            'query' => ReintegrationAssesmentNeed::find()->where(['rentegration_id' => $model->id]),
        ]);
        return $this->render('update', [
            'model' => $model,
            'dataProviderItem' => $dataProviderItem,
            'dataProviderNeeds' => $dataProviderNeeds,
            'modelItem' => $modelItem,
            'modelNeeds' => $modelNeeds,
            'subdomains' => $subdomains

        ]);
    }


    /**
     * Deletes an existing ReintegrationAssessment model.
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
     * Finds the ReintegrationAssessment model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return ReintegrationAssessment the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = ReintegrationAssessment::findOne(['id' => $id])) !== null) {
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


    protected function findReintegrationsByRefno($ref)
    {
        if (($model = Reintegrations::findOne(['refno' => $ref])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findReintegrationsAssessmentsByRefno($ref)
    {
        if (($model = ReintegrationAssessment::findOne(['refno' => $ref])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }



    protected function findWorkflowTool($id)
    {
        if (($model = WorkflowTools::findOne(['id' => $id])) !== null) {
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
