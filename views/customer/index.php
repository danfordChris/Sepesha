<?php

use app\models\Customer;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\CustomerSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Stakeholders';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="customer-index card">


    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter">
                    <i class="fa fa-user"></i> Add Stakeholder</button>
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

                'name',

                [
                    'attribute' => 'type',
                    'value' => function ($model) {
                        return $model->categoryType->name ?? '';
                    }
                ],

                'phone',
                [
                    'attribute' => 'region',
                    'value' => function ($model) {
                        return $model->regionz->name ?? '';
                    }
                ],
                //'pobox',


                //'email:email',
                [
                    'attribute' => 'district',
                    'value' => function ($model) {
                        return $model->districtz->name ?? '';
                    }
                ],
                'physical_address',
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
                    'template' => '{view}{update}',
                    'buttons' => [
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['customer/update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['customer/view', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'view' => 't']),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],
            ],
        ]); ?>


    </div>
</div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="formModal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h5 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Enter
                        Stakeholder details </strong></h5>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>