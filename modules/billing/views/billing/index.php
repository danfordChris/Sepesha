<?php

use yii\helpers\Html;
use yii\widgets\Pjax;
use kartik\grid\GridView;
use yii\data\ActiveDataProvider;
use app\models\Customer;
use app\modules\billing\models\BillItem;


/* @var $this yii\web\View */
/* @var $searchModel backend\modules\billing\models\BillSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Invoice generation / Quotation for : '.$business->trip_no);
$this->params['breadcrumbs'][] = $this->title;
?>

<h4>CARCO BILLS</h4>
<div class="bill-index">
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'pjax' => true,
        'filterModel' => $searchModel,
        'showPageSummary'=>true,
        'columns' => [
            [
                'class' => 'kartik\grid\SerialColumn'
            ],
            [
                'class' => 'kartik\grid\ExpandRowColumn',
                'value' => function ($model, $key, $index, $column) {
                    return GridView::ROW_COLLAPSED;
                },
                'detail' => function ($model, $key, $index, $column) {
                    $billItems = new ActiveDataProvider([
                        'query' => BillItem::find()->where(['billid' => $model->billid]),
                    ]);
                    return Yii::$app->controller->renderPartial('_bill_items', [
                        'dataProviderItems' => $billItems,
                    ]);
                },
            ],



            [
                'attribute' => 'cid',
                'value' => function ($m) {
                    return $m->customer->name ?? '';
                },
                'width' => '140px',
                'pageSummary' => 'Total',

                'filterType' => GridView::FILTER_SELECT2,
                'filter' => Customer::getCustomerList(),
                'filterWidgetOptions' => [
                    'pluginOptions' => ['allowClear' => true],
                ],
                'filterInputOptions' => ['placeholder' => 'filter by customer'],
            ],
            'billno',

            'bill_date',

            'due_date',
            'currency',
            //'shipping:ntext',
            //'payment_info',
            //'other_info:ntext',
            //'tax_rate',
            //'terms:ntext',
            //'disc_amount',
            //'saales_person',

            [
                'label' => 'Amount',
                'format' => ['decimal', 2],
                'pageSummary' => true,
                'value' => function ($m) {
                    return $m->getBillItemTotal();
                }
            ],

            [
                'label' => 'Paid',
                'format' => ['decimal', 2],
                'pageSummary' => true,
                'value' => function ($m) {
                    return $m->getTotaInvoicelPaid();
                }
            ],

            [
                'label' => 'Balance',
                'format' => ['decimal', 2],
                'pageSummary' => true,
                'value' => function ($m) {
                    return $m->getInvoiceBalance();
                }
            ],


            [
                'attribute' => 'payment_status',
                'label'=>'Status',
                'content'=>function($m){
                    if($m->payment_status=='PENDING'){
                        return  '<span class=" btn btn-xs bg-black">PENDING</span>';
                    }elseif($m->payment_status=='PARTIAL'){
                        return  '<span class=" btn btn-xs btn-warning">PARTIAL</span>';
                    }else{
                        return  '<span class=" btn btn-xs bg-green">PAID</span>';
                    }

                },
                'filter'=>['PENDING'=>'PENDING', 'PAID'=>'PAID', 'PARTIAL'=>'PARTIAL'],

            ],

            //'descr:ntext',
          // 'payment_status',
            //'status',
            //'created_by',
            //'updated_by',
            //'created_at',
            //'updated_at',

            [
                'class' => 'kartik\grid\ActionColumn',
                'header' => 'View',
                'template' => '{update} | {malipo}| {delete}',
                'buttons' => [
                    'update' => function ($url, $model) {
                        if ($model->status != 'CANCELLED') {
                            return Html::a(
                                '<span class=" btn btn-xs fa fa-edit">Edit</span>',
                                ['update', 'bid' => $model->billid],
                                ['title' => Yii::t('yii', 'Update'),]
                            );
                        }
                    },
                    'malipo' => function ($url, $model) {
                        if (0 == 0) {
                            return Html::a(
                                '<span class="btn btn-xs fa fa-money bg-primary"> View</span>',
                                ['invoice', 'did' => $model->billid],

                            );
                        }
                    },

                    'delete' => function ($url, $model, $key) {
                        if ($model->status != 'CANCELLED') {
                            return Html::a('<span class="btn btn-xs fa fa- bg-red"> cancel</span>', ['delete', 'bid' => $model->billid], [
                                'data' => [
                                    'confirm' => 'Are you sure you want to cancel this invoice , you can not restore ?',
                                    'method' => 'post',
                                ],
                            ]);
                        }
                    },

                ],
            ],
        ],
    ]); ?>

</div>
