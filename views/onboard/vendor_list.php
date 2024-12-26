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

$this->title = 'Vendor onbording requests';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="driver-vehicle-assignment-index card">

    <div class="card-body">
        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>
            </div>

        </div>
        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                [
                    'label' => 'Vendor',
                    'value' => function ($model) {
                        return  $model->getFullName()??'';
                    }
                ],
                'email',

                [
                    'attribute' => 'referal_code',
                    'content' => function ($m) {
                        return $m->referal_code??'';
                    }

                ],

                [
                    'label' => 'Phone',
                    'content' => function ($m) {
                        return $m->getPhoneNumber()??'';
                    }

                ],

                [
                    'attribute' => 'created_at',
                    'format' => ['date', 'php:d-M-Y H:i:s'],
                    'label' => 'Added On'
                ],



                [
                    'label' => 'Status',
                    'content' => function ($m) {
                        return CustomHelper::getWorkflowStage($m->wid, $m->stid)??'';
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
                                Yii::$app->urlManager->createUrl(['onboard/attend-vendor', 'ref' => $m->auth_key]),
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
                                Yii::$app->urlManager->createUrl(['onboard/update', 'id' => $model->auth_key]),
                                ['title' => Yii::t('yii', 'Edit'),]
                            ) : "";
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['onboard/view-vendor', 'id' => $model->auth_key]),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],
            ],
        ]); ?>


    </div>
</div>