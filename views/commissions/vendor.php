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

$this->title = 'Vendor commissions';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="commissions-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <!-- <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal"
                    data-bs-target="#rcamodal">
                    <i class="fa fa-plus"></i>Create Driver Assignment</button>
            </div> -->
        </div>

        <?= GridView::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'showPageSummary' => true,
            'headerRowOptions' => ['style' => 'white-space: nowrap;'],

            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                // 'id',
                // 'customer_id',
                [
                    'attribute' => 'customer_id',
                    'value' => function ($model) {
                        return $model->customer->fullName ?? '';
                    },
                    'headerOptions' => ['style' => 'white-space: nowrap;'],
                ],

                [
                    'attribute' => 'transact_date',
                    'headerOptions' => ['style' => 'white-space: nowrap;'],
                ],

                // 'business_type',
                'transact_id',
                // 'name',
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
                // 'descr:ntext',
                // 'created_at',

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
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
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