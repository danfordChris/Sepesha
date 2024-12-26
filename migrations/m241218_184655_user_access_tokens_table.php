<?php

use yii\db\Migration;

/**
 * Class m241218_184655_user_access_tokens_table
 */
class m241218_184655_user_access_tokens_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('user_access_tokens', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer(),
            'access_token' => $this->string(190)->unique(),
            'refresh_token' => $this->string(190)->notNull()->unique(),
            'user_type' => $this->string(50)->notNull(),
            'access_expires_at' => $this->timestamp(),
            'refresh_expires_at' => $this->timestamp(),
            'created_at' => $this->timestamp(),
            'updated_at' => $this->timestamp(),
        ]);

        // Add foreign key for table `user`
        $this->addForeignKey(
            'fk-user_refresh_tokens-user_id',
            'user_access_tokens',
            'user_id',
            'clients_info',
            'id',
            'CASCADE',
            'CASCADE'
        );
    }

    public function safeDown()
    {
        // Drop foreign key
        $this->dropForeignKey(
            'fk-user_refresh_tokens-user_id',
            'user_access_tokens'
        );

        // Drop table
        $this->dropTable('user_access_tokens');
    }

    /**
     * {@inheritdoc}
     */


}