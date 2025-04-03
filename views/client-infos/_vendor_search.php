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
                                    'action' => ['vendor'],
                                    'method' => 'get',
                                ]); ?>
                                <strong>
                                    <div class="group1 text-dark">
                                        <h6 style="font-weight:bold;" class="text-decoration-italic">Filter By</h6>


                                    </div>
                                    <div class="row">


                                        <div class="col-6">

                                            <?php echo $form->field($model, 'email') ?> </div>
                                        <div class="col-6">
                                            <?= $form->field($model, 'id')->widget(Select2::class, [
                                                'data' => ClientInfo::getCustomerListById(),
                                                'options' => ['placeholder' => '-- select --'],
                                                'pluginOptions' => [
                                                    'allowClear' => true,
                                                ],
                                            ]) ?>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col-6">
                                            <?= $form->field($model, 'phone')->textInput(['maxlength' => true])->label('Phone') ?>

                                        </div>

                                        <div class="col-6">
                                            <?= $form->field($model, 'status')->widget(Select2::class, [
                                                'data' => [
                                                    10 => 'Active', // Option for Active status
                                                    0 => 'Inactive', // Option for Inactive status
                                                ],
                                                'options' => [
                                                    'placeholder' => 'Select status...',
                                                ],
                                                'pluginOptions' => [
                                                    'allowClear' => true,
                                                ],
                                            ])->label('Status'); ?>
                                        </div>
                                    </div>



                                    <div class="row">
                                        <div class="col-6">
                                            <?= $form->field($model, 'date_from')->widget(DatePicker::class, [
                                                'options' => [
                                                    'class' => 'form-control',
                                                    'placeholder' => 'From Date',
                                                ],
                                                'pluginOptions' => [
                                                    'autoclose' => true,
                                                    'format' => 'yyyy-mm-dd'
                                                ]
                                            ]) ?>

                                        </div>
                                        <div class="col-6">
                                            <?= $form->field($model, 'date_to')->widget(DatePicker::class, [
                                                'options' => [
                                                    'class' => 'form-control',
                                                    'placeholder' => 'To Date',
                                                ],
                                                'pluginOptions' => [
                                                    'autoclose' => true,
                                                    'format' => 'yyyy-mm-dd'
                                                ]
                                            ]) ?>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-6">
                                            <?= $form->field($model, 'referal_code')->textInput(['maxlength' => true]) ?>
                                        </div>
                                    </div>
                            </div>


                        </div>
                        </strong>

                        <div class="form-group">
                            <?= Html::submitButton('<i class="fa fa-search fa-1x me-2"></i>Search', ['class' => 'btn btn-sm btn-info']) ?>
                            <?= Html::a('<i class="fa fa-times fa-1x me-2"></i>' . Yii::t('app', 'Reset'), ['vendor'], ['class' => 'btn btn-sm btn-secondary text-dark']); ?>
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