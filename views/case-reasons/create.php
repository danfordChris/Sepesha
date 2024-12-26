<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\CaseReasons $model */

$this->title = Yii::t('app', 'Create Case Reasons');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Case Reasons'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="case-reasons-create">



    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
