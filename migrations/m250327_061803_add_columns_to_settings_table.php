<?php

use yii\db\Migration;

/**
 * Handles adding columns to table `{{%settings}}`.
 */
class m250327_061803_add_columns_to_settings_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('settings', 'system1_url', $this->string(100));
        $this->addColumn('settings', 'system2_url', $this->string(100));
        $this->addColumn('settings', 'system3_url', $this->string(100));
        $this->addColumn('settings', 'system4_url', $this->string(100));
        $this->addColumn('settings', 'driver_commission', $this->decimal(10, 2)->defaultValue(0));
        $this->addColumn('settings', 'agent_commission', $this->decimal(10, 2)->defaultValue(0));
        $this->addColumn('settings', 'vendor_commission', $this->decimal(10, 2)->defaultValue(0));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown() {}
}
