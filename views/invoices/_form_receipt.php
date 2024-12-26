<?php

use app\models\AccountCodes;
use app\models\Invoice;
use yii\helpers\Html;
use app\models\Vouchers;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\AccountEntries $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="account-entries-form">

    <?php $form = ActiveForm::begin(); ?>
<?= $form->errorSummary($modelEntry) ?>
    <div class="row">
        <div class="col-md-6">
            <?= $form->field($modelEntry, 'entryid')->widget(Select2::class, [
                'data' => Invoice::getEntryCategory(AccountCodes::ENTRY_BANK),
                'options' => ['placeholder' => '--select entry--', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                ],
            ]); ?>

<?= $form->field($modelEntry, 'transact_date')->textInput(['type'=>'date']) ?>

        </div>

        <div class="col">
            <?= $form->field($modelEntry, 'entry_type')->textInput(['maxlength' => true, 'readOnly' => true]) ?>
        </div>
        <div class="col">
            <?= $form->field($modelEntry, 'dramount')->textInput(['maxlength' => true]) ?>
        </div>

    </div>

    <div class="row">


        <div class="col">
            <?= $form->field($modelEntry, 'reference_no')->textInput(['maxlength' => true]) ?>
        </div>
        <div class="col">
            <?= $form->field($modelEntry, 'descr')->textarea(['rows' => 1]) ?>

        </div>
    </div>

    <div class="form-group">
        <div class="modal-footer">
            <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
            <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
        </div>

    </div>

    <?php ActiveForm::end(); ?>

</div>