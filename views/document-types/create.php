<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\DocumentTypes $model */

$this->title = Yii::t('app', 'Create Document Types');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Document Types'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="document-types-create">



    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
