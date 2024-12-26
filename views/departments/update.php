<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Departments $model */

// $this->title = Yii::t('app', 'Update Departments: {name}', [
//     'name' => $model->name,
// ]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Departments'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'did' => $model->did]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="departments-update">

    <h5><?= Html::encode($this->title) ?></h5>
<div class="card">
    <div class="card-body">

    
    <h2>Update Departments : <span class="text-danger"> <?= $model->name ?></span></h2>
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>
    </div>
</div>


</div>
