<?php

use yii\helpers\Html;
use kartik\grid\GridView;
use yii\widgets\Pjax;
use backend\models\salespoint\Sales;
use backend\models\salespoint\Products;
 
use backend\models\salespoint\Soitem;
use yii\helpers\ArrayHelper;


/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var backend\models\salespoint\ProductsSearch $searchModel
 */

$this->title = 'STOCK SUMMARY';
$this->params['breadcrumbs'][] = $this->title;
?>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?php /* echo Html::a('Create Products', ['create'], ['class' => 'btn btn-success'])*/  ?>
    </p>





    <?php  

     echo GridView::widget([
        'dataProvider' => $dataProvider,
         'pjax'=>true,
          
        'filterModel' => $searchModel,
        //'tableOptions' =>['class' => 'table table-striped table-bordered'],
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],


            //'product_id',
            ['attribute'=>'product_item_model',
            
            //value' => 'attribute_value',
            


            ],


            'product_specification:ntext',
            

            ['attribute'=>'product_buy',
            'format'=>['decimal', 0],

            ],
             

            ['attribute'=>'product_sell',
            'format'=>['decimal', 0],

            ],

             ['attribute'=>'stock',
            'format'=>['decimal', 0],

            ],

            //'stock', 
//            'product_unit', 
            //'stock.quanity',
         /* used if the sub function is used in model class

          [
           //'attribute'=>'sold_stock',
            
    //'label'=>'Parent Name',
    //'format'=>'text',//raw, html
        'content'=>function($data){
        //return $data->getSoldStock();
        }
     ],*/

      [    //this return the quantity   sold from the sales model class 

      //'class'=>'kartik\grid\FormulaColumn',
            'attribute'=>'sototalOrders',
            'mergeHeader'=>false,
            'header'=>'Order Frequency',
            'width'=>'100px',
            'hAlign'=>'right',
            'format'=>['decimal', 0],
            'pageSummary'=>false,
        ],

    [
            'attribute'=>'popurchaseorders', 
            'mergeHeader'=>false,
            'header'=>'Last Purchase(PCS)',
            'width'=>'70px',
            'hAlign'=>'right',
            'format'=>['decimal', 0],
            'pageSummary'=>false,
        ],


      [    //this return the quantity   sold from the sales model class 

      //'class'=>'kartik\grid\FormulaColumn',
            'attribute'=>'soquantitysold',
            'mergeHeader'=>false,
            'header'=>'Sold (PCS)',
            'width'=>'70px',
            'hAlign'=>'right',
            'format'=>['decimal', 0],
            'pageSummary'=>false,
        ],

[       //this return the quantity remained after sales
            'class'=>'kartik\grid\FormulaColumn',
            'header'=>'Current Stock(PCS)',
            'value'=>function ($model, $key, $index, $widget) { 
                $p = compact('model', 'key', 'index');
                return $widget->col(5, $p) +$widget->col(7, $p)- $widget->col(8, $p);
            },
            'mergeHeader'=>false,
            'width'=>'150px',
            'hAlign'=>'right',
            'format'=>['decimal', 2],
            'pageSummary'=>true,
        ],
    

            [
                'class' => 'yii\grid\ActionColumn',
                'buttons' => [
                    'update' => function ($url, $model) {
                        return Html::a('<span class="glyphicon glyphicon-pencil"></span>',
                            Yii::$app->urlManager->createUrl(['products/view', 'id' => $model->product_id, 'edit' => 't']),
                            ['title' => Yii::t('yii', 'Edit'),]
                        );
                    }
                ],
            ],
        ],
        'responsive' => true,
        'hover' => true,
        'condensed' => true,
        'floatHeader' => true,

        'panel' => [
            'heading' => '<h3 class="panel-title"><i class="glyphicon glyphicon-th-list"></i> '.Html::encode($this->title).' </h3>',
            'type' => 'info',
            'before' => Html::a('<i class="glyphicon glyphicon-plus"></i> Add', ['create'], ['class' => 'btn btn-success']) .' '.
                        Html::a('<i class="glyphicon glyphicon-repeat"></i> Reset List', ['index'], ['class' => 'btn btn-info']),
            'showFooter' => false
        ],
    ]);   ?>

</div>

 
