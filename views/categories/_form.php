<?php

use app\models\Categories;
use kartik\widgets\ActiveForm;
use kartik\widgets\Select2;
use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Categories $model */
/** @var yii\widgets\ActiveForm $form */
?>


<div class="categories-form">

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
        <?= $form->field($model, 'sname')->textInput(['maxlength' => true]) ?>

        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
        <?= $form->field($model, 'type')->dropDownList(Categories::getCategoriesTypeList(), ['prompt' => '--select--']) ?>


        </div>
        <div class="col-md-6">
        <?= $form->field($model, 'program_id')->widget(Select2::class, [
                    'data' => Categories::getProgramList(),
                    'options' => ['placeholder' => 'Select program'],
                    'pluginOptions' => [
                        'allowClear' => true,
                       'dropdownParent' => $parent
                    ],
                ])

                ?>
        </div>
    </div>

<div class="row">
    <div class="col-md-6">
    <?= $form->field($model, 'description')->textarea(['rows' => 2, 'maxlength' => true]) ?>

    </div>
    <div class="col-md-6">
    <?php if (!$model->isNewRecord) : ?>
                <?= $form->field($model, 'status')->dropDownList(Categories::getStatusOptions()) ?>
        <?php endif; ?>
    </div>
</div>

   
  



    <div class="form-group">
    <?php if ($model->isNewRecord) : ?>
                <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                <?php echo Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-outline-info']); ?>
            <?php else : ?>
                <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
                <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
            <?php endif; ?>    </div>

    <?php ActiveForm::end(); ?>

</div>


