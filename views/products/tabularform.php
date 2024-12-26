<?php

use yii\helpers\Html;
use kartik\widgets\ActiveForm;
use kartik\builder\Form;
use kartik\datecontrol\DateControl;
use backend\models\salespoint\Products;
use yii\data\ActiveDataProvider;
use \kartik\grid\GridView;
/**
 * @var yii\web\View $this
 * @var backend\models\salespoint\Products $model
 * @var yii\widgets\ActiveForm $form
 */
?>

<div class="products-form">

    <?php
    $query =Products::find()->indexBy('product_id'); // where `id` is your primary key
     $attribs = $model->formAttribs;
    $dataProvider = new ActiveDataProvider([
        'query' => $query,

    ]);
      /*  $form = ActiveForm::begin(['type' => ActiveForm::TYPE_HORIZONTAL]); echo Form::widget([

        'model' => $model,
        'form' => $form,
        'columns' => 1,
        'attributes' => [

            'product_item_model' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Product Item Model...', 'maxlength' => 30]],

            'product_specification' => ['type' => Form::INPUT_TEXTAREA, 'options' => ['placeholder' => 'Enter Product Specification...','rows' => 6]],

            'product_buy' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Product Buy...']],

            'product_sell' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Product Sell...']],

            'stock' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Stock...']],
           // 'sold_stock' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Stock...']],


           // 'product_unit' => ['type' => Form::INPUT_TEXT, 'options' => ['placeholder' => 'Enter Product Unit...']],

        ]

    ]); 

    
  echo $form->field($model, 'product_unit')->dropDownList([ 'pcs' => 'PCS', 'ctn' => 'CTN', ], ['prompt' => 'Select Status']) ;
 

   echo Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'),
        ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']
    );

    */

   //use kartik\widgets\ActiveForm;
    use kartik\builder\TabularForm;
    $form = ActiveForm::begin();
    echo TabularForm::widget([
    'dataProvider'=>$dataProvider,
    'form'=>$form,
    'attributes'=>$attribs,
    'gridSettings'=>[
        'floatHeader'=>true,
        'panel'=>[
            'heading' => '<h3 class="panel-title"><i class="glyphicon glyphicon-book"></i> Manage Purchases</h3>',
            'type' => GridView::TYPE_PRIMARY,
            'after'=> Html::a('<i class="glyphicon glyphicon-plus"></i> Add New', 'index.php?r=products/create', ['class'=>'btn btn-success']) . ' ' . 
                    Html::a('<i class="glyphicon glyphicon-remove"></i> Delete', '#', ['class'=>'btn btn-danger']) . ' ' .
                    Html::submitButton('<i class="glyphicon glyphicon-floppy-disk"></i> Save', ['class'=>'btn btn-primary'])
        ]
    ]   
]);
     

 
 ActiveForm::end(); ?>




</div>


 