<?php

use yii\db\Migration;

/**
 * Class m240529_051117_alter_login_attempts_column_in_user_table
 */
class m240529_051117_alter_login_attempts_column_in_user_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->alterColumn('{{%user}}', 'login_attempts',$this->integer()->defaultValue(5));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240529_051117_alter_login_attempts_column_in_user_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240529_051117_alter_login_attempts_column_in_user_table cannot be reverted.\n";

        return false;
    }
    */
}
