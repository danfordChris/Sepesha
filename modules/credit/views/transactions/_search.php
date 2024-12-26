<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\daterange\DateRangePicker;
use yii\jui\DatePicker;
use yii\widgets\Pjax;
use backend\models\remmy\Salaries;
use backend\models\remmy\Offices;
use app\models\Customer;
use kartik\select2\Select2;
use yii\helpers\ArrayHelper;

/**
* @var yii\web\View $this
* @var backend\models\remmy\SalariesSearch $model
* @var yii\widgets\ActiveForm $form
*/
?>


<?php Pjax::begin();?>
<?php $form = ActiveForm::begin([
'action' => ['index'],
'method' => 'get',
]); ?>
<div class="row">
<div class="col-md-3"  >
<?= $form->field($model, 'date_from',[

])->label("From date")->widget(DatePicker::class,[

'clientOptions' =>[
'changeMonth'=> true,
'changeYear'=> true,
'autoSize'=>true,
'language' => 'en',

],
'options'=>[
    'class'=>'form-control',
    'autocomplete'=>'off',
     //'placeholder' => 'date from'
    ],

'dateFormat' => 'php:yy-m-d',

]) ; ?>

</div>
<div class="col-md-3" >
<?= $form->field($model, 'date_to',[

])->label("To date")->widget(DatePicker::class,[

'clientOptions' =>[
'changeMonth'=> true,
'changeYear'=> true,
'autoSize'=>true,
'language' => 'en',

],
'options'=>[
    'class'=>'form-control',
    'autocomplete'=>'off',
     //'placeholder' => 'date from'
    ],

'dateFormat' => 'php:yy-m-d',

]) ; ?>

</div>

<div class="col-md-3" >

<?= $form->field($model, 'cid')->widget(Select2::class, [
'data' => Customer::getCustomerList(),
'language' => 'en',
'options' => ['placeholder' => '--select--'],
'pluginOptions' => [
'allowClear' => true,
],
]); ?>
</div>


<div class="form-group col-md-3 mt-4">
<?= Html::submitButton(' <span class=" fa fa-search fa-1x"> Search</span>', ['class' => 'btn btn-primary']) ?>
 </div>

</div>

<br>      <!-- search end -->


<?php ActiveForm::end(); ?>
<?php Pjax::end();  ?>
