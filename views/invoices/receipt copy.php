<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use app\models\Vouchers;
use app\models\Workflow;
use app\models\Companies;
use kartik\grid\GridView;
use yii\widgets\DetailView;

$this->title = "RECEIPT" . $model->vid;

$vid = $model->vid;
$name = $model->customer->customer_name;
$amount = $model->amount;
$this->params['breadcrumbs'][] = ['label' => 'Vouchers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;

?>

<div class="card">
    <div class="voucher card-body ">
        <br>
        <h5 class="h5 m-none text-dark text-bold text-center">

        </h5>

        <?php if($model->status=='A'):?>
        <p>
            <button type="button" class="btn btn-success btn-sm mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i class="fa fa-plus"></i> Add Receipt</button>
        </p>

        <?php endif ?>

        <div class="table-responsive ">
            <table class="table table-hover">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-bold text-dark font-weight-bold"><?= Html::encode('Invoice No: ' . $model->refno ?? '') ?></td>
                        <td class="">Date : <?= $model->transact_date ?></td>
                        <td class=""></td>
                        <td class=""></td>
                        <td class=""></td>

                    </tr>
                    <tr>
                        <td class="" style="font-size: large;font-weight-bold;"><?= Html::encode("Customer's Name: " . $name) ?></td>
                    </tr>

                </tbody>
            </table>
        </div>

        <h4>Receipt</h4>

        <?= GridView::widget([
            'dataProvider' => $debitBank,
            'summary' => '',
            'options' => ['class'=>'table-responsive'],
            'headerRowOptions' => ['class'=>'thead-info'],
            'tableOptions' => ['class' => ' table table-striped table-sm'],
            // 'showHeader' => false,
            'showPageSummary' => true,
            'columns' => [

                [
                    'label' => 'Receipt',
                    'contentOptions' => ['style' => 'width: 10%;'],
                    'value' => function ($model) {
                        return $model->code->name ?? '';
                    }
                ],
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
                        return $model->dramount;
                    },
                    'pageSummary' => true,
                    'format' => ['decimal', 2],
                ],


                [
                    'class' => 'yii\grid\ActionColumn',
                    'template' => '{actions}', // specify the template for the dropdown
                    'buttons' => [
                        'actions' => function ($url, $model) {
                            $maxStage= Workflow::findOne($model->wid);
                            return Html::a('<span class="glyphicon glyphicon-option-vertical">Action</span>', ['#'], [
                                'class' => 'dropdown-toggle btn btn-outline-primary',
                                'data-toggle' => 'dropdown',
                                'aria-haspopup' => 'true',
                                'aria-expanded' => 'false',
                            ]) . $this->render('_dropdown_action_receipt', ['model' => $model,'maxStage'=>$maxStage]);
                        },
                    ],
                ],

            ],
        ]) ?>


      <h4>Account Receivables</h4>
        <?= GridView::widget([
            'dataProvider' => $creditsReceivable,
            'summary' => '',
            'options' => ['class'=>'table-responsive'],
            'headerRowOptions' => ['class'=>'thead-info'],
            'tableOptions' => ['class' => ' table table-striped table-sm'],
            // 'showHeader' => false,
            'showPageSummary' => true,
            'columns' => [

                [
                    'label' => 'Account Receivable',
                    'contentOptions' => ['style' => 'width: 10%;'],
                    'value' => function ($model) {
                        return $model->code->name ?? '';
                    }
                ],
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
        ]) ?>




        <br>
        <br>
        <h4>Approvals</h4>
        <?= $this->render('_view_approvals', [
            'approvals' => $approvals,
        ]) ?>

    </div>
</div>


<div class="modal fade" id="exampleModalCenter">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h5 class="modal-title text-white">Add receipt</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal">
                </button>
            </div>
            <div class="modal-body">

                <?= $this->render('_form_receipt', ['modelEntry' => $modelEntry]); ?>

            </div>
        </div>
    </div>
</div>