<?php

use yii\helpers\Url;
use yii\helpers\Html;
use kartik\grid\GridView;
?>

<div class="container mt-3">


    <?= $tbIheader ?>

    <?php
    $billItem = GridView::widget([
        'dataProvider' => $creditsRevenue,
        'summary' => '',
        'options' => ['class' => 'table-responsive'],
        'headerRowOptions' => ['class' => 'thead-info'],
        'tableOptions' => ['class' => ' table table-striped table-sm'],
        // 'showHeader' => false,
        'showPageSummary' => true,
        'columns' => [

            // [
            //     'label' => 'Renevue',
            //     'contentOptions' => ['style' => 'width: 10%;'],
            //     'value' => function ($model) {
            //         return $model->code->name ?? '';
            //     }
            // ],


            [
                'label' => 'Description',
                'format' => 'ntext',

                'contentOptions' => ['style' => 'width: 22%;'],
                'value' => function ($model) {
                    return $model->descr;
                }
            ],


            [

                'label' => 'Currency',
                'value' => function ($model) {
                    return $model->currency;
                },
                'pageSummary' => 'Total',
            ],

            [

                'label' => 'Amount',
                'value' => function ($model) {
                    return $model->cramount;
                },
                'pageSummary' => true,
                'format' => ['decimal', 2],
            ],

        ],
    ]);


    ?>



    <?= $billItem  ?>
    <table>
        head moja
    </table>


</div>