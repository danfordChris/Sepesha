<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use kartik\grid\GridView;
use app\models\Regions;
use yii\grid\ActionColumn;
use app\models\SystemRoles;
use app\models\CustomHelper;
use reine\datatables\DataTables;

/** @var yii\web\View $this */
/** @var app\models\RegionsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Commissions';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="commissions-index card">

    <div class="card-body">





        <?= GridView::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'showPageSummary' => true,
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                // 'id',
                // 'customer_id',
                [
                    'attribute' => 'customer_id',
                    'value' => function ($model) {
                        return $model->customer->fullName ?? '';
                    },
                ],


                'transact_date',
                // 'business_type',
                'transact_id',
                'name',
                // 'entryid',
                'category',
                // 'account_code',
                // 'quantity',
                // 'uom',
                // 'vat',
                // 'unit_price',
                'entry_type',
                [
                    'attribute' => 'currency',
                    'pageSummary' => 'Total',

                ],
                [
                    'attribute' => 'dramount',
                    'pageSummary' => true,
                    'format' => ['decimal', 2]
                ],
                [
                    'attribute' => 'cramount',
                    'pageSummary' => true,
                    'format' => ['decimal', 2]
                ],
                'descr:ntext',
                'created_at',

                // 'erate',
                // 'descr:ntext',
                // 'fyid',
                // 'reference_no',
                // 'status',
                // 'wid',
                // 'stid',
                // 'wfstatus',
                // 'requserinput',
                // 'created_by',
                // 'updated_by',
                // 'updated_at',

                [
                    'class' => 'kartik\grid\ActionColumn',
                    //'visible' => User::auth('admin'),
                    // 'noWrap' => true,
                    'template' => '{view}',
                    'buttons' => [
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-lg btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i> View</button>',
                                Yii::$app->urlManager->createUrl(['commissions/view', 'id' => $model->id]),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],

            ],
        ]); ?>


    </div>
</div>