<?php

/** @var yii\web\View $this */
/** @var string $name */
/** @var string $message */
/** @var Exception$exception */

use yii\helpers\Html;

$this->title = $name;
?>
<div class="site-error card">

    <div class="card-body">

        <h3><?= Html::encode($this->title) ?></h3>

        <div class="alert alert-danger">
            <?= nl2br(Html::encode($message)) ?>
        </div>

        <p>
            <i class="fa fa-laptop"></i> The above error occurred while processing your request.
        </p>
        <p>
            <i class="fa fa-user-cog"></i> Please contact system administrator if you think this is a system error.
            Thank you.
        </p>

    </div>
</div>