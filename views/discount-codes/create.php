<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\DiscountCodes $model */

$this->title = Yii::t('app', 'Create Discount Codes');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Discount Codes'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="discount-codes-create">



    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
