<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%exchange_rates}}`.
 */
class m240319_060414_create_exchange_rates_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%exchange_rates}}', [
            'id' => $this->primaryKey(),
            'gov_rate' => $this->decimal(10, 2),
            'internal_rate' => $this->decimal(10, 2),
            'status' => $this->boolean()->defaultValue(1),
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
        $this->dropTable('{{%exchange_rates}}');
    }
}