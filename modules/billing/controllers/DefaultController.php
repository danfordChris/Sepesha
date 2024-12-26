<?php

namespace app\modules\billing\controllers;

use app\models\CompaniesSearch;
use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use backend\models\Companies;
use yii\filters\AccessControl;
use backend\models\remmy\OfficesSearch;
use backend\models\CompanySearch;

/**
 * Default controller for the `billing` module
 */
class DefaultController extends Controller
{
    /**
     * Renders the index view for the module
     * @return string
     */

     public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::class,
                'rules' => [
                    [
                        'allow'=>true,
                        //'actions'=>['index','view','create','update','delete'],
                        'roles'=>['@'],
                        // 'matchCallback' => function ($rule, $action) {
                        //     return User::hasRole(Role::RPAS_ADMIN);
                        // }
                    ]



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

    public function actionIndex()
    {
        $searchModel = new CompaniesSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        return $this->render('index', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
    }
}
