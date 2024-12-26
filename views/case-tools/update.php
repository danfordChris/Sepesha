<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\CaseTools $model */

$this->title = Yii::t('app', 'Update Case Tools: {name}', [
    'name' => $model->name,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Case Tools'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="case-tools-update card">

    <h5><?= Html::encode($this->title) ?></h5>

    <div class="card-body">
<?= $this->render('_form', [
        'model' => $model,
    ]) ?>
</div>

</div>
