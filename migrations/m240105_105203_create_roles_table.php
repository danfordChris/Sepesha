<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%roles}}`.
 */
class m240105_105203_create_roles_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%roles}}', [
            'rid' => $this->primaryKey(),
            'name'       => $this->string(150)->unique(),
            'module'     => $this->string(50),
            'entity'     => $this->string(50),
            'type'       => $this->string(50),
            'code'       => $this->string(50)->unique(),
            'descr'      => $this->string(50),
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
        $this->dropTable('{{%roles}}');
    }
}
