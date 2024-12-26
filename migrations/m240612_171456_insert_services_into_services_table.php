<?php

use yii\db\Migration;

/**
 * Class m240612_171456_insert_services_into_services_table
 */
class m240612_171456_insert_services_into_services_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->batchInsert('services', ['name','type'], [
            ['Furniture',1],
            ['Electronics',1],

        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->delete('services');
    }
}