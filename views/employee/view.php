<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */

$this->title = 'Employee Details for:'.$model->getFullName();
$this->params['breadcrumbs'][] = ['label' => 'Employees', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="employee-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                'fname',
                'mname',
                'sname',
                [
                    'attribute' => 'category',
                    'value' => function ($model) {
                        return $model->employeeCategory->name ?? '';
                    }
                ],
                'gender',
                'idno',
                'idtype',
                'marital_status',
                'registered_date',
                'dob',
                'phone',
                'email:email',
                [
                    'attribute' => 'oid',
                    'value' => function ($model) {
                        return $model->office->name ?? '';
                    }
                ],
                'physical_address',
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