<?php

use yii\helpers\Html;
use app\models\Offices;
use yii\widgets\ListView;
use yii\widgets\DetailView;
use yii\data\ActiveDataProvider;

/** @var yii\web\View $this */
/** @var app\models\User $model */

$this->title = $model->full_name;
$this->params['breadcrumbs'][] = ['label' => 'Users', 'url' => ['signup']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>

<div class="user-view">
    <div class="card card-purple">
        <div class="card-header bg-info tx-medium bd-0">
            <h5 class="card-title mb-0  pb-0">
                <h2 class="mx-auto"> <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['signup'], ['class' => 'btn btn-secondary mb-1']); ?> <?= Html::encode($this->title) ?></h2>
            </h5>
        </div>
        <div class="card-body">



            <?= DetailView::widget([
                'model' => $model,
                'options' => ['class' => 'table table-striped  table-sm table-bordered table-hover'],
                'attributes' => [
                    'username',
                    'email:email',
                    'user_role',
                    [
                        'attribute' => 'company_name',
                        'label' => 'Allowed Office',
                        'format' => 'raw',
                        'value' => function ($model) {
                            $office = explode(',', $model->company_name);
                            $listO = Offices::find()->where(['IN', 'id', $office]);
                            $provider = new ActiveDataProvider([
                                'query' => $listO,
                                'pagination' => [
                                    'pageSize' => 100,
                                ],
                            ]);

                            $myView = ListView::widget([
                                'dataProvider' => $provider,
                                'showOnEmpty' => false,
                                'layout' => "\n{items}",
                                'itemView' => '_list_office',
                                'itemOptions' => [
                                    'tag' => false,
                                ],
                            ]);

                            return $myView;
                        }

                    ],

                    [

                        'attribute' => 'status',
                        //'filter' => ['Y'=>'Active', 'N'=>'Deactive'],
                        'format' => 'raw',
                        'value' => function ($model) {
                            if ($model->status === 10) {
                                return '<span class="btn btn-sm text-success text-bold">ACTIVE</span>';
                            } else {
                                return '<span class="btn btn-sm text-danger">INACTIVE</span>';
                            }
                        },
                    ],
                    'created_at:datetime',
                    'updated_at:datetime',




                ],
            ]) ?>
        </div>
        <!-- <div class="card-footer">

        </div> -->
    </div>