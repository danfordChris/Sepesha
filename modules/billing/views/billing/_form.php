<?php

use app\models\Driver;
use app\models\FleetOrder;
use app\models\Offices;
use app\models\Product;
use app\models\ProductStock;
use app\models\ProductUnity;
use app\models\Unit;
use app\models\User;
use app\models\Vehicle;
use app\models\BankAccounts;
use app\models\Companies;
use app\models\Customer;
use app\models\salespoint\Products;
use app\modules\billing\models\Bill;

use yii\helpers\Html;
use kartik\widgets\ActiveForm;
use kartik\select2\Select2;
use kidzen\dynamicform\DynamicFormWidget;
use yii\helpers\ArrayHelper;
//use yii\jui\DatePicker;
use kartik\date\DatePicker;
use yii\web\JsExpression;
use yii\web\View;

/* @var $this yii\web\View */
/* @var $model app\models\PurchaseOrder */
/* @var $form yii\widgets\ActiveForm */

// $this->registerJsFile(Yii::$app->getUrlManager()->getBaseUrl().'/js/dynamic.js',['depends'=>[\yii\web\JqueryAsset::class], 'position'=>View::POS_END]);
?>

<div class="card card-body">
    <div class="card-header bg-info">
        <h5 class="card-title ml-3 mt-1 text-white"><i class="bi bi-list-ol"></i>Carco Information:</h5>
    </div>

    <hr>
    <?php $form = ActiveForm::begin([
        'id' => 'dynamic-form',
        'options' => ['class' => 'disable-submit-buttons']
    ]); ?>
    <?= $form->errorSummary($model) ?>
    <div class="row">

        <div class="col-md-6">
            <?= $form->field(
                $model,
                'cid',
                ['addon' => [
                    'prepend' => ['content' => '<i class="fa fa-user"></i>'],
                ]]
            )->widget(Select2::class, [
                'data' => Customer::getCustomerListActive(),
                'language' => 'en',
                'options' => ['placeholder' => '---select customer---', 'class' => 'myHost'],
                'pluginOptions' => [
                    'allowClear' => true,
                    //'dropdownParent'=> '#modalSalesOrder',
                ],
            ]); ?>
        </div>


        <div class="col-md-6">
            <?= $form->field(
                $model,
                'billno',
                ['addon' => [
                    'prepend' => ['content' => '<i class="fa fa-book"></i>'],
                ]]
            )->textInput(['maxlength' => true, 'readOnly' => true, 'placeholder' => 'Enter order number UNIQUE e.g 678']) ?>
        </div>


    </div>




    <div class="row">

        <div class="col-md-4">
            <?= $form->field(
                $model,
                'currency',
                ['addon' => [
                    'prepend' => ['content' => '<i class="fa fa-bank"></i>'],
                ]]
            )->widget(Select2::class, [
                'data' => Bill::getBillCurrency(),
                'language' => 'en',
                'options' => ['placeholder' => '---select currency---', 'class' => 'myHost'],
                'pluginOptions' => [
                    'allowClear' => true,
                    //'dropdownParent'=> '#modalSalesOrder',
                ],
            ]); ?>
        </div>
        <div class="col-md-4">



            <?= $form->field($model, 'bill_date')->widget(DatePicker::class, ['options' => ['placeholder' => 'Enter sale date ...', 'autocomplete' => 'off'], 'pluginOptions' =>
            [
                'autoclose' => true,
                'format' => 'yyyy-mm-dd',
                'endDate' => '0d',
                'todayHighlight' => true

            ]]) ?>


        </div>


        <div class="col-md-4">
            <?= $form->field($model, 'due_date')->widget(DatePicker::class, ['options' => ['placeholder' => 'Enter Due date ...', 'autocomplete' => 'off'], 'pluginOptions' =>
            [
                'autoclose' => true,
                'format' => 'yyyy-mm-dd',

                'todayHighlight' => true

            ]]) ?>

        </div>
    </div>

    <div class="row">


        <div class="col-md-6">
            <?= $form->field(
                $model,
                'descr',
                // ['addon' => [
                //     'prepend' => ['content' => '<i class="bi bi-chat"></i>'],
                // ]]
            )->textarea(['rows' => 2, 'placeholder' => 'Enter bill description']) ?>
        </div>

        <div class="col-md-6">
            <?= $form->field(
                $model,
                'shipping',
                // ['addon' => [
                //     'prepend' => ['content' => '<i class="bi bi-chat"></i>'],
                // ]]
            )->textarea(['rows' => 2, 'placeholder' => 'Enter shiiping information']) ?>
        </div>

    </div>

    <div class=" card-body">
        <div class="card-header bg-dark">
            <h5 class="card-title ml-3 mt-1 text-white"><i class="bi bi-list-ol"></i> Cargo Items:</h5>
        </div>
        <div class="panel-body overflow-auto">
            <?php DynamicFormWidget::begin([
                'widgetContainer' => 'dynamicform_wrapper', // required: only alphanumeric characters plus "_" [A-Za-z0-9_]
                'widgetBody' => '.container-items', // required: css class selector
                'widgetItem' => '.item', // required: css class
                'limit' => 10, // the maximum times, an element can be cloned (default 999)
                'min' => 1, // 0 or 1 (default 1)
                'insertButton' => '.add-item', // css class
                'deleteButton' => '.remove-item', // css class
                'model' => $modelsItem[0],
                'formId' => 'dynamic-form',
                'formFields' => [
                    'part_name',
                    'part_qty',

                    'part_price',
                ],
            ]); ?>
            <table class="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Product/Service Name</th>
                        <th>Item Description</th>
                        <th>Quantity</th>
                        <!-- <th>Unit</th> -->
                        <th>Price/Unit</th>

                        <th>Amount</th>
                        <th class="text-center" style="width: 5%;">
                            <button type="button" class="add-item badge bg-green"><span class="fa fa-plus"> Add More</span></button>
                        </th>
                    </tr>
                </thead>
                <tbody class="container-items">
                    <?php foreach ($modelsItem as $i => $modelItem) : ?>

                        <tr class="item">
                            <!-- widgetBody -->
                            <td>
                                <?php
                                // necessary for update action.
                                if (!$modelItem->isNewRecord) {
                                    echo Html::activeHiddenInput($modelItem, "[{$i}]itemid");
                                }
                                ?>
                                <?php //= $form->field($modelItem, "[{$i}]part_name")->label(false)->textarea(['maxlength' => true,'placeholder'=>'Enter Detailed  Poruduct/Part/Item name'])
                                ?>
                                <?php //= $form->field($modelItem, "[{$i}]part_name")->label(false)->dropDownList(Product::getProductList(), ['prompt' => Yii::t('app', '--- product---')])
                                ?>
                                <?= $form->field(
                                    $modelItem,
                                    "[{$i}]item_id"
                                )->label(false)->widget(Select2::class, [
                                    'data' => Bill::getProductList(),
                                    // 'bsVersion' => '4.x',
                                    'options' => ['prompt' => '--select product/service--', 'class' => 'itemProd'],
                                    'pluginOptions' => [
                                        'allowClear' => true,
                                        // 'dropdownParent'=> '#modalSalesOrder',
                                        // 'dropdownParent' => new JsExpression('$("#modalSalesOrder")'),
                                        //'dropdownParent' => new yii\web\JsExpression('$("#modalSalesOrder")'),
                                    ],
                                ]);


                                ?>
                            </td>

                            <td width="20%">
                                <?= $form->field(
                                    $modelItem,
                                    "[{$i}]descr"

                                )->label(false)->textarea(['maxlength' => true, 'placeholder' => 'Enter description', 'class' => 'descrp', 'autocomplete' => 'off', 'readOnly' => false]) ?>
                            </td>

                            <td width="15%">
                                <?= $form->field(
                                    $modelItem,
                                    "[{$i}]quantity"

                                )->label(false)->textInput(['maxlength' => true, 'placeholder' => 'Enter Quantity', 'class' => 'qnty', 'autocomplete' => 'off']) ?>
                            </td>


                            <td width="15%">
                                <?= $form->field(
                                    $modelItem,
                                    "[{$i}]unit_price"

                                )->label(false)->textInput(['maxlength' => true, 'placeholder' => 'Unit price', 'class' => 'price', 'autocomplete' => 'off', 'readOnly' => false]) ?>
                            </td>



                            <td class="vcenter" width="15%">
                                <?= $form->field(
                                    $modelItem,
                                    "[{$i}]line_total"
                                )->label(false)->textInput(['class' => 'amount', 'readOnly' => true, 'required' => true, 'type' => 'number', 'min' => 1]) ?>
                            </td>
                            <td class="text-center vcenter" style="width: 5%">
                                <button type="button" class="remove-item badge bg-red btn-sm"><i class="fa fa-minus"> Remove</i></button>
                            </td>


                        </tr>


                    <?php endforeach; ?>


                </tbody>

                <?php DynamicFormWidget::end(); ?>
        </div>

    </div>
    <td></td>
    <td></td>
    <td><strong class="text-success">TOTAL (TZS)</strong></td>
    <td class="total" colspan="2">
        <?= $form->field(
            $model,
            "total_amount",
            ['addon' => [
                'prepend' => ['content' => '<i class="bi bi-coin"></i>'],
            ]]
        )->label(false)->textInput(['class' => 'total', 'readOnly' => true, 'required' => true, 'type' => 'number', 'min' => 1]) ?>
    </td>
    <td>
    </td>
    </table>
    <div class="form-group">
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
        <?= Html::a('Refresh', ['create', 'bid' => $business->id], ['class' => 'btn btn-outline-secondary']) ?>
        <?= Html::submitButton(Yii::t('app', 'Save All'), ['class' => 'btn btn-success', 'data' => ['disabled-text' => 'Please Wait'], 'data' => [
            'confirm' => 'Are you sure you want to submit this invoice ?',
            'method' => 'post',
        ],]) ?>

    </div>
    <?php ActiveForm::end(); ?>


