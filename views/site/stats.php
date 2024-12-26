<?php

use yii\helpers\Url;
?>
<!-- graphs statistics -->
<!-- <div class="row">

<div class="col-md-6" style="background-color: red;">
mtambuuS
</div>
<div class="col-md-6" style="background-color: pink;">

</div>
</div> -->

<div class="row ">
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="card">
            <div class="card-statistic-4">
                <div class="align-items-center justify-content-between">
                    <div class="row ">
                        <!-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                            <div class="card-content">
                                <h5 class="font-15">Jumla ya watoto waliofikiwa kwa umri
 </h5>
                                <h2 class="mb-3 font-18">258</h2>
                                <p class="mb-0"><span class="col-green">10%</span> Increase</p>
                            </div>
                        </div> -->
                        <?= $this->render('../reports/gender-age-graph') ?>

                        <!-- <div class="">
                            <div class="banner-img">
                                <img width="100%" height="100%" src=" <?= Url::to('uploads/Jumlayawatoto2.png') ?>"
                                    alt="">
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="card">
            <div class="card-statistic-4">
                <div class="align-items-center justify-content-between">
                    <div class="row ">
                        <!-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                            <div class="card-content">
                                <h5 class="font-15"> Total beneficiaries served </h5>
                                <h2 class="mb-3 font-18">1,287</h2>
                                <p class="mb-0"><span class="col-orange"></span> </p>
                            </div>
                        </div> -->
                        <div class="">
                            <div class="banner-img">
                                <img width="100%" height="100%" src=" <?= Url::to('uploads/Mikoawanapotokawatoto.png') ?>"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="card">
            <div class="card-statistic-4">
                <div class="align-items-center justify-content-between">
                    <div class="row ">
                        <!-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                            <div class="card-content">
                                <h5 class="font-15">Services Provided</h5>
                                <h2 class="mb-3 font-18">128</h2>
                                <p class="mb-0"><span class="col-green">18%</span>
                                    Increase</p>
                            </div>
                        </div> -->
                        <!-- <div class=""> -->
                        <!-- <div class="banner-img"> -->
                        <?= $this->render('../reports/identified-graph') ?>
                        <!-- </div> -->
                        <!-- </div> -->
                        <!-- <div class="">
                            <div class="banner-img">
                                <img width="100%" height="100%" src=" <?= Url::to('uploads/howidentified2.png') ?>"
                                    alt="">
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="card">
            <div class="card-statistic-4">
                <div class="">
                    <div class="row ">
                        <!-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                            <div class="card-content">
                                <h5 class="font-15">Enrollment break down
</h5>
                                <h2 class="mb-3 font-18">%</h2>
                                <p class="mb-0"><span class="col-green">42%</span> Increase</p>
                            </div>
                        </div> -->
                        <!-- <div class="banner-img"> -->
                        <?= $this->render('../reports/enrollment-graph') ?>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>