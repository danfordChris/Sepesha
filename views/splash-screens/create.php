<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\SplashScreens $model */

$this->title = Yii::t('app', 'Create Splash Screens');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Splash Screens'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="splash-screens-create">
    
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