</div>
<?php
$script = <<<JS
$(".dynamicform_wrapper").on("beforeInsert", function(e, item) {
    //console.log("beforeInsert");
});

$(".dynamicform_wrapper").on("afterInsert", function(e, item) {
    //console.log("afterInsert");
});

$(".dynamicform_wrapper").on("beforeDelete", function(e, item) {
    if (! confirm("Are you sure you want to delete this item?")) {
        return false;
    }

    return true;
});

$(".dynamicform_wrapper").on("afterDelete", function(e) {
    console.log("Deleted item!");
});

$(".dynamicform_wrapper").on("limitReached", function(e, item) {
    alert("Limit reached");
});

JS;
$this->registerJs($script);
?>


<?php
/* start getting the totalamount */
$script = <<<EOD
    var getAmount = function() {

        var items = $(".item");
        var amount = 0;
        var total = 0;

        items.each(function (index, elem) {
            var i=0;
             var i = $(elem).find(".item").val();
            var qnty = $(elem).find(".qnty").val();
            var price = $(elem).find(".price").val();
            //Check if qnty and price are numeric or something like that
           amount = (parseFloat(qnty) * parseFloat(price)).toFixed(2);

            //Assign the amount value to the field
            $(elem).find(".amount").val(amount);

            var amountValue = $(elem).find(".amount").val();

            total = parseFloat(total) + parseFloat(amountValue);

            $(".total").val(total);
        });
    };

    //Bind new elements to support the function too
    $(".container-items").on("change", function() {

        getAmount();
    });



