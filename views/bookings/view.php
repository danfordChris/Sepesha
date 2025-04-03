<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\CustomHelper;
use app\widgets\AttachmentTableWidget;

/** @var yii\web\View $this */
/** @var app\models\DriverVehicleAssignment $model */

$this->title = 'Bookings details';
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Bookings'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="booking-view card card-body">

    <h4><?= Html::encode($this->title) ?></h4>


    <div class="row">
        <div class="col">
            <?= DetailView::widget([
                'model' => $model,
                'options' => ['class' => ' table table-responsive bordered table-sm'],
                'attributes' => [
                    'driver_comission_rate',
                    'vendor_comission_rate',
                    'office_comission_rate:ntext:Sepesha Commission Rate',
                    'pyment_mode',
                    'description:ntext',
                    'base_rate_km',
                    'base_price',
                    'vehicle_multipplier',
                    'discount',
                    'distance_km',
                    'customer_id',
                    'type',
                    'driver_id',
                    'vehicle_id',
                    'booking_reference',
                    'fee_category_id',
                    'discount_code',
                    'discount_code_value',
                    'referal_code',
                    'referal_code_value',
                    'recepient_name',
                    'recepient_phone',
                    'recepient_address',


                ],
            ])
            ?>
        </div>


        <div class="col">
            <?= DetailView::widget([
                'model' => $model,
                'options' => ['class' => ' table table-responsive bordered table-sm'],
                'attributes' => [

                    [
                        'attribute' => 'driver_comission_rate',
                        'label' => 'Driver Commission',
                        'format' => ['decimal', 2],
                        'value' => function ($model) {
                            return $model->driver_comission_rate * $model->amount;
                        },
                    ],

                    [
                        'attribute' => 'vendor_comission_rate',
                        'label' => 'Vendor Commission',
                        'format' => ['decimal', 2],
                        'value' => function ($model) {
                            return $model->vendor_comission_rate * $model->amount;
                        },
                    ],

                    [
                        'attribute' => 'office_comission_rate',
                        'label' => 'Sepesha Commission',
                        'format' => ['decimal', 2],
                        'value' => function ($model) {
                            return $model->office_comission_rate * $model->amount;
                        },
                    ],

                    [
                        'attribute' => 'amount',
                        'label' => 'Total Amount',
                        'format' => ['decimal', 2],
                        'value' => function ($model) {
                            return $model->amount;
                        },
                    ],

                    'currency',
                    'pickup_location',
                    'delivery_location',
                    'pickup_latitude',
                    'pickup_longitude',
                    'delivery_latitude',
                    'delivery_longitude',
                    'pickup_date',
                    'delivery_date',
                    'pickup_photo',
                    'delivery_photo',
                    'created_by',
                    'updated_by',
                    'deleted_at',
                    'created_at',
                    'updated_at',
                    'status',

                ],
            ])
            ?>
        </div>
    </div>




</div>