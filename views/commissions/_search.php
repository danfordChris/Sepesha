<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\CommissionsSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="commissions-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'customer_id') ?>

    <?= $form->field($model, 'transact_date') ?>

    <?= $form->field($model, 'business_type') ?>

    <?= $form->field($model, 'transact_id') ?>

    <?php // echo $form->field($model, 'name') ?>

    <?php // echo $form->field($model, 'entryid') ?>

    <?php // echo $form->field($model, 'entry_type') ?>

    <?php // echo $form->field($model, 'category') ?>

    <?php // echo $form->field($model, 'account_code') ?>

    <?php // echo $form->field($model, 'quantity') ?>

    <?php // echo $form->field($model, 'uom') ?>

    <?php // echo $form->field($model, 'vat') ?>

    <?php // echo $form->field($model, 'unit_price') ?>

    <?php // echo $form->field($model, 'dramount') ?>

    <?php // echo $form->field($model, 'cramount') ?>

    <?php // echo $form->field($model, 'currency') ?>

    <?php // echo $form->field($model, 'erate') ?>

    <?php // echo $form->field($model, 'descr') ?>

    <?php // echo $form->field($model, 'fyid') ?>

    <?php // echo $form->field($model, 'reference_no') ?>

    <?php // echo $form->field($model, 'status') ?>

    <?php // echo $form->field($model, 'wid') ?>

    <?php // echo $form->field($model, 'stid') ?>

    <?php // echo $form->field($model, 'wfstatus') ?>

    <?php // echo $form->field($model, 'requserinput') ?>

    <?php // echo $form->field($model, 'created_by') ?>

    <?php // echo $form->field($model, 'updated_by') ?>

    <?php // echo $form->field($model, 'created_at') ?>

    <?php // echo $form->field($model, 'updated_at') ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Search'), ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton(Yii::t('app', 'Reset'), ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
