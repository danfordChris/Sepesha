<?php

use yii\helpers\Html;
use kartik\select2\Select2;
use app\models\AccountCodes;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\AccountCodes $model */

$this->title = 'Update Account Code: ' . $model->code;
$this->params['breadcrumbs'][] = ['label' => 'Account Codes', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->code, 'url' => ['view', 'coid' => $model->code]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="account-codes-update card">

    <div class="card-header bg-primary text-white">
        <h5 class="mt-1"><?= Html::encode($this->title) ?></h5>
    </div>

    <div class="card-body">

        <?php $form = ActiveForm::begin(); ?>

        <div class="row">
            <div class="col-md-6">
                <?= $form->field($model, 'code')->textInput(['maxlength' => true]) ?>
            </div>
            <div class="col-md-6">
                <?= $form->field($model, 'category')->widget(Select2::class, [
                    'data' => AccountCodes::getCodeCategory(),
                    'options' => ['placeholder' => 'Select Category', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>

            </div>

        </div>

        <div class="row">
            <div class="col-md-6">
                <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
            </div>
            <div class="col-md-6">
                <?= $form->field($model, 'descr')->textarea(['rows' => 1]) ?>
            </div>
        </div>

        <div class="row mt-2">
        <div class="col-md-6">
                <?= $form->field($model, 'status')->dropDownList(AccountCodes::getStatusOptions()) ?>
            </div>
            <div class="col-md-6 mt-4">
                <div class="form-group">
                    <?php if ($model->isNewRecord) : ?>
                        <button type="button" class="btn btn-danger light btn-sm" data-bs-dismiss="modal">Close</button>
                        <?php echo Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-sm btn btn-primary']); ?>
                    <?php else : ?>
                        <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index', 'ld' => $model->coid], ['class' => 'btn btn-sm btn-secondary']); ?>
                        <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-sm btn-primary']); ?>
                    <?php endif; ?>
                </div>

            </div>
        </div>

        <?php ActiveForm::end(); ?>

    </div>
</div>