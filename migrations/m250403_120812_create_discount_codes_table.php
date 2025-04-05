<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%discount_codes}}`.
 */
class m250403_120812_create_discount_codes_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%discount_codes}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->string(),
            'value' => $this->decimal(30, 2)->notNull(),
            'type' => $this->string(10)->notNull()->comment('Allowed values: percent, amount'), 
            'category' => $this->string(10)->notNull()->comment('Allowed values: driver, customer'), 
            'code' => $this->string(255)->notNull()->unique(),
            'descr' => $this->text(),
            'start_date' => $this->dateTime(),
            'end_date' => $this->dateTime(),
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
        $this->dropTable('{{%discount_codes}}');
    }
}
