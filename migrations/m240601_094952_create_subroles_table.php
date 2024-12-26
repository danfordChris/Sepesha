<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%subroles}}`.
 */
class m240601_094952_create_subroles_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%subroles}}', [
            'id' => $this->primaryKey(),
            'rid' => $this->integer()->notNull(),
            'name' => $this->string(150)->notNull(),
            'fdate' => $this->date(),
            'tdate' => $this->date(),
            'status' => $this->integer()->defaultValue(1),
            'created_at' => $this->dateTime(),
            'created_by' => $this->integer(),
            'updated_at' => $this->dateTime(),
            'updated_by' => $this->integer(),
        ]);

        $this->createIndex(
            'idx-rid',
            '{{%subroles}}',
            'rid'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropIndex(
            'idx-rid',
            '{{%subroles}}',
        );
        $this->dropTable('{{%subroles}}');
    }
}
