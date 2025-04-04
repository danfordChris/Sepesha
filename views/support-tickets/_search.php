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

                                        <div class="col-4">
                                            <?= $form->field($model, 'status')->dropDownList(['open' => 'Open', 'inprogress' => 'Inprogress', 'closed' => 'Closed', 'cancelled' => 'Cancelled',], ['prompt' => '-- select status --']) ?>

                                        </div>

                                        <div class="col-4">
                                            <?= $form->field($model, 'priority')->dropDownList(['low' => 'Low', 'medium' => 'Medium', 'high' => 'High',], ['prompt' => '-- select priority --']) ?>

                                        </div>
                                        <div class="col-4">
                                            <?= $form->field($model, 'category') ?>

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