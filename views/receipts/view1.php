<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Receipts $model */

$this->title = $model->recno;
$this->params['breadcrumbs'][] = ['label' => 'Receipts', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="receipts-view card">

    <div class="card-header bg-success">
        <h3><?= Html::encode($this->title) ?></h3>
    </div>

    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'attributes' => [
                'recno',
                'customer_id',
                'amount',
                'balance',
                'desc',
                'ref_no',
                'control_no',
                'issue_by',
                'appr_by',
                [
                    'attribute'=>'status',
                    'value'=>$model->statuz
                ],
                'created_at',
                'created_by',
                'updated_at',
                'updated_by',
            ],
        ]) ?>

    </div>
</div>