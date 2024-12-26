<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var backend\modules\credit\models\Customer $model
 */

$this->title = 'Update Customer: ' . ' ' . $model->first_name;
$this->params['breadcrumbs'][] = ['label' => 'Customers', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="customer-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
