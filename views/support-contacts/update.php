<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\SupportContacts $model */

$this->title = Yii::t('app', 'Update Support Contacts', [
    'name' => $model->name,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Support Contacts'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="support-contacts-update card">

    <div class="card-body">
        <h5><?= Html::encode($this->title) ?></h5>

        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>

    </div>