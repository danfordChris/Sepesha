<?php

use app\models\MainMeter;
use app\models\SubMeter;
use yii\helpers\Html;
use kartik\grid\GridView;
use yii\widgets\Pjax;
use kartik\select2\select2;
use yii\helpers\ArrayHelper;
use app\models\Offices;
use app\models\MonthSummary;
use app\models\TokenBills;
use yii\data\ActiveDataProvider;

/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var app\modules\Hotel\models\HotelSummarySearch $searchModel
 */

$this->title = Yii::t('app', 'Expense Report');
$this->params['breadcrumbs'][] = $this->title;
$title = $this->title;
?>
<div class="expense-summary-index">

    <div class="">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <div class="col-md-6">

            </div>
        </div>
        <?php
        echo $this->render('_search', ['model' => $searchModel]);
        ?>
        <?php

        // Pjax::begin();
        echo GridView::widget([
            'dataProvider' => $dataProvider,
            // 'model' => $model,
            // 'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-sm text-nowrap', 'style' => 'color:#000;'],
            'pageSummaryRowOptions' => ['class' => 'kv-page-summary bg-primary'],
            'exportConfig' => Yii::$app->TransportExport->getTransportExport($this->title),
            'showPageSummary' => true,
            // 'filterModel' => $searchModel,
            // 'exportConfig' => Yii::$app->kalaExport->getKalaExport($this->title),/

            'columns' => [
                [
                    'attribute' => 'catid',
                    'value' => function ($model) {
                        return  $model->expenseCategory->name ?? '';
                    }
                ],

                // [
                //     'attribute' => 'empid',
                //     'value' => function ($model) {
                //         return  $model->employee->getFullName() ?? '';
                //     }
                // ],
                //'transact_date:date',
                [
                    'attribute' => 'transact_date',
                    'format'=>['date','php:Y-m-d']
                ],
                [
                    'attribute' => 'busid',
                    'value' => function ($model) {
                        return  $model->bus->regno ?? '';
                    }
                ],

                [
                    'attribute' => 'trip_id',
                    'value' => function ($model) {
                        return  $model->trip->trip_no ?? '';
                    }
                ],


                [
                    'attribute' => 'location_id',
                    'value' => function ($model) {
                        return  $model->location->name ?? '';
                    }
                ],

                [
                    'attribute' =>   'amount',
                    'format' => ['decimal', 2],
                    'pageSummary' => true,
                ],
            ],
            'responsive' => true,
            'hover' => false,
            'striped' => false,
            'condensed' => true,
            'floatHeader' => false,
            'panel' => [
                'type' => 'default',
                'before' => '<a class="btn btn-md btn-primary float-end mr-2 accordion-toggle collapsed" data-bs-toggle="collapse" data-bs-parent="="#accordion" href="#panel-body-1" aria-expanded="false"><i class="fa fa-search fa-1x me-2"></i>Search</a>'
        //    'footer'=>false,
                ]

            // 'panel' => Yii::$app->kalaPanel->getKalaPanel($title,$panelColor),
        ]);
        // Pjax::end();
        ?>
    </div>
</div>