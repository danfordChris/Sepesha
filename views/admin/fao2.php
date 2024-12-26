<?php

use kartik\widgets\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;
use kartik\widgets\Select2;
use mrserg161\airdatepicker\DatePicker;
use kartik\widgets\FileInput;
use yii\bootstrap4\Modal;

$this->title = 'Flight Operator Registration';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-index">
    <div class="row">

        <div class="col-lg-12">

            <div class="card">
                <div class="card-header"><span style="font-size:large">Update Flight Operator who are Managed by Flight Agent</span></div>
                <div class="card-body">

                    <?php $form = ActiveForm::begin([
                        'id' => 'dir-form-horizontal',
                        'type' => ActiveForm::TYPE_HORIZONTAL, 'options' => ['enctype' => 'multipart/form-data'],
                        'enableClientValidation' => false,
                        'enableAjaxValidation' => false,
                        'formConfig' => ['labelSpan' => 2, 'deviceSize' => ActiveForm::SIZE_SMALL]
                    ]);
                    ?>
                    <?= $form->field($model, 'aid')->widget(Select2::class, [
                        'data' => $model->getAgent($model->aid)
                    ]) ?>
                    <?= $form->field($model, 'cid')->widget(Select2::class, [
                        'data' => $model->getOperators2()
                    ])  ?>
                    <?= $form->field($model, 'attachment')->widget(FileInput::class, [
                        'pluginOptions' => ['allowedFileExtensions' => ['jpg', 'png', 'pdf'], 'width' => '300px', 'showCaption' => false, 'dropZoneEnabled' => false, 'showRemove' => false, 'showUpload' => false, 'showCancel' => false, 'browseClass' => 'btn btn-primary btn-block', 'browseIcon' => '<i class="glyphicon glyphicon-file"></i> ', 'browseLabel' => $model->isNewRecord ? '&nbsp;&nbsp;Upload' : 'Upload']
                    ]); ?>


                    <div class="form-group">
                        <center><?= Html::submitButton($model->isNewRecord ? 'Register' : 'Update', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?></center>
                    </div>

                    <?php echo $tbOp; ?>
                </div>
            </div>

        </div>


    </div>

</div>
<?php
Modal::begin([

    'title' => 'DER Flight Agent and Flight Operator Agreement',
    'id' => 'modal',
    'size' => 'modal-lg',

    //keeps from closing modal with esc key or by clicking out of the modal.
    // user must click cancel or X to close
    'clientOptions' => ['backdrop' => 'static', 'keyboard' => false, 'z-index' => -1]
]);
echo "<div id='modalContent'></div>";
Modal::end();
?>
<?php
$this->registerJsFile(
    '@web/js/popup.js',
    ['depends' => [\yii\web\JqueryAsset::className()]]
);
?>