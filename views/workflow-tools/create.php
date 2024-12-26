<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\WorkflowTools $model */

?>
<div class="workflow-tools-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>