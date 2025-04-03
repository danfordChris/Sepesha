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
                                    'action' => ['customer'],
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
                                            <?= $form->field($model, 'name')->textInput(['maxlength' => true])->label('First Name') ?>

                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <?= $form->field($model, 'mname')->textInput(['maxlength' => true])->label('Middle Name') ?>

                                        </div>

                                        <div class="col-6">
                                            <?= $form->field($model, 'sname')->textInput(['maxlength' => true])->label('Sur Name') ?>

                                        </div>
                                    </div>
                                    <div class="row">

                                        <div class="col-md-2">
                                            <?= $form->field($model, 'phonecode')->widget(Select2::classname(), [
                                                'data' => ArrayHelper::map(Countries::find()->all(), 'phonecode', 'phonecode'),
                                                'options' => [
                                                    'placeholder' => 'Select phone code...',
                                                    'value' => '255',

                                                ],
                                                'pluginOptions' => [
                                                    'allowClear' => true,
                                                ],
                                            ])->label('Phone Code'); ?>

                                        </div>

                                        <div class="col-4">
                                            <?= $form->field($model, 'phone')->textInput(['maxlength' => true])->label('Phone') ?>

                                        </div>

                                        <div class="col-6">
                                            <?= $form->field($model, 'status')->widget(Select2::classname(), [
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
                            </div>


                        </div>
                        </strong>

                        <div class="form-group">
                            <?= Html::submitButton('<i class="fa fa-search fa-1x me-2"></i>Search', ['class' => 'btn btn-sm btn-info']) ?>
                            <?= Html::a('<i class="fa fa-times fa-1x me-2"></i>' . Yii::t('app', 'Reset'), ['customer'], ['class' => 'btn btn-sm btn-secondary text-dark']); ?>
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