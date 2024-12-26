<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\CaseReasons $model */

$this->title = Yii::t('app', 'Update Case Reasons: {name}', [
    'name' => $model->name,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Case Reasons'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="case-reasons-update">

    <h5><?= Html::encode($this->title) ?></h5>
<div class="card">
    <div class="card-body">
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>
    </div>
</div>
   

</div>
