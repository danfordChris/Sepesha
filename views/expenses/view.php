<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Expenses $model */

$this->title = 'Expense';
$this->params['breadcrumbs'][] = ['label' => 'Expenses', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="expenses-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                [
                    'attribute' => 'catid',
                    'value' => function ($model) {
                        return  $model->expenseCategory->name ?? '';
                    }
                ],
                [
                    'attribute' => 'empid',
                    'value' => function ($model) {
                        return  $model->employee->getFullName() ?? '';
                    }
                ],
                [
                    'attribute' => 'busid',
                    'value' => function ($model) {
                        return  $model->bus->regno ?? '';
                    }
                ],
                
                [
                    'attribute' => 'location_id',
                    'value' => function ($model) {
                        return  $model->location->name ?? '';
                    }
                ],
                'amount',
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