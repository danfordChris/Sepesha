<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Jobtitles $model */

// $this->title = Yii::t('app', 'Update Jobtitles: {name}', [
//     'name' => $model->name,
// ]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Jobtitles'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'jtid' => $model->jtid]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="jobtitles-update">

    <h5><?= Html::encode($this->title) ?></h5>
<div class="card">
    <div class="card-body">

    <h2>Update Jobtitles : <span class="text-danger"> <?= $model->name ?></span></h2>
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>
    </div>
</div>
   

</div>
