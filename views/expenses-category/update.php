<?php

use app\models\Bus;
use yii\helpers\Html;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\ExpensesCategory $model */

$this->title = 'Update Expenses Category: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Expenses Categories', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="expenses-category-update card">

    <div class="card-header bg-success text-white">
        <h5 class="mt-2"><?= $this->title ?></h5>
    </div>
    <div class="card-body">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

    </div>