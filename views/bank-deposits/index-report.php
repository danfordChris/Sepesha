<?php

use app\models\BankDeposits;
use kartik\grid\GridView as GridGridView;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\BankDepositsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Bank Deposits';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="bank-deposits-index">

    <div class="">
        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>

        </div>

        <?php
        echo $this->render('_search', ['model' => $searchModel]);
        ?>

        <?= GridGridView::widget([
            'dataProvider' => $dataProvider,
            'showPageSummary'=>true,
           // 'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-sm text-nowrap', 'style' => 'color:#000;'],
            'pageSummaryRowOptions' => ['class' => 'kv-page-summary bg-primary'],
            'exportConfig' => Yii::$app->TransportExport->getTransportExport($this->title),
            'showPageSummary' => true,
            'panel' => [
                'type' => 'default',
                'before' => '<a class="btn btn-md btn-primary float-end mr-2 accordion-toggle collapsed" data-bs-toggle="collapse" data-bs-parent="="#accordion" href="#panel-body-1" aria-expanded="false"><i class="fa fa-search fa-1x me-2"></i>Search</a>'
        //    'footer'=>false,
            ],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                [
                    'label' => 'bank Name',
                    'pageSummary'=>'Total',
                    'value' => function ($model) {
                        return  $model->bankAccount->banksname;
                    }
                ],
                [
                    'attribute' => 'accid',
                    'value' => function ($model) {
                        return  $model->bankAccount->account_no;
                    }
                ],




                [
                    'attribute' => 'billdate',
                    'format' => ['date', 'php:Y-m-d'],
                ],
                [
                    'attribute' => 'deposit_date',
                    'format' => ['date', 'php:Y-m-d'],
                ],

                'descr',
                [
                    'attribute' => 'amount',
                    'pageSummary'=>true,
                    'format'=>['decimal',2],

                ],
                // [
                //     'attribute' => 'status',
                //     'format' => 'raw',
                //     'value' => function ($model) {
                //         if ($model->status == 10) {
                //             return '<div class="badge badge-success">Active</div>';
                //         }
                //         return '<div class="badge badge-danger">Inactive</div>';
                //     }
                // ],
                //'created_at',
                //'created_by',
                //'updated_at',
                //'updated_by',
                [
                    'class' => 'yii\grid\ActionColumn',
                    'template' => '{view}{update}{delete}',
                    'visible'=>false,
                    'buttons' => [
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['bank-deposits/update', 'id' => $model->id, 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['bank-deposits/view', 'id' => $model->id, 'view' => 't']),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],
            ],
        ]); ?>

    </div>
</div>
