<?php

namespace app\controllers;

use app\models\Intake;
use app\models\IntakeWorkflowTool;
use app\models\Reintegrations;
use app\models\ReunificationAgreement;
use app\models\ReunificationAgreementSearch;
use Yii;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * ReunificationAgreementsController implements the CRUD actions for ReunificationAgreement model.
 */
class ReunificationAgreementsController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),
            [
                'verbs' => [
                    'class' => VerbFilter::className(),
                    'actions' => [
                        'delete' => ['POST'],
                    ],
                ],
            ]
        );
    }

    /**
     * Lists all ReunificationAgreement models.
     *
     * @return string
     */

    public function actionIndex($tool, $ref)
    {
        $searchModel = new ReunificationAgreementSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $reintegrations = $this->findReintegrations($ref);
        $model = new ReunificationAgreement();
        // $model->reg_date = date('Y-m-d');
        if ($model->load($this->request->post())) {
            $model->intake_id = $reintegrations->intake_id;
            $model->benid = $reintegrations->benid;
            $model->empid = Yii::$app->user->identity->id;
            IntakeWorkflowTool::insertData($tool, $reintegrations->id, $reintegrations->wid, $reintegrations->stid, $model::tableName(), get_class($model), $model->primaryKey, $reintegrations->refno);
            if ($model->save()) {
                return $this->refresh();
            }
        }

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model,
            'reintegrations' => $reintegrations,
          
        ]);
    }

    /**
     * Displays a single ReunificationAgreement model.
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
     * Creates a new ReunificationAgreement model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new ReunificationAgreement();

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
     * Updates an existing ReunificationAgreement model.
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
     * Deletes an existing ReunificationAgreement model.
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
     * Finds the ReunificationAgreement model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return ReunificationAgreement the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = ReunificationAgreement::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
    protected function findReintegrations($id)
    {
        if (($model = Reintegrations::findOne(['refno' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
