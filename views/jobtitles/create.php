<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Jobtitles $model */

$this->title = Yii::t('app', 'Create Jobtitles');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Jobtitles'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="jobtitles-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
