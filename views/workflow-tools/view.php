<?php

use app\models\Settings;
use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\District $model */

$this->title = 'Workflow Tools for '. $model->workflowName->name ?? '';
$this->params['breadcrumbs'][] = ['label' => 'Workflow Tools', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="workflow-tools-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                [
                    'attribute' => 'wid',
                    'value' => function ($model) {
                        return $model->workflowName->name ?? ''; 
                    },
                ],
                [
                    'attribute' => 'toolid',
                    'value' => function ($model) {
                        return $model->casetoolName->name ?? ''; 
                    },
                ],
             
            'description:ntext',
            [
                'attribute' => 'mandatory',
                'value' => function ($model) {
                    if ($model->mandatory == '1') {
                        return 'Yes';
                    } else
                        return 'No';
                }
            ],
                [
                    'attribute' => 'status',
                    'value' => function ($model) {
                        if ($model->status == '1') {
                            return 'Active';
                        } else
                            return 'Inactive';
                    }
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