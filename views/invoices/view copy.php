<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\grid\GridView;
use app\models\Vouchers;
use app\models\Companies;
use yii\widgets\DetailView;

$this->title = "PAYMENT VOUCHER" . $model->vid;

$vid = $model->vid;
$name = $model->customer->customer_name;
$amount = $model->amount;
$this->params['breadcrumbs'][] = ['label' => 'Vouchers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
$model = new Vouchers();
?>
<div class="container ">
    <div class="box box-info col-sm-10">
        <div class="card">
            <div class="voucher card-body ">

                <?php
                echo Html::a('<i class="fa fa-backward"></i> Back', ['index'], [
                    'class' => 'btn btn-secondary mr-2',
                    'data-toggle' => 'tooltip',
                    'title' => 'Click to Go Back'
                ]);
                echo Html::a('<i class="fa fa-print"></i> Print ', ['vouchers/voucher-print', 'vid' => $vid], [
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
            <br>
            <h5 class="h5 m-none text-dark text-bold text-center">
                <u>PAYMENT VOUCHER</u>
            </h5>

            <div class="table-responsive ">
                <table class="table table-hover">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-bold text-dark font-weight-bold"><?= Html::encode('PV No:' . $vid) ?></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                        </tr>
                        <tr>

                            <td class="text-bold text-dark"><?= Html::encode("Payee's Name: ".$name) ?></td>
                        </tr>
                        <tr>
                            <td class="text-bold text-dark"><?= Html::encode("Payee's Code: ") ?></td>
                        </tr>
                        <tr>
                            <td class="text-bold text-dark"><?= Html::encode("Address: ") ?></td>
                        </tr>
                        <tr>
                            <td class="text-bold text-dark"><?= Html::encode("Tin: ") ?></td>
                        </tr>
                        <tr>
                            <td class="text-bold text-dark"><?= Html::encode("VRN: ") ?></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="row">
                <div class="col-md-8 float-start">
                    <p><u> <strong> Payment in Respect of:</strong> Extra Duty Allowance for the mount of May 2023
                            CATC.</u></p>
                </div>
                <div class="col-md-4 float-end">
                    <table class="table table-hover">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-bold text-dark"><?= Html::encode('Date:') ?></td>
                            </tr>
                            <tr>
                                <td class="text-bold text-dark"><?= Html::encode("PR Number: ") ?></td>
                            </tr>
                            <tr>
                                <td class="text-bold text-dark"><?= Html::encode("Payment Method: ") ?></td>
                            </tr>
                            <tr>
                                <td class="text-bold text-dark"><?= Html::encode("Transfer Number: ") ?></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <span> Amount Payable: TZS <p class="bordered"><?php if ($model->currency == 'tzs') {
                                                                echo 'TZS' . $amount;
                                                            } else echo '$' . $amount; ?></p> </span>
                                                            <?php $currency = $model->currency;?>
            <span><u>Amount in Words: <?= $amount ?> </u></span>
            <span><u>To be paid from: <p class="text-bordered"></p></u> </span>

            <?= GridView::widget([
                'dataProvider' => $credits,
                'summary' => '',
                'tableOptions'=>['class'=>' table table-striped table-bordered','style'=>'margin-bottom:0;padding-top:0;'],
                // 'showHeader' => false,
                'columns' => [
                    // 'vid',

                    // 'descr',
                    // 'debit',
                    [
                        'label' => 'Renevue',
                        'contentOptions' => ['style' => 'width: 10%;'],
                        'value' => function ($model) {
                            return $model->code->name;
                        }
                    ],
                    [
                        'label' => 'Description',
                        'contentOptions' => ['style' => 'width: 22%;'],
                        'value' => function ($model) {
                            return $model->descr;
                        }
                    ],

                    [
                        'label' => 'Credit',
                        'contentOptions' => ['style' => 'width: 16%;'],
                        'value' => function ($model) {
                            if($model->currency=='tzs'){
                                return number_format($model->cramount,2,".",",")."/=";
                                    }
                                    else
                                return "$".number_format($model->cramount,2,".",",");

                        }

                    ],

                ],
            ]) ?>
            <?= GridView::widget([
                'dataProvider' => $debits,
                'tableOptions'=>['class'=>' table table-sm table-striped table-bordered'],
                'summary' => '',
                'showHeader' => false,
                'columns' => [
                    // 'vid',
                    [
                        'label' => 'Chart of accounts',
                        'contentOptions' => ['style' => 'width: 35%;'],
                        'value' => function ($model) {
                            return '';
                        }
                    ],
                    // 'descr',
                    // 'debit',
                    // [
                    //     'label' => 'Code',
                    //     'contentOptions' => ['style' => 'width: 10%;'],
                    //     'value' => function ($model) {
                    //         return $model->credited->code;
                    //     }
                    // ],
                    [
                        'label' => 'Description',
                        'contentOptions' => ['style' => 'width: 22%;'],
                        'value' => function ($model) {
                            return $model->entry->name;
                        }
                    ],
                    [
                        'label' => 'Debit',
                        'contentOptions' => ['style' => 'width: 16%;'],
                        'value' => function ($model) {
                            if($model->currency=='tzs'){
                                return number_format($model->dramount,2,".",",")."/=";
                                    }
                                    else
                                return "$".number_format($model->dramount,2,".",",");
                                }

                    ],
                    [
                        'label' => 'Credit',
                        'contentOptions' => ['style' => 'width: 16%;'],
                        'value' => function ($model) {
                            return '';
                        }

                    ],

                ],
            ]) ?>

            <div class="voucher summary">
                <div class="row">
                    <div class="col-md-4">
                        <p>Prepared By</p>
                        <p>Name</p>
                        <p>Designation</p>
                        <p>Signature</p>
                        <p>Date</p>
                    </div>

                    <div class="col-md-4">
                        <p>Checked By</p>
                        <p>Name</p>
                        <p>Designation</p>
                        <p>Signature</p>
                        <p>Date</p>
                    </div>

                    <div class="col-md-4">
                        <p>Authorized By</p>
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