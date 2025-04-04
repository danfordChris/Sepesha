<?php

use app\models\Departments;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\DepartmentsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Support Contacts');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="discount-codes-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal" data-bs-target="#rcamodal">
                    <i class="fa fa-plus"></i> Add Support Contacts</button>
            </div>
        </div>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                // 'id',
                'name',
                'email:email',
                'phone',
                'office',
                //'descr:ntext',
                //'status',
                //'created_at',
                //'created_by',
                //'updated_at',
                //'updated_by',
                [
                    'attribute' => 'status',
                    'format' => 'raw',
                    'value' => function ($model) {
                        if ($model->status == 1) {
                            return Html::tag('span', 'Active', ['class' => 'badge bg-success']);
                        } elseif ($model->status == 0) {
                            return Html::tag('span', 'Inactive', ['class' => 'badge bg-danger']);
                        }
                    },
                    'contentOptions' => ['class' => 'align-middle'],
                ],

                //'attachment',
                //'approved_by',
                //'approved_date',
                //'wid',
                //'stid',
                //'wfstatus',
                //'requserinput',
                // 'created_by',
                // 'updated_by',
                //'deleted_at',
                //'created_at',
                [
                    'attribute' => 'updated_at',
                    'contentOptions' => ['class' => 'align-middle']
                ],
                //'otp',
                //'otp_expires_at',
                //'privacy_checked',
                //'referal_code',
                [
                    'class' => 'yii\grid\ActionColumn',
                    'template' => '{view}{update}',
                    'buttons' => [
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['support-contacts/update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'update' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['support-contacts/view', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'view' => 't']),
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
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Support Contacts</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>