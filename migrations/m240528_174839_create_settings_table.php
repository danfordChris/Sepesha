<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%settings}}`.
 */
class m240528_174839_create_settings_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%settings}}', [
            'settingid' => $this->primaryKey(),
            'password_change' =>$this->integer()->defaultValue(90),
            'login_attempts' =>$this->integer()->defaultValue(5),
            'timezone' =>$this->string(255),
            'appname' =>$this->string(150),
            'mail_host' =>$this->string(150),
            'mail_username' =>$this->string(150),
            'mail_password' =>$this->string(150),
            'mail_port' =>$this->integer(),
            'mail_encryption' =>$this->string(150),
            'mail_dns' =>$this->string(150),
            'mail_senderEmail' =>$this->string(150),
            'mail_senderNamE' =>$this->string(150),
            'admin_email' =>$this->string(150),
            'status' => $this->integer()->defaultValue(1),
            'created_at' => $this->dateTime(),
            'created_by' => $this->integer(),
            'updated_at' => $this->dateTime(),
            'updated_by' => $this->integer(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%settings}}');
    }
}
