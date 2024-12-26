<?php

namespace app\modules\credit\controllers;

use app\modules\credit\models\CreditControl;
use app\modules\credit\models\CreditControlSearch;
use Yii;
use app\models\Customer;
use app\models\CustomerSearch;
use app\modules\credit\models\PayControl;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * CustomersController implements the CRUD actions for Customer model.
 */
class CustomersController extends Controller
{
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
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Customer models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new CustomerSearch;
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());

        return $this->render('index', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
    }


    public function actionList()
    {
        $searchModel = new CustomerSearch;
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());

        return $this->render('list', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
    }

    /**
     * Displays a single Customer model.
     * @param integer $id
     * @return mixed
     */
    public function actionCreditInfo($did)
    {
            $model = $this->findModel($did);
            $searchModel = new CreditControlSearch();
            $dataProvider = $searchModel->searchCust(Yii::$app->request->getQueryParams(),$model->id);
            $modelCr= new CreditControl();
            $modelDbt= new PayControl();
            $modelDbt->oid=$modelCr->oid = \Yii::$app->user->identity->company_name;
            $modelDbt->cid=$modelCr->cid=$model->id;
            $modelDbt->crdid= $modelCr->crdid=\Yii::$app->security->generateRandomString(7);
           // $modelDbt->cdate=date('Y-m-d');
           // $modelCr->cdate=date('Y-m-d');
            $modelDbt->ctype='dbt';
            $modelCr->ctype='crd';
        if ($modelCr->load(Yii::$app->request->post())) {
            $blnc=$model->getBalance()+$modelCr->camount;
            if($blnc>$model->climit){
                Yii::$app->session->setFlash('danger', "Kiwango cha mteja  kukopa kimezidi!");
                return $this->redirect(['credit-info', 'did' => $model->id]);
            }
            $modelCr->save();
            Yii::$app->session->setFlash('success', "Mkopo umeifadhiwa kikamilifu!");
            return $this->redirect(['credit-info', 'did' => $model->id]);
        }elseif ($modelDbt->load(Yii::$app->request->post()) && $modelDbt->save(false)) {
                Yii::$app->session->setFlash('success', "Malipo yamefanikiwa kuifadhiwa!");
                return $this->redirect(['credit-info', 'did' => $model->id]);
            }
        else {
            return $this->render('statement', ['model' => $model,'dataProvider' => $dataProvider,'modelCr'=>$modelCr,'modelDbt'=>$modelDbt]);
        }
    }

    /**
     * Creates a new Customer model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Customer;
        $model->is_active = 1;
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Data saved successful!");
            return $this->redirect(['index', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Customer model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */

    public function actionKopa($id)
    {
        $model = $this->findModel($id);
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Data saved successful!");
            return $this->redirect(['index', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    public function actionLipa($id)
    {
        $model = $this->findModel($id);
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Data saved successful!");
            return $this->redirect(['index', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Data saved successful!");
            return $this->redirect(['index', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Customer model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
       $model= $this->loadTransaction($id);
       $model->status=0;
       if($model->ctype=='crd' && $model->type='invoice'){
        Yii::$app->session->setFlash('danger', "Failed to cancel data ,you can not cancel invoice data ,please cancel invoice instead !");
        return $this->redirect(['credit-info', 'did' => $model->cid]);
       }

       if($model->save(false)){
        Yii::$app->session->setFlash('success', "Data cancelled successful!");
        return $this->redirect(['credit-info', 'did' => $model->cid]);
       }else{
        Yii::$app->session->setFlash('danger', "Failed to cancel data !");
        return $this->redirect(['credit-info', 'did' => $model->cid]);
       }
    }

    /**
     * Finds the Customer model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Customer the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */

    protected function loadTransaction($id)
    {
        if (($model = CreditControl::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
    protected function findModel($id)
    {
        if (($model = Customer::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
