<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\grid\GridView;
use app\models\Regions;
use yii\grid\ActionColumn;
use app\models\SystemRoles;
use app\models\CustomHelper;
use reine\datatables\DataTables;

/** @var yii\web\View $this */
/** @var app\models\RegionsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Driver and Vehicle Assignment onbording requests';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="driver-vehicle-assignment-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <!-- <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal"
                    data-bs-target="#rcamodal">
                    <i class="fa fa-plus"></i>Create Driver Assignment</button>
            </div> -->
        </div>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                [
                    'label' => 'Driver',
                    'value' => function ($model) {
                        return  $model->createdUser->getFullName()??'';
                    }
                ],

                [
                    'attribute' => 'vehicle',
                    'content' => function ($m) {
                        return $m->vehicle->plate_number??'';
                    }

                ],

                [
                    'attribute' => 'email',
                    'content' => function ($m) {
                        return $m->createdUser->email??'';
                    }

                ],



                [
                    'label' => 'Phone',
                    'content' => function ($m) {
                        return $m->createdUser->getPhoneNumber()??'';
                    }

                ],

                [
                    'attribute' => 'created_at',
                    'format' => ['date', 'php:d-M-Y H:i:s'],
                    'label' => 'Added On'
                ],

                [
                    'attribute' => 'created_by',
                    'label' => 'Added By',
                    'value' => function ($model) {
                        return CustomHelper::getFullName($model->created_by);
                    }
                ],

                [
                    'label' => 'Status',
                    'content' => function ($m) {
                        return CustomHelper::getWorkflowStage($m->wid, $m->stid);
                    }

                ],

                [
                    'contentOptions' => function ($model) {
                        return SystemRoles::isOnWorkflow($model->wid, $model->stid) ? [] : ['style' => 'display:none'];
                    },
                    'content' => function ($m) {
                        if (CustomHelper::stageEnded($m->wid, $m->stid)) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-success mx-1 button-icon mb-1"><i class="fa fa-plus me-1"></i>Attend</button>',
                                Yii::$app->urlManager->createUrl(['onboard/attend', 'ref' => $m->id]),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    },
                ],


                [
                    'class' => 'yii\grid\ActionColumn',
                    //'visible' => User::auth('admin'),
                    // 'noWrap' => true,
                    'template' => '{view}',
                    'buttons' => [
                        'update' => function ($url, $model) {

                            return User::auth('admin') ? Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['onboard/update', 'id' => $model->id]),
                                ['title' => Yii::t('yii', 'Edit'),]
                            ) : "";
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['onboard/view', 'id' => $model->id]),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],
            ],
        ]); ?>


    </div>
</div>



<div class="modal fade" id="rcamodal" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Enter Driver Vehicle
                        Assignments Details</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>