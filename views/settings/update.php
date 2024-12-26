<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Settings $model */

$this->title = 'Update System configurations ';
$this->params['breadcrumbs'][] = ['label' => 'Settings', 'url' => ['index']];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="settings-update">

    <div class="card">
        <div class="card-header bg-info">
            <h4 class="mt-2 mx-auto text-white"><?= $this->title ?></h3>
        </div>
        <div class="card-body">

            <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

        </div>

    </div>
</div>