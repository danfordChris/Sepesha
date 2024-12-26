<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\ExchangeRate $model */

$this->title = Yii::t('app', 'Create Exchange Rate');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Exchange Rates'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="exchange-rate-create">

    <h4><?= Html::encode($this->title) ?></h4>

    <div class="row card card-body">
        <div class="col-md-8">
            <?= $this->render('_form', [
                'model' => $model,
            ]) ?>
        </div>
    </div>

</div>