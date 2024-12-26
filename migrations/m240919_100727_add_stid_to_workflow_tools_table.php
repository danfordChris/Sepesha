<?php

use yii\db\Migration;

/**
 * Class m240919_100727_add_stid_to_workflow_tools_table
 */
class m240919_100727_add_stid_to_workflow_tools_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%workflow_tools}}', 'stid', $this->integer());
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240919_100727_add_stid_to_workflow_tools_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240919_100727_add_stid_to_workflow_tools_table cannot be reverted.\n";

        return false;
    }
    */
}
