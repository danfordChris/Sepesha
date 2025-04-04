<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%referal_codes}}`.
 */
class m250404_185615_create_referal_codes_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%referal_codes}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->string(),
            'user_type' => $this->string(),
            'code' => $this->string(),
            'value' => $this->decimal(10, 2),
            'start_date' => $this->dateTime(),
            'end_date' => $this->dateTime(),
            'descr' => $this->text(),
            'status' => $this->boolean()->defaultValue(true),
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
        $this->dropTable('{{%referal_codes}}');
    }
}
