<?php
use yii\helpers\Html;
use kartik\detail\DetailView;
use kartik\datecontrol\DateControl;
?>

<div class="container ">
  <div class="box box-info col-sm-10">
    <!-- <div class="box box-header">
      <h4 align="center">HOTEL SALES REPORT</h4>
    </div> -->
    <div class="">
    							<div class="invoice ">
    								<header class="clearfix">
    									<div class="row">
    										<div class=" ">
    									   <h4 class="h4 text-dark text-bold">DAILY SALES REPORT</h4>
    											<h4 class="h4 m-none text-dark text-bold">
                          <?php
                          $date=date_create($model->po_date);
                          $saledate= date_format($date,"d/m/Y");
                          echo Html::encode('DATE:'.$saledate);
                      
                          ?>
                         </h4>
    										</div>
    									</div>
    								</header>


    								<div class="table-responsive ">
    									<table class="table invoice-items  table-bordered table-hover">
    										<thead>
    											<tr class="h4 text-dark">
    												<th id="cell-id" class="text-semibold">#</th>
    												<th id="cell-item" class="text-semibold">Section</th>
    												<th id="cell-price" class="text-center text-semibold">Revenue</th>
    												<th id="cell-qty" class="text-center text-semibold">Cash</th>

    											</tr>
    										</thead>
    										<tbody>
    											<tr>
    												<td>1</td>
    												<td class="text-semibold text-dark">COUNTER A</td>
    												<td class="text-center">$14.00</td>
        										<td class="text-center">$28.00</td>
    											</tr>
    											<tr>
    												<td>2</td>
    												<td class="text-semibold text-dark">NEFELAND CLUB</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>

                          <tr>
    												<td>3</td>
    												<td class="text-semibold text-dark">COUNTER C</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>

                          <tr>
    												<td>4</td>
    												<td class="text-semibold text-dark">LOUNGE</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>

                          <tr>
    												<td>5</td>
    												<td class="text-semibold text-dark">ROOM ACCOMODATION</td>
    												<td class="text-center"><?= number_format(2);?></td>
    												<td class="text-center"><?= number_format(2);?></td>
    											</tr>

                          <tr>
    												<td>6</td>
    												<td class="text-semibold text-dark">RESTAURANT</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>


                          <tr>
    												<td>7</td>
    												<td class="text-semibold text-dark">OUTSIDE KITCHEN</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>
                          <tr>
    												<td>8</td>
    												<td class="text-semibold text-dark">SPA</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>

                          <tr>
    												<td>9</td>
    												<td class="text-semibold text-dark">SAUNA</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>

                          <tr>
    												<td>10</td>
    												<td class="text-semibold text-dark">TRANSPORT</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>

                          <tr>
    												<td>11</td>
    												<td class="text-semibold text-dark">GYM</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>

                          <tr>
    												<td>12</td>
    												<td class="text-semibold text-dark">LAUNDRY</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>

                          <tr>
    												<td>13</td>
    												<td class="text-semibold text-dark">CONFERENCE/BAQUET</td>
    												<td class="text-center">$17.00</td>
    												<td class="text-center">$17.00</td>
    											</tr>
    										</tbody>
    									</table>
    								</div>

    								<div class="invoice-summary">
    									<div class="row">
    										<div class="col-sm-4 col-sm-offset-8">
    											<table class="table h5 text-dark  table-bordered table-hover">
    												<tbody>
    													<tr class="b-top-none">
    														<td colspan="2">Today cash</td>
    														<td class="text-left"><?=$model->po_date;?></td>
    													</tr>
    													<tr>
    														<td colspan="2">Credits</td>
    														<td class="text-left">$0.00</td>
    													</tr>

                              <tr>
    														<td colspan="2">Paid debtors</td>
    														<td class="text-left">$0.00</td>
    													</tr>

                              <tr>
                                <td colspan="2">Expenses</td>
                                <td class="text-left">$0.00</td>
                              </tr>

                              <tr>
                                <td colspan="2">Direct deposit(Selecom)</td>
                                <td class="text-left">$0.00</td>
                              </tr>

                              <tr>
                                <td colspan="2">Direct deposit(Credit cards)</td>
                                <td class="text-left">$0.00</td>
                              </tr>

    													<tr class="h4">
    														<td colspan="2">Grand Total</td>
    														<td class="text-left">$73.00</td>
    													</tr>
    												</tbody>
    											</table>
    										</div>
    									</div>
    								</div>
                    <div class="text-right">
                      <a href="#" class="btn btn-default fa fa-backward ml-sm"> Back</a>
                      <a href="pages-invoice-print.html" target="_blank" class="btn btn-primary ml-sm"><i class="fa fa-print"></i> Print</a>
                    </div>

    							</div>


    						</div>

  </div>
</div>
