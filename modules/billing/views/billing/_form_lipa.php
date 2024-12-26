<?php

use yii\helpers\Html;
use yii\widgets\MaskedInput;
use kartik\widgets\ActiveForm;

?>

<div class="objective-form">

    <?php $form2 = ActiveForm::begin(); ?>
    <?= $form2->errorSummary($modelDbt)?>
    <?= $form2->field($modelDbt, 'damount')->textInput() ?>
    <?php
    // = $form2->field($modelDbt, 'damount')->widget(MaskedInput::class, [
    //                                 'clientOptions' => [
    //                                     'alias' => 'decimal',
    //                                     'groupSeparator' => ',',
    //                                     'autoGroup' => true
    //                                 ],
    //                             ])

                                ?>
    <?= $form2->field($modelDbt, "cdate")->widget(\yii\jui\DatePicker::class, [
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

    <?= $form2->field($modelDbt, 'descr')->textarea(['rows' => 2]) ?>



    <div class="modal-footer" style="text-align: center;">
    <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
                <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>

            </div>

    <?php ActiveForm::end(); ?>

</div>
