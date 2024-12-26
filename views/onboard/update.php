<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\DriverVehicleAssignment $model */

$this->title = Yii::t('app', 'Update Driver Vehicle Assignment: {name}', [
    'name' => $model->id,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Driver Vehicle Assignments'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="driver-vehicle-assignment-update">
<div class="card">
    <div class="card-body">
    <h5><?= Html::encode($this->title) ?></h5>

<?= $this->render('_form', [
    'model' => $model,
]) ?>
    </div>
</div>
  

</div>
