<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use kartik\grid\GridView;
use app\models\Vouchers;
use app\models\Companies;
use yii\widgets\DetailView;

$this->title = "PAYMENT VOUCHER" . $model->recno;
$amount = $model->amount;
$this->params['breadcrumbs'][] = ['label' => 'Vouchers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
// $model = new Vouchers();
?>
<div class="container ">
    <div class="box box-info">
        <div class="card ">
            <div class="voucher card-body col-md-8 mx-auto">

                <?php
                echo Html::a('<i class="fa fa-backward"></i> Back', ['index'], [
                    'class' => 'btn btn-secondary mr-2',
                    'data-toggle' => 'tooltip',
                    'title' => 'Click to Go Back'
                ]);
                echo Html::a('<i class="fa fa-print"></i> Print ', ['receipts/receipt-print', 'recid' => $model->recid], [
                    'class' => 'btn btn-info',
                    'target' => '_blank',
                    'data-toggle' => 'tooltip',
                    'title' => 'Click to Print Voucher'
                ]);




                ?>
                <header class="clearfix">
                    <div class="row  ">
                        <div class="col-lg-2 col-md-6 d-none d-md-block">
                            <div class="top-head-left">
                                <div class="top-contact">

                                    <!-- <img src="<?php // Url::to('@web/uploads/tz.jpg', true); ?>" alt="Your Image"> -->


                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-6 d-none d-md-block">
                            <div class="text-center">
                                <div class="top-contact">
                                    <h4 style="color:#0083ca"> <?= Html::encode('THE UNITED REPUBLIC OF TANZANIA') ?></h4>
                                    <h4 style="text-align:center;color:#000000"><?= Html::encode(' TANZANIA CIVIL AVIATION AUTHORITY ') ?></h4>

                                    <h5 class="text-center">Nyerere / Kitunda Road Junction, Banana Area P.O. Box 2819, Dar es
                                        Salaam, Tanzania Tel: (+255) 22 2327000 Fax: Email: tcaa@tcaa.go.tz
                                        Website: tcaa.go.tz</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="top-header-right">
                                <div class="top-header-social">

                                </div>
                                <div class="language-list">



                                    <!-- <img src="<?php // Url::to('@web/uploads/tcaa.jpg', true); ?>" alt="Your Image"> -->


                                </div>
                            </div>
                        </div>
                    </div>

                </header>
                <br class="border-1">
                <h5 class="h5 m-none text-dark text-bold text-center">
                    <u>PAYMENT RECEIPT</u>
                </h5>

                <p> Receipt Number:&nbsp;&nbsp;&nbsp;&nbsp; <strong><?= $model->recno?></strong> </p>
                <p> Received From:&nbsp;&nbsp;&nbsp;&nbsp; <strong><?= $model->customer->customer_name?> CO</strong> </p>
                <p> Depositor Name:&nbsp;&nbsp;&nbsp;&nbsp; <strong><?= $model->customer->customer_name?></strong> </p>
                <p> Amount(<?= $model->currency?>):&nbsp;&nbsp;&nbsp;&nbsp; <strong><?= $model->amount?></strong> </p>
                <p> Amount In Words:&nbsp;&nbsp;&nbsp;&nbsp; <strong><?= $model->amount?></strong> </p>
                <p> Outstanding Balance:&nbsp;&nbsp;&nbsp;&nbsp; <strong></strong> </p>
                <p> Bill Reference:&nbsp;&nbsp;&nbsp;&nbsp; <strong><?= $model->ref_no?></strong> </p>
                <p> Payment Control Number:&nbsp;&nbsp;&nbsp;&nbsp; <strong><?= $model->control_no?></strong> </p>
                <p> Payment Date:&nbsp;&nbsp;&nbsp;&nbsp; <strong><?= $model->created_at?></strong> </p>

                        <?= GridView::widget([
                'dataProvider' => $dataProvider,
                'summary' => '',
                'showPageSummary'=>true,
                'pageSummaryRowOptions'=>['class' => 'kv-page-summary default'],
                'tableOptions'=>['class'=>' table table-striped table-bordered'],
                // 'showHeader' => false,
                'columns' => [
                    // 'vid',

                    [
                        'label' => 'Description',
                        'contentOptions' => ['style' => 'width: 22%;'],
                        'pageSummary' =>'Sub Total',
                        'value' => function ($model) {
                            return $model->desc??'';
                        }
                    ],
                    [
                        'label' => 'Amount',
                        'pageSummary' =>true,
                        'contentOptions' => ['style' => 'width: 16%;'],
                        'value' => function ($model) {
                            if($model->currency=='tzs'){
                                return $model->amount;
                                    }
                                    else
                                return $model->amount;
                                
                        },


                    ],

                ],
            ]) ?>


                <div class="voucher summary">
                    <div class="row">
                        <div class="col-md-4">
                            <p>Issued By</p>
                            <p>Name</p>
                            <p>Designation</p>
                            <p>Signature</p>
                            <p>Date</p>
                        </div>

                        <div class="col-md-4">
                            <p>Approved By</p>
                            <p>Name</p>
                            <p>Designation</p>
                            <p>Signature</p>
                            <p>Date</p>
                        </div>

                    </div>
                </div>


            </div>


        </div>

    </div>
</div>