<?php
use yii\helpers\Html;
use yii\bootstrap5\ActiveForm;
$this->title = 'Request password reset';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="row   mt-5">
    <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <div class="card card-success">
            <div class="card-header">
                <h4>Forgot Password</h4>
            </div>
            <div class="card-body">
                <p class="text-muted">We will send a link to reset your password</p>
                <?php $form = ActiveForm::begin(['id' => 'request-password-reset-form']); ?>

                <label for="email"> <i class="fa fa-envelope"></i> Email</label>
                <?= $form->field($model, 'email')->label(false)->textInput(['autofocus' => true]) ?>

                <div class="form-group">
                    <?= Html::submitButton('Send', ['class' => 'btn btn-primary']) ?>
                </div>

                <?php ActiveForm::end(); ?>
            </div>
        </div>
    </div>
</div>