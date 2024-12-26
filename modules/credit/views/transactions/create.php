<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var backend\modules\credit\models\CreditControl $model
 */

$this->title = 'Create Credit Control';
$this->params['breadcrumbs'][] = ['label' => 'Credit Controls', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="credit-control-create">
    <div class="page-header">
        <h1><?= Html::encode($this->title) ?></h1>
    </div>
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
