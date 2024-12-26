<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%wfroles}}`.
 */
class m240422_121725_create_wfroles_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%wfroles}}', [
            'id' => $this->primaryKey(),
            'wid' => $this->integer(),
            'stid' => $this->integer(),
            'empid' => $this->integer(),
            'fdate' => $this->date(),
            'tdate' => $this->date(),
            'cby' => $this->integer(),
            'cdate' => $this->dateTime(),
            'eby' => $this->integer(),
            'edate' => $this->dateTime(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%wfroles}}');
    }
}
