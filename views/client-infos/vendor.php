<?php

use app\models\User;
use yii\helpers\Url;
use yii\helpers\Html;
use kartik\grid\GridView;
use app\models\Regions;
use yii\grid\ActionColumn;
use app\models\SystemRoles;
use app\models\CustomHelper;
use reine\datatables\DataTables;

/** @var yii\web\View $this */
/** @var app\models\RegionsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Vendor List';
$this->params['breadcrumbs'][] = $this->title;
echo $this->render('/site/bs5tobs4');
?>
<div class="commissions-index">

    <div class="">
        <div class="row">
            <div class="">

                <h5><?= Html::encode($this->title) ?></h5>
                <?php echo $this->render('_vendor_search', ['model' => $searchModel]); ?>

            </div>

        </div>
        <?= GridView::widget([
            'dataProvider' => $dataProvider,
            //'filterModel' => $searchModel,
            'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],
            'showPageSummary' => true,
            'headerRowOptions' => ['style' => 'white-space: nowrap;'],
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

            'columns' => [
                ['class' => 'kartik\grid\SerialColumn'],

                // 'id',
                [
                    'attribute' => 'profile_photo',
                    'format' => 'raw',
                    'value' => function ($model) {
                        return Html::img($model->profile_photo, ['alt' => 'Profile Photo', 'width' => '40px', 'height' => '40px']);
                    },
                ],
                'role',
                // 'entity_type',
                // 'reference_number',
                'name',
                // 'mname',
                // 'sname',
                'email:email',
                // 'phonecode',
                // 'phone',
                // Concatenate phonecode and phone
                [
                    'attribute' => 'phone',
                    'value' => function ($model) {
                        return $model->phonecode . '' . $model->phone;
                    },
                ],
                //'password',
                //'password_hash',
                //'password_reset_token',
                //'company_id',
                //'confirmation_token',
                //'login_attempts',
                //'userid',
                //'auth_key',
                //'password_expiry',
                //'driver_license_number',
                //'license_expiry_date',
                //'rating',
                //'total_rides',
                //'total_ratings',
                //'total_deliveries',

                //'dob',
                //'is_verified',
                //'wallet_balance_tzs',
                //'wallet_balance_usd',
                //'preferred_payment_method',
                //'country_id',
                //'region_id',
                //'district_id',
                //'address',
                //'ward',
                //'street',
                //'house_number',
                //'postal_code',
                //'latitude',
                //'longitude',
                //'location_updated_at',
                'status',
                //'attachment',
                //'approved_by',
                //'approved_date',
                //'wid',
                //'stid',
                //'wfstatus',
                //'requserinput',
                //'created_by',
                //'updated_by',
                //'deleted_at',
                //'created_at',
                 'updated_at',
                //'otp',
                //'otp_expires_at',
                //'privacy_checked',
                //'referal_code',
                [
                    'class' => 'yii\grid\ActionColumn',
                    //'visible' => User::auth('admin'),
                    // 'noWrap' => true,
                    'template' => '{view}',
                    'buttons' => [
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['client-infos/view', 'id' => $model->id]),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
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