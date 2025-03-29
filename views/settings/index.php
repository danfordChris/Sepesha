<?php

use app\models\Settings;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use kartik\grid\GridView;

/** @var yii\web\View $this */
/** @var app\models\SettingsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Settings';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="settings-index card">

    <div class="card-body">

        <div class="row">

            <h5><?= Html::encode($this->title) ?></h5>

        </div>


        <?= GridView::widget([
            'dataProvider' => $dataProvider,
            'headerRowOptions' => ['class' => 'text-nowrap'],
            // 'rowOptions'=>['style' => 'display:flex;flex-direction:column;'],
            'tableOptions' => ['class' => 'table table-sm table-responsive'],
            'summary' => '',
            'export' => false,
            'columns' => [

                'driver_commission',
                'vendor_commission',
                'password_change',
                'login_attempts',
                'timezone',
                'mail_host',
                'mail_username',
                'mail_password',
                'mail_port',
                'mail_encryption',
                'mail_dns',
                'mail_senderEmail',
                'mail_senderNamE',
                'password_template',
                'admin_email',
                [
                    'class' => 'kartik\grid\ActionColumn',
                    'noWrap' => true,
                    'template' => '{update}',
                    'buttons' => [
                        'update' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-primary mx-2 button-icon mb-1 "><i class="fa fa-edit me-1"></i>Edit</button>',
                                Yii::$app->urlManager->createUrl(['settings/update', 'rca' => Yii::$app->getSecurity()->hashData($model->settingid, 'gmtdev'), 'edit' => 't']),
                                ['title' => Yii::t('yii', 'Edit'),]
                            );
                        },
                        'view' => function ($url, $model) {
                            return Html::a(
                                '<button type="button" class="btn btn-sm btn-warning mx-2 button-icon mb-1"><i class="fa fa-eye me-1"></i>View</button>',
                                Yii::$app->urlManager->createUrl(['settings/view', 'rca' => Yii::$app->getSecurity()->hashData($model->settingid, 'gmtdev'), 'view' => 't']),
                                ['title' => Yii::t('yii', 'View'),]
                            );
                        }
                    ],
                ],
            ],

        ]); ?>

    </div>
</div>