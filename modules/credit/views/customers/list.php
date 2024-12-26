<?php

use app\models\Customer;
use yii\helpers\Html;
use kartik\grid\GridView;
use yii\widgets\Pjax;

/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var backend\modules\credit\models\CustomerSearch $searchModel
 */

$this->title = 'Customers List';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="customer-index">

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?php /* echo Html::a('Create Customer', ['create'], ['class' => 'btn btn-success'])*/  ?>
    </p>

    <?php Pjax::begin(); echo GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'showPageSummary'=>true,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            [
                'attribute' => 'id',
                'label'=>'Customer',
                'pageSummary'=>'Total',
                'value'=>function($m){
                    return $m->name;
                },
                'filterType' => GridView::FILTER_SELECT2,
                'filter' =>Customer::getCustomerList(),
                'filterWidgetOptions' => [
                    'pluginOptions' => ['allowClear' => true],
                ],
                'filterInputOptions' => ['placeholder' => ' --Search --'],

            ],

            // 'middle_name',
                //'last_name',
            //    'email:email',
    //            'postal_address:ntext',
    //            'phisical_address:ntext',
            'phone',
    //            'phone_2',
    //            'country_id',
    //            'city_id',
    //            'is_supplier',
    //            'is_active',
    //            'created_by',
    //            'updated_by',
    //            'created_at',
    //            'updated_at',
    //            'can_credit',
    //            'oid',
            //'climit',

            [

                'label' => 'Balance',
                'format' => 'decimal',
                'pageSummary'=>true,
                'value' => function ($model) {

                        return $model->getBalance();

                }
            ],
// [

//     'attribute' => 'is_active',
//     'label' => 'Status',
//     'filter' => ['1' => 'Active', '0' => 'Domant'],
//     'format' => 'raw',

//     'value' => function ($model) {
//         if ($model->is_active == true) {
//             return '<span class="badge  bg-green">Active</span>';
//         }

//         return '<span class="badge bg-red">Domant</span>';
//     }
// ],

[

    'label' => ' ',

    'format' => 'raw',

    'value' => function ($model) {

            return Html::a('<span class="fa fa-money"> Statement</span>',
            Yii::$app->urlManager->createUrl(['credit/customers/credit-info', 'did' => $model->id, 'edit' => 't']),
            ['title' => Yii::t('yii', 'View Customer Statement'),]
        );

    }
],




            [
                'class' => 'yii\grid\ActionColumn',
                'visible'=>false,
                'template'=>'{update}',
                'buttons' => [
                    'update' => function ($url, $model) {
                        return Html::a('<span class="glyphicon glyphicon-pencil"></span>',
                            Yii::$app->urlManager->createUrl(['credit/customers/update', 'id' => $model->id, 'edit' => 't']),
                            ['title' => Yii::t('yii', 'Edit'),]
                        );
                    }
                ],
            ],
        ],
        'responsive' => true,
        'hover' => true,
        'condensed' => true,
        'floatHeader' => true,

        'panel' => [
            'heading' => '<h3 class="panel-title"><i class="glyphicon glyphicon-th-list"></i> '.Html::encode($this->title).' </h3>',
            'type' => 'info',
            // 'before' => Html::a('<i class="glyphicon glyphicon-plus"></i> Add', ['create'], ['class' => 'btn btn-success']),
            'after' => Html::a('<i class="glyphicon glyphicon-repeat"></i> Reset List', ['list'], ['class' => 'btn btn-info']),
            'showFooter' => false
        ],
    ]); Pjax::end(); ?>

</div>
