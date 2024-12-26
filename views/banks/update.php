<?php

use app\models\Banks;
use yii\helpers\Html;
use yii\jui\DatePicker;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Banks $model */

$this->title = 'Update Banks: ' . $model->banksname;
$this->params['breadcrumbs'][] = ['label' => 'Banks', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->banksname,'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="banks-update card">

    <div class="card-header bg-primary text-white">
        <h5 class="mt-1 text-white"><?= Html::encode($this->title) ?></h5>
    </div>

    <div class="card-body">

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


            <div class="col-md-4">
                <?= $form->field($model, 'status')->dropDownList(Banks::getStatusOptions()) ?>
            </div>
            <div class="col-md-4 mt-5">
                <div class="form-group">
                    <?php if ($model->isNewRecord) : ?>
                    <button type="button" class="btn btn-danger light btn-sm" data-bs-dismiss="modal">Close</button>
                    <?php echo Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-sm btn btn-primary']); ?>
                    <?php else : ?>
                    <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-sm btn-secondary']); ?>
                    <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-sm btn-primary']); ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <?php ActiveForm::end(); ?>

    </div>
</div>