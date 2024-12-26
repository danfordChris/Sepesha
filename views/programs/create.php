<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Programs $model */

$this->title = Yii::t('app', 'Create Programs');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Programs'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="programs-create">



    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
