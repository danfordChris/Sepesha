<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap4\ActiveForm */
/* @var $model app\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap4\ActiveForm;
use yii\bootstrap4\Modal;
//use dosamigos\datepicker\DatePicker;


$this->title = 'Information Technology Unit / Module Roles';
$this->params['breadcrumbs'][] = $this->title;
?>


<div class="site-contact table-responsive">

	<div class="card">

		<div class="card-body">
			<table class='table table-bordered'>
				<tr>
					<td><span style="font-size:16px;font-weight: bold;">Modules Roles Management : Employee List</span></td>

				</tr>
			</table>



			<div class="table-responsive">
				<?php
				echo  $dataProvider;
				?>
			</div>
		</div>
	</div>


</div>