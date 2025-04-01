<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Commissions $model */

$this->title = Yii::t('app', 'Create Commissions');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Commissions'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="commissions-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
