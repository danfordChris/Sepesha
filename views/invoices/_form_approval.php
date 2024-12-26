<?php

use app\models\Approval;
use yii\helpers\Html;
use kartik\form\ActiveForm;
use kartik\select2\Select2;
/* @var $this yii\web\View */
/* @var $modelApproval app\modules\training\models\DepartmentReport */
/* @var $form yii\widgets\ActiveForm */
?>

<h6 for="" class="bg-warning">Stage: <?= $model->stage->sname??'Approved'?></h6>
<?php $form = ActiveForm::begin(
    [
        'options' => ['class' => 'disable-submit-buttons'],
    ]
); ?>
<?= $form->errorSummary($modelApproval) ?>
<?= $form->field($modelApproval, 'wfs')->widget(Select2::class, [
    'data' => Approval::getWfStatusV($model->wid,$model->stid), 'options' => ['placeholder' => 'Select'], 'pluginOptions' => ['allowClear' => true,],
]) ?>
<?= $form->field($modelApproval, 'comments')->textarea(['rows' => 1]) ?>
<div class="form-group col-md-3">
    <?= Html::submitButton(Yii::t('app', 'Submit'), ['class' => 'btn btn-success', 'data' => ['disabled-text' => 'please wait'],'data-confirm'=>'Are you sure you want to proceed with the selected action ?']) ?>
</div>

<?php ActiveForm::end(); ?>