<?php

use app\models\Bus;
use yii\helpers\Html;
use yii\jui\DatePicker;
use app\models\Employee;
use app\models\Expenses;
use kartik\select2\Select2;
use yii\widgets\MaskedInput;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Expenses $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="expenses-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-4">
            <?= $form->field($model, 'catid')->widget(Select2::class, [
                'data' => Expenses::getExpenseCategories(),
                'options' => ['placeholder' => 'Select Expense Category'],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => '#exampleModalCenter',

                ],
            ]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'empid')->widget(Select2::class, [
                'data' => Expenses::getEmployees(),
                'options' => ['placeholder' => 'Select Payer'],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => '#exampleModalCenter',

                ],
            ]) ?>

        </div>

        <div class="col-md-4">
            <?= $form->field($model, 'transact_date')->widget(DatePicker::class, [

                'clientOptions' => [
                    'changeMonth' => true,
                    'changeYear' => true,
                    'autoSize' => true,
                    'language' => 'en',

                ],
                'options' => [
                    'class' => 'form-control',
                    'placeholder' => 'Select Transaction Date',
                    'value' => date('Y-m-d')
                ],

                'dateFormat' => 'php:Y-m-d',

            ]) ?>

        </div>


    </div>


    <div class="row">

        <?php if ($model->trip_id !== null) : ?>
            <div class="col-md-4">
                <?= $form->field($model, 'busid')->widget(Select2::class, [
                    'data' => Expenses::getBuses(),
                    'options' => ['placeholder' => 'Select Bus',  'disabled' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>
            </div>
        <?php else : ?>
            <div class="col-md-4">
                <?= $form->field($model, 'busid')->widget(Select2::class, [
                    'data' => Expenses::getBuses(),
                    'options' => ['placeholder' => 'Select Bus'],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>
            </div>
        <?php endif; ?>

        <div class="col-md-4">
            <?= $form->field($model, 'location_id')->widget(Select2::class, [
                'data' => Expenses::getLocations(),
                'options' => ['placeholder' => 'Select Location'],
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
            <?= $form->field($model, 'reference_no')->textInput(['maxlength' => true, 'placeholder' => 'Enter Reference Number']) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'descr')->textarea(['rows' => 1]) ?>

        </div>
        <?php if (!$model->isNewRecord) : ?>
            <div class="col-md-4">
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
                <?php if ($model->trip_id !== null) : ?>
                    <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', Yii::$app->urlManager->createUrl(['expenses/index', 'hd' => $model->trip_id]), ['class' => 'btn btn-secondary']); ?>
                <?php else : ?>
                    <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index-plain','hd'=>$model->trip_id], ['class' => 'btn btn-secondary']); ?>
                <?php endif; ?>
                <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
            <?php endif; ?>
        </div>
    </div>


</div>

<?php ActiveForm::end(); ?>

</div>