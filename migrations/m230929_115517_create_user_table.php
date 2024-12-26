<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%user}}`.
 */
class m230929_115517_create_user_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%user}}', [
            'id' => $this->primaryKey(),
            'username' => $this->string(150)->unique()->notNull(),
            'auth_key' => $this->string(32)->notNull(),
            'password_hash' => $this->string(100)->notNull(),
            'email' => $this->string(100)->unique()->notNull(),
            'full_name' => $this->string(100),
            'password_reset_token' => $this->string(190),
            'company_name' => $this->string(190),
            'user_role' => $this->string(190),
            'u_level' => $this->smallInteger()->defaultValue(88),
            'confirmation_token' => $this->string(100)->unique(),
            'status' => $this->smallInteger()->defaultValue(10),
            'created_at' => $this->dateTime(),
            'created_by' => $this->integer(),
            'updated_at' => $this->dateTime(),
            'updated_by' => $this->integer(),
            'password_expiry' => $this->date()
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%user}}');
    }
}
