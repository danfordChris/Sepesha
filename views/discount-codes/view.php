<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */

$this->title = 'discount-codes details';
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
                'value',
                'type',
                'category',
                'code',
                'descr:ntext',
                'start_date',
                'end_date',
                'status',
                'created_at',
                'created_by',
                'updated_at',
                'updated_by',

            ],
        ]) ?>

        <?php
        if ($model->category == 'driver') {
            $url = ['/discount-codes/driver'];
        } else {
            $url = ['/discount-codes/customer'];
        }

        echo Html::a(
            '<i class="fa fa-arrow-left"></i> Back',
            $url,
            ['class' => 'btn btn-secondary']
        );
        ?>
    </div>
</div>