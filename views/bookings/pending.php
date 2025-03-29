<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\grid\GridView;
use app\models\Regions;
use yii\grid\ActionColumn;
use app\models\SystemRoles;
use app\models\CustomHelper;
use reine\datatables\DataTables;

/** @var yii\web\View $this */
/** @var app\models\RegionsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Pending Bookings';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="booking-index card">

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

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                'id',
                'customer_id',
                'agent_id',
                'driver_id',
                'vehicle_id',
                //'vendor_id',
                //'driver_assignment_id',
                //'booking_reference',
                //'fee_category_id',
                //'discount_code',
                //'discount_code_value',
                //'referal_code',
                //'referal_code_value',
                //'recepient_name',
                //'recepient_phone',
                //'recepient_address',
                //'type',
                //'pyment_mode',
                //'description:ntext',
                //'weight',
                //'base_rate_km',
                //'base_price',
                //'vehicle_multipplier',
                //'vat',
                //'other_charge',
                //'driver_comission_rate',
                //'vendor_comission_rate',
                //'office_comission_rate',
                //'agent_comission_rate',
                //'driver_bonus',
                //'vendor_bonus',
                //'customer_bonus',
                //'volume',
                //'price',
                //'discount',
                //'distance_km',
                //'amount',
                //'currency',
                //'pickup_location',
                //'delivery_location',
                //'pickup_latitude',
                //'pickup_longitude',
                //'delivery_latitude',
                //'delivery_longitude',
                //'pickup_date',
                //'delivery_date',
                //'scheduled_time',
                //'pickup_photo',
                //'delivery_photo',
                //'status',
                //'created_by',
                //'updated_by',
                //'deleted_at',
                //'created_at',
                //'updated_at',

                [
                    'class' => 'yii\grid\ActionColumn',
                    //'visible' => User::auth('admin'),
                    // 'noWrap' => true,
                    'template' => '{view}',
                    'buttons' => [
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['bookings/view', 'id' => $model->id]),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],
            ],
        ]); ?>


    </div>
</div>