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

$this->title = 'Driver and Vehicle onboarding requests';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="vehicle-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5> <i class="fa fa-user"></i> <?= Html::encode($this->title) ?></h5>
            </div>



            <hr>
        </div>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                'plate_number',
                [
                    'attribute' => 'status',
                    'format' => 'raw',
                    'content' => function ($m) {
                        return CustomHelper::getVehicleStatus($m->status) ?? '';
                    }
                ],
                'make',
                'model',
                'year',
                // 'weight',
                'fee.name:ntext:Category',
                'color',

                [
                    'label' => 'Driver',
                    'value' => function ($model) {
                        return  $model->driver->getFullName() ?? '';
                    }
                ],

                // [
                //     'attribute' => 'email',
                //     'content' => function ($m) {
                //         return $m->driver->email ?? '';
                //     }

                // ],


                [
                    'label' => 'Phone',
                    'content' => function ($m) {
                        return $m->driver->getPhoneNumber() ?? '';
                    }

                ],


                [
                    'attribute' => 'created_at',
                    'format' => ['date', 'php:d-M-Y H:i:s'],
                    'label' => 'Added On'
                ],


                // [
                //     'attribute' => 'created_by',
                //     'label' => 'Added By',
                //     'value' => function ($model) {
                //         return CustomHelper::getClientName($model->created_by);
                //     }
                // ],

                [
                    'label' => 'Approval Status',
                    'content' => function ($m) {
                        return CustomHelper::getWorkflowStage($m->wid, $m->stid, $m->requserinput) ?? '';
                    }
                ],

                [
                    'contentOptions' => function ($model) {
                        return SystemRoles::isOnWorkflow($model->wid, $model->stid) && $model->requserinput=='N' ? [] : ['style' => 'display:none'];
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