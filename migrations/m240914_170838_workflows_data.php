<?php

use yii\db\Migration;

/**
 * Class m240914_170838_workflows_data
 */
class m240914_170838_workflows_data extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->execute('TRUNCATE TABLE workflows');
        $this->execute('TRUNCATE TABLE wfstages');

        $this->batchInsert(
            '{{%workflows}}',
            ['wid', 'name', 'stages', 'wfor', 'cby', 'cdate', 'eby', 'edate', 'status'],
            [
                [1, 'Vendor Approval', 2, 'VENDOR APPROVAL', 1, '2024-09-07 19:44:40', 1, '2024-09-16 19:27:46', 1],
                [2, 'Driver Onboarding', 2, 'DRIVER ONBOARDING', 1, '2024-09-14 19:32:09', NULL, NULL, 1],
                [3, 'Vehicle Registration', 2, 'VEHICLE REGISTRATION', 1, '2024-09-14 19:32:09', NULL, NULL, 1],
            ]
        );

        $this->batchInsert(
            'wfstages',
            ['id', 'wid', 'sno', 'sname', 'actok', 'okchar', 'actnotok', 'notokchar', 'rptdisplay', 'status', 'cby', 'cdate', 'eby', 'edate', 'nextstage', 'backstage', 'okname', 'notokname'],
            [
                [1, 1, 1, 'Request Verification', 'Ok,Verify', 'Y', 'No, Rectify', 'N', NULL, 'active', 1, '2024-09-07 19:47:25', NULL, NULL, 2, 1, 'Verified', 'Not Verified'],
                [2, 1, 2, 'Review & Approval', 'Approve', 'Y', 'No, Rectify', 'N', NULL, 'active', 1, '2024-09-07 19:55:50', NULL, NULL, 3, 1, 'Approved', 'Not Approved'],
                [3, 2, 1, 'Request Verification', 'Ok,Verify', 'Y', 'No, Rectify', 'N', NULL, 'active', 1, '2024-09-14 19:44:00', NULL, NULL, 2, 1, 'Verified', 'Not Verified'],
                [4, 2, 2, 'Review & Approval', 'Approve', 'Y', 'No, Rectify', 'N', NULL, 'active', 1, '2024-09-14 19:48:29', NULL, NULL, 3, 1, 'Approved', 'Not Approved'],

                [5, 3, 1, 'Request Verification', 'Ok,Verify', 'Y', 'No, Rectify', 'N', NULL, 'active', 1, '2024-09-14 19:44:00', NULL, NULL, 2, 1, 'Verified', 'Not Verified'],
                [6, 3, 2, 'Review & Approval', 'Approve', 'Y', 'No, Rectify', 'N', NULL, 'active', 1, '2024-09-14 19:48:29', NULL, NULL, 3, 1, 'Approved', 'Not Approved'],

            ]
        );
    }



    public function safeDown()
    {

        $this->delete('{{%workflows}}', ['wid' => range(1, 1000)]);
        $this->delete('{{%wfstages}}', ['id' => range(1, 1000)]);
    }
}
