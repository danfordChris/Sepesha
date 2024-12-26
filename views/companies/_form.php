<?php

use yii\helpers\Html;
use app\models\Regions;
use yii\jui\DatePicker;
use kartik\builder\Form;
use app\models\Companies;
use app\models\Countries;
use kartik\select2\Select2;
use yii\helpers\ArrayHelper;
use yii\widgets\MaskedInput;
use kartik\widgets\ActiveForm;
use kartik\datecontrol\DateControl;

/**
 * @var yii\web\View $this
 * @var backend\models\salespoint\Suppliers $model
 * @var yii\widgets\ActiveForm $form
 */
?>

<div class="company-form">

    <?php $form = ActiveForm::begin(['type' => ActiveForm::TYPE_VERTICAL]);  ?>



    <div class="row">
        <div class="col-md-4">

            <?= $form->field($model, 'company_name')->input('text') ?>
        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'company_email') ?>
        </div>
        <div class="col-md-4">

            <?= $form->field($model, 'company_address') ?>

        </div>
    </div>

    <div class="row">

        <div class="col-md-4">
            <?= $form->field($model, 'company_start_date')->hiddenInput(['value' => date('Y-m-d')])->label(false) ?>
        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'company_status') ?>
        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'tin_no') ?>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <?php if (!$model->isNewRecord) : ?>
            <?= Html::img('/uploads/' . $model->logo, ['class' => '', 'width' => 80]) ?>
            <?php endif; ?>
            <?= $form->field($model, 'logo')->fileInput() ?>
        </div>
        <?php if (!$model->isNewRecord) : ?>
        <div class="col-md-4">
            <?= $form->field($model, 'status')->dropDownList(Companies::getStatusOptions()) ?>
        </div>
        <?php endif; ?>
        <?php if ($model->isNewRecord) : ?>
        <div class="col-md-4 mt-4">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <?php echo Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']); ?>
        </div>
        <?php else : ?>
        <div class="col-md-4 mt-4">
            <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
            <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
        </div>
        <?php endif; ?>
    </div>




    <?php ActiveForm::end(); ?>
</div>