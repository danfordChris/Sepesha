<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Departments $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Departments'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="departments-view card">
    <div class="card-header bg-success">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                'name',
                'sname',
                [
             
                    'attribute' => 'status',
                    'format' => 'html',
                    'value' => function($model) {
                        $options = $model::getStatusOptions();
                        $status = $options[$model->status] ?? '';
                        Yii::info('Status value: ' . $model->status);
                        $badgeColor = ($model->status == 'active' || $model->status == 1) ? 'success' : 'danger'; 
                        $badge = Html::tag('span', $status, ['class' => 'badge badge-' . $badgeColor]);
                        return $badge;
                    },
                    ],
                'created_at',
                [
                    'attribute' => 'created_by',
                    'value' => function ($model) {
                        return $model->createdBy ? $model->createdBy->username : 'Not set';
                    },
                ],
                'updated_at',
                [
                    'attribute' => 'updated_by',
                    'value' => $model->updatedBy ? $model->updatedBy->username : 'Not set',
                ],
            ],
        ]) ?>

<div class="form-group">
<?= Html::a('<i class="fas fa-angle-double-left"></i>Back', ['index'], ['class' => 'btn btn-dark']) ?>
    </div>
    </div>
</div>