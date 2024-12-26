<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%workflows}}`.
 */
class m240422_084343_create_workflows_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%workflows}}', [
            'wid' => $this->primaryKey(),
            'name' => $this->string(200),
            'stages' => $this->integer(),
            'wfor' => $this->string(30),
            'cby' => $this->integer(),
            'cdate' => $this->dateTime(),
            'eby' => $this->integer(),
            'edate' => $this->dateTime(),
            'status'     => $this->boolean()->defaultValue(true),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%workflows}}');
    }
}