<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%relationships}}`.
 */
class m240611_123202_create_relationships_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%relationships}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(150)->notNull(),
            'descr' => $this->text(),
            'status' => $this->integer()->defaultValue(1),
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
        $this->dropTable('{{%relationships}}');
    }
}
