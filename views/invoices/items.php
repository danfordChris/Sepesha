<?php

use kartik\grid\GridView;
use reine\datatables\DataTables;

?>


<h4 class="text-success"> >>> VOUCHER ENTRY</h4>
<div class="row">
<!--
    <div class="col-3">
								<div class="card">
									<div class="card-header py-3">
										<h4 class="heading mb-0">Personal</h4>
									</div>
									<div class="card-body px-0 py-2">
										<ul class="personal-info">
											<li><a href="javascript:void(0);"><i class="fa-solid fa-user text-primary me-2"></i> Voucher Entries</a></li>
											<li><a href="javascript:void(0);"><i class="fa-solid fa-lock text-primary me-2"></i> Voucher Payment</a></li>

										</ul>
									</div>
								</div>
							</div> -->

    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Vendor: <b><?= $model->customer->customer_name ?></b></h4>
                <button type="button" class="btn btn-sm btn-success mb-2" data-bs-toggle="modal" data-bs-target="#basicModal"><i class="fa fa-plus"></i> Add Entry </button>


            </div>


            <div class="card-header">
                <table class="table table-sm">

                    <tr>
                        <th>Voucher date:</th>
                        <th>
                            <?= $model->transact_date ?>
                        </th>

                    </tr>
                    <tr>
                        <th>Voucher Amount:</th>
                        <th>
                            <?= number_format($model->amount, 2); ?> <?= $model->currency ?>
                        </th>

                    </tr>
                </table>
            </div>


            <div class="card-body">

                <div class="bootstrap-modal">
                    <!-- Button trigger modal -->

                    <!-- Modal -->
                    <div class="modal fade" id="basicModal" style="display: none;" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Voucher Entry: <?= $model->transact_date ?></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal">
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <?= $this->render('_account_entries_form', [
                                        'model' => $modelEntry,
                                    ]) ?>
                                </div>

                            </div>
                        </div>
                    </div>



                    <?=
                    GridView::widget([
                        'dataProvider' => $debits,
                        'tableOptions' => ['class' => ' table table-sm table-striped table-bordered display'],
                        'summary' => '',
                        // 'showHeader' => false,
                        'columns' => [
                            // 'vid',

                            [
                                'attribute' => 'transact_date',
                                'format' => ['date', 'php:d/m/Y'],
                            ],
                            [
                                'label' => 'Name',
                                // 'contentOptions' => ['style' => 'width: 35%;'],
                                'value' => function ($model) {
                                    return $model->code->name;
                                }
                            ],

                            'account_code',
                            'category',
                            'entry_type',

                            // 'descr',
                            // 'debit',

                            [
                                'label' => 'CREDIT',
                                // 'contentOptions' => ['style' => 'width: 16%;'],
                                'value' => function ($model) {
                                    if ($model->currency == 'TZS') {
                                        return number_format($model->cramount, 2, ".", ",") . "/=";
                                    } else
                                        return "$" . number_format($model->cramount, 2, ".", ",");
                                }

                            ],


                            [
                                'label' => 'DEBIT',
                                // 'contentOptions' => ['style' => 'width: 16%;'],
                                'value' => function ($model) {
                                    if ($model->currency == 'TZS') {
                                        return number_format($model->dramount, 2, ".", ",") . "/=";
                                    } else
                                        return "$" . number_format($model->dramount, 2, ".", ",");
                                }

                            ],


                        ],
                    ]) ?>
                </div>
            </div>
        </div>
    </div>


    <div class="voucher summary">
        <div class="row">
            <div class="col-md-4">
                <p>Prepared By: Hamisi Mataturu</p>
            </div>

            <div class="col-md-4">
                <p>Checked By:Jack Maliwa</p>
            </div>

            <div class="col-md-4">
                <p>Authorized By:</p>
            </div>
        </div>
    </div>


    <button type="button" class="btn btn-success btn-sm mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i class="fa fa-plus"></i> Create Voucher</button>

    <div class="modal fade" id="exampleModalCenter">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h5 class="modal-title text-white">Confirm Voucher</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal">
                </button>
            </div>

            <div class="modal-body">
            <?= $this->render('_confirm', [
        'model' => $model,
        'modelApproval'=>$modelApproval
    ]) ?>
            </div>
        </div>
    </div>
</div>