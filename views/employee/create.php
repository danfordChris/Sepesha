<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */

// $this->title = 'Create Employee';
// $this->params['breadcrumbs'][] = ['label' => 'Employees', 'url' => ['index']];
// $this->params['breadcrumbs'][] = $this->title;
?>
<div class="employee-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
