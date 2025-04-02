<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Employee $model */

$this->title = 'Client Infos  for:' .  $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Commissions', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="employee-view card">

    <div class="card-header bg-success">
        <h5 class="mt-2 text-white"><?= Html::encode($this->title) ?></h5>
    </div>
    <div class="card-body">

        <?= DetailView::widget([
            'model' => $model,
            'options' => ['class' => ' table table-responsive bordered table-sm'],
            'attributes' => [
                // 'id',
                'role',
                'entity_type',
                'reference_number',
                'name',
                'mname',
                'sname',
                'email:email',
                'phonecode',
                'phone',
                // 'password',
                // 'password_hash',
                // 'password_reset_token',
                'company_id',
                // 'confirmation_token',
                // 'login_attempts',
                // 'userid',
                // 'auth_key',
                // 'password_expiry',
                'driver_license_number',
                'license_expiry_date',
                'rating',
                'total_rides',
                'total_ratings',
                'total_deliveries',
                'profile_photo',
                'dob',
                // 'is_verified',
                // 'wallet_balance_tzs',
                // 'wallet_balance_usd',
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
                // 'wid',
                // 'stid',
                // 'wfstatus',
                // 'requserinput',
                'created_by',
                'updated_by',
                'deleted_at',
                'created_at',
                'updated_at',
                // 'otp',
                // 'otp_expires_at',
                // 'privacy_checked',
                'referal_code',

            ],
        ]) ?>

        <?php
        if ($model->role == 'driver') {
            $url = ['client-infos/driver'];
        } elseif ($model->role == 'customer') {
            $url = ['client-infos/customer'];
        } else {
            $url = ['client-infos/vendor'];
        }

        echo Html::a(
            '<i class="fa fa-arrow-left"></i> Back',
            $url,
            ['class' => 'btn btn-secondary']
        );
        ?>
    </div>
</div>