<?php


use app\models\Bus;
use yii\helpers\Html;
use yii\jui\DatePicker;
use app\models\Employee;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */

$this->title = 'Update Employee: ' . $model->getFullName();
$this->params['breadcrumbs'][] = ['label' => 'Employees', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->getFullName(), 'url' => ['view', 'id' => $model->getFullName()]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="employee-update card">

    <div class="card-header bg-success text-white">
        <h5 class="mt-2"><?= $this->title ?></h5>
    </div>
    <div class="card-body">

        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>
    </div>
</div>