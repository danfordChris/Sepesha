<?php

use yii\helpers\Html;
use app\models\Receipts;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Receipts $model */

$this->title = 'Update Receipts: ' . $model->recno;
$this->params['breadcrumbs'][] = ['label' => 'Receipts', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->recno, 'url' => ['view', 'recid' => $model->recno]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="receipts-update card">

    <div class="card-header bg-primary text-white">
        <h5 class="mt-1"><?= Html::encode($this->title) ?></h5>
    </div>

    <div class="card-body">

        <?php $form = ActiveForm::begin(); ?>

        <div class="row">

            <div class="col-md-4">
                <?= $form->field($model, 'currency')->widget(Select2::class, [
                    'data' => Receipts::getCurrency(),
                    'options' => ['placeholder' => 'Select Currency', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>
            </div>

            <?php $defaultDebitValue = array_keys(Receipts::getDebits())[0]; ?>

            <div class="col-md-4">
                <?= $form->field($model, 'debit')->widget(Select2::class, [
                    'data' => Receipts::getDebits(),
                    'options' => ['placeholder' => 'Debit--', 'required' => true, 'value' => !empty($model->debit) ? $model->debit : $defaultDebitValue],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]); ?>
            </div>
            <?php $defaultCreditValue = array_keys(Receipts::getCredits())[0]; ?>
            <div class="col-md-4">
                <?= $form->field($model, 'credit')->widget(Select2::class, [
                    'data' => Receipts::getCredits(),
                    'options' => ['placeholder' => 'Credit--', 'required' => true, 'value' => !empty($model->credit) ? $model->credit : $defaultCreditValue],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]); ?>

            </div>

        </div>

        <div class="row">

            <div class="col-md-4">
                <?= $form->field($model, 'customer_id')->widget(Select2::class, [
                    'data' => Receipts::getCustomers(),
                    'options' => ['placeholder' => 'Select Customer', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]);
                ?>
            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'amount')->textInput() ?>
            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'control_no')->textInput(['maxlength' => true]) ?>
            </div>

        </div>

        <div class="row">
            <div class="col-md-4">
                <?= $form->field($model, 'desc')->textInput() ?>
            </div>

            <div class="col-md-4">
                <?= $form->field($model, 'issue_by')->textInput() ?>
            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'appr_by')->textInput() ?>
            </div>
        </div>

        <div class="row">


            <div class="col-md-4">
                <?= $form->field($model, 'status')->dropDownList(Receipts::getStatusOptions()) ?>
            </div>


            <div class="col-md-4 mt-4">
                <div class="form-group">
                    <?php if ($model->isNewRecord) : ?>
                        <button type="button" class="btn btn-danger light btn-sm" data-bs-dismiss="modal">Close</button>
                        <?php echo Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-sm btn btn-primary']); ?>
                    <?php else : ?>
                        <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-sm btn-secondary']); ?>
                        <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-sm btn-primary']); ?>
                    <?php endif; ?>
                </div>
            </div>

        </div>

        <?php ActiveForm::end(); ?>


    </div>
</div>