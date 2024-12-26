<?php

use app\models\Beneficiary;
use app\models\Bus;
use yii\helpers\Html;
use app\models\Employee;
use kartik\date\DatePicker;
use kartik\depdrop\DepDrop;
use kartik\file\FileInput;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;
use yii\helpers\Url;
use yii\web\UrlRule;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="employee-form">

    <?php
    if ($model->isNewRecord) {
        $action = 'create';
        $parent = '#rcamodal';
        $md = 4;
    } else {

        $action = 'update?rca=' . Yii::$app->getSecurity()->hashData($model->id, 'gmtdev');
        $parent = '';
        $md = 3;
    }
    $form = ActiveForm::begin([
        'action' => [$action],
        'method' => 'post',

    ]); ?>

    <div class="row">
        <div class="col-md-3">
            <?= $form->field($model, 'fname')->textInput(['maxlength' => true, 'placeholder' => 'Enter First Name']) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'mname')->textInput(['maxlength' => true, 'placeholder' => 'Enter Middle Name']) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'sname')->textInput(['maxlength' => true, 'placeholder' => 'Enter Last Name']) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'category')->widget(Select2::class, [
                'data' => Employee::getJobTitles(),
                'options' => ['placeholder' => 'Select Jobtitle', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent

                ],
            ]) ?>
        </div>
    </div>

    <div class="row">
        <div class="col-md-3">
            <?= $form->field($model, 'gender')->widget(Select2::class, [
                'data' => Employee::getGender(),
                'options' => ['placeholder' => 'Select Gender', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent

                ],
            ]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'idtype')->widget(Select2::class, [
                'data' => Employee::getIdtype(),
                'options' => ['placeholder' => 'Select ID Type', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent

                ],
            ]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'idno')->textInput(['maxlength' => true, 'placeholder' => 'ID number ']) ?>

        </div>

        <div class="col-md-3">
            <?= $form->field($model, 'marital_status')->widget(Select2::class, [
                'data' => Employee::getMaritalStatus(),
                'options' => ['placeholder' => 'Select Marital Status', 'required' => true],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent

                ],
            ]) ?>

        </div>
    </div>

    <div class="row">
        <div class="col-md-3">
            <?= $form->field($model, 'oid')->widget(Select2::class, [
                'data' => Employee::getOffices(),
                'options' => ['placeholder' => 'Select Office'],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => $parent

                ],
            ]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'registered_date')->widget(DatePicker::class, [
                'options' => [
                    'class' => 'form-control',
                    'placeholder' => 'Select Expense Date',
                    'value' => date('Y-m-d')
                ],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'yyyy-mm-dd'
                ]
            ]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'phone')->textInput(['maxlength' => true, 'placeholder' => 'Enter Phone'])->label('Phone(Without 0 or 255)') ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'email')->textInput(['maxlength' => true, 'placeholder' => 'Enter Email']) ?>

        </div>

    </div>

    <div class="row">

        <div class="col-md-3">
            <?= $form->field($model, 'dob')->widget(DatePicker::class, [
                'options' => [
                    'class' => 'form-control',
                    'placeholder' => 'Select Date of Birth',
                ],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'yyyy-mm-dd'
                ]
            ]) ?>

        </div>
        <div class="col-md-3">
            <?= $form->field($model, 'physical_address')->textInput() ?>

        </div>

        <div class="col-md-3">
            <?= $form->field($model, 'photo')->widget(FileInput::class, [
                'options' => ['accept' => 'image/*'],
                'pluginOptions' => [
                    // 'uploadUrl' => Url::to(['@web/uploads/']),
                    'showPreview' => false,
                    'showCaption' => true,
                    'showRemove' => false,
                    'showCancel' => false,
                    'showUpload' => false
                ],
            ])->label('Photo (Max :1MB)') ?>
        </div>
        <div class="col-3">
            <?= $form->field($model, 'department_id')->widget(Select2::class, [
                'data' => Employee::getDepartments(),
                'options' => ['id' => 'department-dropdown', 'placeholder' => 'Select Department'],
                'pluginOptions' => [
                    'allowClear' => true,

                ],
            ])->label('Department');  ?>

        </div>
        <div class="row">

            <div class="col-3">
                <?= $form->field($model, 'section_id')->widget(DepDrop::class, [
                    'options' => ['id' => 'section-dropdown', 'placeholder' => 'Select Section'],
                    'data' => Employee::getSections(),
                    'type' => DepDrop::TYPE_SELECT2,
                    'pluginOptions' => [
                        'depends' => ['department-dropdown'],
                        'url' => Url::to(['site/fetch-departments']),
                        'allowClear' => true,
                        'dropdownParent' => $parent

                    ],
                ])->label('Section'); ?>

            </div>



            <?php if (!$model->isNewRecord) : ?>
               
                <?php $form->field($model, 'is_user')->widget(Select2::class, [
                    'data' => Employee::getOptions(),
                    'options' => ['placeholder' => 'Is User'],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>
            <?php endif; ?> 



                <?php if (!$model->isNewRecord) : ?>
                    <div class="col-md-3">
                        <?= $form->field($model, 'status')->widget(Select2::class, [
                            'data' => Employee::getStatusOptions(),
                            'options' => ['placeholder' => 'Select Status'],
                            'pluginOptions' => [
                                'allowClear' => true,
                            ],
                        ])

                        ?>
                    </div>
                <?php endif; ?>
                <div class="col-md-3 mt-4">
                    <?php if ($model->isNewRecord) : ?>
                        <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                        <?php echo Html::submitButton(Yii::t('app', 'Add'), ['class' => 'btn btn-outline-info']); ?>
                    <?php else : ?>
                        <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
                        <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
                    <?php endif; ?>
                </div>
        </div>
    </div>

    <?php ActiveForm::end(); ?>

</div>