<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\WorkflowTools $model */

$this->title = Yii::t('app', 'Update Workflow Tools: {name}', [
    'name' => $model->workflowName->name ?? '',
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Workflow Tools'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="workflow-tools-update card">
    <div class="card-body">
        <h5><?= Html::encode($this->title) ?></h5>
        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>
    </div>

</div>
