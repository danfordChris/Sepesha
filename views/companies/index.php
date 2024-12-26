<?php

use yii\helpers\Html;
use yii\widgets\Pjax;
use app\models\Companies;
use kartik\grid\GridView;
use kartik\detail\DetailView;
use reine\datatables\DataTables;

/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var app\models\CompaniesSearch $searchModel
 */

$this->title = Yii::t('app', 'Companies');
// $this->params['breadcrumbs'][] = $this->title;
?>

<div class="company-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <i class="fas fa-money-check-alt"></i> Add Company</button>
            </div>
        </div>

        <?php
        //  Pjax::begin();
        echo DataTables::widget([
            'dataProvider' => $dataProvider,
            // 'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm', 'style' => 'color:#000;'],
            // 'exportConfig'=>Yii::$app->kalaExport->getKalaExport($this->title),
            // 'exportConfig' => Yii::$app->kalaExport->getKalaExport($this->title),

            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                [
                    'attribute' => 'logo',
                    'format' => 'raw',
                    'value' => function ($model) {
                        return  $model->logo ?  Html::img('/uploads/' . $model->logo, ['class' => '', 'width' => 120]) : Yii::t('app', 'SET YOUR BUSINESS INFO');
                    }
                ],

                'company_name',
                'company_email:email',
                'company_address',
                'tin_no',
                [
                    'attribute' => 'status',
                    'format' => 'raw',
                    'value' => function ($model) {
                        if ($model->status == 1) {
                            return '<div class="badge badge-success">Active</div>';
                        }
                        return '<div class="badge badge-danger">Inactive</div>';
                    }
                ],
                [
                    'class' => 'yii\grid\ActionColumn',

                    'template' => '{view}{update}',

                    'buttons' => [
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['companies/update', 'id' => $model->company_id, 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['companies/view', 'id' => $model->company_id, 'view' => 't']),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        },

                    ],
                ],
            ],

        ]);
        // Pjax::end();
        ?>

    </div>

</div>



<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Enter Company
                        Details</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>