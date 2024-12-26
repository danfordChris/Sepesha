<?php

namespace app\controllers;

use app\models\Beneficiary;
use app\models\CarePlan;
use app\models\CarePlanTargetGoal;
use app\models\CarePlanTargetGoalSearch;
use app\models\Intake;
use app\models\User;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * CarePlanTargetGoalController implements the CRUD actions for CarePlanTargetGoal model.
 */
class CarePlanTargetGoalController extends Controller
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
                        'actions' => ['index', 'create', 'view', 'add-goal'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('create_care_plan_target_goal');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_care_plan_target_goal');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_care_plan_target_goal');
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
     * Lists all CarePlanTargetGoal models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new CarePlanTargetGoalSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionIndexTarget($rca)
    {
        $searchModel = new CarePlanTargetGoalSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        if (Yii::$app->request->isAjax) {
            return $this->renderAjax('index-target', [
                'searchModel' => $searchModel,
                'dataProvider' => $dataProvider,
            ]);
        } else {
            return $this->render('index-target', [
                'searchModel' => $searchModel,
                'dataProvider' => $dataProvider,
            ]);
        }
    }

    /**
     * Displays a single CarePlanTargetGoal model.
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
     * Creates a new CarePlanTargetGoal model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new CarePlanTargetGoal();

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                Yii::$app->user->setReturnUrl(['/care-plan-target/index-careplan', 'careplan' => Yii::$app->getSecurity()->hashData($model->careplantarget->carePlan->id, 'gmtdev')]);

                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Target Area Goal added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to add Target Area Goal");
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
     * Updates an existing CarePlanTargetGoal model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);

        $this->layout = "intake";
        $intakeModel = $this->findIntakeByID($this->findCareplan($model->careplantarget->carePlan->id));
        $intakeId = $intakeModel->refno;
        $beneficiary = $this->findBeneficiary($intakeModel->beneficiary_id);
        $this->view->params['intakeRefno'] = $intakeId;
        $this->view->params['beneficiaryName'] = $beneficiary->getFullName();
        $this->view->params['beneficiaryPhoto'] = $beneficiary->photo;

        if ($this->request->isPost && $model->load($this->request->post())) {
            Yii::$app->user->setReturnUrl(['/care-plan-target/index-careplan', 'careplan' => Yii::$app->getSecurity()->hashData($model->careplantarget->carePlan->id, 'gmtdev')]);

            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Target Area Goal updated successfully");
                return $this->goBack();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to update Target Area Goal");
                return $this->goBack();
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing CarePlanTargetGoal model.
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
     * Finds the CarePlanTargetGoal model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CarePlanTargetGoal the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CarePlanTargetGoal::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }


    public function actionAddGoal()
    {
        if (Yii::$app->request->isAjax && Yii::$app->request->isPost) {
            $model = new CarePlanTargetGoal();

            if ($model->load(Yii::$app->request->post())) {
                if ($model->save()) {
                    return json_encode(['status' => 'success']);
                } else {
                    return json_encode(['status' => 'error', 'errors' => $model->errors]);
                }
            }

            return json_encode(['status' => 'error', 'errors' => $model->errors]);
        }

        throw new \yii\web\BadRequestHttpException('Invalid request.');
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

    protected function findCareplan($id)
    {
        if (($model = CarePlan::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
