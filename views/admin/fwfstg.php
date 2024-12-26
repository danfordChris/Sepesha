<?php

use kartik\widgets\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;
use kartik\widgets\Select2;
use mrserg161\airdatepicker\DatePicker;

$this->title = 'System Workflow/Workflow Registration';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-index">
    <div class="row">

        <div class="col-lg-12">

            <div class="card">
                <div class="card-header"><span style="font-size:large">Systems Module Workflow Approval Creation
                        Form</span></div>
                <div class="card-body">

                    <?php $form = ActiveForm::begin([
                        'id' => 'dir-form-horizontal',
                        'type' => ActiveForm::TYPE_HORIZONTAL,
                        'options' => ['enctype' => 'multipart/form-data'],
                        'enableClientValidation' => false,
                        'enableAjaxValidation' => false,
                        'formConfig' => ['labelSpan' => 2, 'deviceSize' => ActiveForm::SIZE_SMALL]
                    ]);
                    ?> <?= $form->field($model, 'wid')->widget(Select2::class, [
                            'data' => $model->getWf()
                        ]) ?>
                    <?= $form->field($model, 'sno')->widget(Select2::class, [
                        'data' => $model->getST(),
                        'options' => ['placeholder' => 'Select'],
                        'pluginOptions' => ['allowClear' => true,],
                    ])  ?>
                    <?= $form->field($model, 'nextstage')->textInput(['value' => $model->getNext()]) ?>
                    <?= $form->field($model, 'backstage')->textInput(['value' => $model->getBack()]) ?>
                    <?= $form->field($model, 'sname') ?>
                    <?= $form->field($model, 'actok') ?>
                    <?= $form->field($model, 'actnotok') ?>

                    <?= $form->field($model, 'okname') ?>
                    <?= $form->field($model, 'notokname') ?>
                    <?= $form->field($model, 'status')->dropDownList(['active' => 'Active', 'inactive' => 'Inactive']) ?>
                    <?= $form->field($model, 'isEditable')->dropDownList([1 => 'Yes ,Allow Editing', 0 => 'No, Disable Editing'], ['prompt' => '--select--'])->label('Allow Tool Editing ?') ?>

                    <div class="form-group">
                        <center>
                            <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?>
                        </center>
                    </div>

                    <?php echo $tbStages; ?>
                    <?php ActiveForm::end(); ?>
                </div>
            </div>

        </div>


    </div>

</div>