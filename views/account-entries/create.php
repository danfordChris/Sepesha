<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\AccountEntries $model */

$this->title = 'Create Account Entries';
$this->params['breadcrumbs'][] = ['label' => 'Account Entries', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="account-entries-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
