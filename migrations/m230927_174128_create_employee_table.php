<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%employee}}`.
 */
class m230927_174128_create_employee_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%employee}}', [
            'id' => $this->primaryKey(),
            'department_id' => $this->integer(),
            'section_id' => $this->integer(),
            'fname' => $this->string(100)->notNull(),
            'mname' => $this->string(100),
            'sname' => $this->string(100)->notNull(),
            'category' => $this->string(50),
            'gender' => $this->string(100),
            'idno' => $this->string(100),
            'idtype' => $this->string(100),
            'marital_status' => $this->string(),
            'registered_date' => $this->dateTime(),
            'dob' => $this->dateTime(),
            'phone' => $this->string(100),
            'email' => $this->string(100),
            'photo' => $this->string(100),
            'sig' => $this->string(100),
            'salary' => $this->string(100),
            'oid' => $this->integer(),
            'physical_address' => $this->string(150),
            'status' => $this->integer()->defaultValue(10),
            'created_at' => $this->dateTime(),
            'created_by' => $this->integer(),
            'updated_at' => $this->dateTime(),
            'updated_by' => $this->integer(),  
        ]);

        $this->createIndex(
            'idx-employee',
            '{{%employee}}',
            [
                'department_id',
                'section_id',
                'oid',

            ]
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%employee}}');
    }
}
