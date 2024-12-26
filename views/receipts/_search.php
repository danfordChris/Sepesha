<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\ReceiptsSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="receipts-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'recid') ?>

    <?= $form->field($model, 'recno') ?>

    <?= $form->field($model, 'customer_id') ?>

    <?= $form->field($model, 'amount') ?>

    <?= $form->field($model, 'balance') ?>

    <?php // echo $form->field($model, 'desc') ?>

    <?php // echo $form->field($model, 'ref_no') ?>

    <?php // echo $form->field($model, 'control_no') ?>

    <?php // echo $form->field($model, 'issue_by') ?>

    <?php // echo $form->field($model, 'appr_by') ?>

    <?php // echo $form->field($model, 'status') ?>

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
