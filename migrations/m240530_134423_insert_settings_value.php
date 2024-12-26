<?php

use yii\db\Migration;

/**
 * Class m240530_134423_insert_settings_value
 */
class m240530_134423_insert_settings_value extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->batchInsert(
            'settings',
            ['settingid', 'password_change', 'login_attempts', 'timezone', 'appname', 'mail_host', 'mail_username', 'mail_password', 'mail_port', 'mail_encryption', 'mail_dns', 'mail_senderEmail', 'mail_senderNamE', 'admin_email', 'status', 'created_at', 'created_by', 'updated_at', 'updated_by'],
            [
                [1, 90, 5, 'Africa/Dar_es_Salaam', 'RCA SYSTEM', 'smtp.gmail.com', 'salesjames96@gmail.com', 'awahirsbvqmaxytm', 587, 'tls', 'smtps://salesjames96@gmail.com:awahirsbvqmaxytm@smtp.gmail.com', 'noreply@gomot.co.tz', 'GOMOT DEV', 'admin@gomotsoft.com', 1, NULL, NULL, NULL, NULL]
            ]

        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240530_134423_insert_settings_value cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240530_134423_insert_settings_value cannot be reverted.\n";

        return false;
    }
    */
}
