<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Vouchers $model */

$this->title = 'Create Vouchers';
$this->params['breadcrumbs'][] = ['label' => 'Vouchers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="vouchers-create">

    <?= $this->render('_form', [
        'model' => $model,
        'modelsItem'=>$modelsItem

    ]) ?>

</div>
