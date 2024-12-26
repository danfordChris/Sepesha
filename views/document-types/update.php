<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\DocumentTypes $model */

$this->title = Yii::t('app', 'Update Document Types: {name}', [
    'name' => $model->name,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Document Types'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'docuid' => $model->docuid]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="document-types-update card">


    <div class="card-body">
        <h5><?= Html::encode($this->title) ?></h5>
        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>
    </div>

</div>
