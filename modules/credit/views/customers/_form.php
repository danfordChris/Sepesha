<?php

use yii\helpers\Html;
use kartik\widgets\ActiveForm;
use kartik\builder\Form;
use kartik\datecontrol\DateControl;
use kartik\widgets\SwitchInput;

/**
 * @var yii\web\View $this
 * @var backend\modules\credit\models\Customer $model
 * @var yii\widgets\ActiveForm $form
 */
?>

<div class="customer-form">

    <?php $form = ActiveForm::begin(['type' => ActiveForm::TYPE_HORIZONTAL]); echo Form::widget([

        'model' => $model,
        'form' => $form,
        'columns' => 1,
        'attributes' => [

            'first_name' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter First Name...', 'maxlength' => 100]],

            // 'postal_address' => ['type' => Form::INPUT_TEXTAREA, 'options' => ['placeholder' => 'Enter Postal Address...','rows' => 6]],
            'phone_1' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Phone  1...', 'maxlength' => 15]],

            'climit' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Climit...', 'maxlength' => 10,'type'=>'number','default'=>0]],
            'phisical_address' => ['type' => Form::INPUT_TEXTAREA, 'options' => ['placeholder' => 'Enter Phisical Address...','rows' => 2]],

            // 'country_id' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Country ID...']],

            // 'city_id' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter City ID...']],

            // 'is_supplier' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Is Supplier...']],


            'email' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Email...', 'maxlength' => 100,'type'=>'email']],



            // 'middle_name' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Middle Name...', 'maxlength' => 100]],

            // 'last_name' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Last Name...', 'maxlength' => 100]],


            // 'oid' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Oid...', 'maxlength' => 100]],


            // 'phone_2' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Phone  2...', 'maxlength' => 15]],

            // 'can_credit' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Can Credit...', 'maxlength' => 50]],

            'tin' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter TIN NUMBER...']],

            'vrn' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter  VRN NUMBER...', 'maxlength' => 50]],
            'fax' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter  FAX NUMBER...', 'maxlength' => 50]],

        ]

    ]);

    if(!$model->isNewRecord){
        echo $form->field($model, 'is_active')->widget(SwitchInput::class, [
            'disabled'=>$model->isNewRecord,
            'pluginOptions' => [
                'size' => 'large',
                'onColor' => 'success',
                'offColor' => 'danger',
                'onText'=>'Active',
                'offText'=>'Domant'
            ]
        ]);
    }

    echo Html::a( '<span class="fa fa-refresh fa-1x"> Back</span>',['index'],['class'=>'btn btn-default']);
    echo Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'),
        ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary' ,'style'=>'text-align:center']
    );
    ActiveForm::end(); ?>

</div>
