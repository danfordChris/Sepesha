<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Attachment $model */

$this->title = 'Update Attachment: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Attachments', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="attachment-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
