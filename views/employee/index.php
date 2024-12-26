<?php

use app\models\Employee;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\EmployeeSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Employees';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="employee-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal" data-bs-target="#rcamodal">
                    <i class="fa fa-user"></i> Add Employee</button>
            </div>
        </div>

        <?php // echo $this->render('_search', ['model' => $searchModel]); 
        ?>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table text-nowrap bordered table-sm'],
            'options' =>['class'=> 'table-responsive'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                [
                    'attribute' => 'photo',
                    'label' => 'photo',
                    'format' => 'raw',
                    'value' => function ($model) {
                        return Html::img(Yii::$app->request->baseUrl .'/uploads/employee/photo/'.$model->photo, ['class' => 'img-responsive', 'height' => 40, 'width' => 40, 'onclick' => 'window.open(this.src)']);
                    },
                ],
                'fname',
                'sname',

                [
                    'attribute' => 'category',
                    'value' => function ($model) {
                        return $model->jobTitle->name ?? '';
                    }
                ],
                'gender',
                //'idno',
                // 'idtype',
                'marital_status',
                // 'registered_date',
                //'dob',
                'phone',
                //'email:email',
                //'photo',
                //'sig',
                //'salary',

                [
                    'attribute' => 'oid',
                    'value' => function ($model) {
                        return $model->office->name ?? '';
                    }
                ],
                //'physical_address',
                [
                    'attribute' => 'status',
                    'format' => 'raw',
                    'value' => function ($model) {
                        if ($model->status == 10) {
                            return '<div class="badge badge-success">Active</div>';
                        }
                        return '<div class="badge badge-danger">Inactive</div>';
                    }
                ],
                //'created_at',
                //'created_by',
                //'updated_at',
                //'updated_by',
                [
                    'class' => 'yii\grid\ActionColumn',
                    // 'noWrap' => true,
                    'template' => '{view}{update}{addasuser}',
                    'buttons' => [
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['employee/update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            );
                        },
                        'addasuser' => function ($url, $model) {
                            if ($model->is_user == 0) {
                                return Html::a(
                                    '<button type="button" class="btn btn-sm btn-info mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Make User</button>',
                                    Yii::$app->urlManager->createUrl(['employee/add-user', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'edit' => 't']),
                                    ['title' => Yii::t('yii', 'Edit'),]
                                );
                            }
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['employee/view', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'view' => 't']),
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
    <div class="modal-dialog modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Enter Employee
                        Details</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>