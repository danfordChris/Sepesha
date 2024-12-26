<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%case_tools}}`.
 */
class m240907_180112_create_case_tools_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%case_tools}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(100)->notNull(),
            'type' => $this->integer()->notNull(),
            'description' => $this->text(),
            'ctrl' => $this->text(),
            'action' => $this->text(),
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
        $this->dropTable('{{%case_tools}}');
    }
}
