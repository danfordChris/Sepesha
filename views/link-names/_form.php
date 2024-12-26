<?php

use app\models\CustomHelper;
use app\models\LinkNames;
use app\models\ModuleMenu;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model backend\models\LinkNames */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="link-names">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'label')->textInput(['maxlength' => true, 'placeholder' => 'Enter Link label to be displayed in Navigation Menu e.g Expenses']) ?>
    <?= $form->field($model, 'isparent')->dropDownList(['1' => 'Yes', '0' => 'No'], ['maxlength' => true, 'prompt' => '--select--']) ?>
    <?= $form->field($model, 'parentid')->dropDownList(LinkNames::getParent(), ['maxlength' => true, 'prompt' => '--no parent--']) ?>
    <?= $form->field($model, 'has_submenu')->dropDownList(['1' => 'Yes', '0' => 'No'], ['maxlength' => true, 'prompt' => '--select--']) ?>
    <?= $form->field($model, 'module')->dropDownList(ModuleMenu::getModuleOptions(), ['maxlength' => true, 'prompt' => '--select--']) ?>
    <?= $form->field($model, 'description')->textArea(['row' => 3, 'placeholder' => 'Enter link description']) ?>
    <?= $form->field($model, 'order')->textInput(['placeholder' => 'Enter menu order number']) ?>
    <?= $form->field($model, 'url')->textInput(['placeholder' => 'Enter URL']) ?>
    <?= $form->field($model, 'icon')->dropDownList(CustomHelper::menuicons(), ['maxlength' => true, 'prompt' => '--select--']) ?>
    <?= $form->field($model, 'status')->dropDownList(['1' => 'Active', '0' => 'Inactive'], ['maxlength' => true, 'prompt' => '--select--']) ?>

    <?php if ($model->isNewRecord) : ?>
        <?= $form->field($model, 'access_name')->textInput(['maxlength' => true, 'placeholder' => 'Name for Link as instructed by System Admin']) ?>
    <?php endif ?>
    <div class="form-group">
        <?= Html::a('<i class="bi bi-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
        <?= Html::submitButton(
            $model->isNewRecord ? Yii::t('app', 'Save Link') : Yii::t('app', 'Update'),
            ['class' => $model->isNewRecord ? 'btn btn-success btn-bordered btn-rounded' : 'btn btn-primary btn-bordered btn-rounded']
        ); ?>
    </div>

    <?php ActiveForm::end(); ?>


</div>