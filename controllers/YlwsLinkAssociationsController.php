<?php

namespace app\controllers;

use Yii;
use app\models\User;
use app\models\Intake;
use yii\web\Controller;
use app\models\Approval;
use app\models\WfStages;
use app\models\Workflow;
use yii\web\UploadedFile;
use app\models\Attachment;
use app\models\Beneficiary;
use app\models\SystemRoles;
use yii\filters\VerbFilter;
use app\models\CustomHelper;
use app\models\CaseTransfers;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use app\models\IntakeWorkflowTool;
use app\models\YouthDailyActivity;
use yii\web\NotFoundHttpException;
use app\models\YlwsLinkAssociation;
use yii\web\ForbiddenHttpException;
use app\models\BeneficiaryGroupMember;
use app\models\YlwsLinkAssociationSearch;

/**
 * YlwsLinkAssociationsController implements the CRUD actions for YlwsLinkAssociation model.
 */
class YlwsLinkAssociationsController extends Controller
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
     * Lists all YlwsLinkAssociation models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new YlwsLinkAssociationSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['not', ['assoc_date' => null]])->andWhere(['not', ['bgroup_id' => null]]);
        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionNoAsso()
    {
        $searchModel = new YlwsLinkAssociationSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['assoc_date' => null, 'bgroup_id' => null]);

        return $this->render('no-asso', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionManage($ref)
    {
        $model = $this->findYlwsLinkAssociationByRefno($ref);
        $attachmentModel = Attachment::populateAttachmentFields($model);
        $this->addAttachementFunction($attachmentModel);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "YLWS Link Association updated successfully");
            return $this->refresh();
        }
        return $this->render('manage', [
            'model' => $model,
            'attachmentModel' => $attachmentModel
        ]);
    }

    public function actionManageNoasso($modelClass, $ref)
    {
        // $model = $this->findYlwsLinkAssociationByRefno($ref);
        $model = CustomHelper::CheckReferencePage($modelClass, $ref);
        $attachmentModel = Attachment::populateAttachmentFields($model);
        $this->addAttachementFunction($attachmentModel);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "YLWS Link Association updated successfully");
            return $this->refresh();
        }
        return $this->render('manage-noasso', [
            'model' => $model,
            'attachmentModel' => $attachmentModel
        ]);
    }


    /**
     * Displays a single YlwsLinkAssociation model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($ref)
    {
        return $this->render('view', [
            'model' => $this->findYlwsLinkAssociationByRefno($ref),
        ]);
    }

    public function actionViewylwslinkassociations($ref)
    {


        return $this->render('index', [
            'dataProvider' => $this->findAllYlwslinkassociationsByIntake($ref),
        ]);
    }

    public function actionViewNoasso($ref)
    {


        return $this->render('no-asso', [
            'dataProvider' => $this->findAllYlwslinkassociationsByIntake($ref),
        ]);
    }

    /**
     * Creates a new YlwsLinkAssociation model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate($ref)
    {
        $model = new YlwsLinkAssociation();
        $intake = $this->findIntake($ref);
        $model->beneficiary_id = $intake->beneficiary_id;
        $model->intake_id = $intake->id;
        $model->refno = Yii::$app->security->generateRandomString(15);
        $model->wid =  CustomHelper::YLWS_ASSOCIATION_WORKFLOW;
        $member = new  BeneficiaryGroupMember;

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->validate()) {
                $member->beneficiary_id = $intake->beneficiary_id;
                $member->bgroup_id =  $model->bgroup_id;
                $member->intake_id = $intake->id;
                $member->reg_date = date('Y-m-d');
                $member->refno = mt_rand(10000, 999999);
                if ($member->save() && $model->save(false)) {
                    Yii::$app->session->setFlash('success', "YLWS Link Association updated successfully");
                } else {
                    Yii::$app->session->setFlash('error', "Failed to save YLWS Link Association");
                }

                return $this->redirect(['index']);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
            'intake' => $intake
        ]);
    }


    public function actionCreateNoasso($ref)
    {
        $model = new YlwsLinkAssociation();
        $intake = $this->findIntake($ref);
        $model->beneficiary_id = $intake->beneficiary_id;
        $model->intake_id = $intake->id;
        $model->refno = Yii::$app->security->generateRandomString(15);
        $model->wid =  CustomHelper::YLWS_NO_ASSOCIATION_WORKFLOW;

        if ($model->save(false)) {
            Yii::$app->session->setFlash('success', "YLWS with no Association added successfully");
            return $this->redirect(['no-asso']);
        } else {
            Yii::$app->session->setFlash('error', "Failed to add YLWS with no Association");
            return $this->redirect(['/intake/index']);
        }
    }


    public function actionAttend($ref)
    {
        $mainModel = $this->findYlwsLinkAssociationByRefno($ref);
        $modelApproval = new Approval;
        $modelApproval->reqid = $mainModel->refno;
        $modelApproval->wid = $mainModel->wid;
        $stno = $mainModel->stid;
        $modelApproval->sno = $stno;
        $maxStage = Workflow::findOne($mainModel->wid)->stages;

        $attachmentModel = Attachment::populateAttachmentFields($mainModel);
        $attachments = Attachment::find()->where(['wid' => $mainModel->wid, 'owner_id' => $mainModel->intake_id])->all();
        $this->addAttachementFunction($attachmentModel);

        CustomHelper::setMainUrl();
        $_SESSION['ref'] = $ref;

        if (! SystemRoles::isOnWorkflow($mainModel->wid, $mainModel->stid)) {
            throw new ForbiddenHttpException(Yii::t('app', 'You are not authorized to perform this action. If you believe you should have access, please contact your system administrator.'));
        }


        if ($this->request->isPost && $modelApproval->load($this->request->post()) && $modelApproval->validate()) {
            $stage = WfStages::find()->where(['wid' => $mainModel->wid, 'sno' => $modelApproval->sno])->one();
            $modelApproval->wfsname = $stage->sname;

            //if workflow has attachment then save it;
            // save workflow document
            $docAttached = UploadedFile::getInstance($modelApproval, 'attachment');
            $docLocation = '/uploads/documents/approvals';
            if (is_object($docAttached)) {
                $filePath = CustomHelper::saveNewDocument($docAttached, $docLocation);
                // Generate the URL
                $baseUrl = Yii::$app->request->baseUrl;
                $url = $baseUrl . $docLocation . basename($filePath);
                // Save URL to the database
                $modelApproval->attachment = $url;
            }

            if ($modelApproval->wfs == 'Y') {
                $sno = $mainModel->stid = $stage->nextstage;
                $mainModel->wfstatus =  $modelApproval->wfstatus  = $stage->okname;
                if ($sno > $maxStage) {
                    $mainModel->status = 'A';
                    $mainModel->approved_by = Yii::$app->user->id;
                    $mainModel->approved_date = date('Y-m-d');
                }
            } else {
                $mainModel->stid = $stage->backstage;
                $mainModel->wfstatus = $modelApproval->wfstatus  = $stage->notokname;
            }

            $modelApproval->stid = $mainModel->stid;
            $modelApproval->benid = $mainModel->beneficiary_id;
            $modelApproval->intake_id = $mainModel->intake_id;
            $redir = '';
            if ($mainModel->wid == CustomHelper::YLWS_ASSOCIATION_WORKFLOW) {
                $redir = $this->redirect(['index']);
            } else {
                $redir = $this->redirect(['no-asso']);
            }

            if ($modelApproval->save()) {
                $mainModel->save(false);
                Yii::$app->session->setFlash('success', "Action is Successfully !");
                return  $redir;
            }

            return  $redir;
        }

        return $this->render('attend', [
            'modelApproval' => $modelApproval,
            'mainModel' => $mainModel,
            'attachments' => $attachments,
            'attachmentModel' => $attachmentModel,
        ]);
    }

    /**
     * Updates an existing YlwsLinkAssociation model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($ref)
    {
        $model = $this->findYlwsLinkAssociationByRefno($ref);
        // attachment begin
        $attachmentModel = Attachment::populateAttachmentFields($model);
        $this->addAttachementFunction($attachmentModel);
        // attachment end

        if ($this->request->isPost && $model->load($this->request->post())) {

            if ($model->save()) {
                Yii::$app->session->setFlash('success', "YLWS Link Association updated successfully");
                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to update YLWS Link Association");
                return $this->render('update', [
                    'model' => $model,
                    'attachmentModel' => $attachmentModel

                ]);
            }
        }
        return $this->render('update', [
            'model' => $model,
            'attachmentModel' => $attachmentModel


        ]);
    }

    // function to upload attachment
    public function addAttachementFunction($attachmentModel)
    {
        if (Yii::$app->request->isPost &&  $attachmentModel->load(Yii::$app->request->post())) {
            $attachmentModel->attachment = UploadedFile::getInstance($attachmentModel, 'attachment');
            $attachmentModel->name = $attachmentModel->doc->documenttypeName->name ?? 'non';
            if ($attachmentModel->upload() && $attachmentModel->save()) {
                Yii::$app->session->setFlash('success', 'Attachment uploaded successfully.');
                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('error', 'Failed to upload attachment');
                return $this->refresh();
                //return $attachmentModel->getErrors();
            }
        }
    }

    public function actionViewMember($members)
    {
        $model = $this->findGroup($members);
        $beneficiaries = BeneficiaryGroupMember::find()->where(['bgroup_id' => $model->id])->all();

        return $this->renderAjax('/beneficiary-groups/member', [
            'model' => $model,
            'beneficiaries' => $beneficiaries,
        ]);
    }

    /**
     * Deletes an existing YlwsLinkAssociation model.
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
     * Finds the YlwsLinkAssociation model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return YlwsLinkAssociation the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = YlwsLinkAssociation::findOne(['id' => $id])) !== null) {
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

    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }


    public function findAllYlwslinkassociationsByIntake($ref)
    {
        $query = YlwsLinkAssociation::find()->where(['intake_id' => $ref]);
        return new ActiveDataProvider([
            'query' => $query,
        ]);
    }

    protected function findGroup($id)
    {
        if (($model = BeneficiaryGroupMember::findOne(['bgroup_id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}