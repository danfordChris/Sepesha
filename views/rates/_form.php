<?php

use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\ExchangeRate $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="exchange-rate-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'gov_rate')->textInput(['maxlength' => true]) ?>

    <?php //= $form->field($model, 'internal_rate')->textInput(['maxlength' => true])
    ?>

    <?php //= $form->field($model, 'status')->textInput()
    ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>