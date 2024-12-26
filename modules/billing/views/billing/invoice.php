<?php

use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model backend\modules\billing\models\Bill */

$this->title = 'BUSINESS: ' ;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Bills'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="bill-view box box-body">
    <p class="pull-right"> <button type="button" class="btn btn-info btn-md" data-bs-toggle="modal" data-bs-target="#modalLipa"><i class="fa fa-plus "></i> Add payment for this Invoice</button>

    <?php
    // = Html::a('<i class="fa fa-money"></i> Print Invoice', ['print-invoice', 'bid' => $model->billid], ['class' => 'btn btn-success'])
     ?>
    <?= Html::a('Back', ['create', 'bid' => $model->refid], ['class' => 'btn bg-black']) ?>

</p>
    <div class="box-heading" style="color:blue;font-weight:bold">
    <i class="fa fa-list"> </i> INVOICE DETAILS
    </div>
    <div class="row">
        <div class="col-md-6">
            <?= DetailView::widget([
                'model' => $model,
                'attributes' => [
                    [
                        'attribute' => 'cid',
                        'value' => function ($m) {
                            return $m->customer->first_name ?? '';
                        },
                    ],
                    'billno',

                    [
                        'attribute' => 'business_id',
                        'value' => function ($t) {
                            return $t->business->full_name ?? '';
                        },
                    ],
                    'bill_date',
                    'due_date',
                    'shipping:ntext',
                    //'bank.bank_name',
                    // [
                    //     'attribute' => 'payment_info',
                    //     'value' => function ($t) {
                    //         return $t->bank->bank_name . '-' . $t->bank->acount_number . '(' . $t->bank->currency_type . ')';
                    //     },
                    // ],
                    //'other_info:ntext',
                    // 'tax_rate',
                    // 'terms:ntext',
                    // 'disc_amount',
                    // 'saales_person',

                ],
            ]) ?>
        </div>

        <div class="col-md-6">
            <?= DetailView::widget([
                'model' => $model,
                'attributes' => [
                    'descr:ntext',

                    [
                        'attribute' => 'payment_status',
                        'format'=>'raw',
                        'value'=>function($m){
                            if($m->payment_status=='PENDING'){
                                return  '<span class=" btn btn-xs bg-black">PENDING</span>';
                            }elseif($m->payment_status=='PARTIAL'){
                                return  '<span class=" btn btn-xs btn-warning">PARTIAL</span>';
                            }else{
                                return  '<span class=" btn btn-xs bg-green">PAID</span>';
                            }

                        },

                    ],
                    'status',
                    'created.full_name:ntext:Created by',
                    'updated.full_name:ntext:Updated by',
                    'created_at',
                    'updated_at',
                ],
            ]) ?>
        </div>
    </div>
</div>
<div class="box box-body">
    <div class="box-heading" style="color:blue;font-weight:bold">
      <i class="fa fa-list"> </i> PAYMENT  SUMMARY
    </div>
    <div class="col-md-6">
        <table class="table table-hover">
            <tr>
                <th>Total Invoice Amount : <br> <?= number_format($model->getBillItemTotal()) ?></th>
                <th> Total Paid : <br> <?= number_format($model->getTotaInvoicelPaid()) ?></th>
                <th>Balance : <br> <?= number_format($model->getInvoiceBalance()) ?></th>
            </tr>
        </table>
    </div>


        <?php echo DataTables::widget([
            'dataProvider' => $debits,

            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                // 'crdid',
                [
                    'attribute' => 'cdate',
                    'label' => 'Tarehe',
                ],

                'damount:decimal:Paid Amount',
                //    'oid',
                //            'cid',
                'descr:ntext',

            ],

        ]);   ?>


</div>


<div id="modalLipa" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                <h4 class="modal-title"><b>Ingiza malipo ya: <?= $model->customer->name ?></b></h4>
            </div>
            <div class="modal-body">
                <p>
                    <?= $this->render('_form_lipa', ['modelDbt' => $modelDbt]) ?>
                </p>
            </div>

        </div>

    </div>
</div>