<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ResetPasswordForm */

use kartik\password\PasswordInput;
use kartik\widgets\ActiveForm;
use yii\helpers\Html;
// use yii\bootstrap5\ActiveForm;

$this->title = 'Reset password';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-reset-password card col-8 mx-auto mt-5">
    <div class="card-body ">

        <div class=" ">

            <h4><?= Html::encode($this->title) ?></h4>

            <p>Please choose your new password:</p>

            <div class="row">
                <div class="">
                    <?php $form = ActiveForm::begin(['id' => 'reset-password-form']); ?>

                    <?= $form->field($model, 'password')->widget(
                        PasswordInput::class,
                        [
                            'options' => ['required' => true]
                        ]
                    ); ?>

                    <?= $form->field($model, 'confirm_password')->passwordInput(
                       // PasswordInput::class,
                        [
                            'options' => ['required' => true]
                        ]
                    ); ?>

                    <div class="form-group">
                        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
                        <?= Html::a(' Back', ['index'], ['class' => 'btn btn-secondary']);  ?>
                    </div>

                    <?php ActiveForm::end(); ?>
                </div>
            </div>
        </div>
    </div>
</div>