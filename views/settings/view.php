<?php

use yii\helpers\Html;
// use kartik\detail\DetailView;
use kartik\detail\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Settings $model */

$this->title = "System Configurations";
$this->params['breadcrumbs'][] = ['label' => 'Settings', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="settings-view">


    <div class="card">
        <div class="card-header bg-info">
            <h5 class="mt-2 mx-auto text-white"><?= Html::encode($this->title) ?></h5>

            <?= Html::a(
                                '<button type="button" class="btn btn-sm btn-primary mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['settings/update', 'rca' => Yii::$app->getSecurity()->hashData($model->settingid, 'gmtdev'), 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            ); ?>
        </div>

        <?= DetailView::widget([
        'model' => $model,
        'options' => ['class'=>'table table-sm table-responsive'],
        // 'type' =>'info',
        'attributes' => [
            'password_change',
                'login_attempts',
                'timezone',
                'mail_host',
                'mail_username',
                //'mail_password',
                'mail_port',
                'mail_encryption',
               // 'mail_dns',
                'mail_senderEmail',
                'mail_senderNamE',
                'password_template',
                'admin_email',
                 'driver_commission',
                 'vendor_commission'
        ],
        ]) ?>

    </div>
</div>