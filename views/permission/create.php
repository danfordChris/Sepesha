<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Permission */
/* @var $form yii\widgets\ActiveForm */

$this->title = 'Create Permission';
$this->params['breadcrumbs'][] = ['label' => 'Permissions', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="permission-create">
    <h1><?= Html::encode($this->title) ?></h1>

    <div class="permission-form">
        <?php $form = ActiveForm::begin(); ?>
        <?php
        // echo $form->field($model, 'rule_name')->dropDownList(
        //     \yii\helpers\ArrayHelper::map($roles, 'name', 'name'),
        //     ['prompt' => 'Select Role']
        // )
         ?>
        <?= $form->field($model, 'rule_name')->dropDownList($model->availableRules, ['prompt' => 'Select Rule Name']) ?>

        <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

        <div class="form-group">
            <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
        </div>

        <?php ActiveForm::end(); ?>
    </div>
</div>