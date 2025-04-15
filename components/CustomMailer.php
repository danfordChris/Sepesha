<?php

namespace app\components;

use yii\symfonymailer\Mailer;
use Yii;

class CustomMailer extends Mailer
{
    public function init()
    {
        parent::init();
        // Ensure settings component is available
        if (Yii::$app->has('settings') && Yii::$app->settings) {
            $this->transport = [
                'scheme' => 'smtp',
                'host' => Yii::$app->settings->get('mail_host'),
                'username' => Yii::$app->settings->get('mail_username'),
                'password' => Yii::$app->settings->get('mail_password'),
                'port' => Yii::$app->settings->get('mail_port') ?? 587,
                'encryption' => Yii::$app->settings->get('mail_encryption') ?? 'tls',
            ];
        } else {
            throw new \yii\base\InvalidConfigException('Settings component is not available.');
        }
    }
}