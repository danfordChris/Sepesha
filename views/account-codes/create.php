<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\AccountCodes $model */

$this->title = 'Create Account Codes';
$this->params['breadcrumbs'][] = ['label' => 'Account Codes', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="account-codes-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
