<?php

use kartik\password\PasswordInput;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model frontend\models\ChangePasswordForm */
/* @var $form ActiveForm */

$request = Yii::$app->request;
$uname = $request->get('full_name');
$this->title = 'Name: ' . $uname; ?>
<div class="col-8 mt-5 mx-auto">
    <div class="card">

        <div class="card-header tx-medium bd-0 tx-white bg-info">

            <h5 class="mx-auto text-white text-left"> Create password<label for="" style="font-weight:bold"></label></h5>
        </div>
        <div class="card-body">



            <?php $form = ActiveForm::begin(); ?>
            <?= $form->field($model, 'password')->label('New Password')->widget(
                                                    PasswordInput::class,
                                                    [
                                                        'options' => ['required' => true]
                                                    ]
                                                ); ?>
            <?= $form->field($model, 'confirm_password')->passwordInput() ?>
            <div class="form-group">
                <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['signup'], ['class' => 'btn btn-secondary']); ?>
                <?= Html::submitButton('Change', ['class' => 'btn btn-success']) ?>
            </div>
            <?php ActiveForm::end(); ?>
        </div>

    </div>
</div>