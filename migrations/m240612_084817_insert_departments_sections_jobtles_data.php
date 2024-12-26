<?php

use yii\db\Migration;
use yii\db\Expression;

/**
 * Class m240612_084817_insert_departments_sections_jobtles_data
 */
class m240612_084817_insert_departments_sections_jobtles_data extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->insert(
            'departments',
            [
                'name' => 'Finance & Operations',
                'sname' => 'FO',
                'created_at' => new Expression('NOW()'),
                'created_by' => '1',
                'updated_at' => new Expression('NOW()'),
                'updated_by' => '1',
            ],

        );

        $this->insert(
            'sections',
            [
                'name' => 'Operations',
                'sname' => 'OPS',
                'did' => '1',
                'created_at' => new Expression('NOW()'),
                'created_by' => '1',
                'updated_at' => new Expression('NOW()'),
                'updated_by' => '1',
            ]
        );

        $this->insert(
            'sections',
            [
                'name' => 'Finance',
                'sname' => 'Finance',
                'did' => '1',
                'created_at' => new Expression('NOW()'),
                'created_by' => '1',
                'updated_at' => new Expression('NOW()'),
                'updated_by' => '1',
            ]
        );

     
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {

        $this->delete('departments');
        $this->delete('sections');
        $this->delete('jobtitles');
    }
}