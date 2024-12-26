<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use kartik\grid\GridView;
use app\models\Vouchers;
use app\models\Companies;
use yii\widgets\DetailView;

$this->title = "PAYMENT VOUCHER" . $model->vid;

$vid = $model->vid;
$name = $model->customer->customer_name;
$amount = $model->amount;
$this->params['breadcrumbs'][] = ['label' => 'Vouchers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;

?>

<div class="card">
    <div class="voucher card-body ">
        <br>
        <!-- <button type="button" class="btn btn-sm btn-success mb-2" data-bs-toggle="modal" data-bs-target="#basicModal"><i
                class="fa fa-plus"></i> View Invoice </button> -->
        <?php //= Html::a('<i class="fa fa-print">  </i> &nbsp; Print Invoice', ['/invoices/invoice-print', 'vid' => $model->vid], ['title' => 'Print Invoice', 'target' => '_blank', 'class' => 'btn btn-sm btn-secondary']) 
        ?>
        <?= $model->status == 'A' ? Html::a('<i class="fa fa-print">  </i> &nbsp; Print Invoice ', ['/invoices/print-inv', 'vid' => $model->vid], ['title' => 'Print Invoice', 'target' => '_blank', 'class' => 'btn btn-sm btn-secondary']) : '' ?>
        <h5 class="h5 m-none text-dark text-bold text-center">
            <u>INVOICE &nbsp;
            </u>
        </h5>
        <div>
        </div>

        <div class="table-responsive ">
            <table class="table table-hover">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-bold text-dark font-weight-bold">
                            <?= Html::encode('Invoice No: ' . $model->refno ?? '') ?></td>
                        <td class="">Date : <?= $model->transact_date ?></td>
                        <td class="">Created by : <?= $model->created->fullname ?? ''; ?></td>
                        <td class=""></td>
                        <td class=""></td>
                        <td class=""></td>
                    </tr>
                    <tr>
                        <td class="" style="font-size: large;font-weight:bold">
                            <?= Html::encode("Customer's Name: " . $name) ?></td>
                    </tr>

                </tbody>
            </table>
        </div>


        <?= GridView::widget([
            'dataProvider' => $creditsRevenue,
            'summary' => '',
            'options' => ['class' => 'table-responsive'],
            // 'headerRowOptions' => ['class' => 'thead-info'],
            'tableOptions' => ['class' => ' table table-striped table-sm'],
            // 'showHeader' => false,
            'showPageSummary' => true,
            'columns' => [


                [
                    'attribute' => 'account_code',

                ],
                [
                    'label' => 'Renevue',
                    // 'contentOptions' => ['style' => 'width: 10%;'],
                    'value' => function ($model) {
                        return $model->code->name ?? '';
                    }
                ],


                [
                    'label' => 'Description',
                    'format' => 'ntext',

                    //'contentOptions' => ['style' => 'width: 22%;'],
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
        ]) ?>

        <br>
        <br>
        <h4>Approvals</h4>
        <?= $this->render('_view_approvals', [
            'approvals' => $approvals,
        ]) ?>

    </div>
</div>


<div class="modal fade" id="basicModal">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h5 class="modal-title text-white">Add receipt</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal">
                </button>
            </div>
            <div class="modal-body">
                <h4>
                    <?php //= $this->render('print_invoice', ['modelEntry' => $modelEntry]); 
                    ?>
                </h4>

            </div>
        </div>
    </div>
</div>