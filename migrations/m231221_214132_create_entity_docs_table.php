<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%entity_docs}}`.
 */
class m231221_214132_create_entity_docs_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%entity_docs}}', [
            'docid' => $this->primaryKey(),
            'ngoid' =>$this->integer(50)->notNull(),
            'docno' =>$this->string(100)->notNull(),
            'doctype' =>$this->integer(),
            'document' =>$this->string(100),
            'sdate' =>$this->date(),
            'edate' =>$this->date(),
            'status' => $this->boolean()->defaultValue(true),
            'created_at' =>$this->dateTime(),
            'created_by' =>$this->integer(),
            'updated_at' =>$this->dateTime(),
            'updated_by' =>$this->integer(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%entity_docs}}');
    }
}
