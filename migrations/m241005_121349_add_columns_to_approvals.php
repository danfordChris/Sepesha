<?php

use yii\db\Migration;

/**
 * Class m241005_121349_add_columns_to_approvals
 */
class m241005_121349_add_columns_to_approvals extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%approvals}}', 'intake_id', $this->integer());
        $this->addColumn('{{%approvals}}', 'benid', $this->integer());
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m241005_121349_add_columns_to_approvals cannot be reverted.\n";

        return false;
    }
}