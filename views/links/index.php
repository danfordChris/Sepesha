<?php

use app\models\User;
use app\models\Links;
use app\models\Roles;
use yii\helpers\Html;
use yii\widgets\Pjax;
use yii\grid\GridView;
use app\models\LinkNames;
use yii\widgets\ListView;
use yii\data\ActiveDataFilter;
use kartik\widgets\SwitchInput;
use reine\datatables\DataTables;
use yii\data\ActiveDataProvider;

/* @var $this yii\web\View */
/* @var $searchModel backend\models\LinksSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'System Menu Management');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="links-index card card-body">


    <div class="row">
        <div class="col-9">
            <h4><?= Html::encode($this->title) ?></h4>

        </div>

        <div class="col-3">
            <?= Html::a(Yii::t('app', '<i class="bi bi-plus-square-dotted"></i> Create Menu Link Access'), ['create'], ['class' => 'btn btn-success btn-sm text-white']) ?>

        </div>
    </div>





    <!-- <input type="button" class="btn btn-xs btn-success glyphicon glyphicon-trush"  value="Activate" id="MyButtonEnable" >

      <input type="button" class="btn btn-xs btn-danger glyphicon glyphicon-trush"  value="Deactivate" id="MyButtonDisable" >
  -->
    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]);
    ?>





    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
        'options' => ['style' => 'font-size:14px;'],
        'id' => 'w4',
        'columns' => [
            // ['class' => '\yii\grid\CheckboxColumn'],
            ['class' => 'yii\grid\SerialColumn'],

            //'id',
            //'link_name',

            [

                'attribute' => 'role_id',
                'label' => 'User Type',
                'filter' => Roles::getRolesList(),
                'filterInputOptions' => ['prompt' => 'All', 'class' => 'form-control'],
                'format' => 'raw',
                'value' => function ($model, $key, $index) {
                    $role = Roles::findOne(['rid' => $model->role_id]);
                    if ($role) {
                        return '<span>' . $role->name . '</span>';
                    }
                    return 'no role set';
                },
            ],

            [
                'attribute' => 'link_code',
                'format' => 'raw',
                'content' => function ($model) {
                    $query = Links::find()->where(['role_id' => $model->role_id]);
                    $provider = new ActiveDataProvider([
                        'query' => $query,

                        'pagination' => [
                            'pageSize' => 100,
                        ],
                    ]);
                    $myView = GridView::widget([
                        'dataProvider' => $provider,
                        'showOnEmpty' => false,
                        'layout' => "\n{items}",
                        // 'itemView'=>'_page_docs_list',
                        'columns' => [

                            [
                                'attribute' => 'link_code',
                                //'label'=>'User Type',
                                // 'filter' =>User::getUserOptions(),
                                'format' => 'raw',
                                'value' => function ($model, $key, $index) {
                                    return !empty($model->linkNames->label) ? $model->linkNames->label : 'No Link';
                                }

                            ],
                            [
                                //'attribute'=>'link_code',
                                'label' => 'Description',
                                //'filter' =>User::getUserOptions(),
                                'format' => 'raw',
                                'value' => function ($model, $key, $index) {
                                    return !empty($model->linkNames->description) ? $model->linkNames->description : 'Not defined';
                                }

                            ],

                            [

                                'attribute' => 'enabled',
                                'label' => 'Status',
                                'filter' => ['1' => 'Enabled', '0' => 'Disabled'],
                                'format' => 'raw',
                                /*  'value' => function($model, $key, $index)
                                    {
                                        return SwitchInput::widget(['name'=>'status_1','disabled' => true,'pluginOptions' => ['size' => 'mini'], 'value'=>$model->enabled]);
                                    }, */

                                'value' => function ($model) {
                                    if ($model->enabled == 1) {
                                        return '<span class="badge badge-success">Active</span>';
                                    }

                                    return '<span class="badge badge-danger">Inactive</span>';
                                }
                            ],


                            [
                                'class' => 'yii\grid\ActionColumn',
                                'template' => '{update}',

                            ],
                        ]

                    ]);

                    return $myView;
                }
            ],



            //'link_code',
            //'enabled',





        ],
        // 'responsive' => true,
        // 'hover' => true,
        // 'condensed' => true,
        // 'floatHeader' => false,

        // 'panel' => [
        //     'heading' => '<h3 class="panel-title"><i class="glyphicon glyphicon-th-list"></i> '.Html::encode($this->title).' </h3>',
        //     'type' => 'info',
        //     //'before' => Html::a('<i class="glyphicon glyphicon-plus"></i> Add', ['create'], ['class' => 'btn btn-success']),
        //     'before' => Html::a('<i class="glyphicon glyphicon-repeat"></i> Reset List', ['index'], ['class' => 'btn btn-info']),
        //     'showFooter' => false
        // ],
    ]); ?>
    <?php Pjax::end(); ?>
</div>


<?php

$this->registerJs('

    $(document).ready(function(){
    $(\'#MyButtonEnable\').click(function(){

      if(confirm(\'Are you Sure you want to activate  selected ?\')){

          var HotId = $(\'#w4\').yiiGridView(\'getSelectedRows\');
          $.ajax({
            type: \'POST\',
            url : \'index.php?r=links/multiple-enable\',
            data : {row_id: HotId},
            success : function() {
             // $(this).closest(\'tr\').remove(); //or whatever html you use for //displaying rows
            }
        });
      }

    });
    });', \yii\web\View::POS_READY);

?>

<?php

$this->registerJs('

    $(document).ready(function(){
    $(\'#MyButtonDisable\').click(function(){

      if(confirm(\'Are you Sure you want to deactivate  selected ?\')){

          var HotId = $(\'#w4\').yiiGridView(\'getSelectedRows\');
          $.ajax({
            type: \'POST\',
            url : \'index.php?r=links/multiple-disable\',
            data : {row_id: HotId},
            success : function() {
             // $(this).closest(\'tr\').remove(); //or whatever html you use for //displaying rows
            }
        });
      }

    });
    });', \yii\web\View::POS_READY);

?>