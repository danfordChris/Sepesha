<?php

use kartik\date\DatePicker;
use kartik\form\ActiveForm;
use kartik\select2\Select2;
use yii\helpers\Html;


/** @var yii\web\View $this */
/** @var app\models\DiscountCodes $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="discount-codes-form">

    <?php
    if ($model->isNewRecord) {
        $action = 'create';
        $parent = '#rcamodal';
        $md = 4;
    } else {

        $action = 'update?rca=' . Yii::$app->getSecurity()->hashData($model->id, 'gmtdev');
        $parent = '';
        $md = 3;
    }
    $form = ActiveForm::begin([
        'action' => [$action],
        'method' => 'post',

    ]); ?>
    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'value')->textInput(['maxlength' => true]) ?>


        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'type')->widget(Select2::classname(), [
                'data' => [
                    'amount' => 'Amount',
                    'percent' => 'Percent',
                ],
                'options' => ['placeholder' => '-- Select Type --'],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent
                ],
            ]) ?>

        </div>
    </div>


    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'category')->widget(Select2::classname(), [
                'data' => [
                    'driver' => 'Driver',
                    'customer' => 'Customer',
                ],
                'options' => ['placeholder' => '-- Select Category --'],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent
                ],
            ]) ?>


        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'code')->textInput(['maxlength' => true]) ?>

        </div>
    </div>


    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'start_date')->widget(DatePicker::class, [
                'options' => [
                    'class' => 'form-control',
                    'placeholder' => 'Start Date',
                ],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'yyyy-mm-dd'
                ]
            ]) ?> </div>
        <div class="col-md-6">
            <?= $form->field($model, 'end_date')->widget(DatePicker::class, [
                'options' => [
                    'class' => 'form-control',
                    'placeholder' => 'End Date',
                ],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'yyyy-mm-dd'
                ]
            ]) ?>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">

            <?= $form->field($model, 'descr')->textarea(['rows' => 6]) ?>

        </div>
        <?php if (!$model->isNewRecord) : ?>
            <div class="col-md-6">

                <?= $form->field($model, 'status')->widget(Select2::classname(), [
                    'data' => [
                        '1' => 'Active',
                        '0' => 'Inactive',
                    ],
                    'options' => ['placeholder' => '-- Select Category --'],
                    'pluginOptions' => [
                        'allowClear' => true,
                        'dropdownParent' => $parent
                    ],
                ]) ?>

            </div>
        <?php endif; ?>
    </div>






    <div class="col-md-3 mt-4">
        <?php if ($model->isNewRecord) : ?>
            <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
            <?php echo Html::submitButton(Yii::t('app', 'Add'), ['class' => 'btn btn-outline-info']); ?>
        <?php else : ?>
            <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
            <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
        <?php endif; ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>