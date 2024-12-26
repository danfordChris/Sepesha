<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "settings".
 *
 * @property int $settingid
 * @property int|null $password_change
 * @property int|null $login_attempts
 * @property string|null $timezone
 * @property string|null $appname
 * @property string|null $mail_host
 * @property string|null $mail_username
 * @property string|null $mail_password
 * @property int|null $mail_port
 * @property string|null $mail_encryption
 * @property string|null $mail_dns
 * @property string|null $mail_senderEmail
 * @property string|null $mail_senderNamE
 * @property string|null $admin_email
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 * @property string|null $password_template
 */
class Setting extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'settings';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['password_change', 'login_attempts', 'mail_port', 'status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['timezone'], 'string', 'max' => 255],
            [['appname', 'mail_host', 'mail_username', 'mail_password', 'mail_encryption', 'mail_dns', 'mail_senderEmail', 'mail_senderNamE', 'admin_email'], 'string', 'max' => 150],
            [['password_template'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'settingid' => 'Settingid',
            'password_change' => 'Password Change',
            'login_attempts' => 'Login Attempts',
            'timezone' => 'Timezone',
            'appname' => 'Appname',
            'mail_host' => 'Mail Host',
            'mail_username' => 'Mail Username',
            'mail_password' => 'Mail Password',
            'mail_port' => 'Mail Port',
            'mail_encryption' => 'Mail Encryption',
            'mail_dns' => 'Mail Dns',
            'mail_senderEmail' => 'Mail Sender Email',
            'mail_senderNamE' => 'Mail Sender Nam E',
            'admin_email' => 'Admin Email',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
            'password_template' => 'Password Template',
        ];
    }
}
