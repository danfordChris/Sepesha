<?php

use app\models\User;
use yii\helpers\Html;
$this->title = 'Business';
?>

<div class="bootstrap snippets bootdeys">
<div class="row">
  <div class="col-sm-12">
	  	<div class="panel panel-default invoice" id="invoice">
		  <div class="panel-body">
            <?php if($model->payment_status=='PAID'):?>
            <div class="invoice-ribbon"><div class="ribbon-inner">PAID</div></div>
			<?php elseif($model->payment_status=='PENDING'): ?>
				<div class="invoice-ribbon"><div class="ribbon-innerDark">PENDING</div></div>
				<?php else: ?>
				<div class="invoice-ribbon"><div class="ribbon-innerWarning">PARTIAL</div></div>
				<?php endif ?>
		    <div class="row">

				<div class="col-sm-6 top-left">
               <?= Html::img('@web/uploads/'.User::company()->logo,['width' => '80']); ?>
				</div>
				<h3 class="marginright">INVOICE</h3>
				<div class="col-sm-6 top-right">
						<!-- <h3 class="marginright">INVOICE</h3> -->
						<h3 class="marginright">No: <?= $model->billno ?></h3>
						<span class="marginright"> <?= Html::encode(date_format(date_create($model->bill_date),'d-M-Y'))?></span>
			    </div>

			</div>
			<hr>
			<div class="row">

				<div class="col-xs-4 from">
					<p class="lead marginbottom"> <b>From</b> : <?=User::company()->full_name ?></p>
					<p><?=User::company()->company_address ?></p>
					<!-- <p>Suite 240, San Francisco</p>
					<p>California, 94103</p> -->
					<p>Phone: <?=User::company()->company_phone ?></p>
					<p>Email: <?=User::company()->company_email ?></p>
					<p>TIN: <?=User::company()->tin_no ?></p>
					<?php if(User::company()->vrn):?>
					<p>VRN: <?=User::company()->vrn ?></p>
					<?php endif ?>
				</div>

				<div class="col-xs-4 to">
					<p class="lead marginbottom"><b>To</b> : <?= $model->customer->first_name ??'' ?></p>
					<p><?= $model->customer->phisical_address ??'' ?></p>
					<!-- <p>Suite 2200, San Francisco</p>
					<p>California, 94105</p> -->
					<p>Phone: <?= $model->customer->phone_1 ??'' ?></p>
					<p>Email: <?= $model->customer->email ??'' ?></p>
					<?php if($model->customer->tin):?>
					<p>TIN: <?= $model->customer->tin ??'' ?></p>
					<?php endif ?>
					<?php if($model->customer->vrn):?>
					<p>VRN: <?= $model->customer->vrn ??'' ?></p>
					<?php endif ?>

			    </div>

			    <div class="col-xs-4 text-left payment-details">
					<p class="lead marginbottom payment-info">Payment details</p>
					<p>Bank Name: <?=$model->bank->bank_name ?> </p>
					<p>Account Name: <?=$model->bank->account_name ?></p>
					<p>Account Number: <?=$model->bank->acount_number ?></p>
					<p>Account Branch: <?=$model->bank->branch ?> </p>
					<p>SWIFT CODE: <?=$model->bank->swift_code ?></p>


			    </div>

			</div>

			<div class="row table-row">
				<table class="table table-striped">
			      <thead>
			        <tr>
			          <th class="text-center" style="width:5%">#</th>
			          <th style="width:50%">Item</th>
			          <th class="text-right" style="width:15%">Quantity</th>
			          <th class="text-right" style="width:15%">Unit Price (<?= $model->currency ?>)</th>
			          <th class="text-right" style="width:15%">Total Price (<?= $model->currency ?>)</th>
			        </tr>
			      </thead>
			      <tbody>

				  <?php foreach($items as $key=>$item): ?>
			        <tr>
			          <td class="text-center"><?= $key+1?></td>
			          <td><?= $item->product->product_item_model??'' ?></td>
			          <td class="text-right"><?=$item->quantity ?></td>
			          <td class="text-right"><?= number_format($item->unit_price,2)?></td>
			          <td class="text-right"><?= number_format(($item->quantity*$item->unit_price),2) ?></td>
			        </tr>
			        <?php endforeach ?>
			       </tbody>
			    </table>

			</div>

			<div class="row">
			<div class="col-xs-6 margintop">
				<p class="lead marginbottom">THANK YOU FOR YOUR BUSINESS !</p>

				<button class="btn btn-success" id="invoice-print"><i class="fa fa-print"></i> Print Invoice</button>
				<button class="btn btn-danger"><i class="fa fa-envelope-o"></i> Mail Invoice</button>
			</div>
			<div class="col-xs-6 text-right pull-right invoice-total">
					  <!-- <p>Subtotal : <?= number_format($model->getBillItemTotal(),2)?></p> -->
			          <!-- <p>Discount (10%) : $101 </p>
			          <p>VAT (8%) : $73 </p> -->
			          <p style="color:#000000;font-size:1.4rem;font-weight:bold">Total(<?= $model->currency ?>) :  <?= number_format($model->getBillItemTotal(),2)?> </p>
			</div>
			</div>

		  </div>
		</div>
	</div>
