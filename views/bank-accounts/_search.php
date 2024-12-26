<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\BankAccountsSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="bank-accounts-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'accname') ?>

    <?= $form->field($model, 'account_no') ?>

    <?= $form->field($model, 'bankname') ?>

    <?= $form->field($model, 'banksname') ?>

    <?php // echo $form->field($model, 'openbal') ?>

    <?php // echo $form->field($model, 'currency') ?>

    <?php // echo $form->field($model, 'branch') ?>

    <?php // echo $form->field($model, 'swiftcode') ?>

    <?php // echo $form->field($model, 'address') ?>

    <?php // echo $form->field($model, 'status') ?>

    <?php // echo $form->field($model, 'start_date') ?>

    <?php // echo $form->field($model, 'created_at') ?>

    <?php // echo $form->field($model, 'created_by') ?>

    <?php // echo $form->field($model, 'updated_at') ?>

    <?php // echo $form->field($model, 'updated_by') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
