<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\ReferalCodes $model */

$this->title = Yii::t('app', 'Create Referal Codes');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Referal Codes'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="referal-codes-create">



    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
