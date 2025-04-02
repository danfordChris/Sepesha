<?php

use app\models\ClientsInfo;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\ClientsInfoSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Clients Infos');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="clients-info-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a(Yii::t('app', 'Create Clients Info'), ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); 
    ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

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
            // 'updated_at',
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
                            Yii::$app->urlManager->createUrl(['bookings/view', 'id' => $model->id]),
                            ['title' => Yii::t('yii', 'View'),]
                        );
                    }
                ],
            ],
        ],
    ]); ?>


</div>