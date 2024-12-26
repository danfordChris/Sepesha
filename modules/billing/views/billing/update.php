<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\modules\billing\models\Bill */

$this->title = Yii::t('app', 'Update Bill Number : {name}', [
    'name' => $model->billno,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Bills'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->billid, 'url' => ['view', 'id' => $model->billid]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="bill-update">

    <?= $this->render('_form', [
        'model' => $model,
        'modelsItem'=>$modelsItem,
        'business'=>$business,
    ]) ?>

</div>