</div>
</div>
</div>
<style>
    body{margin-top:20px;
background:#eee;
}

/*Invoice*/
.invoice .top-left {
    font-size:65px;
	color:#3ba0ff;
}

.invoice .top-right {
	text-align:right;
	padding-right:20px;
}

.invoice .table-row {
	margin-left:-15px;
	margin-right:-15px;
	margin-top:25px;
}

.invoice .payment-info {
	font-weight:500;
}

.invoice .table-row .table>thead {
	border-top:1px solid #ddd;
}

.invoice .table-row .table>thead>tr>th {
	border-bottom:none;
}

.invoice .table>tbody>tr>td {
	padding:8px 20px;
}

.invoice .invoice-total {
	margin-right:-10px;
	font-size:16px;
}

.invoice .last-row {
	border-bottom:1px solid #ddd;
}

.invoice-ribbon {
	width:85px;
	height:88px;
	overflow:hidden;
	position:absolute;
	top:-1px;
	right:14px;
}

.ribbon-inner {
	text-align:center;
	-webkit-transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-ms-transform:rotate(45deg);
	-o-transform:rotate(45deg);
	position:relative;
	padding:7px 0;
	left:-5px;
	top:11px;
	width:120px;
	background-color:#66c591;
	font-size:15px;
	color:#fff;
}

.ribbon-innerDark {
	text-align:center;
	-webkit-transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-ms-transform:rotate(45deg);
	-o-transform:rotate(45deg);
	position:relative;
	padding:7px 0;
	left:-5px;
	top:11px;
	width:120px;
	background-color:#000000;
	font-size:15px;
	color:#fff;
}
.ribbon-innerWarning {
	text-align:center;
	-webkit-transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-ms-transform:rotate(45deg);
	-o-transform:rotate(45deg);
	position:relative;
	padding:7px 0;
	left:-5px;
	top:11px;
	width:120px;
	background-color:orange;
	font-size:15px;
	color:#fff;
}

.ribbon-inner:before,.ribbon-inner:after {
	content:"";
	position:absolute;
}

.ribbon-inner:before {
	left:0;
}

.ribbon-inner:after {
	right:0;
}

@media(max-width:575px) {
	.invoice .top-left,.invoice .top-right,.invoice .payment-details {
		text-align:center;
	}

	.invoice .from,.invoice .to,.invoice .payment-details {
		float:none;
		width:100%;
		text-align:center;
		margin-bottom:25px;
	}

	.invoice p.lead,.invoice .from p.lead,.invoice .to p.lead,.invoice .payment-details p.lead {
		font-size:22px;
	}

	.invoice .btn {
		margin-top:10px;
	}
}

@media print {
	.invoice {
		width:900px;
		height:800px;
	}
}
</style>
