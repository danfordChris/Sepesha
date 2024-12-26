<?php

use app\models\Bus;
use yii\helpers\Html;
use yii\jui\DatePicker;
use app\models\Expenses;
use kartik\select2\Select2;
use app\models\BankDeposits;
use app\models\Trips;
use yii\widgets\MaskedInput;
use kartik\widgets\ActiveForm;
use yii\helpers\ArrayHelper;

/** @var yii\web\View $this */
/** @var app\models\BankDeposits $model */

$this->title = 'Update Bank Deposit';
$this->params['breadcrumbs'][] = ['label' => 'Bank Deposits', 'url' => ['index']];
$this->params['breadcrumbs'][] = [ 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="bank-deposits-update card">

    <div class="card-header bg-success text-white">
        <h5 class="mt-2"><?= $this->title ?></h5>
    </div>
    <div class="card-body">

        <?php $form = ActiveForm::begin(); ?>

        <div class="row">

        <?= $form->field($model, 'tripid')->widget(Select2::class, [
                    'data' => ArrayHelper::map(Trips::find()->where(['status'=>10])->all(),'id',function($model){
                        return $model->bus->regno.' (Tarehe . '.date('Y-m-d',strtotime($model->start_date)).' )';
                    }),
                    'options' => ['placeholder' => 'Select Bus Trip'],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>

            <div class="col-md-4">
                <?= $form->field($model, 'accid')->widget(Select2::class, [
                    'data' => BankDeposits::getBankAccounts(),
                    'options' => ['placeholder' => 'Select Bank Account', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>

            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'deposit_by')->widget(Select2::class, [
                    'data' => Expenses::getEmployees(),
                    'options' => ['placeholder' => 'Select Depositor', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                       // 'dropdownParent' => '#exampleModalCenter',

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
            //         'rightAlign' => true,
            //         // 'digitsOptional' => false,
            //         'removeMaskOnSubmit' => true,
            //     ],
            // ])
            ->textInput(['placeholder' => 'Enter Amount                                       .']) ?>

        </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <?= $form->field($model, 'billdate')->widget(DatePicker::class, [

                    'clientOptions' => [
                        'changeMonth' => true,
                        'changeYear' => true,
                        'autoSize' => true,
                        'language' => 'en',

                    ],
                    'options' => [
                        'class' => 'form-control',
                        'placeholder' => 'Select Expense Date',
                        'value' => date('Y-m-d')
                    ],

                    'dateFormat' => 'php:Y-m-d',

                ]) ?>

            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'deposit_date')->widget(DatePicker::class, [

                    'clientOptions' => [
                        'changeMonth' => true,
                        'changeYear' => true,
                        'autoSize' => true,
                        'language' => 'en',

                    ],
                    'options' => [
                        'class' => 'form-control',
                        'placeholder' => 'Select Deposit Date',
                        'value' => date('Y-m-d')
                    ],

                    'dateFormat' => 'php:yy-m-d',

                ]) ?>

            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'descr')->textarea(['rows' => 3]) ?>

            </div>
        </div>

        <div class="row">
        <div class="col-md-3">
                <?= $form->field($model, 'status')->widget(Select2::class, [
                    'data' => Bus::getStatusOptions(),
                    'options' => ['placeholder' => 'Select Status', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>
            </div>
            <div class="col-md-4 mt-4">
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
</div>