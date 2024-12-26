<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%financial_year}}`.
 */
class m231003_054046_create_financial_year_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%financial_year}}', [
            'yid' => $this->primaryKey(),
            'year_name' => $this->string(100)->unique(),
            'year_from' => $this->string(),
            'year_to' => $this->string(),
            'description' => $this->text(),
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
        $this->dropTable('{{%financial_year}}');
    }
}
