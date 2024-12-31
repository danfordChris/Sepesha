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
    'supportEmail' => 'support@gomot.co.tz',
    'notificationEmail' => 'salesjames96@gnmail.com',
    'homeURL' => '127.0.0.1',
    // 'frontURL' => function () {
    //     return Yii::$app->request->hostInfo . '/sepesha/sepesha_portal';
    // },
    'frontURL' => '/sepesha/sepesha_portal'

];