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


    <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [

                'id',
                'customer_id',
                'agent_id',
                'driver_id',
                'vehicle_id',
                'vendor_id',
                'driver_assignment_id',
                'booking_reference',
                'fee_category_id',
                'discount_code',
                'discount_code_value',
                'referal_code',
                'referal_code_value',
                'recepient_name',
                'recepient_phone',
                'recepient_address',
                'type',
                'pyment_mode',
                'description:ntext',
                'weight',
                'base_rate_km',
                'base_price',
                'vehicle_multipplier',
                'vat',
                'other_charge',
                'driver_comission_rate',
                'vendor_comission_rate',
                'office_comission_rate',
                'agent_comission_rate',
                'driver_bonus',
                'vendor_bonus',
                'customer_bonus',
                'volume',
                'price',
                'discount',
                'distance_km',
                'amount',
                'currency',
                'pickup_location',
                'delivery_location',
                'pickup_latitude',
                'pickup_longitude',
                'delivery_latitude',
                'delivery_longitude',
                'pickup_date',
                'delivery_date',
                'scheduled_time',
                'pickup_photo',
                'delivery_photo',
                'status',
                'created_by',
                'updated_by',
                'deleted_at',
                'created_at',
                'updated_at',

        
            ],
        ])
         ?>




</div>
