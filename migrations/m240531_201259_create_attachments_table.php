<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%attachments}}`.
 */
class m240531_201259_create_attachments_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%attachments}}', [
            'id' => $this->primaryKey(),
            'name'=>$this->string(150)->notNull(),
            'type'=>$this->integer(),
            'description'=>$this->text(),
            'owner_id'=>$this->integer(),
            'module'=>$this->string(100),
            'attachment'=>$this->string(100),
            'status' => $this->string(10),
            'created_at'  =>$this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'created_by' =>$this->integer(),
            'updated_at'  =>$this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_by' =>$this->integer(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%attachments}}');
    }
}
