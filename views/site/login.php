<?php

/** @var yii\web\View $this */
/** @var yii\bootstrap5\ActiveForm $form */

/** @var app\models\LoginForm $model */

use app\models\User;
use yii\helpers\Url;
use app\widgets\Alert;
use yii\bootstrap5\Html;
use app\widgets\NotiflixToast;
use kartik\form\ActiveForm;

$this->title = 'Login';
$this->params['breadcrumbs'][] = $this->title;
?>
<!-- row -->
<div class="row">
    <div class="container mt-5" style="padding-top: 100px;">
        <div class="row">
            <div class="col-12 col-md-12  offset-lg-2 col-md-4 col-xl-8 ">

                <?php //= Yii::$app->toastAlert->showAlerts();
                ?>
                <?= NotiflixToast::widget(); ?>
                <?php //= Alert::widget()
                ?>


                <div class="card card-primary">



                    <div class="card-body">

                        <div class="row">


                            <div class="col-md-6">
                                <h2 style="text-align: center;">

                                    <?= User::Company() ?  Html::img(Yii::$app->request->baseUrl . '/uploads/' . User::Company()->logo, ['class' => '', 'width' => 200]) : Yii::t('app', 'SET YOUR BUSINESS INFO') ?>
                                    <br>
                                    CORE
                                </h2>
                                <br>
                                <h5 class="fw-semibold mb-4">Please sign in to continue.</h5>
                                <?php $form = ActiveForm::begin([
                                    'id' => 'login-form',

                                ]); ?>
                                <label for=""><i class="fa fa-user"></i> Email</label>
                                <?= $form->field($model, 'email')->label(false)->textInput([
                                    'autofocus' => false,
                                    'addon' => [
                                        'prepend' => [
                                            ['content' => '<i class="fa fa-user"></i>'],

                                        ]
                                    ]
                                ]) ?>


                                <div class="float-right">
                                    <!-- <a href="<?= Url::toRoute(['/site/request-password-reset']) ?>" class="text-small">
                                        Forgot Password?
                                    </a> -->
                                </div>
                                <label for=""><i class="fa fa-lock"></i> Password</label>
                                <?= $form->field($model, 'password')->label(false)->passwordInput() ?>

                                <div class="row">
                                    <div class="">
                                        <div class="text-center">
                                            <?= Html::submitButton('Login', ['class' => 'btn  w-100 btn-success ', 'name' => 'login-button']) ?>
                                            <a href="<?= Url::toRoute(['request-password-reset']) ?>"
                                                class="text-small">
                                                Forgot Password ?
                                            </a>
                                        </div>

                                    </div>




                                </div>


                            </div>


                            <div class="col-md-6">


                                <img src="<?= Yii::$app->request->baseUrl . '/uploads/sepesha_front.webp' ?>" alt=""
                                    width="100%" height="auto" style="border-radius:10px;object-fit:scale-down;">
                            </div>


                        </div>


                    </div>

                    <?php ActiveForm::end(); ?>
                    <div class="text-center mt-4 mb-3">
                        <div class="row">


                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
</div>