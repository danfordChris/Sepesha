<?php

use app\models\CustomHelper;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\FeeCategory $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="fee-category-form">

    <?php $form = ActiveForm::begin(); ?>


    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vehicle_multiplier')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'base_price')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'price_per_km')->textInput(['maxlength' => true]) ?>

    <?php if (!$model->isNewRecord) : ?>
    <?= $form->field($model, 'status')->dropDownList(['active'=>'Active','inactive'=>'Inactive']) ?>
    <?php endif; ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>