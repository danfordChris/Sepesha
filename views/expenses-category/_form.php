<?php

use app\models\Bus;
use yii\helpers\Html;
use kartik\widgets\Select2;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\ExpensesCategory $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="expenses-category-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'descr')->textarea(['rows' => 6]) ?>

        </div>

    </div>

    <div class="row">

        <?php if (!$model->isNewRecord) : ?>
            <div class="col-md-6">
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