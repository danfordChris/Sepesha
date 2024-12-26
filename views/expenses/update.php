<?php


use yii\helpers\Html;
use yii\jui\DatePicker;
use app\models\Employee;
use app\models\Expenses;
use kartik\select2\Select2;
use yii\widgets\MaskedInput;
use kartik\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Expenses $model */

$this->title = 'Update Expenses: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Expenses', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="expenses-update card">
    <div class="card-header bg-success text-white">
        <h5 class="mt-2"><?= $this->title ?></h5>
    </div>
    <div class="card-body">

        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>
    </div>
</div>