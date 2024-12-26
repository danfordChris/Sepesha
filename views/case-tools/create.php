<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\CaseTools $model */

$this->title = Yii::t('app', 'Create Document');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Document Types'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="case-tools-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>