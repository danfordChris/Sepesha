<?php

use yii\helpers\Html;
use kartik\detail\DetailView;
use kartik\datecontrol\DateControl;
use kartik\grid\GridView;
use yii\widgets\Pjax;

/**
 * @var yii\web\View $this
 * @var backend\modules\credit\models\Customer $model
 */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Customers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;

echo Html::a( '<span class="fa fa-refresh fa-1x"> Back</span>',['list'],['class'=>'btn btn-default']);

?>
<div class="customer-view">



    <p>
    <div class="row">
    <div class="col-md-8">
    </div>
        <?php if($model->status==10) : ?>


<!-- <div class="col-md-2">
    <button type="button" class="btn btn-info btn-md" data-bs-toggle="modal" data-bs-target="#modalKopa"> <i class="fa fa-minus"></i> Kopesha </button>
</div> -->

    <?php else: ?>
        <h4 class="text-danger text-center bg-red">MTEJA NI DOMANT</h4>
        <?php endif ?>

        <div class="col-md-2">
    <!-- <button type="button" class="btn btn-success btn-md" data-bs-toggle="modal" data-bs-target="#modalLipa"><i class="fa fa-plus "></i> Lipa Deni</button> -->

</div>
    </div>
    </p>

    <div class="row">
        <div class="col-md-12">
            <?= DetailView::widget([
                'model' => $model,
                'condensed' => false,
                'hover' => true,
                'mode' => DetailView::MODE_VIEW,
                'panel' => [
                    'heading' => $this->title,
                    'type' => DetailView::TYPE_INFO,
                ],
                'attributes' => [
                    //'first_name',
                    // 'middle_name',
                    //'last_name',
                    //'email:email',
                  //  'climit:decimal',
                    [
                        'attribute' => 'TOTAL BALANCE:',
                        'format' => 'decimal',
                        'value' => $model->getBalance(),
                    ],

                ],
                'deleteOptions' => [
                    'url' => ['delete', 'id' => $model->id],
                ],
                'enableEditMode' => false,
            ]);
            ?>
        </div>
    </div>

    <?php echo GridView::widget([
        'dataProvider' => $dataProvider,

        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            // 'crdid',
            [
                'attribute' => 'cdate',
                'label' => 'Tarehe',
            ],
            'camount:decimal:Mkopo',
            'damount:decimal:Malipo',
            //    'oid',
            //            'cid',
            'descr:ntext',

            [

                'label' => 'Balance',
                'format' => 'decimal',
                'pageSummary'=>true,
                'value' => function ($model) {

                        return $model->totalBalance;

                }
            ],

            //            'ctype',
            //    'refno',
            //            'recptno',
            //            'status',
            //            'created_by',
            //            'updated_by',


            [
                'class' => 'yii\grid\ActionColumn',
                'template' => '{delete}',
                'buttons' => [
                    'update' => function ($url, $model) {
                        return Html::a(
                            '<span class="glyphicon glyphicon-pencil"></span>',
                            Yii::$app->urlManager->createUrl(['credit/transactions/view', 'id' => $model->crdid, 'edit' => 't']),
                            ['title' => Yii::t('yii', 'Edit'),]
                        );
                    },
                    'delete' => function ($url, $model) {
                        //invoice must be cancelled from invoice dashboard only;
                        if(($model->type=='invoice' && $model->ctype!='crd') || $model->type!='invoice'){
                            return Html::a(
                                '<span class="badge bg-red">Cancel</span>',
                                Yii::$app->urlManager->createUrl(['credit/customers/delete', 'id' => $model->crdid]),
                                [
                                    'data-method' => 'POST',
                                    'data' => [
                                        'confirm' => 'Una uhakika unataka kufuta ?'
                                    ]

                                ]
                            );
                        }
                        return "";

                    }
                ],



            ],


        ],
        'responsive' => true,
        'hover' => true,
        'condensed' => true,
        'floatHeader' => true,

        'panel' => [
            'heading' => '<h6 class="panel-title"><i class="glyphicon glyphicon-th-list"></i> ' . Html::encode('Orodha ya mikopo na malipo') . ' </h6>',
            'type' => 'info',

        ],
    ]);   ?>

</div>
<!-- Modal -->
<div id="modalKopa" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                <h4 class="modal-title"><b>Mkopeshe: <?= $model->name ?></b></h4>
            </div>
            <div class="modal-body">

                <p>
                    <?= $this->render('_form_kop', ['modelCr' => $modelCr]) ?>
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>

<div id="modalLipa" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                <h4 class="modal-title"><b>Ingiza malipo ya: <?= $model->name ?></b></h4>
            </div>
            <div class="modal-body">
            <p>
                    <?= $this->render('_form_lipa', ['modelDbt' => $modelDbt]) ?>
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>