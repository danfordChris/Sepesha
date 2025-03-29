<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\BookingSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="booking-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'customer_id') ?>

    <?= $form->field($model, 'agent_id') ?>

    <?= $form->field($model, 'driver_id') ?>

    <?= $form->field($model, 'vehicle_id') ?>

    <?php // echo $form->field($model, 'vendor_id') ?>

    <?php // echo $form->field($model, 'driver_assignment_id') ?>

    <?php // echo $form->field($model, 'booking_reference') ?>

    <?php // echo $form->field($model, 'fee_category_id') ?>

    <?php // echo $form->field($model, 'discount_code') ?>

    <?php // echo $form->field($model, 'discount_code_value') ?>

    <?php // echo $form->field($model, 'referal_code') ?>

    <?php // echo $form->field($model, 'referal_code_value') ?>

    <?php // echo $form->field($model, 'recepient_name') ?>

    <?php // echo $form->field($model, 'recepient_phone') ?>

    <?php // echo $form->field($model, 'recepient_address') ?>

    <?php // echo $form->field($model, 'type') ?>

    <?php // echo $form->field($model, 'pyment_mode') ?>

    <?php // echo $form->field($model, 'description') ?>

    <?php // echo $form->field($model, 'weight') ?>

    <?php // echo $form->field($model, 'base_rate_km') ?>

    <?php // echo $form->field($model, 'base_price') ?>

    <?php // echo $form->field($model, 'vehicle_multipplier') ?>

    <?php // echo $form->field($model, 'vat') ?>

    <?php // echo $form->field($model, 'other_charge') ?>

    <?php // echo $form->field($model, 'driver_comission_rate') ?>

    <?php // echo $form->field($model, 'vendor_comission_rate') ?>

    <?php // echo $form->field($model, 'office_comission_rate') ?>

    <?php // echo $form->field($model, 'agent_comission_rate') ?>

    <?php // echo $form->field($model, 'driver_bonus') ?>

    <?php // echo $form->field($model, 'vendor_bonus') ?>

    <?php // echo $form->field($model, 'customer_bonus') ?>

    <?php // echo $form->field($model, 'volume') ?>

    <?php // echo $form->field($model, 'price') ?>

    <?php // echo $form->field($model, 'discount') ?>

    <?php // echo $form->field($model, 'distance_km') ?>

    <?php // echo $form->field($model, 'amount') ?>

    <?php // echo $form->field($model, 'currency') ?>

    <?php // echo $form->field($model, 'pickup_location') ?>

    <?php // echo $form->field($model, 'delivery_location') ?>

    <?php // echo $form->field($model, 'pickup_latitude') ?>

    <?php // echo $form->field($model, 'pickup_longitude') ?>

    <?php // echo $form->field($model, 'delivery_latitude') ?>

    <?php // echo $form->field($model, 'delivery_longitude') ?>

    <?php // echo $form->field($model, 'pickup_date') ?>

    <?php // echo $form->field($model, 'delivery_date') ?>

    <?php // echo $form->field($model, 'scheduled_time') ?>

    <?php // echo $form->field($model, 'pickup_photo') ?>

    <?php // echo $form->field($model, 'delivery_photo') ?>

    <?php // echo $form->field($model, 'status') ?>

    <?php // echo $form->field($model, 'created_by') ?>

    <?php // echo $form->field($model, 'updated_by') ?>

    <?php // echo $form->field($model, 'deleted_at') ?>

    <?php // echo $form->field($model, 'created_at') ?>

    <?php // echo $form->field($model, 'updated_at') ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Search'), ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton(Yii::t('app', 'Reset'), ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
