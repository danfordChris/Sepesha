<?php

use yii\helpers\Html;
use app\models\Customer;
use app\models\ClientInfo;
use app\models\Countries;
use yii\httpclient\Client;
use kartik\widgets\Select2;
use yii\widgets\ActiveForm;
use kartik\widgets\DatePicker;
use yii\helpers\ArrayHelper;

/** @var yii\web\View $this */
/** @var app\models\CommissionsSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>
<div class="intake-search">
    <div id="accordion">
        <div class="accordion">
            <div class="accordion-body collapse" id="panel-body-1" data-bs-parent="#accordion">
                <div class="card">
                    <div class="card-body">
                        <div class="">
                            <div class="">
                                <?php $form = ActiveForm::begin([
                                    'action' => ['index'],
                                    'method' => 'get',
                                ]); ?>
                                <strong>
                                    <div class="group1 text-dark">
                                        <h6 style="font-weight:bold;" class="text-decoration-italic">Filter By</h6>


                                    </div>
                                    <div class="row">


                                        <div class="col-6">
                                            <?= $form->field($model, 'value')->textInput(['maxlength' => true]) ?>
                                        </div>
                                        <div class="col-6">
                                            <?= $form->field($model, 'type')->dropDownList(
                                                [
                                                    'percent' => 'Percent',
                                                    'amount' => 'Amount',
                                                ],
                                                ['prompt' => 'Select Type']
                                            ) ?>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col-md-2">

                                            <?= $form->field($model, 'category')->dropDownList(
                                                [
                                                    'driver' => 'Driver',
                                                    'customer' => 'Customer',
                                                ],
                                                ['prompt' => 'Select Category']
                                            ) ?>
                                        </div>

                                        <div class="col-4">

                                            <?= $form->field($model, 'start_date')->widget(DatePicker::class, [
                                                'options' => [
                                                    'class' => 'form-control',
                                                    'placeholder' => 'Start Date',
                                                ],
                                                'pluginOptions' => [
                                                    'autoclose' => true,
                                                    'format' => 'yyyy-mm-dd'
                                                ]
                                            ]) ?>
                                        </div>

                                        <div class="col-6">
                                            <?= $form->field($model, 'end_date')->widget(DatePicker::class, [
                                                'options' => [
                                                    'class' => 'form-control',
                                                    'placeholder' => 'End Date',
                                                ],
                                                'pluginOptions' => [
                                                    'autoclose' => true,
                                                    'format' => 'yyyy-mm-dd'
                                                ]
                                            ]) ?>
                                        </div>
                                    </div>
                            </div>


                        </div>
                        </strong>

                        <div class="form-group">
                            <?= Html::submitButton('<i class="fa fa-search fa-1x me-2"></i>Search', ['class' => 'btn btn-sm btn-info']) ?>
                            <?= Html::a('<i class="fa fa-times fa-1x me-2"></i>' . Yii::t('app', 'Reset'), ['index'], ['class' => 'btn btn-sm btn-secondary text-dark']); ?>
                        </div>

                        <?php ActiveForm::end(); ?>

                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
</div>
</div>