<?php

use app\models\Attachment;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\AttachmentSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Attachments';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="attachment-index">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal" data-bs-target="#rcamodal">
                    <i class="fa fa-plus"></i> Add Attachment</button>
            </div>
        </div>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table text-nowrap table-responsive bordered table-sm'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                [
                    'attribute' => 'type',
                    'label' => 'Name',
                    'value' => function($model){
                        return $model->document->name ??'';
                    }
                ],
                'description:ntext',
                //'module',
                //'attachment',
                //'status',
                //'created_at',
                //'created_by',
                //'updated_at',
                //'updated_by',
                [
                    'class' => 'yii\grid\ActionColumn',
                    'template' => '{view}{update}',
                    'buttons' => [
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-warning btn-sm mx-2 button-icon mb-1 custom-smaller-button"><i class="fa fa-eye me-1"></i>View</button>',
                                $model->attachment,
                                ['title' => Yii::t('yii', 'View'),'target' => '_blank']
                            );
                        },
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1"><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['attachment/update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit')]
                            );
                        },
                    ],
                ],
            ],
        ]); ?>


    </div>


    <div class="modal fade" id="rcamodal" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header bg-success">
                    <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Add Attachment</strong></h4>
                </div>
                <div class="modal-body">
                    <?= $this->render('create', ['model' => $model,'workflow'=>$workflow]); ?>
                </div>
            </div>
        </div>
    </div>