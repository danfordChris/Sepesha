<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\modules\billing\models\Bill */

?>

<br>
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <i class="fa fa-list"></i> Cargo bill list</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> <i class="fa fa-plus"></i> Add New</button>
  </li>

</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

  <div class="card card-body">
  <?= $this->render('index', [
        'dataProvider' => $dataProvider,
        'searchModel' => $searchModel,
        'business'=>$business
    ]) ?>
  </div>


  </div>


  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <?= $this->render('_form', [
        'model' => $model,
        'modelsItem'=>$modelsItem,
        'business'=>$business,
    ]) ?>

    </div>



</div>