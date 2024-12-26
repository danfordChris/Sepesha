<?php

use app\models\Setting;
use app\models\Settings;
use yii\db\Migration;

/**
 * Class m240526_123118_insert_default_user
 */
class m240526_123118_insert_default_user extends Migration
{
    /**
     * {@inheritdoc}
     */

    public function PasswordExpiry()
    {

        $currentDate = date('Y-m-d');
        $newDate = date('Y-m-d', strtotime($currentDate . ' +' . 90 . ' days'));
        return $newDate;
    }
    public function safeUp()
    {

        $this->insert('{{%user}}', [
            'username' => 'admin',
            'email' => 'mosesmberwa@gmail.com',
            'password_hash' => Yii::$app->security->generatePasswordHash('password'),
            'auth_key' => Yii::$app->security->generateRandomString(),
            'full_name' => 'Administrator',
            'password_expiry' => $this->PasswordExpiry()

        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->delete('{{%user}}', ['username' => 'admin']);
    }
}
