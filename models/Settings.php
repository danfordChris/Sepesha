<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "settings".
 *
 * @property int $settingid
 * @property float|null $income_rate
 */
class Settings extends \yii\db\ActiveRecord
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
            [['settingid', 'password_template', 'login_attempts', 'mail_username', 'mail_port'], 'required'],
            [['settingid'], 'integer'],
            [[
                'password_change',
                'login_attempts',
                'timezone',
                'appname',
                'mail_host',
                'mail_username',
                'mail_password',
                'mail_port',
                'mail_encryption',
                'mail_dns',
                'mail_senderEmail',
                'mail_senderNamE',
                'driver_commission',
                'agent_commission',
                'vendor_commission',
                'admin_email',
                'age_limit',
                'system1_url',
                'system2_url',
                'system3_url',
                'system4_url',

            ], 'safe']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'settingid' => 'Settingid',
            'password_change' => 'Password Change Policy (days)',
            'login_attempts' => 'Maximum Login Attempts',
            'timezone' => 'Timezone',
            'appname' => 'App name',
            'mail_host' => 'Mail Host',
            'mail_username' => 'Mail Username',
            'mail_password' => 'Mail Password',
            'mail_port' => 'Mail Port',
            'mail_encryption' => 'Mail Encryption',
            'mail_dns' => 'Mail DNS',
            'mail_senderEmail' => 'Mail Sender Email',
            'mail_senderNamE' => 'Mail Sender Name',
            'admin_email' => 'Admin Email',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
            'password_template' => 'Password Template',

        ];
    }

    public function getCreatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'created_by']);
    }

    public function getUpdatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'updated_by']);
    }


    public static function config()
    {
        return  self::findOne(['settingid' => 1]);
    }

    public static function PasswordExpiry()
    {
        $numberOfDays = self::findOne(['settingid' => 1])->password_change ?? 90;
        $currentDate = date('Y-m-d');
        $newDate = date('Y-m-d', strtotime($currentDate . ' +' . $numberOfDays . ' days'));
        return $newDate;
    }


    public static function PassTemplates()
    {
        return [
            'simple' => 'simple',
            'normal' => 'normal',
            'fair' => 'fair',
            'medium' => 'medium',
            'strong' => 'strong'
        ];
    }
}
