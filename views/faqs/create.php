<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Faqs $model */

$this->title = Yii::t('app', 'Create Faqs');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Faqs'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="faqs-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
