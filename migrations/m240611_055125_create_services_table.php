<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%services}}`.
 */
class m240611_055125_create_services_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%services}}', [
            'id' => $this->primaryKey(),
            'name'=>$this->string(150),
            'type' => $this->integer()->defaultValue(1),
            'description'=>$this->string(150),
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
        $this->dropTable('{{%services}}');
    }
}
