<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\models\LinkNames */

$this->title = Yii::t('app', 'Create Link Names');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Link Names'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="link-names card card-body">

    <div class="row">
        <div class="col-9">
            <h4><?= Html::encode($this->title) ?></h4>

        </div>

        <div class="col-3">
        </div>
    </div>


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>


</div>