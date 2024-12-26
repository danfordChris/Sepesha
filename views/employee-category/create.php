<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\EmployeeCategory $model */

$this->title = 'Create Employee Category';
$this->params['breadcrumbs'][] = ['label' => 'Employee Categories', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="employee-category-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
