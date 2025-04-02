<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\ClientsInfo $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Clients Infos'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="clients-info-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'role',
            'entity_type',
            'reference_number',
            'name',
            'mname',
            'sname',
            'email:email',
            'phonecode',
            'phone',
            'password',
            'password_hash',
            'password_reset_token',
            'company_id',
            'confirmation_token',
            'login_attempts',
            'userid',
            'auth_key',
            'password_expiry',
            'driver_license_number',
            'license_expiry_date',
            'rating',
            'total_rides',
            'total_ratings',
            'total_deliveries',
            'profile_photo',
            'dob',
            'is_verified',
            'wallet_balance_tzs',
            'wallet_balance_usd',
            'preferred_payment_method',
            'country_id',
            'region_id',
            'district_id',
            'address',
            'ward',
            'street',
            'house_number',
            'postal_code',
            'latitude',
            'longitude',
            'location_updated_at',
            'status',
            'attachment',
            'approved_by',
            'approved_date',
            'wid',
            'stid',
            'wfstatus',
            'requserinput',
            'created_by',
            'updated_by',
            'deleted_at',
            'created_at',
            'updated_at',
            'otp',
            'otp_expires_at',
            'privacy_checked',
            'referal_code',
        ],
    ]) ?>

</div>
