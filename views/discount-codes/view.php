<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */

$this->title = 'Discount codes details';
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
                [
                    'attribute' => 'status',
                    'format' => 'raw',
                    'value' => function ($model) {
                        if ($model->status == 1) {
                            return Html::tag('span', 'Active', ['class' => 'badge bg-success']);
                        } elseif ($model->status == 0) {
                            return Html::tag('span', 'Inactive', ['class' => 'badge bg-danger']);
                        }
                    },
                    'contentOptions' => ['class' => 'align-middle'],
                ],
                'created_at',

                [
                    'attribute' => 'created_by',
                    'value' => $model->createdUser->full_name ?? ''

                ],
                'updated_at',
                [
                    'attribute' => 'updated_by',
                    'value' => $model->updatedUser->full_name ?? ''

                ],

            ],
        ]) ?>





        <?php
        echo Html::a(
            '<i class="fa fa-arrow-left"></i>Back',
            ['/discount-codes/index'],
            ['class' => 'btn btn-secondary']
        );
        ?>


    </div>
</div>