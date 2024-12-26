<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%workflow_documents}}`.
 */
class m240907_140106_create_workflow_documents_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%workflow_documents}}', [
            'id' => $this->primaryKey(),
            'wid' => $this->integer(),
            'doctype_id' => $this->integer(),
            'description' => $this->text(),
            'mandatory' => $this->integer()->defaultValue(false)->notNull(),
            'status' => $this->integer()->defaultValue(true),
            'created_at'  => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'created_by' => $this->integer(),
            'updated_at'  => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_by' => $this->integer(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%workflow_documents}}');
    }
}
