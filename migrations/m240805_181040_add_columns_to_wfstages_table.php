<?php

use yii\db\Migration;

/**
 * Handles adding columns to table `{{%wfstages}}`.
 */
class m240805_181040_add_columns_to_wfstages_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%wfstages}}', 'nextstage', $this->integer());
        $this->addColumn('{{%wfstages}}', 'backstage', $this->integer());
        $this->addColumn('{{%wfstages}}', 'okname', $this->string(100));
        $this->addColumn('{{%wfstages}}', 'notokname', $this->string(100));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {

        $this->dropColumn('{{%wfstages}}', 'nextstage');
        $this->dropColumn('{{%wfstages}}', 'backstage');
        $this->dropColumn('{{%wfstages}}', 'okname');
        $this->dropColumn('{{%wfstages}}', 'notokname');
    }
}
