<?php

use yii\helpers\Url;
use yii\helpers\Html;
use yii\grid\GridView;
use app\models\Vouchers;
use app\models\Workflow;
use yii\grid\ActionColumn;
use reine\datatables\DataTables;

/** @var yii\web\View $this */
/** @var app\models\VouchersSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Invoices';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="invoices-index card">

    <div class="card-body">

        <h3><?= Html::encode($this->title) ?></h3>
        <h4 class="float-right"><?= Html::a(Yii::t('app', '<span class="fa fa-plus"></span> &nbsp; Create new Invoice'), ['invoice'], ['class' => 'btn btn-primary']) ?></h4>

        <?php // echo $this->render('_search', ['model' => $searchModel]);
        ?>



        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'options' => ['class'=>'table-responsive thead-primary'],
            'tableOptions' => ['class' => 'table table-sms table-bordered table-striped table-hover'],

            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                // 'vid',
                'refno',
                // 'receipt_id',
                [
                    'attribute'=>'customer_id',
                    'label'=>'Customers',
                    'value'=>function($model){
                        return $model->customer->customer_name??'';
                    }
                ],


                [
                    'attribute' => 'status',
                    'format' => 'raw',
                    'value' => function ($model) {
                        if ($model->status == 'A') {
                            return '<div class="badge badge-success">Approved</div>';
                        }
                        return '<div class="badge badge-dark">'.$model->stage->sname??''.'</div>';
                    }
                ],

                'currency',
                [
                    'attribute'=>'amount',
                    'format'=>['decimal',2],
                ],

                'created_at',


                [
                    'class' => 'yii\grid\ActionColumn',
                    'template' => '{actions}', // specify the template for the dropdown
                    'buttons' => [
                        'actions' => function ($url, $model) {
                            $maxStage= Workflow::findOne($model->wid);

                            return Html::a('<span class="glyphicon glyphicon-option-vertical">Action</span>', ['#'], [
                                'class' => 'dropdown-toggle btn btn-outline-primary',
                                'data-toggle' => 'dropdown',
                                'aria-haspopup' => 'true',
                                'aria-expanded' => 'false',
                            ]) . $this->render('_dropdown_action', ['model' => $model,'maxStage'=>$maxStage]);
                        },
                    ],
                ],

            ],
        ]); ?>

    </div>


</div>