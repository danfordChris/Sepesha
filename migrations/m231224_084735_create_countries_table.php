<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%countries}}`.
 */
class m231224_084735_create_countries_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%countries}}', [
            'country_id' => $this->primaryKey(),
            'name'    => $this->string(150),
            'iso'    => $this->string(20),
            'iso3'    => $this->string(20),
            'phonecode'    => $this->integer(),
            'continent_code'    => $this->string(20),
            'continent_name'    => $this->string(20),
            'status'     => $this->boolean()->defaultValue(true),
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
        $this->dropTable('{{%countries}}');
    }
}
