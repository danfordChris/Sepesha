<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use kartik\datecontrol\DateControl;
use yii\widgets\DetailView as WidgetsDetailView;

/**
 * @var yii\web\View $this
 * @var backend\models\remmy\Companies $model
 */

$this->title = $model->company_name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Companies'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="companies-view card">

    <div class="card-header bg-success text-white">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            // 'mode' => Yii::$app->request->get('edit') == 't' ? DetailView::MODE_EDIT : DetailView::MODE_VIEW,
            // 'options' => ['class' => 'table table-bordered detailviewbg table-striped table-condensed'],
            'attributes' => [
                //'company_id',
                [
                    'attribute' => 'company_name',

                ],


                [
                    'attribute' => 'company_email',
                ],

                [
                    'attribute' => 'company_address',


                ],
                [
                    'attribute' => 'logo',

                ],
                [
                    'attribute' => 'status',
                    'value' => $model->statusName
                ],
                'created_at',
                'updated_at',
                [
                    'attribute' => 'created_by',
                    'value' => $model->createdUser->full_name ?? ''

                ],
                [
                    'attribute' => 'updated_by',
                    'value' => $model->updatedUser->full_name ?? ''

                ],
            ],
        ]) ?>

    </div>
</div>