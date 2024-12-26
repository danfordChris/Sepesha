<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\ContactRelationship $model */

$this->title = 'Update Contact Relationship: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Contact Relationships', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="contact-relationship-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
