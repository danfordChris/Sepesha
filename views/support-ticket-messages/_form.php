<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\SupportTicketMessages $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="support-ticket-messages-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'support_ticket_id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'sender_id')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'sender_role')->dropDownList([ 'customer' => 'Customer', 'agent' => 'Agent', 'driver' => 'Driver', 'vendor' => 'Vendor', 'support' => 'Support', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'message')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'attachment')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'is_read')->textInput() ?>

    <?= $form->field($model, 'is_delivered')->textInput() ?>

    <?= $form->field($model, 'created_at')->textInput() ?>

    <?= $form->field($model, 'updated_at')->textInput() ?>

    <?= $form->field($model, 'created_by')->textInput() ?>

    <?= $form->field($model, 'updated_by')->textInput() ?>

    <?= $form->field($model, 'deleted_at')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
