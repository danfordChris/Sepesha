<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Durations $model */

$this->title = Yii::t('app', 'Create Durations');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Durations'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="durations-create">

  

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
