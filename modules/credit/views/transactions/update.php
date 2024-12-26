<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var backend\modules\credit\models\CreditControl $model
 */

$this->title = 'Update Credit Control: ' . ' ' . $model->crdid;
$this->params['breadcrumbs'][] = ['label' => 'Credit Controls', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->crdid, 'url' => ['view', 'id' => $model->crdid]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="credit-control-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
