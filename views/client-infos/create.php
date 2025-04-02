<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\ClientsInfo $model */

$this->title = Yii::t('app', 'Create Clients Info');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Clients Infos'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="clients-info-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
