<?php

use app\models\Categories;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\widgets\Pjax;
/** @var yii\web\View $this */
/** @var app\models\CategoriesSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Categories');
// $this->params['breadcrumbs'][] = $this->title;
?>

<div class="categories-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
             
            <h5><?= Html::encode($this->title) ?></h5>
            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal" data-bs-target="#rcamodal">
                    <i class="fa fa-plus"></i> Add Categories</button>
            </div>
        </div>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => 'table table-responsive bordered table-sm'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                'name',
                'sname',
                'type',
                [
                    'attribute' => 'program_id',
                    'value' => function ($model) {
                        return $model->programName->name ?? ''; 
                    },
                ],
                [
             
                    'attribute' => 'status',
                    'format' => 'html',
                    'value' => function($model) {
                        $options = $model::getStatusOptions();
                        $status = $options[$model->status] ?? '';
                        Yii::info('Status value: ' . $model->status);
                        $badgeColor = ($model->status == 'active' || $model->status == 1) ? 'success' : 'danger'; 
                        $badge = Html::tag('span', $status, ['class' => 'badge badge-' . $badgeColor]);
                        return $badge;
                    },
                    ],
                [
                    'class' => 'yii\grid\ActionColumn',
                    'template' => '{view}{update}',
                    'buttons' => [
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1"><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['categories/update', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit')]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['categories/view', 'rca' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'view' => 't']),
                                ['title' => Yii::t('yii', 'View')]
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
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Categories Details</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>