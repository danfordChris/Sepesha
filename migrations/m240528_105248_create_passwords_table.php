<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%passwords}}`.
 */
class m240528_105248_create_passwords_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%passwords}}', [
            'passid' => $this->primaryKey(),
            'uid' =>$this->integer(),
            'duration' =>$this->bigInteger(),
            'password_hash' => $this->string(255),
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
        $this->dropTable('{{%passwords}}');
    }
}
