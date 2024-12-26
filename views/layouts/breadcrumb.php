<?php

use yii\helpers\Url;
use yii\helpers\Html;

?>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?= Url::toRoute(['/site/index']) ?>"><i class="fas fa-tachometer-alt"></i><strong> Home</strong></a></li>
        <li class="breadcrumb-item"><a href="<?= Html::encode($this->title) ?>"><i class="far fa-file"></i> <strong><?= Html::encode($this->title) ?></strong></a></li>
        <!-- <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-list"></i> </li> -->
    </ol>
</nav>

<!-- </div> -->
<!-- </div> -->