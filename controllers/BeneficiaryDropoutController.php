<?php

namespace app\controllers;

use app\models\Beneficiary;
use app\models\BeneficiaryDropout;
use app\models\BeneficiaryDropoutSearch;
use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\User;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * BeneficiaryDropoutController implements the CRUD actions for BeneficiaryDropout model.
 */
class BeneficiaryDropoutController extends Controller
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
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('case_worker');
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
     * Lists all BeneficiaryDropout models.
     *
     * @return string
     */
    public function actionIndex()
    {

        $model = new BeneficiaryDropout();

        $searchModel = new BeneficiaryDropoutSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single BeneficiaryDropout model.
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
     * Creates a new BeneficiaryDropout model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate($ref, $workflow)
    {
        $number = Yii::$app->getSecurity()->validateData($workflow, 'gmtdev');


        $_SESSION['workflow'] = $number;
        $_SESSION['ref'] = $ref;

        $intakeModel = $this->findIntake($ref);
        $model = new BeneficiaryDropout();
        $model->intake_id = $intakeModel->id;
        $model->wid = $number;
        $model->beneid = $intakeModel->beneficiary_id;

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                Yii::$app->user->setReturnUrl(['beneficiary-dropout/index']);
                if ($model->save()) {

                    $intakeModel->is_dropout = 1;
                    $intakeModel->save(false);

                    Yii::$app->session->setFlash('success', "Beneficiary Droped out successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to Drop out Beneficiary");
                    return $this->goBack();
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
            'intakes' => $intakeModel
        ]);
    }

    /**
     * Updates an existing BeneficiaryDropout model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');


        $model = $this->findModel($number);

        $model->intake_id = $model->intake_id;
        $model->wid = $model->wid;
        $model->beneid = $model->beneid;

        if ($this->request->isPost && $model->load($this->request->post())) {
            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Dropout Details updated successfully !");
                return $this->redirect(['index']);
            } else {
                Yii::$app->session->setFlash('danger', "Failed to Update Details!");
                return $this->redirect(['update', 'rca' => Yii::$app->getSecurity()->hashData($number, 'gmtdev')]);
            }
        }


        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing BeneficiaryDropout model.
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
     * Finds the BeneficiaryDropout model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return BeneficiaryDropout the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = BeneficiaryDropout::findOne(['id' => $id])) !== null) {
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
}
