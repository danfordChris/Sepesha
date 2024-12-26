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
                <div class="card-header"><span style="font-size:large">Systems Module Workflow Approval Creation Form</span></div>
                <div class="card-body">
                   
				    <?php  $form = ActiveForm::begin([
            'id' => 'dir-form-horizontal', 
            'type' => ActiveForm::TYPE_HORIZONTAL,'options' => ['enctype'=>'multipart/form-data'],
			'enableClientValidation'=>false,
			'enableAjaxValidation'=>false,
            'formConfig' => ['labelSpan' => 2,'deviceSize' => ActiveForm::SIZE_SMALL]
        ]); 
      ?>             
					<?= $form->field($model, 'name')?>
                    <?= $form->field($model, 'stages')?>
					<?= $form->field($model, 'wfor')?>
					
                    <div class="form-group">
                        <center><?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?></center>
                    </div>
					
					
					<?php ActiveForm::end(); ?>
                </div>
            </div>

        </div>


    </div>

</div>
