<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\Beneficiary;
use yii\filters\VerbFilter;
use app\models\CsdAttendance;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use app\models\BeneficiaryContact;
use app\models\BeneficiaryService;
use yii\web\NotFoundHttpException;
use app\models\CsdAttendanceSearch;

/**
 * CsdAttendanceController implements the CRUD actions for CsdAttendance model.
 */
class CsdAttendanceController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),

            [
                'access' => [
                    'class' => AccessControl::class,
                    'rules' => [
                        [
                            'allow' => true,
                            'roles' => ['@'],
                        ],
                    ],
                ],

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
     * Lists all CsdAttendance models.
     *
     * @return string
     */
    public function actionIndex()
    {

        $searchModel = new CsdAttendanceSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }


    public function actionShow($token)
    {

        $b = $this->loadBeneficiary($token);
        $attendance = new CsdAttendance();
        $bserviceModel = new BeneficiaryService();
        $attendance->beneficiary_id = $b->id;
        $attendance->reg_date = date('Y-m-d');
        $bserviceQuery = BeneficiaryService::find()->where(['status' => 1, 'beneficiary_id' => $b->id])->orderBy('created_at desc');
        $bservice = new ActiveDataProvider([
            'query' => $bserviceQuery,
        ]);
        $searchModel = new CsdAttendanceSearch();
        $dataProvider = $searchModel->searchAttendance($this->request->queryParams, $b->id);

        if ($attendance->load($this->request->post())) {
            $selectedValues = $attendance->serviceList;
            $attendance->csd_regid = $b->id;
            if ($attendance->save()) {
                foreach ($selectedValues as $value) {
                    $bserviceModel = new BeneficiaryService();
                    $bserviceModel->beneficiary_id = $b->id;
                    $bserviceModel->service_id = $value;
                    $bserviceModel->attendance_id = $attendance->id;
                    $bserviceModel->reg_date = $attendance->reg_date;
                    $bserviceModel->staff_id = Yii::$app->user->id;
                    if (!$bserviceModel->save()) {
                        $this->findModel($attendance->id)->delete();
                        Yii::$app->session->setFlash('warning', "Item not saved");
                        //return $this->redirect(['update', 'rid' => $roleId]);
                        return $this->render('show_attendance', [
                            'searchModel' => $searchModel,
                            'dataProvider' => $dataProvider,
                            'b' => $b,
                            'attendance' => $attendance,
                            'bservice' => $bservice
                        ]);
                    }
                }

                // update beneficiary and say is ready for intake
                if ($attendance->intake_required == 1) {
                    $b->isintake = 1;
                    $b->save(false);
                }
                Yii::$app->session->setFlash('success', "Attendance recorded successfully ");
                return $this->refresh();
            } else {
                foreach ($attendance->errors as $err) {
                    Yii::$app->session->setFlash('warning', "Attendance not saved ," . ($err[0]));
                }
                return $this->render('show_attendance', [
                    'searchModel' => $searchModel,
                    'dataProvider' => $dataProvider,
                    'b' => $b,
                    'attendance' => $attendance,
                    'bservice' => $bservice
                ]);
            }
        }

        return $this->render('show_attendance', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'b' => $b,
            'attendance' => $attendance,
            'bservice' => $bservice
        ]);
    }

    /**
     * Displays a single CsdAttendance model.
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
     * Creates a new CsdAttendance model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new CsdAttendance();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing CsdAttendance model.
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
     * Deletes an existing CsdAttendance model.
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
     * Finds the CsdAttendance model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CsdAttendance the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CsdAttendance::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }


    protected function loadBeneficiary($id)
    {
        if (($model = Beneficiary::findOne(['bkey' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}