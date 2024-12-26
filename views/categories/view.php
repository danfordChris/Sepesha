<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Categories $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Categories'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="district-view card">
    <div class="card-header bg-success">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                'type',
                'name',
                'description',
                [
                    'attribute' => 'program_id',
                    'value' => function ($model) {
                        return $model->programName->name ?? ''; 
                    },
                ],
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
                'created_by',
                'updated_at',
                'updated_by',
             
            ],
        ]) ?>

<div class="form-group">
<?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
    </div>
    </div>
</div>
