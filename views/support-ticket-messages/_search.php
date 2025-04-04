<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\SupportTicketMessagesSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="support-ticket-messages-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'support_ticket_id') ?>

    <?= $form->field($model, 'sender_id') ?>

    <?= $form->field($model, 'sender_role') ?>

    <?= $form->field($model, 'message') ?>

    <?php // echo $form->field($model, 'attachment') ?>

    <?php // echo $form->field($model, 'is_read') ?>

    <?php // echo $form->field($model, 'is_delivered') ?>

    <?php // echo $form->field($model, 'created_at') ?>

    <?php // echo $form->field($model, 'updated_at') ?>

    <?php // echo $form->field($model, 'created_by') ?>

    <?php // echo $form->field($model, 'updated_by') ?>

    <?php // echo $form->field($model, 'deleted_at') ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Search'), ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton(Yii::t('app', 'Reset'), ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
