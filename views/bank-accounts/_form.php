<?php

use app\models\Bus;
use yii\helpers\Html;
use yii\jui\DatePicker;
use kartik\select2\Select2;
use app\models\BankAccounts;
use yii\widgets\MaskedInput;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\BankAccounts $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="bank-accounts-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-3">
            <?= $form->field($model, 'accname')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'account_no')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'bankname')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'banksname')->textInput(['maxlength' => true]) ?>

        </div>
    </div>

    <div class="row">

        <div class="col-md-3">
            <?= $form->field($model, 'openbal')
            // ->widget(MaskedInput::class, [
            //     'clientOptions' => [
            //         'alias' =>  'decimal',
            //         'groupSeparator' => ',',
            //         'radixPoint' => '.',
            //         'digits' => 2,
            //         'rightAlign' => false,
            //         'autoGroup' => true,
            //         // 'digitsOptional' => false,
            //         'removeMaskOnSubmit' => true,
            //     ],
            // ])
            ->textInput(['placeholder' => 'Enter Open Balance                                       .']) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'currency')->widget(Select2::class, [
                                'data' => BankAccounts::getCurrency(),
                                'options' => ['placeholder' => 'Select Currency', 'required' => true],
                                'pluginOptions' => [
                                    'allowClear' => true,
                                ],
                            ]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'start_date')->widget(DatePicker::class, [

                'clientOptions' => [
                    'changeMonth' => true,
                    'changeYear' => true,
                    'autoSize' => true,
                    'language' => 'en',

                ],
                'options' => [
                    'class' => 'form-control',
                    'placeholder' => 'Select Start Date',
                    'value' => date('Y-m-d')
                ],

                'dateFormat' => 'php:Y-m-d',

            ]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'branch')->textInput(['maxlength' => true]) ?>

        </div>

    </div>

    <div class="row">
        <div class="col-md-3">
            <?= $form->field($model, 'swiftcode')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'address')->textInput(['maxlength' => true]) ?>

        </div>

        <?php if (!$model->isNewRecord) : ?>
            <div class="col-md-3">
                <?= $form->field($model, 'status')->widget(Select2::class, [
                    'data' => Bus::getStatusOptions(),
                    'options' => ['placeholder' => 'Select Status', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ])

                ?>
            </div>
        <?php endif; ?>
        <div class="col-md-3 mt-4">
            <?php if ($model->isNewRecord) : ?>
                <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                <?php echo Html::submitButton(Yii::t('app', 'Create'), ['class' => 'btn btn-outline-info']); ?>
            <?php else : ?>
                <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
                <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
            <?php endif; ?>
        </div>
    </div>

    <?php ActiveForm::end(); ?>

</div>