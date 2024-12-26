<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\District $model */

$this->title = 'Update District: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Districts', 'url' => ['index']];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="district-update card">

    <div class="card-body">
        <h5><?= Html::encode($this->title) ?></h5>

        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>
    </div>
</div>