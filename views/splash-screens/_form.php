<?php

use app\models\CustomHelper;
use kartik\file\FileInput;
use kartik\select2\Select2;
use Yii;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\SplashScreens $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="splash-screens-form">

<?php $form = ActiveForm::begin([
        'action'=>['create'],
    ]); ?>

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
        <?= $form->field($model, 'type')->textInput(['maxlength' => true]) ?>

        </div>
        </div>
      
  
    <div class="row">
        <div class="col-md-4">
        <?= $form->field($model, 'order')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-4">
        <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-4">
        <?= $form->field($model, 'category')->dropDownList([ 'splash1' => 'Splash1', 'splash2' => 'Splash2', 'splash3' => 'Splash3', 'sigup' => 'Sigup', ], ['prompt' => '']) ?>

        </div>
    </div>

    <div class="row">
     
        <div class="col-md-6">
        <?= $form->field($model, 'app')->dropDownList([ 'customer' => 'Customer', 'driver' => 'Driver', ], ['prompt' => '']) ?>

        </div>
        <div class="col-md-6">
        <?php if (!$model->isNewRecord): ?>

<?= $form->field($model, 'status')->widget(Select2::class, [
    'data' => CustomHelper::getStatusOptions(),
    'options' => ['placeholder' => 'Select status', 'required' => true],
    'pluginOptions' => [
        'allowClear' => true,
  

    ],
]) ?>
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
