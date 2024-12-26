<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\CustomHelper;
use app\widgets\AttachmentTableWidget;

/** @var yii\web\View $this */
/** @var app\models\DriverVehicleAssignment $model */

$this->title = 'Vendor registration details';
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Driver Vehicle Assignments'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="driver-vehicle-assignment-view card card-body">

    <h4><?= Html::encode($this->title) ?></h4>


    <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [

            [
                'attribute' => 'Full nAME',
                'value' => function ($model) {
                    return $model->getFullName()??'';
                }

            ],

            [
                'attribute' => 'email',

            ],

            [
                'attribute' => 'Phone',
                'value' => function ($model) {
                    return $model->getPhoneNumber()??'';
                }

            ],

            [
                'attribute' => 'created_at',
                'format' => ['date', 'php:d-M-Y H:i:s'],
                'label' => 'Added On'
            ],



            [

                'attribute' => 'Status',
                'format'=>'raw',
                'value' => function ($m) {
                    return CustomHelper::getWorkflowStage($m->wid, $m->stid)??'';
                }

            ],

               [
            'attribute' => 'created_by',
            'value' => function ($model) {
            return CustomHelper::getCreatedBy($model->created_by)??'';
            },
            ],

            ],
        ]) ?>

    <?= Yii::$app->approvals->getView($model,$model->auth_key) ?>
    <?= AttachmentTableWidget::widget(['refno' => $model->auth_key]); ?>


</div>