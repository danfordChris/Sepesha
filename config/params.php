<?php
return [
    'adminEmail' =>  function () {
        return Yii::$app->settings->get()->admin_email;
    },
    'senderEmail' => function () {
        return Yii::$app->settings->get()->mail_senderEmail;
    },
    'senderName' =>  function () {
        return Yii::$app->settings->get()->mail_senderNamE;
    },
    'bsVersion' => '5.x',
    'bsDependencyEnabled' => false,
    'user.passwordResetTokenExpire' => 1800,
    'supportEmail' => 'noreply@sepesha.com',
    'notificationEmail' => 'noreply@sepesha.com',
    'homeURL' => '127.0.0.1',
];