<?php

use app\models\Banks;
use yii\helpers\Html;
use yii\jui\DatePicker;
use app\models\Vouchers;
use kartik\select2\Select2;
use app\models\AccountCodes;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Banks $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="banks-form">

    <?php $form = ActiveForm::begin(); ?>
    <div class="row">

        <div class="col-md-4">
            <?= $form->field($model, 'bankname')->textInput(['maxlength' => true, 'placeholder' => 'Enter Bank Name']) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'banksname')->textInput(['maxlength' => true, 'placeholder' => 'Enter Bank Abbreviation']) ?>

        </div>

        <div class="col-md-4">
            <?= $form->field($model, 'branch')->textInput(['maxlength' => true, 'placeholder' => 'Enter Branch']) ?>

        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <?= $form->field($model, 'swiftcode')->textInput(['maxlength' => true, 'placeholder' => 'Enter Swift  Code']) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'address')->textInput(['maxlength' => true, 'placeholder' => 'Enter Bank Address']) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field(
                $model,
                'start_date',

            )->widget(DatePicker::class, [

                'clientOptions' => [
                    'changeMonth' => true,
                    'changeYear' => true,
                    'autoSize' => true,
                    'language' => 'en',

                ],
                'options' => [
                    'class' => 'form-control',
                    'placeholder' => 'Select Start Date'
                ],

                'dateFormat' => 'php:yy-m-d',

            ]) ?>

        </div>

    </div>
    <div class="row">

        <div class="col-md-4 mt-5">
            <div class="form-group">
                <?php if ($model->isNewRecord) : ?>
                <button type="button" class="btn btn-danger light btn-sm" data-bs-dismiss="modal">Close</button>
                <?php echo Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-sm btn btn-info']); ?>
                <?php else : ?>
                <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-sm btn-secondary']); ?>
                <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-sm btn-primary']); ?>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <?php ActiveForm::end(); ?>

</div>