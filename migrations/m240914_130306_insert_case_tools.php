<?php

use yii\db\Migration;

/**
 * Class m240914_130306_insert_case_tools
 */
class m240914_130306_insert_case_tools extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->batchInsert('case_tools',
        ['name', 'type', 'description', 'status', 'created_at', 'created_by', 'updated_at', 'updated_by'],
        [
            ['Driving License', 1, '', 1, '2024-09-14 05:26:54', NULL, '2024-09-14 05:26:54', NULL],
            ['Business License', 1, '', 1, '2024-09-14 05:27:10', NULL, '2024-09-14 05:27:10', NULL],
            ['Vehicle Registration Card', 1, '', 1, '2024-09-14 05:27:44', NULL, '2024-09-14 05:27:44', NULL],
            ['Tax Identification Certifcate', 1, '', 1, '2024-09-14 05:29:28', NULL, '2024-09-14 05:29:28', NULL],
            ['National ID', 1, '', 1, '2024-09-14 05:29:46', NULL, '2024-09-14 05:29:46', NULL],
            ['Voter ID', 1, '', 1, '2024-09-14 05:29:46', NULL, '2024-09-14 05:29:46', NULL],
            ['Passport ID', 1, '', 1, '2024-09-14 05:29:46', NULL, '2024-09-14 05:29:46', NULL],
            ['Vehicle Insurance', 1, '', 1, '2024-09-14 05:29:46', NULL, '2024-09-14 05:29:46', NULL],

        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240914_130306_insert_case_tools cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240914_130306_insert_case_tools cannot be reverted.\n";

        return false;
    }
    */
}