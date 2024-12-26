<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\models\Links */

$this->title = Yii::t('app', 'Create Links');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Links'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="links-create card card-body">
    <?php $this->beginBlock('TableHeaderButtonBlock') ?>

    <div class="row">
        <div class="col-9">
            <h4><?= Html::encode($this->title) ?></h4>

        </div>

        <div class="col-3">

        </div>
    </div>

    <?php $this->endBlock() ?>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>


</div>