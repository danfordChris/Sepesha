<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\DriverVehicleAssignment $model */

$this->title = Yii::t('app', 'Create Driver Vehicle Assignment');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Driver Vehicle Assignments'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="driver-vehicle-assignment-create">

 

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
