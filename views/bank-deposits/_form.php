<?php

use yii\helpers\Html;
use app\models\Expenses;
use kartik\date\DatePicker;
use kartik\select2\Select2;
use app\models\BankDeposits;
use yii\widgets\MaskedInput;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\BankDeposits $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="bank-deposits-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-4">
            <?= $form->field($model, 'accid')->widget(Select2::class, [
                'data' => BankDeposits::getBankAccounts(),
                'options' => ['placeholder' => 'Select Bank Account', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => '#exampleModalCenter',
                ],
            ]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'deposit_by')->widget(Select2::class, [
                'data' => Expenses::getEmployees(),
                'options' => ['placeholder' => 'Select Depositor', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => '#exampleModalCenter',

                ],
            ]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'amount')
            // ->widget(MaskedInput::class, [
            //     'clientOptions' => [
            //         'alias' =>  'decimal',
            //         'groupSeparator' => ',',
            //         'radixPoint' => '.',
            //         'digits' => 2,
            //         'autoGroup' => true,
            //         'rightAlign' => false,
            //         // 'digitsOptional' => false,
            //         'removeMaskOnSubmit' => true,
            //     ],
            // ])
            ->textInput(['placeholder' => 'Enter Amount.']) ?>

        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <?= $form->field($model, 'billdate')->widget(DatePicker::class, [
                'options' => [
                    'class' => 'form-control',
                    'placeholder' => 'Select Bill Date',
                    'value' => date('Y-m-d')
                ],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'yyyy-mm-dd'
                ]
            ])

            ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'deposit_date')->widget(DatePicker::class, [
                'options' => [
                    'class' => 'form-control',
                    'placeholder' => 'Select Deposit Date',
                   // 'value' => date('Y-m-d')
                ],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'yyyy-mm-dd'
                ]
            ]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'descr')->textarea(['rows' => 3]) ?>

        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
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