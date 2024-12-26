<?php

use yii\helpers\Html;
use kartik\grid\GridView;
use yii\widgets\Pjax;

/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var backend\models\remmy\OfficesSearch $searchModel
 */

$this->title = 'Invoices';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="offices-index">
    <div class="page-header">
       <!--  <h1><?= Html::encode($this->title) ?></h1> -->
    </div>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?php /* echo Html::a('Create Offices', ['create'], ['class' => 'btn btn-success'])*/  ?>
    </p>

    <?php Pjax::begin(); echo GridView::widget([
        'dataProvider' => $dataProvider,
        //'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            //'id',
            'full_name',
            'tin_no',
            'company_email',
            'company_phone',
           // 'nssf_id',
            [
                'class' => 'yii\grid\ActionColumn',
                'template'=>'{bill}',
                'buttons' => [
                    'update' => function ($url, $model) {
                        return Html::a('<span class="fa fa-edit"></span>',
                            Yii::$app->urlManager->createUrl(['companies/update', 'id' => $model->company_id, 'edit' => 't']),
                            ['title' => Yii::t('yii', 'Edit'),]
                        );
                    },

                    'bill' => function ($url, $model) {
                        return Html::a('<span class="fa fa-book btn btn-primary"> All Invoices</span>',
                            Yii::$app->urlManager->createUrl(['billing/billing/create', 'bid' => $model->company_id, 'edit' => 't']),
                            ['title' => Yii::t('yii', 'Edit'),]
                        );
                    },


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
           // 'after' => Html::a('<i class="glyphicon glyphicon-repeat"></i> Reset List', ['index'], ['class' => 'btn btn-info']),
            'showFooter' => false
        ],
    ]); Pjax::end(); ?>

</div>
