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
use app\models\SystemRoles;
use yii\filters\VerbFilter;
use app\models\CustomHelper;
use app\models\Reintegrations;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use yii\web\NotFoundHttpException;
use app\models\YlwsLinkAssociation;
use yii\web\ForbiddenHttpException;
use app\models\GraduationAssessment;
use app\models\GraduationAssessmentItem;
use app\models\GraduationAssessmentSearch;
use app\models\GraduationQuestionScoring;
use app\models\IntakeWorkflowTool;

/**
 * GraduationsController implements the CRUD actions for GraduationAssessment model.
 */
class GraduationsController extends Controller
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
     * Lists all GraduationAssessment models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new GraduationAssessmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionAllIntakeAssessments($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $searchModel = new GraduationAssessmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $number]);


        return $this->render('all-intake-assessments', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single GraduationAssessment model.
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
     * Creates a new GraduationAssessment model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */

    // family graduation assessment

    public function actionClws($ref)
    {
        $model = new GraduationAssessment();
        $linkage = $this->findReunificationByRefno($ref);
        $intake = $this->findIntake($linkage->intake_id);
        $model->benid = $intake->beneficiary_id;
        $model->intake_id = $intake->id;
        $caregiverId = CustomHelper::getPlacement($intake->id);
        $model->caregiver_id = $caregiverId->shelter_or_fitperson ?? "";
        $model->family_id = $intake->beneficiary_id;
        $model->empid = Yii::$app->user->identity->userid;
        $model->refno = Yii::$app->security->generateRandomString(15);
        $model->wid = CustomHelper::CLWS_GRADUATION_WORKFLOW;
        $model->type = 'clws';
        $model->reg_date = date('Y-m-d');
        // $model->family_id = $intake->beneficiary->contact_id;
        $attachment = UploadedFile::getInstance($model, 'attachment');
        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                $graduationquestions = GraduationQuestionScoring::find()->joinWith('area a')->where(['a.type' => 'clws'])->orderBy("a.id DESC")->all();
                foreach ($graduationquestions as $question) {
                    $graduationassessmentitem = new GraduationAssessmentItem();
                    $graduationassessmentitem->assessment_id = $model->id;
                    $graduationassessmentitem->area_id = $question->area_id;
                    $graduationassessmentitem->benchmark_id = $question->benchmark_id;
                    $graduationassessmentitem->question_id = $question->id;
                    $graduationassessmentitem->save(false);
                }

                if ($attachment) {
                    $uploadPath = Yii::getAlias('@webroot/uploads/documents/');
                    if (!is_dir($uploadPath)) {
                        mkdir($uploadPath, 0755, true);
                    }
                    $fileName = Yii::$app->security->generateRandomString() . '.' . $attachment->extension;
                    $filePath = $uploadPath . $fileName;

                    if ($attachment->saveAs($filePath)) {
                        $model->attachment = $fileName;
                    } else {
                        Yii::$app->session->setFlash('error', 'Failed to upload the file.');
                    }
                }
                // if () {
                Yii::$app->session->setFlash('success', "Data saved Successfully !");
                return $this->redirect(['update-graduation-assessment-child', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
            }
        }
        // } 
        // else {
        //     $model->loadDefaultValues();
        // }

        return $this->render('create_clws', [
            'model' => $model,
            'intake' => $intake
        ]);
    }


    //youth graduation assessment
    public function actionYlws($ref)
    {
        $model = new GraduationAssessment();

        $linkage = $this->findYlwsAssociationByRefno($ref);
        $intake = $this->findIntake($linkage->intake_id);
        $model->benid = $intake->beneficiary_id;
        $model->intake_id = $intake->id;
        $model->empid = Yii::$app->user->identity->userid;
        $model->trx_id = $linkage->id; // ylws ass link id
        $model->refno = Yii::$app->security->generateRandomString(15);
        $model->wid = CustomHelper::YLWS_GRADUATION_WORKFLOW;
        $model->type = 'ylws';
        $model->reg_date = date('Y-m-d');
        $attachment = UploadedFile::getInstance($model, 'attachment');
        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                $model->group_id = $model->youthLink->beneficiaryGroup->id;
                $graduationquestions = GraduationQuestionScoring::find()->joinWith('area a')->where(['a.type' => 'ylws'])->orderBy("a.id DESC")->all();
                foreach ($graduationquestions as $question) {
                    $graduationassessmentitem = new GraduationAssessmentItem();
                    $graduationassessmentitem->assessment_id = $model->id;
                    $graduationassessmentitem->area_id = $question->area_id;
                    $graduationassessmentitem->benchmark_id = $question->benchmark_id;
                    $graduationassessmentitem->question_id = $question->id;
                    $graduationassessmentitem->save(false);
                }
                if ($attachment) {
                    $uploadPath = Yii::getAlias('@webroot/uploads/documents/');
                    if (!is_dir($uploadPath)) {
                        mkdir($uploadPath, 0755, true);
                    }
                    $fileName = Yii::$app->security->generateRandomString() . '.' . $attachment->extension;
                    $filePath = $uploadPath . $fileName;

                    if ($attachment->saveAs($filePath)) {
                        $model->attachment = $fileName;
                    } else {
                        Yii::$app->session->setFlash('error', 'Failed to upload the file.');
                    }
                }
                Yii::$app->session->setFlash('success', "Data saved Successfully !");
                return $this->redirect(['update-graduation-assessment', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create_ylws', [
            'model' => $model,
            'intake' => $intake
        ]);
    }

    public function actionUpdateFamilyAssessment($id)
    {
        $modelAssItem = GraduationAssessmentItem::findOne($id);

        if (!$modelAssItem) {
            throw new NotFoundHttpException('The requested item does not exist!');
        }

        if (Yii::$app->request->isAjax && $modelAssItem->load(Yii::$app->request->post())) {
            if ($modelAssItem->save()) {
                return $this->asJson(['success' => true]);
            } else {
                return $this->asJson(['success' => false, 'errors' => $modelAssItem->errors]);
            }
        }

        return $this->renderAjax('_formonly_update_clws_graduation_items', ['modelAssItem' => $modelAssItem]);
    }



    public function actionAttend($ref)
    {

        $mainModel = $this->findByRefno($ref);
        $modelApproval = new Approval;
        $modelApproval->reqid = $mainModel->refno;
        $modelApproval->wid = $mainModel->wid;
        $stno = $mainModel->stid;
        $modelApproval->sno = $stno;
        $maxStage = Workflow::findOne($mainModel->wid)->stages;

        if (! SystemRoles::isOnWorkflow($mainModel->wid, $mainModel->stid)) {
            throw new ForbiddenHttpException(Yii::t('app', 'You are not authorized to perform this action. If you believe you should have access, please contact your system administrator.'));
        }


        $approvalsWf = CustomHelper::getApprovalLogs($mainModel->wid, $mainModel->refno);
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
            $modelApproval->benid = $mainModel->benid;
            $modelApproval->intake_id = $mainModel->intake_id;
            if ($modelApproval->save()) {
                $mainModel->save(false);
                Yii::$app->session->setFlash('success', "Action is Successfully !");
                return $this->redirect(['index']);
            }

            return $this->redirect(['index']);
        }

        return $this->render('attend', [
            'modelApproval' => $modelApproval,
            'mainModel' => $mainModel,
            'approvalsWf' => $approvalsWf
        ]);
    }


    /**
     * Updates an existing GraduationAssessment model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($ref)
    {
        $model = $this->findByRefno($ref);
        // attachment begin
        $attachmentModel = Attachment::populateAttachmentFields($model);
        $this->addAttachementFunction($attachmentModel);
        // attachment end

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        }
        return $this->render('update', [
            'model' => $model,
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

    public function actionUpdateGraduationAssessment($rca)
    {

        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);
        $id = $model->id;

        $modelIntake = $this->findIntakeByID($model->intake_id);
        $intakeId = $modelIntake->refno;

        if ($model->load(Yii::$app->request->post()) && $model->save()) {

            Yii::$app->session->setFlash('success', "Graduation Assessment updated successfully");
            return $this->redirect(['update-graduation-assessment', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        }

        $questions1 = GraduationAssessmentItem::find()
            ->where(['assessment_id' => $id])
            ->andWhere(['between', 'area_id', 5, 9])->orderBy('id desc')->all();


        $questions2 = GraduationAssessmentItem::find()
            ->where(['assessment_id' => $id])
            ->andWhere(['<=', 'area_id', 5])->orderBy('id desc')
            ->all();


        if (Yii::$app->request->post()) {
            $postData = Yii::$app->request->post('GraduationAssessmentItem', []);
            // return var_dump($postData);
            foreach ($questions1 as $index1 => $question) {
                if (isset($postData[$index1]['id']) && $postData[$index1]['id'] == $question->id) {
                    $question->beneid = $question->assessment->intake->beneficiary_id ?? '';
                    $question->intake_id = $question->assessment->intake_id ?? '';
                    $question->value = $postData[$index1]['value'];
                    $question->score = GraduationAssessmentItem::getScoreValue($postData[$index1]['value']);
                    $question->save(false);
                }
            }
            foreach ($questions2 as $index2 => $question) {
                if (isset($postData[$index2]['id']) && $postData[$index2]['id'] == $question->id) {
                    $question->beneid = $question->assessment->intake->beneficiary_id ?? '';
                    $question->intake_id = $question->assessment->intake_id ?? '';
                    $question->value = $postData[$index2]['value'];
                    $question->score = GraduationAssessmentItem::getScoreValue($postData[$index2]['value']);
                    $question->save(false);
                }
            }
        }

        return $this->render('update-graduation-assessment', [
            'model' => $model,
            'modelIntake' => $modelIntake,
            'modelAssItem' => new GraduationAssessmentItem(),
            'subdomains1' => $questions2,
            'subdomains2' => $questions1


        ]);
    }



    public function actionUpdateGraduationAssessmentChild($rca)
    {

        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);
        $id = $model->id;

        $modelIntake = $this->findIntakeByID($model->intake_id);
        $intakeId = $modelIntake->refno;


        if ($model->load(Yii::$app->request->post()) && $model->save()) {

            Yii::$app->session->setFlash('success', "Graduation Assessment updated successfully");
            return $this->redirect(['update-graduation-assessment-child', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        }



        $questions = GraduationAssessmentItem::find()
            ->where(['assessment_id' => $model->id])->orderBy('id desc')
            ->all();

        if (Yii::$app->request->post()) {
            $postData = Yii::$app->request->post('GraduationAssessmentItem', []);
            foreach ($questions as $index => $question) {
                if (isset($postData[$index])) {
                    $question->beneid = $question->assessment->intake->beneficiary_id ?? '';
                    $question->intake_id = $question->assessment->intake_id ?? '';
                    $question->value = $postData[$index]['value'];
                    $question->score = GraduationAssessmentItem::getScoreValue($postData[$index]['value']);
                    $question->save(false);
                }
            }
            Yii::$app->session->setFlash('success', "Family Graduation Assessment Response(s) saved successfully.");
            return $this->redirect(['update-graduation-assessment-child', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        }


        return $this->render('update-graduation-assessment-child', [
            'model' => $model,
            'modelIntake' => $modelIntake,
            'modelAssItem' => new GraduationAssessmentItem(),
            'subdomains' => $questions

        ]);
    }
    /**
     * Deletes an existing GraduationAssessment model.
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
     * Finds the GraduationAssessment model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return GraduationAssessment the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findByRefno($id)
    {
        if (($model = GraduationAssessment::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }



    protected function findModel($id)
    {
        if (($model = GraduationAssessment::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }



    protected function findReunificationByRefno($id)
    {
        if (($model = Reintegrations::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findYlwsAssociationByRefno($id)
    {
        if (($model = YlwsLinkAssociation::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }


    protected function findIntake($id)
    {
        if (($model = Intake::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findIntakeById($id)
    {
        if (($model = Intake::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
