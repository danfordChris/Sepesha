<?php

use app\models\Employee;
use app\models\User;
use yii\helpers\Html;
use app\models\Office;
use app\models\SignupForm;
use app\models\SystemRoles;
use kartik\form\ActiveForm;
use kartik\select2\Select2;
use yii\helpers\ArrayHelper;
?>

<div class="card" style="display: none;">
    <div class="card-body">
        <?php $form = ActiveForm::begin(['id' => 'form-signup', 'enableAjaxValidation' => true]);

        ?>
        <div class="row">
            <div class="col-md-4">
                <?= $form->field($model, 'employee')->widget(Select2::class, [
                    'data' => Employee::getAllEmployees(),
                    'options' => ['placeholder' => 'Select Employee', 'required' => true,'id'=>'employee-select'],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>
            </div>

            <div class="col-md-4">
                <?= $form->field($model, 'email')->textInput(['id'=>'employ','placeholder'=>'Enter Email']) ?>
            </div>
            <div class="row">

                <div class="form-group col-md-4">
                    <?= Html::submitButton('Add as User', ['class' => 'btn btn-success', 'name' => 'signup-button']) ?>
                </div>
            </div>
        </div>



        <?php ActiveForm::end(); ?>


    </div>
</div>


<?php
$this->registerJs(<<<JS
    $('#employee-select').on('change', function() {
        var selectedEmployeeId = $(this).val();
        console.log('jhbk',selectedEmployeeId);
        if (selectedEmployeeId !== '') {
            $('#employ').val(getEmployeeEmail(selectedEmployeeId));
        }
    });

    function getEmployeeEmail(empId) {
        $.ajax({
        url: '../employee/get-employee-email',
        type: 'GET',
        data: { empId: empId },
        dataType: 'json',
        success: function (response) {
            if (response.employee !== undefined) {
                $('#employ').val(response.employee);
            } else {
                console.error('Email not found.');
            }
        },
        error: function () {
            // Handle AJAX errors if needed
            console.error('AJAX request failed.');
        }
    });
    }
JS
);
?>