<?php

namespace app\controllers;

use Yii;
use Exception;
use app\models\User;
use kartik\mpdf\Pdf;
use app\models\Model;
use yii\helpers\Json;
use yii\web\Response;
use app\models\Intake;
use yii\web\Controller;
use yii\web\UploadedFile;
use app\models\Beneficiary;
use yii\filters\VerbFilter;
use yii\widgets\ActiveForm;
use app\models\CustomHelper;
use app\widgets\PrintWidget;
use yii\helpers\ArrayHelper;
use app\models\CsiAssessment;
use app\models\CsiSubdomains;
use app\models\WorkflowTools;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use app\models\IntakeWorkflowTool;
use yii\web\NotFoundHttpException;
use app\models\CsiAssessmentSearch;
use yii\web\BadRequestHttpException;
use app\models\AssessmentDomainItems;
use app\models\AssessmentDomainItemsUpdate;

/**
 * CsiAssessmentsController implements the CRUD actions for CsiAssessment model.
 */
class CsiAssessmentsController extends Controller
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
                            return  User::auth('create_csi_assessments');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_csi_assessments');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_csi_assessments');
                        }
                    ],
                ],
            ],

            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }



    /**
     * Lists all CsiAssessment models.
     *
     * @return string
     */
    public function actionIndex($tool, $ref)
    {

        $modelIntake = $this->findIntake($ref);
        $intakeId = $modelIntake->refno;
        $_SESSION['tool_data'] = $tool;
        $_SESSION['intake_ref'] = $ref;
        $model = new CsiAssessment();
        $model->intake_id = $modelIntake->id;
        $model->assessment_date = date('Y-m-d');
        $searchModel = new CsiAssessmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['intake_id' => $modelIntake->id]);

        $toolModel = $this->findWorkflowTool($tool);
        $wid =  $toolModel->wid;
        $stid =  $toolModel->stid;


        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'intake' => $modelIntake,
            'workflow' => $wid,
            'stage' => $stid,

        ]);
    }

    /**
     * Displays a single CsiAssessment model.
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



    public function actionCreate()
    {
        $model = new CsiAssessment();

        $toolitem = $_SESSION['tool_data'];
        $intakeitem = $_SESSION['intake_ref'];
        $intakeModel = $this->findIntake($intakeitem);
        $refno = Yii::$app->security->generateRandomString(20);
        $toolModel = $this->findWorkflowTool($toolitem);
        $wid =  $toolModel->wid;
        $stid =  $toolModel->stid;
        $model->intake_id = $intakeModel->id;
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            IntakeWorkflowTool::insertData($toolitem, $intakeModel->id, $wid, $stid, $model::tableName(), get_class($model), $model->primaryKey(), $intakeModel->refno);
            $subdomains = CsiSubdomains::find()->all();
            foreach ($subdomains as $subdomain) {
                $assessmentDomainItem = new AssessmentDomainItems();
                $assessmentDomainItem->assessment_id = $model->id;
                $assessmentDomainItem->domain_id = $subdomain->domain_id;
                $assessmentDomainItem->subdomain_id = $subdomain->id;
                $assessmentDomainItem->name = $subdomain->name; // Optional: if you want to store name
                $assessmentDomainItem->save(false); // Save without validation for now
            }
            Yii::$app->session->setFlash('success', "CSI Assessment recorded ,please add domains");
            return $this->redirect(['update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        } else {
            Yii::$app->session->setFlash('error', "failed to save data");
            return $this->redirect(['index', 'tool' => $toolitem, 'ref' => $intakeitem]);
        }



        // return $this->refresh();

        // return $this->render('create', [
        //     'model' => $model,
        //     // 'modelIntake' => $modelIntake
        // ]);
    }


    public function actionUpdateAssessment($id)
    {
        $modelAssItem = AssessmentDomainItemsUpdate::findOne($id);

        if (!$modelAssItem) {
            throw new NotFoundHttpException('The requested item does not exist.1');
        }

        if (Yii::$app->request->isAjax && $modelAssItem->load(Yii::$app->request->post())) {
            if ($modelAssItem->save()) {
                return $this->asJson(['success' => true]);
            } else {
                return $this->asJson(['success' => false, 'errors' => $modelAssItem->errors]);
            }
        }

        return $this->renderAjax('_formonly_update_csi_items', ['modelAssItem' => $modelAssItem]);
    }




    public function actionUpdate($rca)
    {;

        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);
        $id = $model->id;

        $modelIntake = $this->findIntakeByID($model->intake_id);
        $intakeId = $modelIntake->refno;

        // if (Yii::$app->request->post('hasEditable')) {
        //     $modelId = Yii::$app->request->post('editableKey');
        //     $modelAssItem = AssessmentDomainItems::findOne($modelId);
        //     $out = Json::encode(['output' => '', 'message' => '']);
        //     $post = [];
        //     $posted = current($_POST['AssessmentDomainItems']);
        //     $post = ['AssessmentDomainItems' => $posted];
        //     if ($modelAssItem->load($post)) {
        //         $modelAssItem->updated_by = Yii::$app->user->id;
        //         $modelAssItem->updated_at = date('Y-m-d H:i:s');
        //         $modelAssItem->save(false);
        //     }
        //     echo $out;
        //     return;
        // }

        // $modelAssItem = new AssessmentDomainItems();
        // if ($modelAssItem->load(Yii::$app->request->post())) {
        //     $modelAssItem->assessment_id = $model->id;
        //     $modelAssItem->domain_id = $modelAssItem->sub->domain_id;
        //     $modelAssItem->name = $modelAssItem->sub->name;
        //     $modelAssItem->save() ? Yii::$app->session->setFlash('success', "Csi Assessment Item added successfully") : Yii::$app->session->setFlash('error', "Data failed to save");;;
        //     return $this->redirect(['update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        // }


        if ($model->load(Yii::$app->request->post()) && $model->save()) {

            $attachment = UploadedFile::getInstance($model, 'attachment');
            if ($attachment) {
                // Generate a unique file name and save the file
                $attachmentName = 'csiassessment.' . time() . $attachment->extension;
                $attachmentPath = '@webroot/uploads/documents/' . $attachmentName;
                $attachmentURL = Yii::$app->params['homeURL'] . '/uploads/documents/' . $attachmentName;
                // Save file to the server
                if ($attachment->saveAs(Yii::getAlias($attachmentPath))) {
                    // Update model with the new file URL
                    $model->attachment = $attachmentURL;
                    $model->save(false);
                } else {
                    Yii::$app->session->setFlash('danger', "Failed to save the attachment");
                }
            }


            Yii::$app->session->setFlash('success', "Csi Assessment updated successfully");
            return $this->redirect(['update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        }

        $qqq = AssessmentDomainItems::find()->where(['assessment_id' => $id])->orderBy('id asc');
        $assessmentDomainItems = new ActiveDataProvider([
            'query' => $qqq,
        ]);


        $subdomains = AssessmentDomainItems::find()
            ->where(['assessment_id' => $model->id])->orderBy('id asc')
            ->all();

        if (Yii::$app->request->post()) {
            $postData = Yii::$app->request->post('AssessmentDomainItems', []);
            foreach ($subdomains as $index => $subdomain) {
                if (isset($postData[$index])) {
                    $subdomain->score = $postData[$index]['score'];
                    $subdomain->action_taken = $postData[$index]['action_taken'];
                    $subdomain->justification = $postData[$index]['justification'];
                    $subdomain->save(false);
                }
            }
            Yii::$app->session->setFlash('success', "Assessment subdomains saved successfully.");
            /// return $this->refresh();
            return $this->redirect(['update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]);
        }

        return $this->render('update', [
            'model' => $model,
            'modelIntake' => $modelIntake,
            'modelAssItem' => new AssessmentDomainItems(),
            'assessmentDomainItems' => $assessmentDomainItems,
            'subdomains' => $subdomains,
        ]);
    }





    // public function actionUpdate($rca)
    // {;

    //     $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
    //     $model = $this->findModel($number);
    //     $id = $model->id;

    //     $modelIntake = $this->findIntakeByID($model->intake_id);
    //     $intakeId = $modelIntake->refno;

    //     // if (Yii::$app->request->post('hasEditable')) {
    //     //     $modelId = Yii::$app->request->post('editableKey');
    //     //     $modelAssItem = AssessmentDomainItems::findOne($modelId);
    //     //     $out = Json::encode(['output' => '', 'message' => '']);
    //     //     $post = [];
    //     //     $posted = current($_POST['AssessmentDomainItems']);
    //     //     $post = ['AssessmentDomainItems' => $posted];
    //     //     if ($modelAssItem->load($post)) {
    //     //         $modelAssItem->updated_by = Yii::$app->user->id;
    //     //         $modelAssItem->updated_at = date('Y-m-d H:i:s');
    //     //         $modelAssItem->save(false);
    //     //     }
    //     //     echo $out;
    //     //     return;
    //     // }


    //     if ($model->load(Yii::$app->request->post()) && $model->save()) {

    //         $attachment = UploadedFile::getInstance($model, 'attachment');
    //         if ($attachment) {
    //             // Generate a unique file name and save the file
    //             $attachmentName = 'csiassessment.' . time() . $attachment->extension;
    //             $attachmentPath = '@webroot/uploads/documents/' . $attachmentName;
    //             $attachmentURL = Yii::$app->params['homeURL'] . '/uploads/documents/' . $attachmentName;
    //             // Save file to the server
    //             if ($attachment->saveAs(Yii::getAlias($attachmentPath))) {
    //                 // Update model with the new file URL
    //                 $model->attachment = $attachmentURL;
    //                 $model->save(false);
    //             } else {
    //                 Yii::$app->session->setFlash('danger', "Failed to save the attachment");
    //             }
    //         }


    //         Yii::$app->session->setFlash('success', "Csi Assessment added successfully");
    //         return $this->redirect(['index', 'intake' => $this->findIntakeByID([$model->intake_id])->refno]);
    //     }

    //     $qqq = AssessmentDomainItems::find()->where(['assessment_id' => $id]);
    //     $assessmentDomainItems = new ActiveDataProvider([
    //         'query' => $qqq,
    //     ]);




    //     return $this->render('update', [
    //         'model' => $model,
    //         'modelIntake' => $modelIntake,
    //         'modelAssItem' => new AssessmentDomainItems(),
    //         'assessmentDomainItems' => $assessmentDomainItems,
    //     ]);
    // }







    /**
     * Deletes an existing CsiAssessment model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */

    public function actionDelete($id)
    {
        $model = $this->findModel($id);
        if ($model->intake->stid == 1) {
            if (AssessmentDomainItems::deleteAll(['assessment_id' => $id])) {
                $this->findModel($id)->delete();
                Yii::$app->session->setFlash('success', "Csi Assessment removed successfully");
            }
        } else {
            Yii::$app->session->setFlash('success', "Failed to remove");
        }
        return $this->redirect(['/intake/manage', 'ref' => $model->intake->refno]);
    }

    /**
     * Finds the CsiAssessment model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CsiAssessment the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CsiAssessment::findOne(['id' => $id])) !== null) {
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

    protected function findWorkflowTool($id)
    {
        if (($model = WorkflowTools::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    public function actionPrintPdf($id)
    {

        $model = $this->findModel($id);
        $qqq = AssessmentDomainItems::find()->where(['assessment_id' => $model->id])->orderBy('id asc');
        $assessmentDomainItems = new ActiveDataProvider([
            'query' => $qqq,
        ]);
        $pdf = new Pdf([
            'mode' => Pdf::MODE_UTF8,
            'format' => Pdf::FORMAT_A4,
            'destination' => Pdf::DEST_BROWSER,
            'content' => $this->renderPartial('print', [
                'model' => $model,
                'assessmentDomainItems' => $assessmentDomainItems,
            ]),
            // 'cssFile' => '@vendor/kartik-v/yii2-mpdf/src/assets/kv-mpdf-bootstrap.min.css',

            'cssInline' => '.reportTable, .reportTable table, .reportTable th, .reportTable td {
    font-size: 50px;
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
}
,
            th{
            padding: 10px; border: 1px solid #000; background-color: #f2f2f2; text-align: left;
            }
            ',

            'methods' => [
                //'SetWatermarkText' => ['CANCELLED'],
                //'SetHeader' => [' header'],
                'SetFooter' => ['Printed on: {DATE d/m/Y h:i:s},Page {PAGENO}'],

            ]
        ]);

        return $pdf->render();
    }
}
