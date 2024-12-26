<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%categories}}`.
 */
class m240601_104424_create_categories_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%categories}}', [
            'id' => $this->primaryKey(),
            'program_id'=>$this->integer(),
            'type'=>$this->string(150),
            'name'=>$this->string(150)->notNull(),
            'sname'=>$this->string(150)->notNull(),
            'description'=>$this->string(255),
            'status' => $this->integer()->defaultValue(1),
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
        $this->dropTable('{{%categories}}');
    }
}
