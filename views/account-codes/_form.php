<?php

use app\models\AccountCodes;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\select2\Select2;


/** @var yii\web\View $this */
/** @var app\models\AccountCodes $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="account-codes-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'code')->textInput(['maxlength' => true]) ?>
        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'category')->widget(Select2::class, [
                'data' => AccountCodes::getCodeCategory(),
                'options' => ['placeholder' => 'Select Category', 'required' => true],

                'pluginOptions' => [
                    'allowClear' => true,
                    'depends' => ['exampleModalCenter'],
                ],
            ]) ?>

        </div>

    </div>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'descr')->textarea(['rows' => 1]) ?>
        </div>
    </div>

    <div class="row mt-2">
        <div class="col-md-6">
            <div class="form-group">
                <?php if ($model->isNewRecord) : ?>
                    <button type="button" class="btn btn-danger light btn-sm" data-bs-dismiss="modal">Close</button>
                    <?php echo Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-sm btn btn-primary']); ?>
                <?php else : ?>
                    <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index', 'ld' => $model->coid], ['class' => 'btn btn-sm btn-secondary']); ?>
                    <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-sm btn-primary']); ?>
                <?php endif; ?>
            </div>

        </div>
    </div>

    <?php ActiveForm::end(); ?>

</div>