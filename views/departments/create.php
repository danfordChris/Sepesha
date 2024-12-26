<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Departments $model */

$this->title = Yii::t('app', 'Create Departments');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Departments'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="departments-create">



    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
