<?php

use yii\db\Expression;
use yii\db\Migration;

/**
 * Class m240606_045317_insert_company_data
 */
class m240606_045317_insert_company_data extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->insert('companies', [
            'company_name' => 'business name',
            'company_email' => 'info@business.com',
            'country' => null,
            'logo' => 'logo.jpg',
            'company_address' => 'dar es salaam',
            'company_start_date' => date('Y-m-d'),
            'company_created_date' => new Expression('NOW()'),
            'company_status' => 'SHORT NAME',
            'tin_no' => '',
            'tel' => null,
            'phone' => null,
            'weburl' => null,
            'fax' => null,
            'status' => '1',
            'created_at' => '2024-06-06 06:49:55',
            'created_by' => '1',
            'updated_at' => '2024-06-06 06:49:55',
            'updated_by' => '1',
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->delete('companies', ['company_id' => range(1, 10)]);
    }
}
