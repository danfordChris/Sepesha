<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\AccountCodes $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Account Codes', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="account-codes-view card">


    <div class="card-header bg-success">
        <h3><?= Html::encode($this->title) ?></h3>
    </div>

    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'attributes' => [
                // 'coid',
                'category',
                'code',
                'name',
                'descr:ntext',
                [
                    'attribute'=>'status',
                    'value'=>$model->statuz
                ],
                'created_at',
                'created_by',
                'updated_at',
                'updated_by',
            ],
        ]) ?>

    </div>
</div>