<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\EmployeeCategory $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Employee Categories', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="employee-category-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                'type',
                'name',
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