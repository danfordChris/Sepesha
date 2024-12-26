<?php

namespace app\controllers;

use app\models\Attachment;
use Yii;
use app\models\Intake;
use yii\web\Controller;
use app\models\Beneficiary;
use app\models\BeneficiarySearch;
use yii\filters\VerbFilter;
use app\models\BeneficiaryService;
use app\models\IntakeWorkflowTool;
use yii\web\NotFoundHttpException;
use app\models\BeneficiaryServiceSearch;
use app\models\CustomHelper;
use app\models\Reintegrations;
use app\models\User;
use app\models\YlwsLinkAssociation;
use yii\filters\AccessControl;
use yii\web\UploadedFile;

/**
 * BeneficiaryServicesController implements the CRUD actions for BeneficiaryService model.
 */
class BeneficiaryServicesController extends Controller
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
     * Lists all BeneficiaryService models.
     *
     * @return string
     */

    public function actionIndex($tool, $ref)
    {
        $searchModel = new BeneficiaryServiceSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $intake = $this->findIntake($ref);
        $dataProvider->query->andWhere(['intakeid' => $intake->id]);


        $_SESSION['tool_date'] = $tool;
        $_SESSION['intake_ref'] = $ref;

        $model = new BeneficiaryService();
        $model->reg_date = date('Y-m-d');
        if ($model->load($this->request->post())) {
            $model->intakeid = $intake->id;
            $model->beneficiary_id = $intake->beneficiary_id;
            $model->staff_id = Yii::$app->user->identity->id;
            IntakeWorkflowTool::insertData($tool, $intake->id, $intake->wid, $intake->stid, $model::tableName(), get_class($model), $model->primaryKey, $intake->refno);
            if ($model->save()) {
                Yii::$app->session->setFlash('success', 'Beneficiary service added successfully.');
                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('danger', 'Failed to add beneficiary service.');
            }
        }

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model,
            'intake' => $intake
        ]);
    }

    public function actionBeneficiarySpecific($beneficiary)
    {
        $number = Yii::$app->getSecurity()->validateData($beneficiary, 'gmtdev');

        $model = new BeneficiaryService();
        $model->beneficiary_id = $number;
        $model->reg_date = date('Y-m-d');

        $searchModel = new BeneficiaryServiceSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['beneficiary_id' => $number])->orderBy("created_at DESC");

        return $this->render('beneficiary-specific', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionManage($tool, $ref)
    {
        $searchModel = new BeneficiaryServiceSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $intake = $this->findReintegrations($ref);
        $dataProvider->query->andWhere(['intakeid' => $intake->id]);

        $_SESSION['tool_date'] = $tool;
        $_SESSION['intake_ref'] = $ref;

        $model = new BeneficiaryService();
        $model->reg_date = date('Y-m-d');
        $model->refno = Yii::$app->security->generateRandomString(20);

        if ($model->load($this->request->post())) {
            $model->intakeid = $intake->id;
            $model->beneficiary_id = $intake->benid;
            $model->staff_id = Yii::$app->user->identity->id;
            IntakeWorkflowTool::insertData($tool, $intake->id, $intake->wid, $intake->stid, $model::tableName(), get_class($model), $model->primaryKey, $intake->refno);
            if ($model->save()) {
                Yii::$app->session->setFlash('success', 'Beneficiary service added successfully.');
                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('danger', 'Failed to add beneficiary service.');
            }
        }

        return $this->render('manage', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model,
            'intake' => $intake
        ]);
    }

    public function actionYouthPage($tool, $ref)
    {
        $searchModel = new BeneficiaryServiceSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $intake = $this->findYlwsLinkAssociationByRefno($ref);
        $dataProvider->query->andWhere(['intakeid' => $intake->id]);


        $_SESSION['tool_data'] = $tool;
        $_SESSION['intake_ref'] = $ref;

        $model = new BeneficiaryService();
        $model->reg_date = date('Y-m-d');
        $model->refno = Yii::$app->security->generateRandomString(20);
        if ($model->load($this->request->post())) {
            $model->intakeid = $intake->id;
            $model->beneficiary_id = $intake->beneficiary_id;
            $employeedetails  = CustomHelper::getEmployeeDetails($model->staff_id);
            $model->office_id = $employeedetails->oid ?? '';            // $attachment_file = UploadedFile::getInstance($model, 'attachment');
            IntakeWorkflowTool::insertData($tool, $intake->id, $intake->wid, $intake->stid, $model::tableName(), get_class($model), $model->primaryKey, $intake->refno);

            if ($model->save()) {
                Attachment::populateAttachmentFieldsNoWorkflow($model);

                Yii::$app->session->setFlash('success', 'Beneficiary service added successfully.');
                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('danger', 'Failed to add beneficiary service.');
            }
        }

        return $this->render('youth-page', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model,
            'intake' => $intake
        ]);
    }

    public function actionCreate()
    {
        $model = new BeneficiaryService();
        $model->reg_date = date('Y-m-d');

        if ($model->load($this->request->post())) {
            $model->refno = Yii::$app->security->generateRandomString(20);
            $employeedetails  = CustomHelper::getEmployeeDetails($model->staff_id);
            $model->office_id = $employeedetails->oid ?? '';

            if ($model->save(false)) {
                Attachment::populateAttachmentFieldsNoWorkflow($model);

                Yii::$app->session->setFlash('success', 'Beneficiary service added successfully.');
                return $this->redirect([CustomHelper::getRefererUrl()]);
            } else {
                Yii::$app->session->setFlash('danger', 'Failed to add beneficiary service.');
                return $this->redirect([CustomHelper::getRefererUrl()]);
            }
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionCreateServices()
    {
        $model = new BeneficiaryService();
        $model->reg_date = date('Y-m-d');

        if ($model->load($this->request->post())) {
            $model->refno = Yii::$app->security->generateRandomString(20);

            $employeedetails  = CustomHelper::getEmployeeDetails($model->staff_id);
            $model->office_id = $employeedetails->oid ?? '';

            if ($model->save(false)) {
                Attachment::populateAttachmentFieldsNoWorkflow($model);

                Yii::$app->session->setFlash('success', 'Beneficiary service added successfully.');
                return $this->redirect(['beneficiary-specific', 'beneficiary' => Yii::$app->getSecurity()->hashData($model->beneficiary_id, 'gmtdev')]);
            } else {
                Yii::$app->session->setFlash('danger', 'Failed to add beneficiary service.');
                return $this->redirect(['beneficiary-specific', 'beneficiary' => Yii::$app->getSecurity()->hashData($model->beneficiary_id, 'gmtdev')]);
            }
        }

        return $this->render('create-services', [
            'model' => $model,
        ]);
    }



    /**
     * Displays a single BeneficiaryService model.
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

    public function actionYouthView($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');


        return $this->render('youth-view', [
            'model' => $this->findModel($number),
        ]);
    }

    /**
     * Creates a new BeneficiaryService model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */


    /**
     * Updates an existing BeneficiaryService model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);

        $existing = Attachment::getExistingAttachment($model->refno);

        if ($this->request->isPost && $model->load($this->request->post())) {
            $uploaded =  UploadedFile::getInstance($model, 'attachment');


            if ($model->save()) {

                if (!empty($uploaded)) {
                    if ($existing) {
                        $attachmentmodel = Attachment::getExistingAttachmentModel($model->refno);
                        Attachment::populateAttachmentFieldsNoWorkflowUpdate($model, $attachmentmodel);
                    } else {
                        Attachment::populateAttachmentFieldsNoWorkflowAdd($model);
                    }
                } else {
                    if ($existing) {
                        Attachment::addAttachment($model->refno, $existing);
                    }
                }
                Yii::$app->session->setFlash('success', 'Beneficiary service updated successfully');

                return $this->redirect(['beneficiary-specific', 'beneficiary' => Yii::$app->getSecurity()->hashData($model->beneficiary_id, 'gmtdev')]);
            } else {
                Yii::$app->session->setFlash('danger', 'Failed to update.');

                return $this->redirect(['beneficiary-specific', 'beneficiary' => Yii::$app->getSecurity()->hashData($model->beneficiary_id, 'gmtdev')]);
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    public function actionYouthUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);

        $existing = Attachment::getExistingAttachment($model->refno);

        if ($this->request->isPost && $model->load($this->request->post())) {
            $uploaded =  UploadedFile::getInstance($model, 'attachment');

            if ($model->save()) {

                if (!empty($uploaded)) {
                    if ($existing) {
                        $attachmentmodel = Attachment::getExistingAttachmentModel($model->refno);
                        Attachment::populateAttachmentFieldsNoWorkflowUpdate($model, $attachmentmodel);
                    } else {
                        Attachment::populateAttachmentFieldsNoWorkflow($model);
                    }
                } else {
                    if ($existing) {
                        Attachment::addAttachment($model->refno, $existing);
                    }
                }
                Yii::$app->session->setFlash('success', 'Beneficiary service updated successfully');

                return $this->redirect(['youth-page', 'tool' => $_SESSION['tool_data'], 'ref' => $_SESSION['intake_ref']]);
            } else {
                Yii::$app->session->setFlash('danger', 'Failed to update.');

                return $this->redirect(['youth-page', 'tool' => $_SESSION['tool_data'], 'ref' => $_SESSION['intake_ref']]);
            }
        }

        return $this->render('youth-update', [
            'model' => $model,
        ]);
    }

    // public function actionYouthUpdate($rca)
    // {
    //     $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

    //     $model = $this->findModel($number);

    //     if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
    //         if ($model->save()) {
    //             Attachment::populateAttachmentFieldsNoWorkflow($model);
    //             Yii::$app->session->setFlash('success', 'Beneficiary service updated successfully.');

    //             return $this->redirect([CustomHelper::getRefererUrl()]);
    //         }
    //     }

    //     return $this->render('youth-update', [
    //         'model' => $model,
    //     ]);
    // }

    /**
     * Deletes an existing BeneficiaryService model.
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
     * Finds the BeneficiaryService model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return BeneficiaryService the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = BeneficiaryService::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function findAttachment($id)
    {
        if (($model = Attachment::findOne(['refno' => $id])) !== null) {
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

    protected function findYlwsLinkAssociationByRefno($id)
    {
        if (($model = YlwsLinkAssociation::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
