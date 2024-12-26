<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%approvals}}`.
 */
class m240422_085340_create_approvals_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%approvals}}', [
            'id' => $this->primaryKey(),
            'reqid' => $this->string(100),
            'wid' => $this->integer(),
            'stid' => $this->integer(),
            'wfsname'=>$this->string(100),
            'wfstatus'=>$this->string(100),
            'comments'=>$this->string(100),
            'attachment'=>$this->string(190),
            'wfs'=>$this->string(5),
            'fdate' =>$this->date(),
            'tdate' =>$this->date(),
            'amount' =>$this->decimal(15,2),
            'status' => $this->integer()->defaultValue(1),
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
        $this->dropTable('{{%approvals}}');
    }
}