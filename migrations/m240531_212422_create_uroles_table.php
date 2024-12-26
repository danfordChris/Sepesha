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
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%uroles}}');
    }
}
