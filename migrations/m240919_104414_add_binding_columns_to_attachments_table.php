<?php

use yii\db\Migration;

/**
 * Handles adding columns to table `{{%attachments}}`.
 */
class m240919_104414_add_binding_columns_to_attachments_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%attachments}}', 'table_name', $this->string(200));
        $this->addColumn('{{%attachments}}', 'model_name', $this->string(200));
        $this->addColumn('{{%attachments}}', 'table_key', $this->integer());
        $this->addColumn('{{%attachments}}', 'stid', $this->integer());
        $this->addColumn('{{%attachments}}', 'wid', $this->integer());
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%attachments}}', 'table_name');
        $this->dropColumn('{{%attachments}}', 'model_name');
        $this->dropColumn('{{%attachments}}', 'table_key');
        $this->dropColumn('{{%attachments}}', 'stid');
        $this->dropColumn('{{%attachments}}', 'wid');
    }
}
