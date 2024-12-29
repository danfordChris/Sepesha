<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\FeeCategory $model */

$this->title = Yii::t('app', 'Update Fee Category: {name}', [
    'name' => $model->name,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Fee Categories'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="fee-category-update">
<div class="card">
    <div class="card-body">
    <h5><?= Html::encode($this->title) ?></h5>
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>
    </div>
</div>


</div>
