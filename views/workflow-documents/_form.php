<?php

use app\models\CustomHelper;
use app\models\WfStages;
use app\models\Workflow;
use app\models\WorkflowDocuments;
use kartik\depdrop\DepDrop;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;

/** @var yii\web\View $this */
/** @var app\models\WorkflowDocuments $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="workflow-documents-form">

    <?php
    if ($model->isNewRecord) {
        $action = 'create';
        $parent = '#rcamodal';
        $md = 4;
    } else {
        $action = 'update?rca=' . Yii::$app->getSecurity()->hashData($model->id, 'gmtdev');
        $parent = '';
        $md = 3;
    }
    $form = ActiveForm::begin([
        'id' => 'workflow-documents-form',
        'action' => [$action],
        'enableAjaxValidation' => false,
        'enableClientValidation' => true,
        'method' => 'post',
    ]); ?>

    <div id="form-messages"></div>

    <?= $form->errorSummary($model) ?>

    <div class="row">

        <div class="col-4">
            <?= $form->field($model, 'wid')->widget(Select2::class, [
                'data' => CustomHelper::getWorkflows(),
                'options' => ['id' => 'workflow-select', 'placeholder' => 'Select Workflow'],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent

                ],
            ])  ?>
        </div>
        <div class="col-4">
            <?= $form->field($model, 'stid')->widget(DepDrop::class, [
                'options' => ['id' => 'main-dropdown', 'placeholder' => 'Select Stage'],
                'data' => $model->isNewRecord ? '' : WfStages::getStagesNumber(),
                'type' => DepDrop::TYPE_SELECT2,
                'pluginOptions' => [
                    'depends' => ['workflow-select'],
                    'url' => Url::to(['site/fetch-stages']),
                    'allowClear' => true,

                ],
            ]) ?>
        </div>

        <div class="col-md-4">
            <?= $form->field($model, 'doctype_id')->widget(Select2::class, [
                'data' => WorkflowDocuments::getDocuments(),
                'options' => ['placeholder' => 'Select Document', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent
                ],
            ])

            ?>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'description')->textarea(['rows' => 4]) ?>
        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'mandatory')->widget(Select2::class, [
                'data' => WorkflowDocuments::getMandatoryOptions(),
                'options' => ['placeholder' => 'Select Mandatory options    ', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent
                ],
            ])

            ?>
        </div>
    </div>


    <div class="row">

        <?php if (!$model->isNewRecord) : ?>
        <div class="col-md-3">
            <?= $form->field($model, 'status')->widget(Select2::class, [
                    'data' => WorkflowDocuments::getStatusOptions(),
                    'options' => ['placeholder' => 'Select Status', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ])

                ?>
        </div>
        <?php endif; ?>
        <div class="col-md-3 mt-4">
            <?php if ($model->isNewRecord) : ?>
            <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
            <?php echo Html::submitButton(Yii::t('app', 'Add'), ['class' => 'btn btn-outline-info']); ?>
            <?php else : ?>
            <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
            <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
            <?php endif; ?>
        </div>

    </div>

    <?php ActiveForm::end(); ?>

</div>


<?php
$this->registerJs("
    $('#workflow-documents-form').on('beforeSubmit', function(e) {
        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            type: 'post',
            data: form.serialize(),
            success: function(response) {
                if (response.success) {
                    $('#rcamodal').modal('hide');
                    location.reload(); // or update the part of the page that needs to be updated
                } else {
                    $('#modalContent').html(response.content);
                    $('#form-messages').html('<div class=\"alert alert-danger\">' + response.message + '</div>');
                }
            }
        });
        return false;
    });
");
?>