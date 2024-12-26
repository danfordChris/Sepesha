<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%employee_category}}`.
 */
class m230927_213920_create_employee_category_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%employee_category}}', [
            'id' => $this->primaryKey(),
            'type' =>$this->string(50),
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
        $this->dropTable('{{%employee_category}}');
    }
}
