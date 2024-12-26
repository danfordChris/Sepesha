<?php

use app\models\Expenses;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\ExpensesSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Expenses';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="expenses-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <i class="fas fa-money-check-alt"></i> Add Expense</button>
            </div>
        </div>

        <?php // echo $this->render('_search', ['model' => $searchModel]);
        ?>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],

            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],


                [
                    'attribute' => 'catid',
                    'value' => function ($m) {
                        return  $m->expenseCategory->name??'';
                    }
                ],

                // [
                //     'attribute' => 'empid',
                //     'value' => function ($m) {
                //         return  $m->employee->getFullName()??'';
                //     }
                // ],

                [
                    'attribute' => 'trip_id',
                    'value' => function ($m) {
                        return  $m->trip->trip_no ??'';
                    }
                ],

                //'location_id',

                [
                    'attribute' => 'oid',
                    'value' => function ($m) {
                        return  $m->office->name;
                    }
                ],
                'amount',
                //'descr:ntext',
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
                'transact_date',
                //'created_by',
                //'updated_at',
                //'updated_by',
                [
                    'class' => 'yii\grid\ActionColumn',
                    // 'noWrap' => true,
                    'template' => '{view}{update}',
                    'buttons' => [
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['expenses/update', 'id' => $model->id, 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['expenses/view', 'id' => $model->id, 'view' => 't']),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],
            ],
        ]); ?>

    </div>
</div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Enter Expense Details</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>