<?php

namespace app\controllers;

use Yii;
use app\models\User;
use app\models\Intake;
use yii\web\Controller;
use app\models\CarePlan;
use app\models\GoalAction;
use app\models\Beneficiary;
use yii\filters\VerbFilter;
use app\models\CarePlanTarget;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use app\models\CarePlanTargetGoal;
use yii\web\NotFoundHttpException;
use app\models\CarePlanTargetSearch;
use app\models\CarePlanTargetGoalReview;
use app\models\GoalActionReview;

/**
 * CarePlanTargetController implements the CRUD actions for CarePlanTarget model.
 */
class CarePlanTargetController extends Controller
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
                            return  User::auth('create_care_plan_target');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_care_plan_target');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_care_plan_target');
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
     * Lists all CarePlanTarget models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new CarePlanTargetSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionIndexCareplan($careplan)
    {
        $number =  Yii::$app->getSecurity()->validateData($careplan, 'gmtdev');
        $model = new CarePlanTarget();
        $model->careplanid = $number;
        $searchModel = new CarePlanTargetSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        $goals = new CarePlanTargetGoal();
        $review = new CarePlanTargetGoalReview();

        $careplans = $this->findCareplan($number);

        $modelIntake = $this->findIntakeByID($careplans->intake_id);
        $intakeId = $modelIntake->refno;
        $beneficiary = $this->findBeneficiary($modelIntake->beneficiary_id);
        $this->view->params['intakeRefno'] = $intakeId;
        $this->view->params['beneficiaryName'] = $beneficiary->getFullName();
        $this->view->params['beneficiaryPhoto'] = $beneficiary->photo;

        return $this->render('index-careplan', [
            'plans' => $careplans,
            'target' => $model,
            'goals' => $goals,
            'review' => $review,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single CarePlanTarget model.
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
     * Creates a new CarePlanTarget model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new CarePlanTarget();

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                Yii::$app->user->setReturnUrl(['care-plan-target/index-careplan', 'careplan' => Yii::$app->getSecurity()->hashData($model->careplanid, 'gmtdev')]);
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Target Area added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to add Target Area");
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

    public function actionManage($ref)
    {

        $model = new CarePlanTarget();
        $careplan = $this->findCareplanByRef($ref);
        $model->careplanid = $careplan->id;

        $modelGoal = new CarePlanTargetGoal();
        $modelGoal->goal_date = date('Y-m-d');

        $modelGoalAction = new GoalAction();
        $modelGoalAction->action_date = date('Y-m-d');
        $modelGoalAction->careplan_id = $careplan->id;
        $modelGoalAction->intake_id = $careplan->intake_id;


        $modelActionReview = new GoalActionReview();
        $modelActionReview->review_date = date('Y-m-d');
        $modelActionReview->careplan_id = $careplan->id;
        $modelActionReview->intake_id = $careplan->intake_id;

        // $queryReview = GoalAction::find()
        //     ->andWhere(['careplan_id' => $careplan->id])
        //     ->andWhere(['IS NOT', 'review_id', null]);

        // $dataProviderReview = new ActiveDataProvider([
        //     'query' => $queryReview,
        // ]);

        $dataProviderReview = GoalAction::find()->where(['careplan_id' => $careplan->id])->andWhere(['IS NOT', 'review_id', null])->all();

        if ($model->load($this->request->post())) {
            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Target Area added successfully");
                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to add Target Area");
                return $this->refresh();
            }
        }


        return $this->render('manage', [
            'model' => $model,
            'careplan' => $careplan,
            'modelGoal' => $modelGoal,
            'modelGoalAction' => $modelGoalAction,
            'dataProviderReview' => $dataProviderReview,
            'modelActionReview' => $modelActionReview

        ]);
    }

    public function actionYouthManage($ref)
    {

        $model = new CarePlanTarget();
        $careplan = $this->findCareplanByRef($ref);
        $model->careplanid = $careplan->id;

        $modelGoal = new CarePlanTargetGoal();
        $modelGoal->goal_date = date('Y-m-d');

        $modelGoalAction = new GoalAction();
        $modelGoalAction->action_date = date('Y-m-d');
        $modelGoalAction->careplan_id = $careplan->id;
        $modelGoalAction->intake_id = $careplan->intake_id;


        $modelActionReview = new GoalActionReview();
        $modelActionReview->review_date = date('Y-m-d');
        $modelActionReview->careplan_id = $careplan->id;
        $modelActionReview->intake_id = $careplan->intake_id;

        // $queryReview = GoalAction::find()
        //     ->andWhere(['careplan_id' => $careplan->id])
        //     ->andWhere(['IS NOT', 'review_id', null]);

        // $dataProviderReview = new ActiveDataProvider([
        //     'query' => $queryReview,
        // ]);

        $dataProviderReview = GoalAction::find()->where(['careplan_id' => $careplan->id])->andWhere(['IS NOT', 'review_id', null])->all();

        if ($model->load($this->request->post())) {
            Yii::$app->user->setReturnUrl(['care-plan-target/youth-manage', 'ref' => $ref]);
            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Target Area added successfully");
                return $this->goBack();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to add Target Area");
                return $this->goBack();
            }
        }


        return $this->render('youth-manage', [
            'model' => $model,
            'careplan' => $careplan,
            'modelGoal' => $modelGoal,
            'modelGoalAction' => $modelGoalAction,
            'dataProviderReview' => $dataProviderReview,
            'modelActionReview' => $modelActionReview

        ]);
    }


    public function actionAddGoal()
    {

        if (Yii::$app->request->isAjax) {
            $model = new CarePlanTargetGoal();
            Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

            $id = Yii::$app->request->post('id');
            $target = $this->findModel($id);
            $model->careplantargetid = $target->id;
            $model->goal_date = date('Y-m-d');

            if ($model->load(Yii::$app->request->post())) {
                if ($model->save()) {
                    return ['success' => true];
                } else {
                    foreach ($model->errors as $error) {
                        return ['success' => false, 'errors' => $error['message']];
                    }
                }
            }

            return ['success' => false, 'errors' => 'wewe'];
        }

        return ['success' => false, 'errors' => 'invalid request'];
    }



    public function actionDeletegoal()
    {
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

        if (Yii::$app->request->isAjax) {
            $id = Yii::$app->request->post('id');
            $model = CarePlanTargetGoal::findOne($id);
            if ($model) {
                $model->delete();
                return ['success' => true];
            }
        }
        return ['success' => false];
    }



    public function actionDeletegoalaction()
    {
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        if (Yii::$app->request->isAjax) {
            $id = Yii::$app->request->post('id');
            $model = GoalAction::findOne($id);
            if ($model) {
                $model->delete();
                return ['success' => true];
            }
        }
        return ['success' => false];
    }


    public function actionAddAction()
    {

        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

        if (Yii::$app->request->isAjax) {
            $model = new GoalAction();
            $id = Yii::$app->request->post('id');
            $goal = $this->findCareplanGoal($id);
            $model->goal_id = $goal->id;
            $model->action_date = date('Y-m-d');
            if ($model->load(Yii::$app->request->post())) {
                if ($model->save()) {
                    return ['success' => true];
                } else {
                    foreach ($model->errors as $error) {
                        return ['success' => false, 'errors' => $error['message']];
                    }
                }
            }

            return ['success' => false, 'errors' => 'wewe'];
        }

        return ['success' => false, 'errors' => 'invalid request'];
    }



    public function actionAddReview()
    {

        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        if (Yii::$app->request->isAjax) {
            $modelActionReview = new GoalActionReview();
            $id = Yii::$app->request->post('id');
            $action = $this->findGoalActionModel($id);

            $modelActionReview->goal_id = $action->goal_id;
            $modelActionReview->review_id = $action->id;
            $modelActionReview->review_date = date('Y-m-d');
            if ($modelActionReview->load(Yii::$app->request->post())) {
                if ($modelActionReview->save()) {
                    return ['success' => true];
                } else {
                    foreach ($modelActionReview->errors as $error) {
                        return ['success' => false, 'errors' => $error['message']];
                    }
                }
            }

            return ['success' => false, 'errors' => 'wewe'];
        }

        return ['success' => false, 'errors' => 'invalid request'];
    }



    protected function findGaolModel($id)
    {
        if (($model = CarePlanTargetGoal::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }



    /**
     * Updates an existing CarePlanTarget model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing CarePlanTarget model.
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
     * Finds the CarePlanTarget model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CarePlanTarget the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CarePlanTarget::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }


    protected function findGoalActionModel($id)
    {
        if (($model = GoalAction::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findCareplanGoal($id)
    {
        if (($model = CarePlanTargetGoal::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findCareplanByRef($id)
    {
        if (($model = CarePlan::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findCareplan($id)
    {
        if (($model = CarePlan::findOne(['id' => $id])) !== null) {
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
}
