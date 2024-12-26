<?php

use yii\db\Migration;

/**
 * Class m240919_100848_add_stid_to_workflow_documents_table
 */
class m240919_100848_add_stid_to_workflow_documents_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%workflow_documents}}', 'stid', $this->integer());

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240919_100848_add_stid_to_workflow_documents_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240919_100848_add_stid_to_workflow_documents_table cannot be reverted.\n";

        return false;
    }
    */
}
