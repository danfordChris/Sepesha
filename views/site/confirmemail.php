<?php

use yii\helpers\Url;
use yii\helpers\Html;
use app\widgets\Alert;
use app\models\User;

/* @var $this yii\web\View */
/* @var $user common\models\User */

$user = new User();
$confirmationLink = Yii::$app->urlManager->createAbsoluteUrl(['site/login']);
?>

<div class="card">
    <div class="card-body">
        <div class="confirmation-email">

            <div class="mb-5 d-flex">
                <a href="<?= Url::toRoute(['/site/index']) ?>">
                    <img src="<?= Yii::$app->request->baseUrl . '/theme/img/catc/logo.png' ?>" class="sign-favicon-a ht-80 wd-150" alt="logo">

                </a>
                <!-- <h1 class="main-logo1 ms-1 me-0 my-auto tx-28">CATC<span class="text-danger">PORTAL</span></h1> -->
                <h1 class="main-logo1 ms-1 me-0 my-auto tx-28"><span class="text-danger">RCAMS</span></h1>

            </div>
            <?= Alert::widget() ?>
            <p>Your registration is now complete!</p>
            <!-- <p>Please click the button below to confirm your email address:</p> -->
            <?= Html::a('Back To Login', $confirmationLink, ['class' => 'btn btn-success']) ?>
        </div>

    </div>
</div>