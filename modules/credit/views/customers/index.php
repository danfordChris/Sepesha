<?php

use backend\modules\credit\models\Customer;
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
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            [
                'attribute' => 'id',
                'label'=>'Customer',
                'value'=>function($m){
                    return $m->first_name;
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
                'email:email',
    //            'postal_address:ntext',
    //            'phisical_address:ntext',
            'phone_1',
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
            'climit:decimal',
[

    'attribute' => 'is_active',
    'label' => 'Status',
    'filter' => ['1' => 'Active', '0' => 'Domant'],
    'format' => 'raw',

    'value' => function ($model) {
        if ($model->is_active == true) {
            return '<span class="badge  bg-green">Active</span>';
        }

        return '<span class="badge bg-red">Domant</span>';
    }
],

            [
                'class' => 'yii\grid\ActionColumn',
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
            'before' => Html::a('<i class="glyphicon glyphicon-plus"></i> Add', ['create'], ['class' => 'btn btn-success']),
            'after' => Html::a('<i class="glyphicon glyphicon-repeat"></i> Reset List', ['index'], ['class' => 'btn btn-info']),
            'showFooter' => false
        ],
    ]); Pjax::end(); ?>

</div>
