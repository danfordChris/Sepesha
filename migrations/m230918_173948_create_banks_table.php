<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%banks}}`.
 */
class m230918_173948_create_banks_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%banks}}', [
            'id' => $this->primaryKey(),
            'bankname' => $this->string(190),
            'banksname' => $this->string(50),
            'currency' => $this->string(50),
            'branch' => $this->string(150),
            'swiftcode' => $this->string(150),
            'account_code' => $this->string(50),
            'address' => $this->string(250),
            'status' => $this->boolean()->defaultValue(true),
            'start_date' => $this->date(),
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
        $this->dropTable('{{%banks}}');
    }
}