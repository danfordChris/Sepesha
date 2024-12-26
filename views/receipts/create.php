<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Receipts $model */

$this->title = 'Create Receipts';
$this->params['breadcrumbs'][] = ['label' => 'Receipts', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="receipts-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
