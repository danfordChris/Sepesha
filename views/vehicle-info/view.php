<?php

use app\models\CustomHelper;
use app\widgets\AttachmentTableWidgetByOwner;
use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Regions $model */

// $this->title = $model->name;
$this->title = 'Vehicles';
$this->params['breadcrumbs'][] = ['label' => 'Vehicles', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="vehicle-view card">

    <div class="card-header bg-success">

        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>

    </div>
    <div class="card-body">
        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                // 'id',
                'plate_number',
                'make',
                'model',
                'year',
                'weight',
                'fee_category_id',
                'color',
                'capacity',
                'owner_id',
                'status',
                'created_by',
                'updated_by',
                'deleted_at',
                'created_at',
                'updated_at',
            ],
        ]) ?>
        <div class="form-group">
            <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['/vehicle-info/index'], ['class' => 'btn btn-secondary']); ?>
        </div>

    </div>
</div>

