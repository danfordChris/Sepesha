<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Attachment $model */


?>
<div class="attachment-create">


    <?= $this->render('_form', [
        'model' => $model,'workflow'=>$workflow
    ]) ?>

</div>
