<?php

use app\models\CustomHelper;
use app\models\FeeCategory;
use app\models\User;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\widgets\Pjax;

/** @var yii\web\View $this */
/** @var app\models\FeeCategorySearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Vehicle Fee Categories');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="fee-category-index card">
    <div class="row card-header">
        <div class="col-md-6">
            <h5><?= Html::encode($this->title) ?></h5>
        </div>
        <div class="col-md-6">
            <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal"
                data-bs-target="#submitModal">
                <i class="fa fa-plus"></i> Add </button>
        </div>
    </div>

    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]);
    ?>
    <div class="card-body">

        <?= DataTables::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'name',
            [
                'attribute' => 'photo',
                'format' => 'raw',
                'value' => function ($model) {
                    if (!empty($model->photo)) {
                        return Html::img($model->photo, ['class' => 'img-responsive', 'height' => 40, 'width' => 40, 'onclick' => 'window.open(this.src)']);
                    }
                    return 'No Image';
                },
            ],
            [
                'attribute' => 'icon',
                'format' => 'raw',
                'value' => function ($model) {
                    if (!empty($model->icon)) {
                        return Html::img($model->icon, ['class' => 'img-responsive', 'height' => 40, 'width' => 40, 'onclick' => 'window.open(this.src)']);
                    }
                    return 'Not Set';
                },
            ],
            'description',
            'capacity',
            'vehicle_multiplier',
            'base_price',
            'price_per_km',
            'status',
            [
                'attribute' => 'updated_by',
                'content' => function ($m) {
                    return CustomHelper::getCreatedBy($m->updated_by)??'';
                }
            ],
            //'created_by',
            //'updated_by',
            //'deleted_at',
            //'created_at',
            'updated_at',

            [
                'class' => 'yii\grid\ActionColumn',
                //'visible' => User::auth('admin'),
                // 'noWrap' => true,
                'template' => '{view}{update}',
                'buttons' => [
                    'update' => function ($url, $model) {

                        return User::auth('admin') ? Html::a(
                            '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                            Yii::$app->urlManager->createUrl(['fees/update', 'id' => $model->id]),
                            ['title' => Yii::t('yii', 'Edit'),]
                        ) : "";
                    },
                    'view' => function ($url, $model) {
                        return Html::a(
                            '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                            Yii::$app->urlManager->createUrl(['fees/view', 'id' => $model->id]),
                            ['title' => Yii::t('yii', 'View'),]
                        );
                    }
                ],
            ],
        ],
    ]); ?>

    </div>
    <?php Pjax::end(); ?>

</div>

<div class="modal fade" id="submitModal" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>
                        Add Vehicle Fee Category</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('_form', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>