<?php

use yii\helpers\Url;
use yii\helpers\Html;
use kartik\grid\GridView;
use yii\grid\ActionColumn;
use app\models\AccountEntries;
use yii\helpers\ArrayHelper;

/** @var yii\web\View $this */
/** @var app\models\AccountEntriesSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Account Entries';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="account-entries-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Account Entries', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]);
    $dropdownOptions = ArrayHelper::map(AccountEntries::find()->all(), 'name', 'name');
    ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'transact_id',
            [
                'attribute' => 'name',
                'filter' => Html::activeDropDownList(
                    $searchModel, // Your search model instance
                    'name', // Replace with your actual attribute name
                    $dropdownOptions, // Dropdown options
                    ['class' => 'form-control', 'prompt' => 'Select']
                ),
            ],
            // 'name',
            'category',
            'entry_type',
            'account_code',
            'dramount',
            'cramount',
            //'descr:ntext',
            'reference_no',
            'customer_id',
            //'status',
            //'transact_date',
            'created_at',
            // 'created_by',
            //'updated_at',
            //'updated_by',
            [
                'class' => ActionColumn::class,
                'urlCreator' => function ($action, AccountEntries $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                }
            ],
        ],
    ]); ?>


</div>