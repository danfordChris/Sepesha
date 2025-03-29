<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Booking $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="booking-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'customer_id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'agent_id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'driver_id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vehicle_id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vendor_id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'driver_assignment_id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'booking_reference')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'fee_category_id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'discount_code')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'discount_code_value')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'referal_code')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'referal_code_value')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'recepient_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'recepient_phone')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'recepient_address')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'type')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'pyment_mode')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'weight')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'base_rate_km')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'base_price')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vehicle_multipplier')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vat')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'other_charge')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'driver_comission_rate')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vendor_comission_rate')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'office_comission_rate')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'agent_comission_rate')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'driver_bonus')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vendor_bonus')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'customer_bonus')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'volume')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'price')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'discount')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'distance_km')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'amount')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'currency')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'pickup_location')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'delivery_location')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'pickup_latitude')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'pickup_longitude')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'delivery_latitude')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'delivery_longitude')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'pickup_date')->textInput() ?>

    <?= $form->field($model, 'delivery_date')->textInput() ?>

    <?= $form->field($model, 'scheduled_time')->textInput() ?>

    <?= $form->field($model, 'pickup_photo')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'delivery_photo')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'status')->dropDownList([ 'pending' => 'Pending', 'assigned' => 'Assigned', 'intransit' => 'Intransit', 'completed' => 'Completed', 'canceled' => 'Canceled', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'created_by')->textInput() ?>

    <?= $form->field($model, 'updated_by')->textInput() ?>

    <?= $form->field($model, 'deleted_at')->textInput() ?>

    <?= $form->field($model, 'created_at')->textInput() ?>

    <?= $form->field($model, 'updated_at')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
