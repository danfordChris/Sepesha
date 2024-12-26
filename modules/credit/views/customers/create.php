<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var backend\modules\credit\models\Customer $model
 */

$this->title = 'Create Customer';
$this->params['breadcrumbs'][] = ['label' => 'Customers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="customer-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
