<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\CustomHelper;
use app\widgets\AttachmentTableWidget;
use app\widgets\AttachmentTableWidgetByOwner;

/** @var yii\web\View $this */
/** @var app\models\DriverVehicleAssignment $model */

$this->title = 'Driver Vehicle Assignments';
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

            'latitude',
            'longitude',
            'location_updated_at',
            'assignment_start',
            'assignment_end',


            [
                'attribute' => 'vehicle',
                'value' => function ($model) {
                    return $model->vehicle->plate_number??'';
                }

            ],

            [
                'attribute' => 'email',
                'value' => function ($model) {
                    return $model->createdUser->email??'';
                }

            ],

            [
                'attribute' => 'Phone',
                'value' => function ($model) {
                    return $model->createdUser->getPhoneNumber()??'';
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

    <?= Yii::$app->approvals->getView($model,$model->id) ?>
    
        <?= AttachmentTableWidgetByOwner::widget(['cby' => $model->created_by]); ?>
   

</div>