<?php

use yii\helpers\Html;
use app\models\Companies;
use kartik\widgets\ActiveForm;

/**
 * @var yii\web\View $this
 * @var backend\models\remmy\Companies $model
 */

$this->title = 'Update Organization: ' . $model->company_name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Companies'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->company_name, 'url' => ['view', 'id' => $model->company_id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="companies-update card">
    <div class="card-header bg-success text-white">
        <h5 class="mt-2"><?= $this->title ?></h5>
    </div>
    <div class="card-body">

        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>

    </div>

</div>