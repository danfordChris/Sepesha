<?php

use yii\db\Migration;

/**
 * Class m240529_050841_alter_password_column_in_user_table
 */
class m240529_050841_alter_password_column_in_user_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->alterColumn('{{%user}}', 'password_hash',$this->string(100));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240529_050841_alter_password_column_in_user_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240529_050841_alter_password_column_in_user_table cannot be reverted.\n";

        return false;
    }
    */
}
