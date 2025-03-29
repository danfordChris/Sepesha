<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Settings $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="settings-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col">
            <?= $form->field($model, 'password_change') ?>
            <?= $form->field($model, 'login_attempts') ?>
            <?= $form->field($model, 'mail_port') ?>
            <?= $form->field($model, 'timezone') ?>
            <?php //= $form->field($model, 'appname') ?>
            <?= $form->field($model, 'mail_host') ?>
            <?= $form->field($model, 'password_template')->dropDownList($model::PassTemplates()) ?>
            <?php //= $form->field($model, 'age_limit') ?>
            <?= $form->field($model, 'vendor_commission') ?>

        </div>

        <div class="col">
            <?= $form->field($model, 'mail_username') ?>
            <?= $form->field($model, 'mail_password')->passwordInput() ?>
            <?= $form->field($model, 'mail_encryption') ?>
            <?php //= $form->field($model, 'mail_dns') ?>
            <?= $form->field($model, 'mail_senderEmail') ?>
            <?= $form->field($model, 'mail_senderNamE') ?>
            <?= $form->field($model, 'admin_email') ?>
            <?= $form->field($model, 'driver_commission') ?>
        </div>



    </div>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>