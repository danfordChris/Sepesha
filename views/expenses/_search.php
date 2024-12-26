<?php

use yii\helpers\Html;
use app\models\Employee;
use app\models\Expenses;
use kartik\date\DatePicker;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\ExpensesSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="expenses-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index-report'],
        'method' => 'get',
    ]); ?>


    <div id="accordion">
        <div class="accordion">
            <div class="accordion-body collapse" id="panel-body-1" data-parent="#accordion">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <?= $form->field($model, 'catid')->widget(Select2::class, [
                                    'data' => Expenses::getExpenseCategories(),
                                    'options' => ['placeholder' => 'Select Expense Category'],
                                    'pluginOptions' => [
                                        'allowClear' => true,

                                    ],
                                ]) ?>

                            </div>
                            <div class="col-md-3">
                                <?= $form->field($model, 'empid')->widget(Select2::class, [
                                    'data' => Expenses::getEmployees(),
                                    'options' => ['placeholder' => 'Select Payer'],
                                    'pluginOptions' => [
                                        'allowClear' => true,

                                    ],
                                ]) ?>

                            </div>
                            <div class="col-md-3">
                                <?= $form->field($model, 'busid')->widget(Select2::class, [
                                    'data' => Expenses::getBuses(),
                                    'options' => ['placeholder' => 'Select Bus'],
                                    // 'disabled' => $model->busid !== null,
                                    'pluginOptions' => [
                                        'allowClear' => true,

                                    ],
                                ]) ?>

                            </div>
                            <div class="col-md-3">
                                <?= $form->field($model, 'trip_id')->widget(Select2::class, [
                                    'data' => Expenses::getTrips(),
                                    'options' => ['placeholder' => 'Select Trip'],
                                    'pluginOptions' => [
                                        'allowClear' => true,
                                    ],
                                ]) ?>
                            </div>


                        </div>

                        <div class="row">
                            <div class="col-md-3">
                                <?= $form->field($model, 'location_id')->widget(Select2::class, [
                                    'data' => Expenses::getLocations(),
                                    'options' => ['placeholder' => 'Select Location'],
                                    'pluginOptions' => [
                                        'allowClear' => true,

                                    ],
                                ]) ?>

                            </div>
                            <div class="col-md-3">
                                <?= $form->field($model, 'oid')->widget(Select2::class, [
                                    'data' => Employee::getOffices(),
                                    'options' => ['placeholder' => 'Select Office'],
                                    'pluginOptions' => [
                                        'allowClear' => true,

                                    ],
                                ]) ?>

                            </div>
                            <div class="col-md-3">
                                <?= $form->field($model, 'start_date')->widget(DatePicker::class, [

                                    'options' => ['placeholder' => 'Transaction From--'],
                                    'convertFormat' => true,
                                    // 'type' => 1,
                                    'pluginOptions' => [
                                        'todayHighlight' => true,
                                        'todayBtn' => true,
                                        'format' => 'yyyy-M-d',
                                        'autoclose' => true,
                                    ]

                                ])

                                ?>

                            </div>
                            <div class="col-md-3">
                                <?= $form->field($model, 'end_date')->widget(DatePicker::class, [

                                    'options' => ['placeholder' => 'Transaction To--'],
                                    'convertFormat' => true,
                                    // 'type' => 1,
                                    'pluginOptions' => [
                                        'todayHighlight' => true,
                                        // 'todayBtn' => true,
                                        'format' => 'yyyy-M-d',
                                        'autoclose' => true,
                                    ]

                                ])  ?>

                            </div>
                        </div>
                        <div class="col-md-3 mt-4">
                            <div class="form-group">
                                <?= Html::submitButton('<span class=" fa fa-search fa-1x"> Search</span>', ['class' => 'btn btn-primary']) ?>

                                <?= Html::a('<i class="fa fa-history"></i> Reset ', ['index-report'], ['class' => 'btn btn-info']); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php ActiveForm::end(); ?>
    </div>
</div>