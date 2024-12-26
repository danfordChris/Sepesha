<?php

use yii\db\Expression;
use yii\db\Migration;

/**
 * Class m240528_173845_add_expiry_tokens_to_user_table
 */
class m240528_173845_add_expiry_tokens_to_user_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->addColumn('{{%user}}', 'login_attempts', $this->integer()->defaultValue(0));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {

        $this->dropColumn('{{%user}}', 'login_attempts');
    }
}
