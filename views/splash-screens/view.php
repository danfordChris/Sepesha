<?php

use app\models\CustomHelper;
use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */

$this->params['breadcrumbs'][] = ['label' => 'Splash Screens', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title='Details for: '.$model->name;
\yii\web\YiiAsset::register($this);
?>
<div class="splash-screens-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>

    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                // 'id',
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
                'type',
                'order',
                'description',
                'category',
                'app',
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
                'deleted_at',
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
 <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
    </div>
</div>
