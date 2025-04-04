<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */

$this->title = 'Support Tickets details';
$this->params['breadcrumbs'][] = ['label' => 'Support Tickets', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="support-tickets--view card">

    <div class="card-header bg-success">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                // 'id',
                // 'sender_id',
                'subject',
                'message:ntext',
                'category',
                'status',
                'priority',
                'attachment',
                'created_at',
                'updated_at',
                'created_by',
                'updated_by',
                'deleted_at',

            ],
        ]) ?>





        <?php
        echo Html::a(
            '<i class="fa fa-arrow-left"></i>Back',
            ['/support-tickets/index'],
            ['class' => 'btn btn-secondary']
        );
        ?>


    </div>
</div>