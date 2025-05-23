
<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\BankAccounts $model */

$this->title = $model->accname." ".$model->account_no;
$this->params['breadcrumbs'][] = ['label' => 'Bank Accounts', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="bank-accounts-view card">

    <div class="card-header bg-success text-white">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                'accname',
                'account_no',
                'bankname',
                'banksname',
                'currency',
                [
                    'attribute' => 'openbal',
                    'format' => ['decimal', 2]
                ],
                'branch',
                'swiftcode',
                'address',
                [
                    'attribute' => 'status',
                    'value' => $model->statusName
                ],
                'start_date',
                'created_at',
                'created_by',
                'updated_at',
                'updated_by',
            ],
        ]) ?>

    </div>
</div>