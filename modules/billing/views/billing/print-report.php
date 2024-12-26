<?php

use backend\models\Company;
use yii\helpers\Html;
use kartik\detail\DetailView;
use kartik\datecontrol\DateControl;
use common\models\User;
use backend\models\remmy\Companies;
$this->title = 'PURCHASE ORDERS';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="container ">
<div class="box box-info col-sm-10">
<!-- <div class="box box-header">
<h4 align="center">HOTEL SALES REPORT</h4>
</div> -->
<div class="">
<div class="invoice ">

<?php
echo Html::a('<i class="fa fa-backward"></i>', ['index'], ['class' => 'btn btn-default',
'data-toggle'=>'tooltip',
'title'=>'Click to Go Back'
]);
echo Html::a('<i class="glyphicon glyphicon-print"></i> ', ['po/final-print', 'bid'=>$model->billid], [
'class'=>'btn btn-default',
'target'=>'_blank',
'data-toggle'=>'tooltip',
'title'=>'Click to Print Report'
]);
$compname= Company::find()->One();
?>
   <header class="clearfix">
   <div class="row text-center">
   <div class=" ">
     <?php

     echo  Html::img('@web/uploads/'.User::company()->logo,
     ['width' => '250','height'=>'120']);

      ?>
   <h3 class="h3 text-dark text-bold"><?=User::companyName()?></h3>

   <h5 class="h5 m-none text-dark text-bold">
   <?php
   echo Html::encode(User::companyAddress());
   ?>
   </h5>
   <h5 class="h5 m-none text-dark text-bold">
   <?php
   echo Html::encode('Email:'.User::companyEmail());
   ?>
   </h5>
   <h4 class="h4 m-none text-dark text-bold">
   <?php
   echo Html::encode('TIN:'.User::company()->tin_no);
   ?>
   </h4>
   </div>
   </div>
   </header>
<br>
<h3 class="h3 m-none text-dark text-bold text-center">
<u>ORDER</u>
</h3>
<div class="table-responsive ">
<table class="table table-hover">
<thead>
</thead>
<tbody>
<tr>
<td class="text-bold text-dark"><?= Html::encode('Order#:'.$model->billno)?></td>
<td class="text-center"></td>
<td class="text-center"></td>
<td class="text-center"></td>
<td class="text-center"></td>
<td class=" text-bold text-dark"><?= Html::encode('Date:'.date_format(date_create($model->bill_date),'d-M-Y'))?></td>
</tr>
<tr>
<td class="text-bold text-dark"><?= Html::encode('To:'.$model->customer->first_name)?></td>
<td class="text-center"></td>
<td class="text-center"></td>
<td class="text-center"></td>
<td class="text-center"></td>
<td class=" text-bold text-dark"><?php
//echo Html::encode('Place of Delivery:'.$model->destinationNames->business_name)?></td>
</tr>
<tr>
<td class="h4"><?= Html::encode('Please supply the following goods.,')?></td>
</tr>
</tbody>
</table>
</div>

<?php  //echo $this->render('_poitems', ['searchModel' => $searchModel]); ?>
<?= $this->render('_bill_items', [
'dataProviderItems' =>$billItems,
]);
?>
<?php  //echo $this->render('_poitems', ['searchModel' => $searchModel]); ?>

<div class="invoice-summary">
<div class="row">
<div class="col-sm-8  ">
<table class="  h5 text-dark  table-hover">
<tbody>
<tr class="b-top-none">
<td></td>
<td></td>
<td colspan="2">Prepared by:</td>
<td class="text-left"><u><?= Html::encode(User::user())?></u></td>
<td class="text-left"><?= 'Signature:________________________'?></td>
</tr>

</tbody>
</table>
</div>

</div>
<?= Html::encode('"PLEASE QUOTE ABOVE ORDER NUMBER ON ALL INVOICES AND DELIVERY NOTES."')?>
</div>

</div>
</div>
</div>
</div>
