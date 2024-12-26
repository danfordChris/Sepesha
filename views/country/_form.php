<?php

use app\models\Employee;
use kartik\select2\Select2;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Country $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="country-form">

    <?php
    if ($model->isNewRecord) {
        $action = 'create';
        $parent = '#rcamodal';
        $md = 4;
    } else {

        $action = 'update?rca=' . Yii::$app->getSecurity()->hashData($model->country_id, 'gmtdev');
        $parent = '';
        $md = 3;
    }
    $form = ActiveForm::begin([
        'action' => [$action],
        'method' => 'post',

    ]); ?>

    <div class="row">
        <div class="col-md-4">
            <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'iso')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'iso3')->textInput(['maxlength' => true]) ?>

        </div>
    </div>


    <div class="row">
        <div class="col-md-4">
            <?= $form->field($model, 'phonecode')->textInput() ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'continent_code')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'continent_name')->textInput(['maxlength' => true]) ?>

        </div>
    </div>

    <div class="row">

        <?php if (!$model->isNewRecord) : ?>
            <div class="col-md-3">
                <?= $form->field($model, 'status')->widget(Select2::class, [
                    'data' => Employee::getOptions(),
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
                <?php echo Html::submitButton(Yii::t('app', 'Add'), ['class' => 'btn btn-outline-info']); ?>
            <?php else : ?>
                <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
                <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
            <?php endif; ?>
        </div>

    </div>

    <?php ActiveForm::end(); ?>

</div>