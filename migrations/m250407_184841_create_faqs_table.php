<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%faqs}}`.
 */
class m250407_184841_create_faqs_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%faqs}}', [
            'id' => $this->primaryKey(),
            'question' => $this->string()->notNull(),
            'answer' => $this->text()->notNull(),
            'category_id' => $this->integer(),
            'sort_order' => $this->integer()->defaultValue(0),
            'is_featured' => $this->boolean()->defaultValue(false),
            'is_published' => $this->boolean()->defaultValue(false),
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
        $this->dropTable('{{%faqs}}');
    }
}
