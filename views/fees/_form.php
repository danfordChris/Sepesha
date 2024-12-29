<?php

use app\models\CustomHelper;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;
use kartik\file\FileInput;
/** @var yii\web\View $this */
/** @var app\models\FeeCategory $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="fee-category-form">

 <?php  $formAction = $model->isNewRecord ? ['create'] : ['update', 'id' => $model->id];
    $form = ActiveForm::begin([
        'action' => $formAction,
    ]); 
?>
<div class="row">
    <div class="col-md-4">
    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    </div>
    <div class="col-md-4">
    <?= $form->field($model, 'photo')->widget(FileInput::class, [
                'options' => ['accept' => 'image/*'],
                'pluginOptions' => [
                    // 'uploadUrl' => Url::to(['@web/uploads/']),
                    'showPreview' => false,
                    'showCaption' => true,
                    'showRemove' => false,
                    'showCancel' => false,
                    'showUpload' => false
                ],
            ])->label('Photo (Max :1MB)') ?>
    </div>
    <div class="col-md-4">
    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

    </div>
</div>

<div class="row">
    <div class="col-md-4">
    <?= $form->field($model, 'vehicle_multiplier')->textInput(['maxlength' => true]) ?>

    </div>
    <div class="col-md-4">
    <?= $form->field($model, 'base_price')->textInput(['maxlength' => true]) ?>

    </div>
    <div class="col-md-4">
    <?= $form->field($model, 'price_per_km')->textInput(['maxlength' => true]) ?>

    </div>
</div>

<div class="row">
    <div class="col-md-4">
    <?= $form->field($model, 'capacity')->textInput(['maxlength' => true]) ?> 
    </div>
    <div class="col-md-4">
    <?= $form->field($model, 'icon')->widget(FileInput::class, [
    'options' => ['accept' => 'image/x-icon, image/svg+xml, image/png'],
    'pluginOptions' => [
        'showPreview' => false,
        'showCaption' => true,
        'showRemove' => false,
        'showCancel' => false,
        'showUpload' => false,
    ],
])->label('Icon (Max :1MB)') ?>

    </div>
    <div class="col-md-4">
    <?php if (!$model->isNewRecord) : ?>
    <?= $form->field($model, 'status')->dropDownList(['active'=>'Active','inactive'=>'Inactive']) ?>
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