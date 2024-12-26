<?php

use app\models\CustomHelper;
use Yii;
use yii\helpers\Html;
use app\models\Services;
use kartik\widgets\Select2;
use kartik\widgets\ActiveForm;


/** @var yii\web\View $this */
/** @var app\models\DriverVehicleAssignment $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="driver-vehicle-assignment-form">

    <?php $form = ActiveForm::begin(); ?>

<div class="row">
    <div class="col-md-4">
    <?= $form->field($model, 'vehicle_id')->widget(Select2::class, [
    'data' => CustomHelper::getVehicles(), 
    'options' => ['placeholder' => 'Select--'],
    'pluginOptions' => [
        'allowClear' => true,
    ],
]) ?>

    </div>

    <div class="col-md-4">
    <?= $form->field($model, 'latitude')->textInput(['maxlength' => true]) ?>

    </div>
    <div class="col-md-4">
    <?= $form->field($model, 'longitude')->textInput(['maxlength' => true]) ?>

    </div>
  
</div>

 <div class="row">
 <div class="col-md-4">
    <?= $form->field($model, 'location_updated_at')->textInput() ?>

    </div>
    <div class="col-md-4">
    <?= $form->field($model, 'assignment_start')->textInput() ?>

    </div>
    <div class="col-md-4">
    <?= $form->field($model, 'assignment_end')->textInput() ?>

    </div>
  
 </div>

<div class="row">
  
    <div class="col-md-4">
    <?= $form->field($model, 'status')->textInput(['maxlength' => true]) ?>

    </div>
 
    <div class="col-md-4">
    <?= $form->field($model, 'approval_status')->textInput(['maxlength' => true]) ?>

    </div>
    <div class="col-md-4">
    <?= $form->field($model, 'approved_by')->textInput() ?>

    </div>
</div>









    <?= $form->field($model, 'approved_at')->textInput() ?>

    <?= $form->field($model, 'approval_comments')->textInput(['maxlength' => true]) ?>

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
