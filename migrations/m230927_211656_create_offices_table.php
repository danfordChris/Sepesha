<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%offices}}`.
 */
class m230927_211656_create_offices_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%offices}}', [
            'id' => $this->primaryKey(),
            'manager_id' =>$this->string(50),
            'name' =>$this->string(150),
            'descr' => $this->text(),
            'status' => $this->integer()->defaultValue(10),
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
        $this->dropTable('{{%offices}}');
    }
}
