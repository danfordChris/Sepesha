<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Banks $model */

$this->title = 'Create Banks';
$this->params['breadcrumbs'][] = ['label' => 'Banks', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="banks-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
