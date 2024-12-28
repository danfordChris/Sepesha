<?php
use app\models\CustomHelper;
use app\models\Regions;
use app\models\User;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\RegionsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Splash Screens';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="splash-screens-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
                <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal"
                    data-bs-target="#rcamodal">
                    <i class="fa fa-plus"></i>Create Splash Screens</button>
            </div>
        </div>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
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
                'type',
                'order',
                //'description',
                //'category',
                //'app',
                //'status',
                //'created_by',
                //'updated_by',
                //'deleted_at',
                //'created_at',
                //'updated_at',
                [
                    'class' => 'yii\grid\ActionColumn',
                    'template' => '{view}{update}',
                    'buttons' => [
                        'update' => function ($url, $model) {

                            return User::auth('admin') ? Html::a(
                                '<button type="button" class="btn btn-sm btn-dark mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['splash-screens/update', 'id' => $model->id]),
                                ['title' => Yii::t('yii', 'Edit'),]
                            ) : "";
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['splash-screens/view', 'id' => $model->id]),
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
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Enter Splash Screens Details</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>