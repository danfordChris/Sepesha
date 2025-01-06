<?php

use app\models\CustomHelper;
use app\models\Regions;
use app\models\User;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\RegionsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'My Vehicles';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="vehicle-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5> <i class="fa fa-truck"></i> <?= Html::encode($this->title) ?></h5>
            </div>

            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-danger" data-bs-toggle="modal"
                    data-bs-target="#rcamodal">
                    <i class="fa fa-plus"></i>Create Vehicle</button>
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
                'make',
                'model',
                'year',
               // 'weight',
                'fee.name',
                'color',
                //'capacity',
                //'created_by',
                //'updated_by',
                //'deleted_at',
                //'created_at',

                [
                    'attribute' => 'created_at',
                    'format' => ['date', 'php:d-M-Y H:i:s'],
                    'label' => 'Added On'
                ],



                [
                    'label' => 'Approval Status',
                    'content' => function ($m) {
                        return CustomHelper::getWorkflowStage($m->wid, $m->stid, $m->requserinput) ?? '';
                    }
                ],

                [
                    'attribute' => 'status',
                    'format' => 'raw',
                    'content' => function ($m) {
                        return CustomHelper::getVehicleStatus($m->status) ?? '';
                    }
                ],

                [
                    'class' => 'yii\grid\ActionColumn',
                    //'visible' => User::auth('admin'),
                    // 'noWrap' => true,
                    'template' => '{update}',
                    'buttons' => [
                        'update' => function ($url, $model) {

                            if ($model->requserinput == 'Y') {
                                return  Html::a(
                                    '<button type="button" class="btn btn-sm btn-danger mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Submit for approval</button>',
                                    Yii::$app->urlManager->createUrl(['vehicle-info/update', 'id' => $model->id]),
                                    ['title' => Yii::t('yii', 'Submit for upproval'),]
                                );
                            }else{
                                return  Html::a(
                                     '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                    Yii::$app->urlManager->createUrl(['vehicle-info/update', 'id' => $model->id]),
                                    ['title' => Yii::t('yii', 'view'),]
                                );
                            }
                        },
                        // 'view' => function ($url, $model) {
                        //     return Html::a(
                        //         '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                        //         Yii::$app->urlManager->createUrl(['vehicle-info/view', 'id' => $model->id]),
                        //         ['title' => Yii::t('yii', 'View'),]
                        //     );
                        // }
                    ],
                ],
            ],
        ]); ?>


    </div>
</div>



<div class="modal fade" id="rcamodal" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h6 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Enter Vehicle
                        Details</strong></h6>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model, 'attachmentModel' => $attachmentModel]); ?>
            </div>
        </div>
    </div>
</div>