<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\ReferalCodes $model */

$this->title = Yii::t('app', 'Update Referal Codes', [
    'name' => $model->id,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Referal Codes'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="referal-update card">

    <div class="card-body">
        <h5><?= Html::encode($this->title) ?></h5>

        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>

    </div>