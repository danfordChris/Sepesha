<?php

use yii\db\Migration;

/**
 * Class m240907_193000_add_agelimit_column_settings_table
 */
class m240907_193000_add_agelimit_column_settings_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%settings}}', 'age_limit', $this->integer()->defaultValue(7));

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240907_193000_add_agelimit_column_settings_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240907_193000_add_agelimit_column_settings_table cannot be reverted.\n";

        return false;
    }
    */
}
