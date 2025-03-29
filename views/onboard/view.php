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

    <?= Yii::$app->driver->getView($model->id) ?>



    <div class="group1">
        <h6 class="card-header bg-danger text-white">
            <i class="fa fa-truck "></i> &nbsp;Vehicle Details
        </h6>
        <div class="row">


            <div class="col">
                <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [

            [
                'attribute' => 'vehicle',
                'value' => function ($model) {
                    return $model->plate_number??'';
                }

            ],

            [
                'attribute' => 'email',
                'value' => function ($model) {
                    return $model->make??'';
                }

            ],

            [
                'attribute' => 'Phone',
                'value' => function ($model) {
                    return $model->model;
                }

            ],

            [
                'attribute' => 'Color',
                'value' => function ($model) {
                    return $model->color;
                }

            ],

            [
                'attribute' => 'Category',
                'value' => function ($model) {
                    return $model->fee->name;
                }

            ],



            ],
        ]) ?>
            </div>

            <div class="col">

                <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [



            [
                'attribute' => 'created_at',
                'format' => ['date', 'php:d-M-Y H:i:s'],
                'label' => 'Added On'
            ],



            [

                'attribute' => 'Approval Status',
                'format'=>'raw',
                'value' => function ($m) {
                    return CustomHelper::getWorkflowStage($m->wid, $m->stid,$m->requserinput)??'';
                }

            ],


            [

                'attribute' => 'Vehicle Status',
                'format'=>'raw',
                'value' => function ($m) {
                    return CustomHelper::getVehicleStatus($m->status)??'';
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
            </div>
        </div>
    </div>




    <?= Yii::$app->approvals->getView($model,$model->id) ?>

    <?= AttachmentTableWidget::widget(['refno' => $model->id]); ?>


</div>