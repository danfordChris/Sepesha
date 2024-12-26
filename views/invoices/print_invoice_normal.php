<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use kartik\grid\GridView;
use yii\bootstrap5\BootstrapAsset;

BootstrapAsset::register($this);
$serialNumber = 1;
?>

<div class="mt-4" id="content">
    <?= $tbIheader ?>
    <div class="">
        <div class="">

            <div class="">

                <div class="row mb-4">
                    <span style='font-size:14px; font-weight:bold;text-align:center ;border:2px solid black '>TAX
                        INVOICE</span>

                    <div class="col-sm-6">
                        <h5 class="mb-3">To:</h5>
                        <h3 class=" mb-1"><?= $model->customer->customer_name ?? '' ?></h3>
                        <div><?= $model->customer->customer_physical_address ?></div>
                        <div>Email: <?= $model->customer->customer_email ?? '' ?></div>
                        <div>Phone: <?= $model->customer->customer_phone ?></div>
                        <?php if ($model->customer->tin) : ?>
                            <div>TIN: <?= $model->customer->tin ?? '' ?></div>
                        <?php endif ?>
                        <?php if ($model->customer->vrn) : ?>
                            <div>VRN: <?= $model->customer->vrn ?? '' ?></div>
                        <?php endif ?>
                    </div>
                    <div class="col-sm-6 ">
                        <div></div>
                        <br>
                        <br>
                        <div>Invoice#: <?= $model->refno ?? '' ?></div>
                        <div>Invoice Date : <?= date('d-m-Y', strtotime($model->transact_date)) ?? '' ?></div>
                    </div>
                </div>
                <div class="">
                    <table class="table  table-bordered table-sm" width=100%>
                        <thead class="">
                            <tr class="vendorListHeading">

                                <th>S/N.</th>

                                <th class="right">ITEM CODE</th>
                                <th class="center">DESCRIPTION</th>
                                <th class="right">AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php

                            foreach ($items as $key => $item) : ?>
                                <tr>
                                    <td class="center"><?= $serialNumber++ ?></td>
                                    <td class="left strong"><?= $item->account_code ?? '' ?></td>
                                    <td class="left strong"><?= $model->descr ?? '' ?></td>
                                    <td class="right"><?= number_format($item->cramount ?? 0, 2) ?></td>
                                </tr>
                            <?php endforeach ?>

                            <tr>
                                <td colspan="2"></td>
                                <td class="">
                                    <strong class="text-dark" style="text-align: right;">Subtotal</strong>
                                </td>
                                <td class="right"> <?= number_format($model->amount, 2) ?></td>
                            </tr>
                            <tr>

                            </tr>

                            <tr>
                                <td colspan="2"></td>
                                <td class="right" colspan="">
                                    <strong class="text-dark">Total (<?= $model->currency ?>) </strong>
                                </td>
                                <td class="right">
                                    <strong class="text-dark"><?= number_format($model->amount, 2) ?></strong>
                                </td>
                            </tr>

                            <tr>

                                <td style="font-weight: bold;" colspan="4">Amount in Words :
                                    <?= ucwords(Yii::$app->formatter->asSpellout($model->amount)) ?>
                                    <?= $model->currency ?> Only
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-5">

                        <?php if (!is_null($model->bank_id)) : ?>
                            <div class=""><u><i>Payment details:</i></u></div>
                            <div> Payment Mode : <b>IMMEDIATE</b></div>
                            <div>Bank Name: <?= $model->bank->bankname ?? '' ?> </div>
                            <div>Account Name: <?= $model->bank->accname ?? '' ?></div>
                            <div>Account Number: <?= $model->bank->account_no ?? '' ?></div>
                            <div>Account Branch: <?= $model->bank->branch ?? '' ?> </div>
                            <div>SWIFT CODE: <?= $model->bank->swiftcode ?? '' ?></div>
                        <?php endif ?>
                    </div>

                    <div class="col-lg-4 col-sm-5 ml-auto">
                        <table class="table table-clear table-sm" width=100%>
                            <tbody>
                                <tr>
                                    <td>Prepared By</td>
                                    <td>: <?= ucwords(strtolower($model->created->fullname ?? '')) ?></td>
                                </tr>
                                <tr>
                                    <td>Printed By</td>
                                    <td>: <?= ucwords(strtolower(User::name() ?? '')) ?></td>
                                </tr>
                                <tr>
                                    <td>Printed On</td>
                                    <td>: <?= date('d-m-Y') ?></td>
                                </tr>
                                <tr>
                                    <td>Signature</td>
                                    <td>: -----------------------------</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div class="card-footer bg-white">

                <p class="mb-0">
                    <a href="<?= Url::toRoute(['index']) ?>"><button class="btn btn-dark" id="mail-invoice"><i class="fa fa-backward"></i> Back</button></a>
                    <button class="btn btn-success" id="invoice-print"><i class="fa fa-print"></i> Print</button>
                    <!-- <button class="btn btn-info" id="mail-invoice"><i class="fa fa-envelope"></i> Mail Invoice</button> -->
                <p class="mb-0">
                </p>
            </div>
        </div>
    </div>


    <style>
        body {

            background-color: #fff;
        }

        #content {
            width: 80%;
            margin: 0 auto;
        }

        .padding {

            padding: 2rem !important;
        }

        .card {
            margin-bottom: 30px;
            border: none;
            -webkit-box-shadow: 0px 1px 2px 1px rgba(154, 154, 204, 0.22);
            -moz-box-shadow: 0px 1px 2px 1px rgba(154, 154, 204, 0.22);
            box-shadow: 0px 1px 2px 1px rgba(154, 154, 204, 0.22);
        }

        .card-header {
            background-color: #fff;
            border-bottom: 1px solid #e6e6f2;
        }

        h3 {
            font-size: 20px;
        }

        h5 {
            font-size: 15px;
            line-height: 26px;
            color: #3d405c;
            margin: 0px 0px 15px 0px;
            font-family: 'Circular Std Medium';
        }

        .text-dark {
            color: #3d405c !important;
        }

        /* .vendorListHeading {
            color: white;
            background-color: #e6e6f2;
        }

        @media print {
            .vendorListHeading th {
                background-color: #e6e6f2 !important;
                -webkit-print-color-adjust: exact;

            }
        }

        @media print {
            .vendorListHeading th {
                color: white !important;
            }
        } */

        @media print {

            /* Remove headers and footers */
            @page {
                margin: 0;
                padding: 0;
            }

            /* Remove background graphics */
            body {
                background: none;
            }

            #invoice-print {
                display: none;
            }

            #mail-invoice {
                display: none;
            }



            /* Add any additional print-specific styles here */


        }
    </style>

    <script>
        function printPage() {
            window.print(); // Open the print dialog
        }
        document.getElementById("invoice-print").addEventListener("click", printPage);
    </script>


</div>