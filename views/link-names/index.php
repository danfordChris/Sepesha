<?php

use app\models\User;
use reine\datatables\DataTables;
use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel backend\models\LinkNamesSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'System Menu List');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="link-names-index card card-body">


  <div class="row">
    <div class="col-10">
      <h4><?= Html::encode($this->title) ?></h4>

    </div>

    <div class="col-2 pull-left">
      <?= Html::a(Yii::t('app', '<i class="bx bx-user"></i> Add New'), ['create'], ['class' => 'btn btn-success btn-sm text-white']) ?>

    </div>
  </div>



  <?php Pjax::begin(); ?>
  <?php // echo $this->render('_search', ['model' => $searchModel]);
  ?>


  <?= DataTables::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'options' => ['class' => 'table table-sm datatable table-responsive', 'id' => 'datatable'],
    'columns' => [
      ['class' => 'yii\grid\SerialColumn'],

      //'id',
      'label',
      [

        'attribute' => 'parentid',
        'value' => function ($m) {
          return $m->getParentName() ?? '';
        },
      ],
      //'mod.name:ntext:Module',
      'description:ntext',

      [

        'attribute' => 'access_name',
        'visible' => User::isAdmin(),
      ],

      'url',


      [

        'attribute' => 'status',
        'label' => 'Status',
        // 'filter' => ['1' => 'Enabled', '0' => 'Disabled'],
        'format' => 'raw',

        'value' => function ($model) {
          if ($model->status == 1) {
            return '<span class="badge badge-success">Active</span>';
          }

          return '<span class="badge badge-danger">Inactive</span>';
        }
      ],

      [
        'class' => 'yii\grid\ActionColumn',
        'contentOptions' => ['style' => 'width: 200px'],
        // 'visible'=>User::UserRole()==User::TYPE_ADMIN,
        'template' => '{update}',
        'buttons' => [


          'view' => function ($url, $model) {
            return Html::a('<span class="bi bi-eye""></span>', ['view', 'id' => $model->id], [
              'title' => Yii::t('yii', 'View Order'),
            ]);
          },

          //update button
          'update' => function ($url, $model) {
            if (User::isAdmin()) {
              return Html::a('<span class="fa fa-edit"></span>', ['update', 'id' => $model->id, 'gmtdev'], [
                'title' => Yii::t('yii', 'Update'),
              ]);
            }
          },

          // delete button
          'delete' => function ($url, $model) {
            if (User::isAdmin()) {
              return Html::a('<span class="fa fa-trash"></span>', ['delete', 'id' => $model->id, 'gmtdev'], [
                'title' => Yii::t('yii', 'Delete'),
                'data' => [
                  'confirm' => Yii::t('app', 'Are you sure you want to delete this item ?'),
                  'method' => 'post',
                ],
              ]);
            }
          },
        ],
      ],
    ],
  ]); ?>
  <?php Pjax::end(); ?>
</div>