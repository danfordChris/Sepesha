<?php
use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model frontend\models\ChangePasswordForm */
/* @var $form ActiveForm */

 $request=Yii::$app->request;
 $uname=$request->get('full_name');
$this->title ='Name: '.$uname; ?>
<div class="container mt-5">
    <div class="card">

        <div class="card-header tx-medium bd-0 tx-white bg-info">

            <h5 class="mx-auto text-white text-left"> Please change your password to continue as : <label for=""
                    style="font-weight:bold"><span>
                        <?=$model->full_name??''?></span></label></h5>
        </div>
        <div class="card-body">

            <?php $form = ActiveForm::begin([
            'enableAjaxValidation'=>true,
            ]); ?>
            <?= $form->field($model, 'oldPassword')->label('Old Password')->passwordInput() ?>
            <?= $form->field($model, 'password')->label('New Password')->passwordInput() ?>
            <?= $form->field($model, 'confirm_password')->passwordInput() ?>
            <div class="form-group">
                <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['signup'], ['class' => 'btn btn-secondary']); ?>
                <?= Html::submitButton('Change', ['class' => 'btn btn-success']) ?>
            </div>
            <?php ActiveForm::end(); ?>




        </div>
    </div>
</div>