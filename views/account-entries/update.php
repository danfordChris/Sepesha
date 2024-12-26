<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\AccountEntries $model */

$this->title = 'Update Account Entries: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Account Entries', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="account-entries-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
