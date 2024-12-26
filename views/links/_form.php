<?php

use app\models\User;
use app\models\Roles;
use yii\helpers\Html;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use kartik\switchinput\SwitchInput;
/* @var $this yii\web\View */
/* @var $model app\models\Links */
/* @var $form yii\widgets\ActiveForm */
?>
<div class="links-form  panel-body">
  <?php $form = ActiveForm::begin(); ?>
  <?php //= $form->field($model, 'link_name')->textInput(['maxlength' => true]) 
  ?>
  <?= $form->field($model, 'link_code')->widget(Select2::class, [
    'data' => ArrayHelper::map(app\models\LinkNames::find()->all(), 'access_name', function ($model) {
      return $model->label . '---' . $model['description'];
    }, function ($model) {
      return $model->mod ? $model->mod->name : "";
    }),
    'language' => 'en',
    'options' => [
      'placeholder' => '---Select Link Name---', 'id' => 'masterdData'

    ],
    'pluginOptions' => [
      'allowClear' => true,
      'hideSearch' => false,
    ],

  ]); ?>
  <?php //= $form->field($model, 'enabled')->textInput() 
  ?>

  <?= $form->field($model, 'role_id')->dropDownList(Roles::getRolesList(), ['prompt' => Yii::t('app', '--- Select User Type ---')]) ?>
  <?php
  $list = [1 => 'Yes', 0 => 'No'];
  /* Display an inline radio list */
  //echo $form->field($model, 'enabled')->radioList($list, ['inline'=>true]);
  $model->enabled = true;
  echo $form->field($model, 'enabled')->widget(SwitchInput::class, []);
  ?>
  <div class="form-group">
    <?= Html::a('<i class="bi bi-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
    <?= Html::submitButton(
      $model->isNewRecord ? Yii::t('app', 'Save Link') : Yii::t('app', 'Update'),
      ['class' => $model->isNewRecord ? 'btn btn-success btn-bordered btn-rounded' : 'btn btn-primary btn-bordered btn-rounded']
    ); ?>
  </div>
  <?php ActiveForm::end(); ?>

</div>