EOD;

$this->registerJs($script);

?>

<?php
$url = Yii::$app->urlManager->createUrl('sales/get-product-price');
$oid = Yii::$app->request->get('sid');
$script = "$('body').on('change', '.itemProd',
                            function(event, jqXHR, settings)
                            {
                               // console.log('here');
                                var dropDown    = $(this);
                                var priceField= $(this).closest('.item').find('.price');
                                var value       = $(this).val();

                                    $.ajax({
                                            url: '{$url}',
                                            type: 'get',
                                            data: 'productId=' + value + '&officeId='+'{$oid}',
                                            success: function(data){
                                                priceField.val(data);
                                            }
                                        });

                            }
                        )";
$this->registerJs($script);

?>

<?php
$url = Yii::$app->urlManager->createUrl('sales/can-credit');
$script = "$('body').on('change', '.myHost',
                            function(event, jqXHR, settings)
                            {
                               // console.log('here');
                                var dropDown    = $(this);
                                var value       = $(this).val();

                                    $.ajax({
                                            url: '{$url}',
                                            type: 'get',
                                            data: 'custId=' + value,
                                            success: function(data){
                                                // console.log(data)
                                                 if(data=='YES'){
                                                    $('.salesOrderType').show();
                                                    $('.soTypeITEM').attr('required',true);
                                                 }else{
                                                    $('.salesOrderType').hide();
                                                    $('.soTypeITEM').removeAttr('required');
                                                 }


                                            }
                                        });

                            }
                        )";
$this->registerJs($script);

?>

<?php
$script = <<< JS
  //check type of visit
  $(document).ready(function(){
    $('#myHost').on('change', function(){
    	var myVal = $(this).val();
        if(myVal=='staff'){
            $(".staffInfo").show();
            $(".depInfo").hide();
        }else if(myVal=='office'){
           var offv= $("#visitorbook-did").val();

            $(".salesOrderType").hide();
            $(".salesOrderType").show();
        }

     });
});
JS;
$this->registerJs($script);

?>