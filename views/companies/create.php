<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var backend\models\remmy\Companies $model
 */

$this->title = Yii::t('app', 'Create {modelClass}', [
    'modelClass' => 'Companies',
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Companies'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="companies-create">
    
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
