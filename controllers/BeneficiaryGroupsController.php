<?php

namespace app\controllers;

use app\models\Beneficiary;
use Yii;
use app\models\User;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use app\models\BeneficiaryGroup;
use app\models\BeneficiaryGroupMember;
use yii\web\NotFoundHttpException;
use app\models\BeneficiaryGroupSearch;
use app\models\WorkflowDocuments;
use yii\web\Response;

/**
 * BeneficiaryGroupsController implements the CRUD actions for BeneficiaryGroup model.
 */
class BeneficiaryGroupsController extends Controller
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
     * Lists all BeneficiaryGroup models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new BeneficiaryGroupSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $model = new BeneficiaryGroup();
        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }

    public function actionYlws()
    {
        $model = new BeneficiaryGroup();
        $searchModel = new BeneficiaryGroupSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['category_id' => '2']);
        return $this->render('ylws', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }

    public function actionFamily()
    {
        $model = new BeneficiaryGroup();
        $searchModel = new BeneficiaryGroupSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
        $dataProvider->query->andWhere(['category_id' => '1']);
        return $this->render('family', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'model' => $model
        ]);
    }




    /**
     * Displays a single BeneficiaryGroup model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    // public function actionView($rca)
    // {
    // $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
    // return $this->render('view', [
    // 'model' => $this->findModel($number),
    // ]);
    // }


    // controllers/BeneficiaryGroupsController.php

    //      public function actionView($rca)
    // {
    //     $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
    //     $model = $this->findModel($number);

    //     // Fetch intake_ids related to the beneficiary group
    //     $intakeIds = BeneficiaryGroupMember::find()
    //         ->select('intake_id')
    //         ->where(['bgroup_id' => $model->id])
    //         ->column();



    //     return $this->render('view', [
    //         'model' => $model,
    //         'intakeIds' => $intakeIds,
    //     ]);
    // }

    public function actionView($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);
        $beneficiaries = BeneficiaryGroupMember::find()->where(['bgroup_id' => $model->id])->all();

        return $this->render('view', [
            'model' => $model,
            'beneficiaries' => $beneficiaries,
        ]);
    }

    public function actionViewMember($members)
    {
        $model = $this->findGroup($members);
        $beneficiaries = BeneficiaryGroupMember::find()->where(['bgroup_id' => $model->id])->all();

        return $this->renderAjax('member', [
            'model' => $model,
            'beneficiaries' => $beneficiaries,
        ]);
    }

    /**
     * Creates a new BeneficiaryGroup model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new BeneficiaryGroup();

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

    /**
     * Updates an existing BeneficiaryGroup model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');
        $model = $this->findModel($number);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['index', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing BeneficiaryGroup model.
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
     * Finds the BeneficiaryGroup model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return BeneficiaryGroup the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = BeneficiaryGroup::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    protected function findGroup($id)
    {
        if (($model = BeneficiaryGroupMember::findOne(['bgroup_id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
