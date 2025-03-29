<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Vehicle $model */

$this->title = Yii::t('app', 'Create Vehicle');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Vehicles'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="vehicle-create">
    <?= $this->render('_form', [
        'model' => $model,
        'attachmentModel'=>$attachmentModel
    ]) ?>

</div>