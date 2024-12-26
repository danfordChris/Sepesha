<?php

use app\models\CustomHelper;
use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Office $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Offices', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="office-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [

                'name',
                'descr:ntext',
                [
                    'attribute' => 'status',
                    'value' => function ($model) {
                        return CustomHelper::getStatusName($model->status) ?? '';
                    }
                ],

                'created_at',
                [
                    'attribute' => 'created_by',
                    'value' => function ($model) {
                        return CustomHelper::getCreatedBy($model->created_by);
                    }
                ],
                'updated_at',
                [
                    'attribute' => 'updated_by',
                    'value' => function ($model) {
                        return CustomHelper::getUpdatedBy($model->updated_by);
                    }
                ],
            ],
        ]) ?>

    </div>
</div>