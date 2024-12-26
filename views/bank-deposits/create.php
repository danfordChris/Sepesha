<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\BankDeposits $model */

$this->title = 'Create Bank Deposits';
$this->params['breadcrumbs'][] = ['label' => 'Bank Deposits', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="bank-deposits-create">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
