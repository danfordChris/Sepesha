<?php

use app\models\Bus;
use app\models\Employee;
use yii\helpers\Html;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;
use app\models\EmployeeCategory;

/** @var yii\web\View $this */
/** @var app\models\EmployeeCategory $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="employee-category-form">

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
            <?= $form->field($model, 'name')->textInput(['maxlength' => true, 'placeholder' => 'Enter Category Name']) ?>

        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'type')->widget(Select2::class, [
                'data' => EmployeeCategory::getCategoryType(),
                'options' => ['placeholder' => 'Select Employee Type', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                ],
            ]) ?>

        </div>

    </div>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'descr')->textarea(['rows' => 3, 'placeholder' => 'Enter Description']) ?>

        </div>
        <?php if (!$model->isNewRecord) : ?>
            <div class="col-md-6">
                <?= $form->field($model, 'status')->widget(Select2::class, [
                    'data' => Employee::getStatusOptions(),
                    'options' => ['placeholder' => 'Select Status', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ])

                ?>
            </div>
        <?php endif; ?>
        <div class="col-md-6 mt-4">
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