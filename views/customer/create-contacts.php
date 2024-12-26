<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Customer $model */

?>
<div class="customer-create">

    <?= $this->render('_form_contacts', [
        'model' => $model,
    ]) ?>

</div>