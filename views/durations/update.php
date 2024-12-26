<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Durations $model */

$this->title = Yii::t('app', 'Update Durations: {name}', [
    'name' => $model->name,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Durations'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="durations-update">

    <h5><?= Html::encode($this->title) ?></h5>
<div class="card">
    <div class="card-body">
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>
    </div>
</div>
   

</div>
