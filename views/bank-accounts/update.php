<?php

use app\models\Bus;
use yii\helpers\Html;
use yii\jui\DatePicker;
use kartik\select2\Select2;
use app\models\BankAccounts;
use yii\widgets\MaskedInput;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\BankAccounts $model */

$this->title = 'Update Bank Account: ' . $model->account_no;
$this->params['breadcrumbs'][] = ['label' => 'Bank Accounts', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->accname, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="bank-accounts-update card">

    <div class="card-header bg-success text-white">
        <h5 class="mt-2"><?= $this->title ?></h5>
    </div>
    <div class="card-body">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

    </div>
</div>