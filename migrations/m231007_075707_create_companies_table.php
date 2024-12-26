<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%companies}}`.
 */
class m231007_075707_create_companies_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%companies}}', [
            'company_id' => $this->primaryKey(),
            'company_name' => $this->string(100)->notNull(),
            'company_email' => $this->string(100),
            'country' => $this->string(100),
            'logo' => $this->string(200),
            'company_address' => $this->string(255),
            'company_start_date' => $this->date(),
            'company_created_date' => $this->dateTime(),
            'company_status' => $this->string(100)->defaultValue(true),
            'tin_no' => $this->string(100),
            'tel' => $this->string(20),
            'phone' => $this->string(20),
            'weburl' => $this->string(100),
            'fax' => $this->string(20),
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
        $this->dropTable('{{%companies}}');
    }
}
