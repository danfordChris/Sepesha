<?php

namespace app\controllers;

use app\models\Beneficiary;
use app\models\BeneficiaryContact;
use app\models\BeneficiaryContactSearch;
use app\models\BeneficiarySearch;
use app\models\BeneficiaryService;
use app\models\Intake;
use app\models\User;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * BeneficiaryController implements the CRUD actions for Beneficiary model.
 */
class BeneficiaryController extends Controller
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
     * Lists all Beneficiary models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $model = new Beneficiary();
        $servicemodel = new BeneficiaryService();
        $servicemodel->reg_date = date('Y-m-d');
        $searchModel = new BeneficiarySearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'servicemodel' => $servicemodel,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionYlws()
    {
        $model = new Beneficiary();
        $searchModel = new BeneficiarySearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['programid' => '1']);
        return $this->render('ylws', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }


    public function actionClws()
    {
        $model = new Beneficiary();
        $searchModel = new BeneficiarySearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['programid' => '3']);
        return $this->render('clws', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }
    public function actionCsd()
    {
        $model = new Beneficiary();

        $searchModel = new BeneficiarySearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['programid' => '5']);
        return $this->render('csd', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }
    /**
     * Displays a single Beneficiary model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($token)
    {
        return $this->render('view', [
            'model' => $this->findKey($token),
        ]);
    }

    /**
     * Creates a new Beneficiary model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Beneficiary();
        $intakemodel = new Intake();
        $model->country_id = 1;
        $model->isintake = 1;


        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $intakemodel->load($this->request->post())) {
                if (!$model->reason == "") {
                    $model->reason = implode(",", $model->reason);
                }
                if (!$model->health_status == "") {
                    $model->health_status = implode(",", $model->health_status);
                }

                $profilePic = UploadedFile::getInstance($model, 'photo');

                if ($profilePic) {
                    $model->photo = time() . 'beneficiaryphoto.' . $profilePic->extension;
                    $pic = $model->photo;
                }
                $model->bkey = $model->getBeneficiaryNumber();

                if ($model->save()) {
                    $model->regno = $model->getRegistrationNumber();
                    $model->save(false);
                    if ($profilePic) {
                        $profilePic->saveAs('uploads/beneficiary/photo/' . $pic);
                    }


                    $intakemodel->beneficiary_id = $model->id;
                    $intakemodel->refno = Yii::$app->security->generateRandomString(15);
                    $intakemodel->save();

                    // if ($model->isintake) {
                    //     Yii::$app->session->setFlash('success', "Beneficiary added proceed with intake");
                    //     return $this->redirect(['/intake/create-intake', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
                    // }

                    Yii::$app->session->setFlash('success', "Beneficiary added successfully");
                    return $this->redirect(['index']);
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to add beneficiary");
                    return $this->render('create', [
                        'model' => $model,
                        'intakemodel' => $intakemodel


                    ]);
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
            'intakemodel' => $intakemodel


        ]);
    }

    public function actionCreateQuick()
    {
        $model = new Beneficiary();
        $model->country_id = 1;


        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {

                $model->bkey = $model->getBeneficiaryNumber();

                if ($model->save()) {
                    $model->regno = $model->getRegistrationNumber();
                    $model->save(false);
                    Yii::$app->session->setFlash('success', "Child added successfully");
                    return $this->redirect(['csd']);
                }
            }
        } else {
            $model->loadDefaultValues();
            Yii::$app->session->setFlash('danger', "Failed to add child");
        }

        return $this->render('create-quick', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Beneficiary model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($token, $intake)
    {

        $model = $this->findKey($token);
        $intakemodel = $this->findIntake($intake);

        $contacts = new BeneficiaryContact();
        $searchContacts = new BeneficiaryContactSearch();
        $contactProvider = $searchContacts->searchBeneficiary($this->request->queryParams, $model->id);

        $existing = $model->photo;

        if ($model->phone) {
            $model->phone = substr($model->phone, 3);
        }

        if ($model->reason) {
            $model->reason = explode(",", $model->reason);
        }

        if ($model->health_status) {
            $model->health_status = explode(",", $model->health_status);
        }

        if ($this->request->isPost && $model->load($this->request->post()) && $intakemodel->load($this->request->post())) {
            $profilePic = UploadedFile::getInstance($model, 'photo');

            if (!$model->reason == "") {
                $model->reason = implode(",", $model->reason);
            }

            if (!$model->health_status == "") {
                $model->health_status = implode(",", $model->health_status);
            }

            if ($profilePic) {
                $model->photo = time() . 'beneficiaryphoto.' . $profilePic->extension;
                $pic = $model->photo;
            } else {
                $model->photo = $existing;
            }
            if ($model->save(false)) {
                if ($profilePic) {
                    $profilePic->saveAs('uploads/beneficiary/photo/' . $pic);
                }
                Yii::$app->session->setFlash('success', "Beneficiary updated successfully");
                return $this->redirect(['index']);
            } else {
                Yii::$app->session->setFlash('danger', "Failed to update beneficiary");
                return $this->redirect(['index']);
            }
        }

        return $this->render('update', [
            'model' => $model,
            'intakemodel' => $intakemodel,
            'beneficiary' => $model->id,
            'contacts' => $contacts,
            'contactProvider' => $contactProvider,
        ]);
    }

    public function actionUpdateNointake($token)
    {

        $model = $this->findKey($token);

        $contacts = new BeneficiaryContact();
        $searchContacts = new BeneficiaryContactSearch();
        $contactProvider = $searchContacts->searchBeneficiary($this->request->queryParams, $model->id);

        $existing = $model->photo;

        if ($model->phone) {
            $model->phone = substr($model->phone, 3);
        }

        if ($model->reason) {
            $model->reason = explode(",", $model->reason);
        }

        if ($model->health_status) {
            $model->health_status = explode(",", $model->health_status);
        }

        if ($this->request->isPost && $model->load($this->request->post())) {
            $uploadedPhoto = UploadedFile::getInstance($model, 'photo');

            if (!$model->reason == "") {
                $model->reason = implode(",", $model->reason);
            }

            if (!$model->health_status == "") {
                $model->health_status = implode(",", $model->health_status);
            }

            if ($uploadedPhoto) {
                $model->photo = time() . 'beneficiaryphoto.' . $uploadedPhoto->extension;
                $pic = $model->photo;
            } else {
                $model->photo = $existing;
            }
            if ($model->save()) {
                if ($uploadedPhoto) {
                    $uploadedPhoto->saveAs('uploads/beneficiary/photo/' . $pic);
                }
                Yii::$app->session->setFlash('success', "Beneficiary updated successfully");
                return $this->redirect(['index']);
            } else {
                Yii::$app->session->setFlash('danger', "Failed to update beneficiary");
                return $this->redirect(['index']);
            }
        }

        return $this->render('update-nointake', [
            'model' => $model,
            'beneficiary' => $model->id,
            'contacts' => $contacts,
            'contactProvider' => $contactProvider,
        ]);
    }

    public function actionUpdateCsd($token)
    {

        $model = $this->findKey($token);


        if ($this->request->isPost && $model->load($this->request->post())) {

            if ($model->save()) {

                Yii::$app->session->setFlash('success', "Beneficiary updated successfully");
                return $this->redirect(['csd']);
            } else {
                Yii::$app->session->setFlash('danger', "Failed to update beneficiary");
                return $this->redirect(['csd']);
            }
        }

        return $this->render('update-csd', [
            'model' => $model
        ]);
    }


    /**
     * Deletes an existing Beneficiary model.
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
     * Finds the Beneficiary model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Beneficiary the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Beneficiary::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findKey($key)
    {
        if (($model = Beneficiary::findOne(['bkey' => $key])) !== null) {
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
}
