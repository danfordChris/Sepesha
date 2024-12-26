<?php

use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\CustomerSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="customer-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'name') ?>

    <?= $form->field($model, 'type') ?>

    <?= $form->field($model, 'country') ?>

    <?= $form->field($model, 'region') ?>

    <?= $form->field($model, 'po_box') ?>

    <?= $form->field($model, 'physical_address') ?>

    <?php echo $form->field($model, 'pobox') ?>

    <?php echo $form->field($model, 'physical_address') ?>

    <?php echo $form->field($model, 'phone') ?>

    <?php echo $form->field($model, 'email') ?>

    <?php echo $form->field($model, 'district') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
