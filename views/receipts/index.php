<?php

use app\models\Receipts;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\ReceiptsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Receipts';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="receipts-index card">

    <div class="card-body">

        <h3><?= Html::encode($this->title) ?></h3>

        <p>
            <button type="button" class="btn btn-success btn-sm mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i class="fa fa-plus"></i> Create Receipt</button>
        </p>

        <?php // echo $this->render('_search', ['model' => $searchModel]);
        ?>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                'recno',
                [
                    'attribute'=>'customer_id',
                    'label'=>'Customers',
                    'value'=>function($model){
                        return $model->customer->customer_name??'';
                    }
                ],
                [
                    'attribute'=> 'debit',
                    'label'=>'Debited',
                    'value'=>function($model){
                        $c = $model->debited->code??'';
                        $n = $model->debited->name??'';
                        return $c.'-'.$n;
                    }
                ],
                [
                    'attribute'=> 'credit',
                    'label'=>'Credited',
                    'value'=>function($model){
                        $c = $model->credited->code??'';
                        $n = $model->credited->name??'';
                        return $c.'-'.$n;
                    }
                ],
                'currency',
                [
                    'attribute'=>'amount',
                    'format'=>'raw',
                    'value'=> function($model){
                        if($model->currency=='tzs'){
                    return "TZS ".number_format($model->amount,2,".",",");
                        }
                        else
                    return "$".number_format($model->amount,2,".",",");
                    }
                ],
                //'desc',
                //'ref_no',
                //'control_no',
                //'issue_by',
                //'appr_by',
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
                                Yii::$app->urlManager->createUrl(['receipts/update', 'recid' => $model->recid, 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['receipts/view', 'recid' => $model->recid, 'view' => 't']),
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
                <h5 class="modal-title text-white">Create Receipt</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal">
                </button>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>

            </div>
        </div>
    </div>
</div>