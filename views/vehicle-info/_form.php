<?php
use app\models\CustomHelper;
use yii\helpers\Html;
use app\models\Services;
use kartik\widgets\Select2;
use kartik\widgets\ActiveForm;
use kartik\date\DatePicker;


/** @var yii\web\View $this */
/** @var app\models\Vehicle $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="vehicle-form">


    <?php $form = ActiveForm::begin([
        'action' => $model->isNewRecord ? ['create'] : ['update', 'id' => $model->id],
    ]); ?>

    <div class="row">
        <div class="col-md-4">


            <?= $form->field($model, 'plate_number')->textInput([
                'maxlength' => true,
                'placeholder' => 'e.g T544DMZ',
                'oninput' => 'this.value = this.value.toUpperCase()',
                'disabled' => $model->requserinput == 'N'
            ]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'make')->textInput(['maxlength' => true, 'placeholder' => 'e.g TOYOTA', 'oninput' => 'this.value = this.value.toUpperCase()', 'disabled' => $model->requserinput == 'N']) ?>
        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'model')->textInput([
                'maxlength' => true,
                'placeholder' => 'e.g FUSO',
                'oninput' => 'this.value = this.value.toUpperCase()',
                'disabled' => $model->requserinput == 'N'
            ]) ?>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <?= $form->field($model, 'year')->widget(DatePicker::class, [
                'options' => ['placeholder' => 'Select year', 'disabled' => $model->requserinput == 'N'],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'yyyy',
                    'minViewMode' => 2,

                ],
            ]);
            ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'fee_category_id')->widget(Select2::class, [
                'data' => CustomHelper::getFeeCategory(),
                'options' => ['placeholder' => 'Select--'],
                'pluginOptions' => [
                    'allowClear' => true,
                    'disabled' => $model->requserinput == 'N'
                ],
            ]) ?>
        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'color')->dropDownList(
                CustomHelper::selectVehicleColors(),
                ['prompt' => '--select--','disabled' => $model->requserinput == 'N'],

            ) ?>

        </div>
    </div>

    <?php //= $form->field($model, 'weight')->textInput(['maxlength' => true])
    ?>

    <div class="form-group col-md-6">
        <?php if ($model->isNewRecord) : ?>
        <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
        <?php echo Html::submitButton(Yii::t('app', 'Save and continue'), ['class' => 'btn btn-outline-success']); ?>
        <?php else : ?>
        <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
        <button type="button" class="btn  btn-info" data-bs-toggle="modal" data-bs-target="#rcamodal">
            <i class="fa fa-file-pdf text-danger"></i> &nbsp; Add application documents</button>
        <?php echo Html::submitButton(Yii::t('app', 'Submit for approval'), ['class' => 'btn btn-success', 'disabled' => $model->requserinput == 'N']); ?>

        <?php endif; ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>