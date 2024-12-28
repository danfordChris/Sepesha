<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\SplashScreens $model */

$this->title = Yii::t('app', 'Update Splash Screens: {name}', [
    'name' => $model->name,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Splash Screens'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="splash-screens-update">
<div class="card">
    <div class="card-body">
    <h5><?= Html::encode($this->title) ?></h5>
      <?= $this->render('_form', [
    'model' => $model,
    ]) ?>
    </div>
</div>
   

</div>
