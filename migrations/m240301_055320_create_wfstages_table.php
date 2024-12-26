<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%wfstages}}`.
 */
class m240301_055320_create_wfstages_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->createTable('{{%wfstages}}', [
            'id' => $this->primaryKey(),
            'wid' =>$this->integer(),
            'sno' =>$this->integer(),
            'sname' =>$this->string(100),
            'actok' =>$this->string(100),
            'okchar' =>$this->string(2)->defaultValue('Y'),
            'actnotok' =>$this->string(100),
            'notokchar' =>$this->string(2)->defaultValue('N'),
            'rptdisplay' =>$this->string(40),
            'status' =>$this->string(100)->defaultValue('active'),
            'cby' =>$this->integer(),
            'cdate' =>$this->dateTime(),
            'eby' =>$this->integer(),
            'edate' =>$this->dateTime(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%wfstages}}');
    }
}
