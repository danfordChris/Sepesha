<?php
use yii\helpers\Html;
use kartik\grid\GridView;
/* @var $this yii\web\View */
/* @var $searchModel backend\models\PoItemSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */
//$this->title = 'Po Items';
//$this->params['breadcrumbs'][] = $this->title;
?>
<div class="po-item-index">
    <?= GridView::widget([
        'dataProvider' => $dataProviderItems,
        'summary'=>false,
        'toolbar'=>false,
        'columns' => [

             //'po_id',
            [
            'attribute'=>'item_id',
            'header'=>'Product',

             'value'=>function($m){
                return $m->product->product_item_model??'';
             }
            ],

            [
            'attribute'=>'quantity',
            'width'=>'170px',


            ],

            [
            'attribute'=>'unit_price',
            'format'=>['decimal',2],
            'pageSummary'=>'Total',
            'header'=>'Price',
            ],

                [
                'label'=>'Amount',
                'format'=>['decimal',2],
                'pageSummary'=>true,
                 'value'=>function($m){
                    return $m->quantity*$m->unit_price;
                 }
                ],

                'status',



         //['class' => 'yii\grid\ActionColumn'],
        ],
     'showPageSummary'=>true
    ]); ?>
</div>
