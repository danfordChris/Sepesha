<?php

use yii\db\Migration;

/**
 * Class m240528_120518_alter_user_table
 */
class m240528_120518_alter_user_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->alterColumn('{{%user}}', 'status',$this->integer()->defaultValue(0));

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240528_120518_alter_user_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240528_120518_alter_user_table cannot be reverted.\n";

        return false;
    }
    */
}
