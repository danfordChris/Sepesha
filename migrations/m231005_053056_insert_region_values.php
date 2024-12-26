<?php

use yii\db\Migration;

/**
 * Class m231005_053056_insert_region_values
 */
class m231005_053056_insert_region_values extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->batchInsert(
            'regions',
            ['rid', 'name'],
            [

                [1, 'Dar es salaam'],
                [2, 'Arusha'],
                [3, 'Shinyanga'],
                [4, 'Morogoro'],
                [5, 'Mbeya'],
                [6, 'Iringa'],
                [7, 'Geita'],
                [8, 'Mwanza'],
                [9, 'Kilimanjaro'],
                [10, 'Pwani'],
                [11, 'Lindi'],
                [12, 'Mtwara'],
                [13, 'Tanga'],
                [14, 'Manyara'],
                [15, 'Tabora'],
                [16, 'Mara'],
                [17, 'Kigoma'],
                [18, 'Rukwa'],
                [19, 'Simiyu'],
                [20, 'Unguja'],
                [21, 'Pemba'],
                [22, 'Songea'],
                [23, 'Kagera'],
                [24, 'Singida'],
                [25, 'Dodoma'],
                [27, 'Katavi'],
                [28, 'Ruvuma']
            ]
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m231005_053056_insert_region_values cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m231005_053056_insert_region_values cannot be reverted.\n";

        return false;
    }
    */
}
