<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Regions $model */

$this->title = 'Create Regions';
$this->params['breadcrumbs'][] = ['label' => 'Regions', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="regions-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
