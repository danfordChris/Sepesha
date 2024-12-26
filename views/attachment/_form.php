<?php

use app\models\CustomHelper;
use kartik\file\FileInput;
use kartik\select2\Select2;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Attachment $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="attachment-form">

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

    <?= $form->field($model, 'type')->widget(Select2::class, [
                'data' => CustomHelper::getWorkflowDocuments($workflow),
                'options' => ['id' => 'placement-select', 'placeholder' => 'Select Document'],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent

                ],
            ]) ?>

    <?= $form->field($model, 'description')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'attachment')->label(false)->widget(FileInput::class, [
        'pluginOptions' => ['allowedFileExtensions' => ['pdf'], 'width' => '300px', 'showCaption' => false, 'dropZoneEnabled' => false, 'showRemove' => false, 'showUpload' => false, 'showCancel' => false, 'browseClass' => 'btn btn-primary btn-block', 'browseIcon' => '<i class="fa fa-upload"></i> ', 'browseLabel' => '&nbsp;&nbsp;Add attachment (.pdf less than 1mb)']
    ]); ?>

    <div class="form-group">
        <?php if ($model->isNewRecord) : ?>
            <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
            <?php echo Html::submitButton(Yii::t('app', 'Add'), ['class' => 'btn btn-outline-info']); ?>
        <?php else : ?>
            <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
            <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
        <?php endif; ?>
    </div>

    <?= $form->field($model, 'owner_id')->hiddenInput()->label(false) ?>

    <?php ActiveForm::end(); ?>

</div>