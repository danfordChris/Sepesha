<?php

use yii\helpers\Url;

$nembo = Url::to('@web/uploads/tcaa.png', true);
$ccword = $model->currency == 'TZS' ? 'Tanzanian Shilling Only' : 'U.S Dollar Only';
?>


<div class="row">
    <div class="col">

    </div>
    <div class="col">

    </div>
</div>


<div class="container" style="font-family:Arial, Helvetica, sans-serif !important;">

    <div class="">
        <div class="text-center">
            <img src="<?= $nembo ?>" alt="" width="150px">
            <?= $tbIheader ?>
            <br>
            <!-- <h5 style="color: darkblue;" class="receiptFont">Jamhuri ya Muungano wa Tanzania</h5>
            <h5 style="color: darkblue;">United Republic of Tanzania</h5>
            <h5 style="color: black;">Tanzania Civil Aviation Authority </h5> -->

            <h4 class="capitalize" style="color: black;font-weight:bold;">Exchequer Receipt</h4>
            <!-- <h6 class="bold-text" style="color: black;font-weight:bold">Stakabadhi Ya Malipo Ya Serikali</h6> -->
            <hr style="border:blue">
        </div>
        <div class="" style="font-family: Arial, Helvetica, sans-serif;">
            <table class="table table-bordered">

                <tbody>
                    <tr>
                        <td><strong class="capitalize">Receipt Number:</strong></td>
                        <td class="capitalize"><?= $model->reference_no ?>
                        </td>
                    </tr>
                    <tr>
                        <td><strong class="capitalize">Received From:</strong></td>
                        <td class="capitalize"><?= $model->customer->customer_name ?? ''; ?></td>
                    </tr>
                    <tr>
                        <td><strong class="capitalize">Amount:</strong></td>
                        <td class="capitalize"><?= number_format($model->dramount) ?> (<?= $model->currency ?>
                            )</td>
                    </tr>
                    <tr>
                        <td><strong class="capitalize">Amount In Words:</strong></td>
                        <td class="capitalize"> <?= ucwords(Yii::$app->formatter->asSpellout($model->dramount)) ?>
                            <?= $ccword ?> </td>
                    </tr>
                    <tr>
                        <td><strong class="capitalize">In Respect Of:</strong></td>
                        <td class="capitalize"><?= $model->descr ?? '' ?></td>
                    </tr>
                    <tr>
                        <td><strong class="capitalize">Bill Reference:</strong></td>
                        <td class="capitalize"><?= $model->main->refno ?? '' ?></td>
                    </tr>

                    <tr>
                        <td><strong class="capitalize">Payment Date:</strong></td>
                        <td class="capitalize">
                            <?= Yii::$app->formatter->asDatetime($model->transact_date, 'php:d-M-Y') ?>
                        </td>
                    </tr>
                    <tr>
                        <td><strong class="capitalize">Issued By:</strong></td>
                        <td class="capitalize">Tanzania Civil Aviation Authority</td>
                    </tr>
                    <tr>
                        <td><strong class="capitalize">Date Issued:</strong></td>
                        <td class="capitalize"><?= date('d-M-Y') ?></td>
                    </tr>
                    <tr>
                        <td>
                            <p><strong class="capitalize">Signature:</strong> <span class="signature-line"></span></p>
                        <td>
                            __________________________________
                        </td>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
        <div class="text-center" style="color:darkblue">
            <p>
                <br>
                <br>
                <!-- <div style="font-size: 12px;"> Government e Payment Gateway @<?= date('Y') ?> All Rights Reserved (GePG)
            </div> -->
            </p>
        </div>
    </div>
</div>



<?php
$style = <<< CSS
    .receiptFont {
        font-family: "Times New Roman", Times, serif !important;
    }
   .bold-text{
        color: black;font-weight:bold
    }
 CSS;
$this->registerCss($style);
?>