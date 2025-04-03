<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */

$this->title = 'Commissions Details for:' . $model->customer->fullName;
$this->params['breadcrumbs'][] = ['label' => 'Commissions', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="employee-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                // 'id',
                [
                    'attribute' => 'customer_id',
                    'value' => function ($model) {
                        return $model->customer->fullName ?? '';
                    },
                ],
                'transact_date',
                'business_type',
                'transact_id',
                'name',
                'entryid',
                'entry_type',
                'category',
                'account_code',
                'quantity',
                'uom',
                'vat',
                'unit_price',
                'dramount',
                'cramount',
                'currency',
                'erate',
                'descr:ntext',
                'fyid',
                'reference_no',
                'status',
                'wid',
                'stid',
                'wfstatus',
                'requserinput',
                'created_by',
                'updated_by',
                'created_at',
                'updated_at',
                

            ],
        ]) ?>

        <?php
        if ($model->business_type == 'driver') {
            $url = ['commissions/driver'];
        } elseif ($model->business_type == 'vendor') {
            $url = ['commissions/vendor'];
        } else {
            $url = ['commissions/owner'];
        }

        echo Html::a(
            '<i class="fa fa-arrow-left"></i> Back',
            $url,
            ['class' => 'btn btn-secondary']
        );
        ?>
    </div>
</div>