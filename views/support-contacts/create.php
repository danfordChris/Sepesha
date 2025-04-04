<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\SupportContacts $model */

$this->title = Yii::t('app', 'Create Support Contacts');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Support Contacts'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="support-contacts-create">



    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
