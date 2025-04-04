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

$this->title = 'Support Tickets';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="support-tickets-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5> <i class="fa fa-book"></i> <?= Html::encode($this->title) ?></h5>
            </div>



            <hr>
        </div>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                // 'id',
                // 'sender_id',
                'subject',
                //'message:ntext',
                'category',
                'status',
                'priority',
                //'attachment',
                //'created_at',
                //'updated_at',
                //'created_by',
                //'updated_by',
                //'deleted_at',
                [
                    'class' => 'yii\grid\ActionColumn',
                    //'visible' => User::auth('admin'),
                    // 'noWrap' => true,
                    'template' => '{message}{view}',
                    'buttons' => [
                        'message' => function ($url, $ticketmessageModel) {
                            return User::auth('admin') ? Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Message</button>',
                                Yii::$app->urlManager->createUrl(['support-tickets/ticketmessage', 'id' => $ticketmessageModel->id]),
                                ['title' => Yii::t('yii', 'Message'),]
                            ) : "";
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['support-tickets/view', 'id' => $model->id]),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],
            ],
        ]); ?>


    </div>
</div>