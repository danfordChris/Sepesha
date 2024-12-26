<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%document_types}}`.
 */
class m231228_223708_create_document_types_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%document_types}}', [
            'docuid' => $this->primaryKey(),
            'name'    => $this->string(100),
            'type' => $this->integer(),
            'descr'    => $this->text(),
            'status'     => $this->boolean()->defaultValue(true),
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
        $this->dropTable('{{%document_types}}');
    }
}
