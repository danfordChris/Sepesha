<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%transact_main}}`.
 */
class m231003_051716_create_transact_main_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ENGINE=InnoDB';
        }
        $this->createTable('{{%transact_main}}', [
            'vid' => 'varchar(100) PRIMARY KEY',
            'refno' => $this->string(100),
            'controno' => $this->string(100),
            'transact_date' => $this->date()->notNull(),
            'due_date' => $this->date(),
            'customer_id' => $this->integer(),
            'bank_id' => $this->integer(),
            'currency' => $this->string(50),
            'erate' => $this->decimal(10, 2),
            'transact_type' => $this->string(50),
            'fyid'=>$this->integer()->notNull(),
            'descr' => $this->string(200),
            'amount' => $this->decimal(12,4)->defaultValue(0),
            'vat' => $this->decimal(10,2)->defaultValue(0),
            'checked_by' => $this->integer(),
            'prepared_by' => $this->integer(),
            'authorized_by' => $this->integer(),
            'status' => $this->string(2)->defaultValue('N'),
            'wid' => $this->integer()->notNull(),
            'stid' => $this->integer()->defaultValue(1),
            'wfstatus' => $this->string(100),
            'requserinput' => $this->string(2)->defaultValue('N'),
            'created_at' => $this->dateTime(),
            'created_by' => $this->integer(),
            'updated_at' => $this->dateTime(),
            'updated_by' => $this->integer(),
            'updated_by' => $this->integer(),



        ], $tableOptions);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%transact_main}}');
    }
}
