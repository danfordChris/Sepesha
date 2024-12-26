<?php

use app\models\Department;
use app\models\Section;
use app\models\Sections;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\helpers\ArrayHelper;

/** @var yii\web\View $this */
/** @var app\models\SectionsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Sections');
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="jobtitles-index card">

    <div class="card-body">

        <div class="row">
            <div class="col-md-6">
            <h5><?= Html::encode($this->title) ?></h5>

            </div>
            <div class="col-md-6">
                <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal" data-bs-target="#rcamodal">
                    <i class="fa fa-plus"></i> Add Sections</button>
            </div>
        </div>

        <?= DataTables::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                
                [
                    'attribute' => 'did',
                    'value' => function ($model) {
                        return ArrayHelper::getValue(Section::getDepartmentList(), $model->did);
                    },
                    'filter' => Section::getDepartmentList(),
                ],
                'name',
                'sname',
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
                                Yii::$app->urlManager->createUrl(['sections/update', 'rca' => Yii::$app->getSecurity()->hashData($model->sid, 'gmtdev'), 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit')]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['sections/view', 'rca' => Yii::$app->getSecurity()->hashData($model->sid, 'gmtdev'), 'view' => 't']),
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
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Sections details</strong></h4>
            </div>
            <div class="modal-body">
                <?= $this->render('create', ['model' => $model]); ?>
            </div>
        </div>
    </div>
</div>

