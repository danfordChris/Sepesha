<?php

use yii\db\Migration;

/**
 * Class m240611_140022_insert_relationships_values
 */
class m240611_140022_insert_relationships_values extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->batchInsert(
            'relationships',
            ['name', 'descr', 'status', 'created_at', 'created_by', 'updated_at', 'updated_by'],
            [
                ['Mother', '', '1', '2024-06-08 16:02:45', NULL, '2024-06-08 16:02:45', NULL],
                ['Father', '', '1', '2024-06-08 19:05:17', NULL, '2024-06-08 19:05:17', NULL],
                ['Brother', '', '1', '2024-06-08 19:05:33', NULL, '2024-06-08 19:05:33', NULL],
                ['Sister', '', '1', '2024-06-08 19:05:53', NULL, '2024-06-08 19:05:53', NULL],
                ['Grandmother', '', '1', '2024-06-08 19:06:18', NULL, '2024-06-08 19:06:18', NULL],
                ['Grandfather', '', '1', '2024-06-08 19:06:30', NULL, '2024-06-08 19:06:30', NULL],
                ['Uncle', '', '1', '2024-06-08 19:06:48', NULL, '2024-06-08 19:06:48', NULL],
                ['Aunt', '', '1', '2024-06-08 19:07:00', NULL, '2024-06-08 19:07:00', NULL],
                ['Cousin', '', '1', '2024-06-08 19:07:00', NULL, '2024-06-08 19:07:00', NULL],
                ['Niece', '', '1', '2024-06-08 19:07:00', NULL, '2024-06-08 19:07:00', NULL],
                ['Nephew', '', '1', '2024-06-08 19:07:00', NULL, '2024-06-08 19:07:00', NULL],
                ['Guardian', '', '1', '2024-06-08 19:07:00', NULL, '2024-06-08 19:07:00', NULL],
                ['Teacher', '', '1', '2024-06-08 19:07:00', NULL, '2024-06-08 19:07:00', NULL],
                ['Family Friend', '', '1', '2024-06-08 19:07:00', NULL, '2024-06-08 19:07:00', NULL],

            ]
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240611_140022_insert_relationships_values cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240611_140022_insert_relationships_values cannot be reverted.\n";

        return false;
    }
    */
}