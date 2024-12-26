<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\BankDeposits $model */

$this->title = "Deposit";
$this->params['breadcrumbs'][] = ['label' => 'Bank Deposits', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="bank-deposits-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">


        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                [
                    'attribute' => 'accid',
                    'value' => function ($model) {
                        $acname = $model->bankAccount->accname??'';
                        $acno  = $model->bankAccount->account_no??'';
                        return  $acname.' ('.$acno.')';
                    }
                ],
            
                [
                    'attribute' => 'deposit_by',
                    'value' => function ($model) {
                        return  $model->depositor->fullName??'';
                    }
                ],
                'amount',
                'expense_date',
                'deposit_date',
                'descr:ntext',
                [
                    'attribute' => 'status',
                    'value' => $model->statusName
                ],
                'created_at',
                'created_by',
                'updated_at',
                'updated_by',
            ],
        ]) ?>

    </div>
</div>