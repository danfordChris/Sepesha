<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Sections $model */

// $this->title = Yii::t('app', 'Update Sections: {name}', [
//     'name' => $model->name,
// ]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Sections'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'sid' => $model->sid]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="sections-update">


<div class="card">
    <div class="card-body">
   

    <h2>Update Sections : <span class="text-danger"> <?= $model->name ?></span></h2>
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>
    </div>
</div>
 

</div>
