<?php

use app\models\BankAccounts;
use app\models\BankDeposits;
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
        'action' => ['report'],
        'method' => 'get',
    ]); ?>

    <div id="accordion">
        <div class="accordion">
            <div class="accordion-body collapse" id="panel-body-1" data-parent="#accordion">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <?= $form->field($model, 'accid')->widget(Select2::class, [
                                    'data' => BankDeposits::getBankAccounts(),
                                    'options' => ['placeholder' => 'Select Bank'],
                                    'pluginOptions' => [
                                        'allowClear' => true,

                                    ],
                                ]) ?>

                            </div>





                            <div class="col-md-3">
                                <?= $form->field($model, 'date_from')->widget(DatePicker::class, [

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
                                <?= $form->field($model, 'date_to')->widget(DatePicker::class, [

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

                                <?= Html::a('<i class="fa fa-history"></i> Reset ', ['report'], ['class' => 'btn btn-info']); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php ActiveForm::end(); ?>
    </div>
</div>