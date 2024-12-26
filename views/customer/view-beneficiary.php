<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Customer $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Contact', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="customer-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                'name',
                'type',
                [
                    'attribute' => 'region',
                    'value' => function ($model) {
                        return $model->regionz->name??'';
                    }
                ],
                'pobox',
                'physical_address',
                'phone',
                'email:email',
                [
                    'attribute' => 'district',
                    'value' => function ($model) {
                        return $model->districtz->name??'';
                    }
                ],
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