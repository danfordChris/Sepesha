<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%codes}}`.
 */
class m230915_113322_create_account_codes_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%account_codes}}', [
            'coid' => $this->primaryKey(),
            'category' => $this->string(),
            'code' => $this->string(100)->unique(),
            'name' => $this->string(50),
            'descr' => $this->text(),
            'status' => $this->boolean()->defaultValue(true),
            'created_at' => $this->dateTime(),
            'created_by' => $this->integer(),
            'updated_at' => $this->dateTime(),
            'updated_by' => $this->integer()
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%account_codes}}');
    }
}
