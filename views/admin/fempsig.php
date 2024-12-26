<?php

use kartik\widgets\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;
use kartik\widgets\Select2;
use mrserg161\airdatepicker\DatePicker;
use kartik\widgets\FileInput;

$this->params['breadcrumbs'][] = ['label' => 'Staff Roles', 'url' => ['strl-management']];
$this->title = 'Signature Capture';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-index">
    <div class="row">

        <div class="col-lg-10">

            <div class="card">
                <div class="card-header"><span style="font-size:large">Employee Signature Form</span></div>
                <div class="card-body">

                    <?php echo $tbEmp; ?>
                    <?php $form = ActiveForm::begin([
                        'id' => 'dir-form-horizontal',
                        'type' => ActiveForm::TYPE_HORIZONTAL, 'options' => ['enctype' => 'multipart/form-data'],
                        'enableClientValidation' => false,
                        'enableAjaxValidation' => false,
                        'formConfig' => ['labelSpan' => 3, 'deviceSize' => ActiveForm::SIZE_SMALL]
                    ]);
                    ?>
                    <?= $form->field($model, 'sig')->widget(FileInput::class, [
                        'pluginOptions' => ['allowedFileExtensions' => ['jpg', 'png'], 'width' => '300px', 'showCaption' => false, 'dropZoneEnabled' => false, 'showRemove' => false, 'showUpload' => false, 'showCancel' => false, 'browseClass' => 'btn btn-primary btn-block', 'browseIcon' => '<i class="glyphicon glyphicon-camera"></i> ', 'browseLabel' => $model->isNewRecord ? '&nbsp;&nbsp;Upload Employee Signature' : 'Update Employee Signature']
                    ]); ?>

                    <div class="form-group">
                        <center><?= Html::submitButton($model->isNewRecord ? 'Save' : 'Update', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?></center>
                    </div>


                    <?php ActiveForm::end(); ?>
                </div>
            </div>

        </div>


    </div>

</div>