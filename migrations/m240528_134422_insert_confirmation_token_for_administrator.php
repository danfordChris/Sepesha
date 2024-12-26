<?php

use yii\db\Migration;

/**
 * Class m240528_134422_insert_confirmation_token_for_administrator
 */
class m240528_134422_insert_confirmation_token_for_administrator extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->update('user', ['confirmation_token' => 'rpYJ7doovvJYfXki-T5BJZxxxgLigZ-s'], ['id' => '1']);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240528_134422_insert_confirmation_token_for_administrator cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240528_134422_insert_confirmation_token_for_administrator cannot be reverted.\n";

        return false;
    }
    */
}
