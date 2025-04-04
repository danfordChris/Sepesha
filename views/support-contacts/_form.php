<?php

use kartik\form\ActiveForm;
use kartik\select2\Select2;
use yii\helpers\Html;


/** @var yii\web\View $this */
/** @var app\models\SupportContacts $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="support-contacts-form">
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
            <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'email')->textInput(['maxlength' => true]) ?>

        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'phone')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'office')->textInput(['maxlength' => true]) ?>

        </div>
    </div>





    <div class="row">


        <div class="col-md-6">
            <?= $form->field($model, 'descr')->textarea(['rows' => 6]) ?>

        </div>

        <div class="col-md-6">
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