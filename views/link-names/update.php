<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\models\LinkNames */

$this->title = Yii::t('app', 'Update Link Names: {name}', [
    'name' => $model->label,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Link Names'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="link-names-update card card-body card-info">


    <div class="row">
        <div class="col-9">
            <h4><?= Html::encode($this->title) ?></h4>

        </div>

        <div class="col-3">

        </div>
    </div>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>