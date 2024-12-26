<?php

use yii\helpers\Html;
use kartik\widgets\ActiveForm;
use kartik\builder\Form;
use kartik\datecontrol\DateControl;

/**
 * @var yii\web\View $this
 * @var backend\modules\credit\models\CreditControl $model
 * @var yii\widgets\ActiveForm $form
 */
?>

<div class="credit-control-form">

    <?php $form = ActiveForm::begin(['type' => ActiveForm::TYPE_HORIZONTAL]); echo Form::widget([

        'model' => $model,
        'form' => $form,
        'columns' => 1,
        'attributes' => [

            'crdid' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Crdid...', 'maxlength' => 100]],

            'cdate' => ['type' => Form::INPUT_WIDGET, 'widgetClass' => DateControl::classname(),'options' => ['type' => DateControl::FORMAT_DATE]],

            'cid' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Cid...']],

            'ctype' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Ctype...', 'maxlength' => 5]],

            'created_at' => ['type' => Form::INPUT_WIDGET, 'widgetClass' => DateControl::classname(),'options' => ['type' => DateControl::FORMAT_DATETIME]],

            'updated_at' => ['type' => Form::INPUT_WIDGET, 'widgetClass' => DateControl::classname(),'options' => ['type' => DateControl::FORMAT_DATETIME]],

            'camount' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Camount...', 'maxlength' => 10]],

            'damount' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Damount...', 'maxlength' => 10]],

            'oid' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Oid...']],

            'status' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Status...']],

            'created_by' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Created By...']],

            'updated_by' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Updated By...']],

            'descr' => ['type' => Form::INPUT_TEXTAREA, 'options' => ['placeholder' => 'Enter Descr...','rows' => 6]],

            'refno' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Refno...', 'maxlength' => 200]],

            'recptno' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Recptno...', 'maxlength' => 200]],

        ]

    ]);

    echo Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'),
        ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']
    );
    ActiveForm::end(); ?>

</div>
