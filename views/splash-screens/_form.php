<?php

use Yii;
use yii\helpers\Html;
use kartik\file\FileInput;
use kartik\select2\Select2;
use app\models\CustomHelper;
use kartik\editors\Summernote;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\SplashScreens $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="splash-screens-form card card-body">

    <?php

    $formAction = $model->isNewRecord ? ['create'] : ['update', 'id' => $model->id];
    $form = ActiveForm::begin([
        'action' => $formAction,
    ]);
?>

    <div class="row">



        <?= $form->field($model, 'name')->widget(\yii\redactor\widgets\Redactor::class, [
            'clientOptions' => [
                'imageManagerJson' => false,
                'imageUpload' => false,
                'fileUpload' => false,
                'linkUpload' => false,
                'lang' => 'en',
            ]
        ]) ?>

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


        <?= $form->field($model, 'type')->label('reference_id')->textInput(['maxlength' => true]) ?>


    </div>


    <div class="row">

        <?= $form->field($model, 'order')->textInput(['maxlength' => true]) ?>


        <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>


        <?= $form->field($model, 'category')->dropDownList([ 'splash1' => 'Splash1', 'splash2' => 'Splash2', 'splash3' => 'Splash3', 'sigup' => 'Sigup', ], ['prompt' => '']) ?>

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