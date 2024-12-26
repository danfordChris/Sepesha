<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%account_entries}}`.
 */
class m230915_133733_create_account_entries_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        if ($this->db->driverName === 'mysql')
        {

            $tableOptions = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ENGINE=InnoDB';
        }
        $this->createTable('{{%account_entries}}', [
            'id' => 'varchar(100) PRIMARY KEY',
            'transact_id' => $this->string(),
            'name' => $this->string(100),
            'entryid' => $this->string(),
            'entry_type' => $this->string(50)->comment('CREDIT,DEBIT'),
            'category' => $this->string(50)->comment('voucher,invoice,payment, receipt'),
            'account_code' => $this->string(50),
            'quantity' => $this->integer()->defaultValue(1),
            'uom' => $this->string(20),
            'vat' => $this->decimal(10,2)->defaultValue(0),
            'unit_price' =>$this->decimal(12,4)->defaultValue(0),
            'updated_by' => $this->integer(),
            'dramount' => $this->decimal(12,4)->defaultValue(0),
            'cramount' => $this->decimal(12,4)->defaultValue(0),
            'currency' => $this->string(50),
            'erate' => $this->decimal(10, 2),
            'descr' => $this->text(),
            'fyid'=>$this->integer()->notNull(),
            'reference_no' => $this->string(50),
            'customer_id' => $this->integer(),
            'status' => $this->string(2)->defaultValue('N'),
            'transact_date' => $this->dateTime(),
            'created_at' => $this->dateTime(),
            'created_by' => $this->integer(),
            'updated_at' => $this->dateTime(),
            'updated_by' => $this->integer(),
            'wid' => $this->integer(),
            'stid' => $this->integer()->defaultValue(1),
            'wfstatus' => $this->string(100),
            'requserinput' => $this->string(2)->defaultValue('N'),
        ],$tableOptions);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%account_entries}}');
    }
}
