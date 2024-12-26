<?php

use yii\helpers\Html;
use kartik\form\ActiveForm;

use kartik\select2\Select2;
use app\models\Offices;

?>
<div class="card card-purple">


    <div class="card-header bg-info tx-medium bd-0">
            <h5 class="card-title mb-0  pb-0">
                <h2 class="mx-auto"> <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['signup'], ['class' => 'btn btn-secondary mb-1']); ?> Update stations for user , user will will be able to view data in all stations assigned</h2>
            </h5>
        </div>

    <div class="card-body">
        <?php $form = ActiveForm::begin(['id' => 'form-signup', 'enableAjaxValidation' => false]);

        ?>
        <?= $form->field($model, 'full_name')->textInput(['autofocus' => true, 'readOnly' => true,]) ?>
        <?php //= $form->field($model, 'office_id')->label($model->getAttributeLabel('office_id'))->dropDownList($officeList, ['prompt' => '---Select office---','multiple'=>true]);
        ?>
        <?= $form->field($model, 'company_name')->label('Office Can Access')->widget(Select2::class, [
            'data' => Offices::getOfficeList(),
            'options' => ['placeholder' => 'select location', 'multiple' => true],
            'pluginOptions' => [
                'allowClear' => true
            ],
        ]);
        ?>

        <div class="form-group">
            <?php //echo Html::a('<i class="bi bi-arrow-left"></i> Back', ['signup'], ['class' => 'btn btn-secondary']); ?>

            <?= Html::submitButton('Save User', ['class' => 'btn btn-success', 'name' => 'signup-button']) ?>
        </div>

        <?php ActiveForm::end(); ?>
    </div>
</div>