<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\FeeCategory $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Fee Categories'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="fee-category-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'name',
            [
                'attribute' => 'photo',
                'format' => 'raw',
                'value' => function ($model) {
                    if (!empty($model->photo)) {
                        return Html::img($model->photo, ['class' => 'img-responsive', 'height' => 40, 'width' => 40, 'onclick' => 'window.open(this.src)']);
                    }
                    return 'No Image';
                },
            ],
            [
                'attribute' => 'icon',
                'format' => 'raw',
                'value' => function ($model) {
                    if (!empty($model->icon)) {
                        return Html::img($model->icon, ['class' => 'img-responsive', 'height' => 40, 'width' => 40, 'onclick' => 'window.open(this.src)']);
                    }
                    return 'Not Set';
                },
            ],
            'description',
            'vehicle_multiplier',
            'base_price',
            'price_per_km',
            'status',
            'created_by',
            'updated_by',
            'deleted_at',
            'created_at',
            'updated_at',
        ],
    ]) ?>

</div>
