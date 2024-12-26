<?php

use app\models\Roles;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Role */
/* @var $form yii\widgets\ActiveForm */

$this->title = 'Create Role';
$this->params['breadcrumbs'][] = ['label' => 'Roles', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="role-create card card-body card-info">

    <h3 class=" card-header card-title"><?= Html::encode($this->title) ?></h3>

    <div class="role-form">

        <?php $form = ActiveForm::begin(); ?>
        <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'code')->textInput(['maxlength' => true, 'placeholder' => 'eg.case_reasons']) ?>
        <?= $form->field($model, 'module')->textInput(['maxlength' => true, 'placeholder' => 'eg.eg CASE REASONS']) ?>
        <?= $form->field($model, 'type')->dropDownList(['main' => 'main', 'other' => 'other'], ['prompt' => Yii::t('app', '--- Select type ---')]) ?>
        <div class="form-group">
            <?= Html::a('<i class="fas fa-angle-double-left"></i>Back', ['index'], ['class' => 'btn btn-dark']) ?>
            <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
        </div>

        <?php ActiveForm::end(); ?>

    </div>

</div>