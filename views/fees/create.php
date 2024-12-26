<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\FeeCategory $model */

$this->title = Yii::t('app', 'Create Fee Category');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Fee Categories'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="fee-category-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
