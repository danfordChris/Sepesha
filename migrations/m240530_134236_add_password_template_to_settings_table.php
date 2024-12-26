<?php

use yii\db\Migration;

/**
 * Class m240530_134236_add_password_template_to_settings_table
 */
class m240530_134236_add_password_template_to_settings_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%settings}}', 'password_template', $this->string(100)->defaultValue('normal'));

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%settings}}', 'password_template');

    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240530_134236_add_password_template_to_settings_table cannot be reverted.\n";

        return false;
    }
    */
}
