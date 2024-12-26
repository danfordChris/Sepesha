<?php

use app\models\CustomHelper;
use app\models\Intake;
use kartik\export\ExportMenu;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use kartik\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\IntakeSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Intake Report';
$this->params['breadcrumbs'][] = $this->title;
echo $this->render('/site/bs5tobs4');
?>
<div class="intake-index card">



    <div class="card-body">
        <h5 class="float-left text-center mb-0 text-dark" style="font-family:calibri(body),sans-serif;"><?= $this->title ?></h5>

        <div class="row">

            <?php echo $this->render('_search', ['model' => $searchModel]); ?>

        </div>

        <?= GridView::widget([
            'dataProvider' => $dataProvider,
            'id' => 'Report-grid',

            'headerRowOptions' => ['class' => 'text-dark'],

            'exportConfig' => Yii::$app->kalaExport->getKalaExport($this->title),
            'export' => [
                'options' => ['class' => 'btn btn-sm btn-warning'],
                'menuOptions' => ['class' => 'dropdown-menu dropdown-menu-end fs-6'], // Align dropdown to right
            ],

            'toggleDataOptions' => [
                'all' => ['class' => 'btn btn-secondary text-dark mx-2 btn-sm'],
                'page' => ['class' => 'btn btn-secondary text-dark mx-2 btn-sm'],
            ],
            'bsVersion' => '5.x',
            'responsive' => true,
            'hover' => true,
            'summary' => 'Showing {begin} - {end} of {totalCount} items',
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'options' => ['class' => 'table-responsive'],
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],
                [
                    'attribute' => 'beneficiary_id',

                    'value' => function ($model) {
                        return $model->beneficiary->fullName ?? '';
                    }
                ],

                [
                    'attribute' => 'created_at',
                    'format' => ['date', 'php:d-M-Y H:i:s'],

                    'label' => 'Added On'
                ],

                [
                    'attribute' => 'created_by',
                    'label' => 'Added By',
                    'value' => function ($model) {
                        return CustomHelper::getFullName($model->created_by);
                    }
                ],



                [
                    'label' => 'Status',
                    'value' => function ($model) {
                        return CustomHelper::getStatusName($model->status) ?? '';
                    }
                ],







            ],
            'panel' => [
                'type' => 'warning',
                'headingOptions' => ['class' => 'card-header float-end float-right text-white bg-dark p-2', 'style' => 'height:3em;'],
                'beforeOptions' => ['style' => 'height:4em;'],
                'before' =>
                Html::a(
                    '<i class="fa fa-search fa-1x me-2"></i>Search',
                    '#panel-body-1',
                    [
                        'class' => 'btn btn-sm btn-info text-white float-end accordion-bs-toggle',
                        'data-bs-toggle' => 'collapse',
                        'aria-expanded' => 'false',
                        'data-bs-target' => '#panel-body-1',
                    ]
                ),
            ],

        ]); ?>
    </div>
</div>