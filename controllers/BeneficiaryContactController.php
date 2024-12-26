<?php

namespace app\controllers;

use app\models\BeneficiaryContact;
use app\models\BeneficiaryContactSearch;
use app\models\Customer;
use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\Reintegrations;
use app\models\User;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * BeneficiaryContactController implements the CRUD actions for BeneficiaryContact model.
 */
class BeneficiaryContactController extends Controller
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
    protected function Auth()
    {

        if (Yii::$app->user->isGuest) {
            return  $this->redirect(['/site/login']);
        } else {

            $inid = \Yii::$app->user->identity->id;
            return $inid;
        }
    }

    /**
     * Lists all BeneficiaryContact models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $model = new BeneficiaryContact();
        $searchModel = new BeneficiaryContactSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionShowFamily($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findFamily($number);
        $searchModel = new BeneficiaryContactSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['beneficiary_id' => $model->beneficiary_id]);

        return $this->render('show-family', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionManage($tool, $ref)
    {

        $reintegrationModel = $this->findReintegrations($ref);
        $intakeModel = $this->findIntakeByID($reintegrationModel->intake_id);

        $model = new BeneficiaryContact();
        $familymember = new Customer();

        $model->beneficiary_id = $intakeModel->beneficiary_id;

        $_SESSION['tool_data'] = $tool;
        $_SESSION['reintegration_ref'] = $ref;

        $searchModel = new BeneficiaryContactSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['beneficiary_id' => $intakeModel->beneficiary_id]);

        return $this->render('manage', [
            'model' => $model,
            'familymember' => $familymember,
            'dataProvider' => $dataProvider,
            'intake' =>  $reintegrationModel,

        ]);
    }

    /**
     * Displays a single BeneficiaryContact model.
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

    public function actionViewBeneficiary($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        return $this->render('view-beneficiary', [
            'model' => $this->findModel($number),
        ]);
    }

    /**
     * Creates a new BeneficiaryContact model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new BeneficiaryContact();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['index']);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionCreateFamily()
    {
        $model = new BeneficiaryContact();
        $familymember = new Customer();

        $toolitem = $_SESSION['tool_data'];
        $ref = $_SESSION['reintegration_ref'];

        $reintegrationModel = $this->findReintegrations($ref);
        $intakeModel = $this->findIntakeByID($reintegrationModel->intake_id);

        $model->refno = Yii::$app->security->generateRandomString(20);
        $refno = $model->refno;
        $wid =  $reintegrationModel->wid;
        $stid =  $reintegrationModel->stid;


        if ($this->request->isPost) {
            if ($familymember->load($this->request->post())) {

                Yii::$app->user->setReturnUrl(['beneficiary-contact/manage', 'tool' => $toolitem, 'ref' => $ref]);
                IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey(), $refno);

                if ($familymember->save()) {
                    $model->contact_id = $familymember->id;
                    $model->beneficiary_id = $intakeModel->beneficiary_id;
                    $model->relationships = $familymember->type;
                    $model->save();
                    Yii::$app->session->setFlash('success', "Family Member added successfully");
                    return $this->goBack();
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to Family Member");
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

    public function actionCreateBeneficiary()
    {
        $model = new BeneficiaryContact();

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {

                if ($model->save(false)) {

                    return json_encode(['status' => 'success', 'message' => 'Contact was saved successfully!']);
                }

                // return $this->redirect(['..\beneficiary\index']);

            } else {
                return json_encode(['status' => 'danger', 'message' => 'failed: ']);
            }
        }
        // }
        //  else {
        //     $model->loadDefaultValues();
        // }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionAddBeneficiary()
    {
        $model = new BeneficiaryContact();

        if ($model->load(Yii::$app->request->post())) {
            if ($model->save()) {

                return json_encode(['status' => 'success', 'message' => 'Contact was saved successfully!']);
            } else {
                return json_encode(['status' => 'danger', 'message' => 'failed: ']);
            }
        }

        return json_encode(['status' => 'danger', 'message' => 'no post data: ']);
    }

    /**
     * Updates an existing BeneficiaryContact model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdateBeneficiary($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);

        if ($this->request->isPost && $model->load($this->request->post())) {
            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Beneficiary updated successfully");
                return $this->redirect(['index']);
            }
        }

        return $this->render('update-beneficiary', [
            'model' => $model,
        ]);
    }

    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        }


        return $this->render('update-general', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing BeneficiaryContact model.
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
     * Finds the BeneficiaryContact model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return BeneficiaryContact the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = BeneficiaryContact::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findFamily($id)
    {
        if (($model = BeneficiaryContact::findOne(['beneficiary_id' => $id])) !== null) {
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
