<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Banks $model */

$this->title = $model->accname . ' ' . $model->account_no;
$this->params['breadcrumbs'][] = ['label' => 'Banks', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="banks-view card">

    <div class="card-header bg-success">
        <h5 class="text-white"><?= Html::encode($this->title) ?></h5>
    </div>

    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            // 'options'=>['class'=>' table-responsive '],
            'attributes' => [
                'bankname',
                'banksname',
                'openbal',
                'currency',
                'branch',
                'address',
                'account_code',
                'swiftcode',
                [
                    'attribute' => 'status',
                    'value' => $model->statuz
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