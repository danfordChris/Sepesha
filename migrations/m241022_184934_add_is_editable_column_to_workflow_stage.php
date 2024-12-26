<?php

use yii\db\Migration;

class m241022_184934_add_is_editable_column_to_workflow_stage extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->addColumn('{{%wfstages}}', 'isEditable', $this->boolean()->defaultValue(0));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%wfstages}}', 'isEditable');
    }
}
