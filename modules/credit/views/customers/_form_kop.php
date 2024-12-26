<?php

use yii\helpers\Html;
use kartik\widgets\ActiveForm;

?>

<div class="objective-form">

    <?php $form = ActiveForm::begin(); ?>
    <?= $form->errorSummary($modelCr)?>
    <?= $form->field($modelCr, 'camount')->textInput(['maxlength' => true]) ?>
    <?= $form->field($modelCr, "cdate")->widget(\yii\jui\DatePicker::class, [
                //'language' => 'ru',
                'options' => [
                    'class' => 'form-control', 'autocomplete' => 'off', 'placeholder' => 'Date'
                ],
                'dateFormat' => 'php:Y-m-d',

                //'dateFormat' =>'php:d/m/Y'
                'clientOptions' => [
                    //'numberOfMonths' =>2,
                    //'minDate' => 'D',
                    'changeMonth' => true,
                    'changeYear' => true,

                ],

            ]) ?>

    <?= $form->field($modelCr, 'descr')->textarea(['rows' => 2]) ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
