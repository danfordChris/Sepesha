<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Services $model */

$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Services'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="services-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <div class="card">
        <div class="card-body">
        <h2>Update Services : <span class="text-danger"> <?= $model->name ?></span></h2>
        <?= $this->render('_form', [
        'model' => $model,
    ]) ?>
        </div>
    </div>
 

</div>
