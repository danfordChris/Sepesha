<?php

use yii\helpers\Html;
use kartik\form\ActiveForm;
use kartik\select2\Select2;
use kartik\widgets\FileInput;

?>
<div class="department-report-form">

    <div class="group2">
        <div class="card-header bg-warning text-white" style="height:2em;font-weight:bold;">
            Stage: <?= $mainModel->wf->name ?> -> <?= $mainModel->workFlowStage->sname ?> </div>


        <?php $form = ActiveForm::begin(); ?>
        <div class="row">
            <div class="col">
                <?php
                if ($mainModel->stid == 1) {
                    echo $form->field($modelApproval, 'wfs')->widget(Select2::class, [
                        'data' => $modelApproval->getSubmitforApproval($mainModel->wid, $mainModel->stid),
                        'options' => ['placeholder' => 'Select'],
                        'pluginOptions' => ['allowClear' => true,],
                    ]);
                } else {
                    echo $form->field($modelApproval, 'wfs')->widget(Select2::class, [
                        'data' => $modelApproval->getDoApproval($mainModel->wid, $mainModel->stid),
                        'options' => ['placeholder' => 'Select'],
                        'pluginOptions' => ['allowClear' => true,],
                    ]);
                }
                ?>
            </div>

        </div>

        <?= $form->field($modelApproval, 'comments')->widget(\yii\redactor\widgets\Redactor::class, [
            'clientOptions' => [
                'imageManagerJson' => false,
                'imageUpload' => false,
                'fileUpload' => false,
                'linkUpload' => false,
                'lang' => 'en',
            ]
        ]) ?>


        <?= $form->field($modelApproval, 'reqid')->label(false)->hiddenInput(['readOnly' => true]) ?>


        <div class="form-group col-md-3 mt-4">
            <?= Html::submitButton(Yii::t('app', 'Submit'), ['class' => 'btn btn-success', 'data-confirm' => 'Are you sure ?']) ?>
        </div>



        <?php ActiveForm::end(); ?>
    </div>


</div>