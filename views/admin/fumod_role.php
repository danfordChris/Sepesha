<?php

use kartik\widgets\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;
use kartik\widgets\Select2;
use kartik\widgets\DepDrop;
use kartik\date\DatePicker;

$this->params['breadcrumbs'][] = ['label' => 'Roles', 'url' => ['strl-management']];
$this->title = 'Staff Assignment';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-index">
    <div class="row">

        <div class="col-lg-12">

            <div class="card">
                <div class="card-header"><span style="font-size:large">Module Roles Assignment Form For Staff
                        <?php echo $fname ?></span></div>
                <div class="card-body">

                    <?php $form = ActiveForm::begin([
						'id' => 'dir-form-horizontal',
						'type' => ActiveForm::TYPE_HORIZONTAL,
						'options' => ['enctype' => 'multipart/form-data'],
						'enableClientValidation' => false,
						'enableAjaxValidation' => false,
						'formConfig' => ['labelSpan' => 2, 'deviceSize' => ActiveForm::SIZE_SMALL]
					]);
					?> <?= $form->field($model, 'module')->widget(Select2::class, [
							'data' => $model->getModules(),
							'options' => ['placeholder' => 'Select'],
							'pluginOptions' => ['allowClear' => true,],
						])  ?>
                    <?= $form->field($model, 'rid')->widget(DepDrop::class, [
						'type' => DepDrop::TYPE_SELECT2,
						'data' => $model->getModUserRole($eid),
						'options' => ['placeholder' => 'Select'],
						'pluginOptions' => [
							'depends' => ['moduserrole-module'],
							'url' => Url::to(['/admin/get-modur', 'eid' => $eid])
						]
					]) ?>


                    <?= $form->field($model, 'fdate')->widget(DatePicker::class, [
						'options' => [
							'class' => 'form-control',
							'placeholder' => 'Select From Date',
							'value' => date('Y-m-d')
						],
						'pluginOptions' => [
							'autoclose' => true,
							'format' => 'yyyy-mm-dd'
						]
					])

					?>


                    <?= $form->field($model, 'tdate')->widget(DatePicker::class, [
						'options' => [
							'class' => 'form-control',
							'placeholder' => 'Select To Date',
							'value' => date('Y-m-d')
						],
						'pluginOptions' => [
							'autoclose' => true,
							'format' => 'yyyy-mm-dd'
						]
					])

					?>


                    <div class="form-group">
                        <center>
                            <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Add', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?>
                        </center>
                    </div>

                    <?php echo $tbR; ?>
                    <?php ActiveForm::end(); ?>
                </div>
            </div>

        </div>


    </div>

</div>