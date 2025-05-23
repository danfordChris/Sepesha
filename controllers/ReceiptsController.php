<?php

namespace app\controllers;

use Yii;
use kartik\mpdf\Pdf;
use yii\web\Controller;
use app\models\Receipts;
use yii\filters\VerbFilter;
use app\models\ReceiptsSearch;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;

/**
 * ReceiptsController implements the CRUD actions for Receipts model.
 */
class ReceiptsController extends Controller
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
                    ],


                ],
            ],
        ];
    }

    /**
     * Lists all Receipts models.
     *
     * @return string
     */
    // public function actionIndex()
    // {
    //     $searchModel = new ReceiptsSearch();
    //     $dataProvider = $searchModel->search($this->request->queryParams);

    //     return $this->render('index', [
    //         'searchModel' => $searchModel,
    //         'dataProvider' => $dataProvider,
    //     ]);
    // }

    public function actionIndex()
    {
        // $this->Auth();
        $model = new Receipts();
        $searchModel = new ReceiptsSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->save()) {
                    // return var_dump($model->updated_by);
                    Yii::$app->session->setFlash('success', "Receipt Created Successfully");
                    return $this->redirect(['index']);
                } else
                    Yii::$app->session->setFlash('failure', 'Failed to Create Receipt!.');
            } else {

                $model->loadDefaultValues();
            }
        }

        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Receipts model.
     * @param int $recid Recid
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */


    public function actionView($recid)
    {

        $searchModel = new ReceiptsSearch();

        $searchModel->recid = $recid;

        $model = $this->findModel($recid);

        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());


        // $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        return $this->render('view', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
            'model' => $model,
        ]);
    }




    public function actionReceiptPrint($recid)
    {
        // $this->Auth();
        $model = $this->findModel($recid);
        $searchModel = new ReceiptsSearch();

        $searchModel->recid = $recid;

        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        Yii::$app->response->format = \yii\web\Response::FORMAT_RAW;
        $pdf = new Pdf([
            //'mode' => Pdf::MODE_CORE, // leaner size using standard fonts
            'destination' => Pdf::DEST_BROWSER,

            'format' => Pdf::FORMAT_A4,
            'filename' => 'Payment Receipt' . strtolower(Yii::$app->controller->id) . '-' . $model->created_at . '.pdf',
            // enhanced bootstrap css built by Krajee for mPDF formatting
            'content' => $this->renderPartial('view', [
                'model' => $model,
                'searchModel' => $searchModel,
                'dataProvider' => $dataProvider,
            ]),
            'options' => [
                'title' => 'PAYMENT RECEIPT',
                'subject' => 'Payment Details',
            ],
            'methods' => [
                //'SetFooter' => ['Generated By: '.$user.'||Generated On: ' . date("Y-m-d H:i:s") ],
                //'SetHeader' => [ 'STATION:'.strtoupper($model->stationNames->business_name).' ,SALES OF:'.$model->sale_date.' || '.User::CompanyName().''],
                //'SetFooter' => ['|Page {PAGENO}|'],
            ]
        ]);
        return $pdf->render();
    }

    /**
     * Creates a new Receipts model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Receipts();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'recid' => $model->recid]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Receipts model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $recid Recid
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    // public function actionUpdate($recid)
    // {
    //     $model = $this->findModel($recid);

    //     if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
    //         return $this->redirect(['view', 'recid' => $model->recid]);
    //     }

    //     return $this->render('update', [
    //         'model' => $model,
    //     ]);
    // }

    public function actionUpdate($recid)
    {
        $model = $this->findModel($recid);

        if ($this->request->isPost && $model->load($this->request->post())) {
            if ($model->save(false)) {
                Yii::$app->session->setFlash('success', "Receipt: " . $model->recno . " Details Updated successfully");
                return $this->redirect(['index']);
            } else
                Yii::$app->session->setFlash('danger', 'Failed to update details!.');
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Receipts model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $recid Recid
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($recid)
    {
        $this->findModel($recid)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Receipts model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $recid Recid
     * @return Receipts the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($recid)
    {
        if (($model = Receipts::findOne(['recid' => $recid])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}