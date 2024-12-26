<?php

use yii\helpers\Html;
use yii\jui\DatePicker;
use app\models\Vouchers;
use kartik\form\ActiveForm;
use kartik\select2\Select2;
use app\models\AccountCodes;
use app\models\Banks;
use app\models\ExchangeRate;
use yii\helpers\ArrayHelper;
use app\modules\rpas\models\Drone;
use app\modules\rpas\models\Opspurpose;
use app\modules\rpas\models\ExportReason;
use app\modules\rpas\models\EntryexitMeans;
use app\modules\rpas\models\EntryExitPoint;
use wbraganca\dynamicform\DynamicFormWidget;



//use wbraganca\dynamicform\DynamicFormWidget;






/* @var $this yii\web\View */
/* @var $model app\models\PurchaseOrder */
/* @var $form yii\widgets\ActiveForm */
?>
<?php $form = ActiveForm::begin([
    'id' => 'dynamic-form',
    'options' => ['class' => 'disable-submit-buttons'],

]); ?>
<?= $form->errorSummary($model) ?>



<div class="card">

    <p class="card-header alert alert-info text-white" style="background-color: #1b5e20;">Invoice form:

        <i class="text-red"> Exchange Rate is: &nbsp;
            <?= '1 TZS = ' . ExchangeRate::getExchangeRate('USD') . ' USD' ?></i>
    </p>


    <div class="card-body">


        <div class="row">
            <div class="col-md-3">

                <?= $form->field($model, 'customer_id')->label('Customer')->widget(Select2::class, [
                    'data' => Vouchers::getCustomers(),
                    'options' => ['placeholder' => 'Select Customer', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                        //'dropdownParent' => '#exampleModalCenter',
                    ],
                ]);
                ?>
            </div>
            <div class="col-md-3">

                <?= $form->field($model, 'transact_date', [
                    'addon' => [
                        'prepend' => ['content' => '<i class="fa fa-calendar"></i>'],
                    ]
                ])->widget(DatePicker::class, [

                    'clientOptions' => [
                        'changeMonth' => true,
                        'changeYear' => true,
                        'autoSize' => true,
                        'language' => 'en',

                    ],
                    'options' => [
                        'class' => 'form-control',
                        'placeholder' => 'choose date',
                        'autocomplete' => 'off'
                    ],
                    'dateFormat' => 'php:yy-m-d',

                ]);  ?>

            </div>

            <div class="col-md-3">
                <?= $form->field($model, 'bank_id')->label('Bank')->widget(Select2::class, [
                    'data' => Banks::getBankList(),
                    'options' => ['placeholder' => 'Select bank', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                        //'dropdownParent' => '#exampleModalCenter',
                    ],
                ]);
                ?>
            </div>

            <div class="col-md-3">

                <?= $form->field($model, 'currency')->widget(Select2::class, [
                    'data' => Vouchers::getCurrency(),
                    'options' => ['placeholder' => 'Select Currency', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ]) ?>
            </div>


        </div>


        <?= $form->field($model, "descr")->textarea(['maxlength' => true, 'placeholder' => 'Enter description', 'autocomplete' => 'off']) ?>


        <div class="card">

            <div class="card-header text-white" style="background-color: #1b5e20;">Please choose the list of revenue
                :

            </div>
            <div class="card-body">

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
                        'entryid',
                        'cramount',
                    ],
                ]); ?>
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Revenue <i class="text-danger">*</i></th>
                            <th>Description<i class="text"></i></th>
                            <th>Amount<i class="text-danger">*</i></th>

                            <th class="text-center" style="width: 5%;">
                                <span type="button" class="add-item badge badge-info"><span class="fa fa-plus"> </span>
                                    Add</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="container-items">
                        <?php foreach ($modelsItem as $i => $modelItem) : ?>

                            <tr class="item">
                                <!-- widgetBody -->
                                <td width='40%'>
                                    <?php
                                    // necessary for update action.
                                    if (!$modelItem->isNewRecord) {
                                        echo Html::activeHiddenInput($modelItem, "[{$i}]id");
                                    }
                                    ?>

                                    <?= $form->field($modelItem, "[{$i}]entryid")->label(false)->dropDownList(Vouchers::getEntryCategory(AccountCodes::ENTRY_REVENUE), ['prompt' => '--select entry--', 'required' => true]) ?>

                                    <?php
                                    //       $form->field($modelItem, "[{$i}]entryid")->widget(Select2::class, [
                                    //     'data' => Vouchers::getEntryCategory(AccountCodes::ENTRY_EXPENSE),
                                    //     'options' => ['placeholder' => '--select entry--', 'required' => true],
                                    //     'pluginOptions' => [
                                    //         'allowClear' => true,
                                    //     ],
                                    // ]);
                                    ?>

                                </td>

                                <td width='30%'>
                                    <?= $form->field($modelItem, "[{$i}]descr")->label(false)->textarea(['maxlength' => true, 'placeholder' => 'Enter description', 'autocomplete' => 'off']) ?>
                                </td>


                                <td>
                                    <?= $form->field(
                                        $modelItem,
                                        "[{$i}]cramount"

                                    )->label(false)->textInput(['maxlength' => true, 'placeholder' => 'amount', 'class' => 'price', 'autocomplete' => 'off', 'readOnly' => false]) ?>
                                </td>



                                <td class="text-center vcenter" style="width: 5%">
                                    <span type="button" class="remove-item badge badge-danger"><i class="fa fa-times"></i>
                                        Remove</span>
                                </td>

                            </tr>


                        <?php endforeach; ?>

                    </tbody>

                    <td></td>
                    <td><strong class="text-success">TOTAL AMOUNT</strong></td>
                    <td class="total" colspan="2">
                        <?= $form->field(
                            $model,
                            "amount",
                            ['addon' => [
                                'prepend' => ['content' => '<i class="fa fa-credit-card"></i>'],
                            ]]
                        )->label(false)->textInput(['class' => 'total', 'readOnly' => true, 'required' => true, 'type' => 'number', 'min' => 1]) ?>
                    </td>


                </table>

                <?php DynamicFormWidget::end(); ?>

                <div class="form-group">
                    <?= Html::a('<i class="fa fa-backward"></i> Go Back', ['export'], ['class' => 'btn btn-light btn-bordered btn-rounded']); ?>
                    <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
                    <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success', 'data-confirm' => 'Are you sure everything is ok to request for approval ?', 'data' => ['disabled-text' => 'Please Wait']]) ?>

                </div>
                <?php ActiveForm::end(); ?>
            </div>
        </div>



    </div>
</div>
<?php
$script = <<<JS
$(".dynamicform_wrapper").on("beforeInsert", function(e, item) {
    console.log("beforeInsert");
});

$(".dynamicform_wrapper").on("afterInsert", function(e, item) {
    console.log("afterInsert");
    getAmount();
});

$(".dynamicform_wrapper").on("beforeDelete", function(e, item) {
    if (! confirm("Are you sure you want to remove this item from list?")) {
        return false;
    }

    return true;
});

$(".dynamicform_wrapper").on("afterDelete", function(e) {
    getAmount();
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
            var qnty = 1;
            var price = $(elem).find(".price").val();
            //Check if qnty and price are numeric or something like that
           amount = (parseFloat(qnty) * parseFloat(price)).toFixed(2);

            //Assign the amount value to the field
            $(elem).find(".amount").val(amount);

           // var amountValue = $(elem).find(".amount").val();
           var amountValue= amount;
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
$url = Yii::$app->urlManager->createUrl('rpas/impexpos/get-export-price');
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
                                            data: 'productId=' + value,
                                            success: function(data){
                                                priceField.val(data);
                                                getAmount();
                                            }
                                        });

                            }
                        )";
$this->registerJs($script);

?>