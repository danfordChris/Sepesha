<?php

use yii\db\Migration;

/**
 * Class m240529_083041_add_is_user_column_in_employee_table
 */
class m240529_083041_add_is_user_column_in_employee_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%employee}}', 'is_user', $this->integer()->defaultValue(0));

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%employee}}', 'is_user');

    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240529_083041_add_is_user_column_in_employee_table cannot be reverted.\n";

        return false;
    }
    */
}
