<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/**
 * @var yii\web\View $this
 * @var backend\models\salespoint\ProductsSearch $model
 * @var yii\widgets\ActiveForm $form
 */
?>

<div class="products-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'product_id') ?>

    <?= $form->field($model, 'product_item_model') ?>

    <?= $form->field($model, 'product_specification') ?>

    <?= $form->field($model, 'product_buy') ?>

    <?= $form->field($model, 'product_sell') ?>

    <?php // echo $form->field($model, 'stock') ?>

    <?php // echo $form->field($model, 'product_unit') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
