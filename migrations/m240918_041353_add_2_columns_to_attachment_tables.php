<?php

use yii\db\Migration;

/**
 * Class m240918_041353_add_2_columns_to_attachment_tables
 */
class m240918_041353_add_2_columns_to_attachment_tables extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%attachments}}', 'refno', $this->string(180));
        $this->addColumn('{{%attachments}}', 'moduleId', $this->integer());

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240918_041353_add_2_columns_to_attachment_tables cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240918_041353_add_2_columns_to_attachment_tables cannot be reverted.\n";

        return false;
    }
    */
}
