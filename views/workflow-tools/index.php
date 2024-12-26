<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\grid\GridView;
use app\models\District;
use yii\grid\ActionColumn;
use reine\datatables\DataTables;

/** @var yii\web\View $this */
/** @var app\models\DistrictSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Workflow Tools';

$this->params['breadcrumbs'][] = $this->title;
?>
<div class="workflow-tools-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>
            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal" data-bs-target="#rcamodal">
                    <i class="fa fa-plus"></i> Add Workflow Tools</button>
            </div>
        </div>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive text-nowrap bordered table-sm'],
            'options' => ['class' => ' table-responsive'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                [
                    'attribute' => 'wid',
                    'value' => function ($model) {
                        return $model->workflowName->name ?? '';
                    },
                ],
                [
                    'attribute' => 'stid',
                    'value' => function ($model) {
                        return $model->stages;
                    },
                ],
                [
                    'attribute' => 'toolid',
                    'value' => function ($model) {
                        return $model->casetoolName->name ?? '';
                    },
                ],
                'description:ntext',
                [
                    'attribute' => 'mandatory',
                    'value' => function ($model) {
                        if ($model->mandatory == '1') {
                            return 'Yes';
                        } else
                            return 'No';
                    }
                ],

                [
                    'class' => 'yii\grid\ActionColumn',
                    //'visible' => User::auth('admin'),
                    // 'noWrap' => true,
                    'template' => '{view}{update}',
                    'buttons' => [
                        'update' => function ($url, $model) {

                            return User::auth('admin') ? Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['workflow-tools/update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            ) : "";
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['workflow-tools/view', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'view' => 't']),
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
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Enter Workflow Tools
                        Details</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>