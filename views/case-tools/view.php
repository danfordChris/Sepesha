<?php

use app\models\Settings;
use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\District $model */

$this->title = 'Case Tools for '.$model->name??"";
$this->params['breadcrumbs'][] = ['label' => 'Case Tools', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="case-tools-view card">

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
                    'attribute'=>'type',
                    'value'=>function($model){
                        return $model->type == 1 ?'Attachments':'Forms';
                    }
                ],
                'description:ntext',
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
        <div class="form-group">
<?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
    </div>

    </div>
</div>