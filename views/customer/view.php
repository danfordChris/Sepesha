<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Customer $model */

$this->title = 'Stakeholders details for: '.$model->name;
$this->params['breadcrumbs'][] = ['label' => 'Customers', 'url' => ['index']];
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
                [
                    'attribute' => 'type',
                    'value' => function ($model) {
                        return $model->categoryType->name ?? '';
                    }
                ],
                [
                    'attribute' => 'region',
                    'value' => function ($model) {
                        if ($model->type == 26) {
                            return 'Shelter';
                        } else {
                            return 'Fit Person';
                        }
                    }
                ],
                [
                    'attribute' => 'region',
                    'value' => function ($model) {
                        return $model->regionz->name ?? '';
                    }
                ],
                'pobox',
                'physical_address',
                'phone',
                'email:email',
                [
                    'attribute' => 'district',
                    'value' => function ($model) {
                        return $model->districtz->name ?? '';
                    }
                ],
                [
                    'attribute' => 'status',
                    'format' => 'raw',
                    'value' => function ($model) {
                        if ($model->status == 10) {
                            return '<div class="badge badge-success">Active</div>';
                        }
                        return '<div class="badge badge-danger">Inactive</div>';
                    }
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
 <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>

    </div>
</div>