<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\SupportTicketMessages $model */

$this->title = Yii::t('app', 'Create Support Ticket Messages');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Support Ticket Messages'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="support-ticket-messages-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
