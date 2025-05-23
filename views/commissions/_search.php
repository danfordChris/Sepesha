<?php

use yii\helpers\Html;
use app\models\Customer;
use app\models\ClientInfo;
use yii\httpclient\Client;
use kartik\widgets\Select2;
use yii\widgets\ActiveForm;
use kartik\widgets\DatePicker;

/** @var yii\web\View $this */
/** @var app\models\CommissionsSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>
<div class="intake-search">

    <div id="accordion">
        <div class="accordion">
            <div class="accordion-body collapse" id="panel-body-1" data-bs-parent="#accordion">
                <div class="">
                    <div class="">
                        <?php $form = ActiveForm::begin([
                            'action' => ['driver'],
                            'method' => 'get',
                        ]); ?>
                        <strong>
                            <div class="group1 text-dark">
                                <h6 style="font-weight:bold;" class="text-decoration-italic">Filter By</h6>


                            </div>
                            <div class="row">

                                <div class="col-3">
                                    <?= $form->field($model, 'customer_id')->widget(Select2::class, [
                                        'data' => ClientInfo::getCustomerList(),
                                        'options' => ['placeholder' => '-- select --'],
                                        'pluginOptions' => [
                                            'allowClear' => true,
                                        ],
                                    ]) ?>
                                </div>

                                <div class="col-3">
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
                                <div class="col-3">
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


                    </div>
                    </strong>

                    <div class="form-group">
                        <?= Html::submitButton('<i class="fa fa-search fa-1x me-2"></i>Search', ['class' => 'btn btn-sm btn-info']) ?>
                        <?= Html::a('<i class="fa fa-times fa-1x me-2"></i>' . Yii::t('app', 'Reset'), ['driver'], ['class' => 'btn btn-sm btn-secondary text-dark']); ?>
                    </div>

                    <?php ActiveForm::end(); ?>

                </div>
            </div>
        </div>
    </div>
</div>
</div>