<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%jobtitles}}`.
 */
class m240105_072938_create_jobtitles_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%jobtitles}}', [
            'jtid'       => $this->primaryKey(),
            'name'       => $this->string(150),
            'sname'      => $this->string(50),
            'status'     => $this->boolean()->defaultValue(true),
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
        $this->dropTable('{{%jobtitles}}');
    }
}
