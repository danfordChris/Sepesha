<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%notifications}}`.
 */
class m240528_092143_create_notifications_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%notifications}}', [
            'ntid' => $this->primaryKey(),
            'uid' => $this->integer(),
            'custno' => $this->string(190),
            'fphone' => $this->string(20),
            'femail' => $this->string(60),
            'temail' => $this->string(60),
            'tphone' => $this->string(100),
            'subject' => $this->string(100),
            'sms_notice' => $this->text(),
            'email_notice' => $this->text(),
            'appl' => $this->string(20),
            'created_by' => $this->integer(),
            'created_date' => $this->dateTime(),
            'esent' => $this->char(1)->defaultValue('N'),
            'smssent' => $this->char(1)->defaultValue('N'),
            'datesent' => $this->dateTime(),
            'edatesent' => $this->dateTime(),
            'smsrcode' => $this->string(50),
            'smsrmsg' => $this->string(50),
            'request_id' => $this->integer(),
            'descr' => $this->string(100),
            'notification_status' => $this->integer()->defaultValue(0),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%notifications}}');
    }
}
