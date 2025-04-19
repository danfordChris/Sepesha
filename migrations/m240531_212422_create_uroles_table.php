<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%uroles}}`.
 */
class m240531_212422_create_uroles_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%uroles}}', [
            'id' => $this->primaryKey(),
            'empid' => $this->integer(),
            'rid' => $this->integer(),
            'fdate' => $this->date(),
            'tdate' => $this->date(),
            'status' => $this->integer()->defaultValue(1),
            'created_at' => $this->dateTime(),
            'created_by' => $this->integer(),
            'updated_at' => $this->dateTime(),
            'updated_by' => $this->integer(),
        ]);


        $this->batchInsert(
            'uroles',
            ['empid', 'rid', 'fdate', 'tdate'],
            [
                ['1', '1', '2024-05-30', '2050-06-18']
            ]
        );

        $this->batchInsert(
            'roles',
            ['name', 'module', 'type', 'code', 'entity'],
            [['admin', 'ADMIN', 'main', 'admin', 'admin'],]

        );

        // $this->batchInsert(
        //     'roles',
        //     ['name', 'module', 'type', 'code', 'entity'],
        //     [
        //         ['Admin', 'ADMIN', 'main', 'admin', 'admin'],
        //         ['Case Worker', 'CASE MANAGEMENT', 'main', 'case_worker', 'case_worker'],
        //         ['Line Manager', 'CASE MANAGEMENT', 'main', 'line_manager', 'line_manager'],
        //         ['Street Worker', 'CASE MANAGEMENT', 'main', 'street_worker', 'street_worker'],
        //         ['Youth Worker', 'CASE MANAGEMENT', 'main', 'youth_worker', 'youth_worker'],
        //         ['Family Worker', 'CASE MANAGEMENT', 'main', 'family_worker', 'family_worker'],
        //         ['ACT Parent', 'CASE MANAGEMENT', 'main', 'act_parent', 'act_parent'],
        //         ['Monitoring Evaluation', 'CASE MANAGEMENT', 'main', 'monitoring_evaluation', 'monitoring_evaluation'],
        //         ['CSD Portal', 'CSD', 'main', 'csd_portal', 'csd_portal'],
        //         ['CSD Report', 'REPORTS', 'main', 'csd_report', 'csd_report'],
        //         ['Report Menu', 'REPORTS', 'main', 'report_menu', 'report_menu'],
        //         ['Manage Event', 'EVENT', 'main', 'manage_event', 'manage_event'],
        //         ['Intake and Registration', 'CASE MANAGEMENT', 'main', 'create_intake', 'create_intake'],
        //     ]
        // );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%uroles}}');
    }
}