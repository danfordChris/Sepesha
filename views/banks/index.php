<?php

use app\models\Banks;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\BanksSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Banks';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="banks-index card">

    <div class="card-body">

        <h3><?= Html::encode($this->title) ?></h3>

        <p>
            <button type="button" class="btn btn-success btn-sm mb-2" data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"><i class="fa fa-plus"></i> Add Bank</button>
        </p>
        <?php // echo $this->render('_search', ['model' => $searchModel]);
        ?>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'options'=>['class'=>'table-responsive'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                'bankname',
                'banksname',
                // 'openbal',
                // [
                //     'attribute'=>'openbal',
                //     'format'=>'raw',
                //     'value'=> function($model){
                //         if($model->currency=='tzs'){
                //     return number_format($model->openbal,2,".",",")."/=";
                //         }
                //         else
                //     return "$".number_format($model->openbal,2,".",",");
                //     }
                // ],
                'currency',
                //'descr:ntext',
                //'reference_no',
                // 'customer_id',
               // 'start_date',
                [
                    'attribute' => 'status',
                    'format' => 'raw',
                    'value' => function ($model) {
                        if ($model->status == '1') {
                            return '<div class="badge badge-success">Active</div>';
                        }
                        return '<div class="badge badge-danger">Not Active</div>';
                    }
                ],

                [
                    'class' => 'yii\grid\ActionColumn',
                    // 'noWrap' => true,
                    'template' => '{view}{update}',
                    'buttons' => [
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-primary mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['banks/update', 'id' => $model->id, 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['banks/view', 'id' => $model->id, 'view' => 't']),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],
            ],
        ]); ?>

    </div>

</div>

<div class="modal fade" id="exampleModalCenter">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h5 class="modal-title text-white">Add Bank Account</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal">
                </button>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>

            </div>
        </div>
    </div>
</div>