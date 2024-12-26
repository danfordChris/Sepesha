<?php

use app\models\Bus;
use yii\helpers\Html;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;
use app\models\EmployeeCategory;

/** @var yii\web\View $this */
/** @var app\models\EmployeeCategory $model */

$this->title = 'Update Employee Category: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Employee Categories', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="employee-category-update card">

    <div class="card-header bg-success text-white">
        <h5 class="mt-2"><?= $this->title ?></h5>
    </div>
    <div class="card-body">

        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>


    </div>
</div>