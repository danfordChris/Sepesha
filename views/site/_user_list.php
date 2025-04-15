<?php

use yii\helpers\Html;
use app\models\Offices;
use yii\widgets\ListView;
use reine\datatables\DataTables;
use yii\data\ActiveDataProvider;

?>
<?php
//use yii\grid\GridView;


echo DataTables::widget([
    'dataProvider' => $dataProvider,
    //'pjax'=>true,
    'filterModel' => $searchModel,
    //'responsive'=>true,
    'tableOptions' => ['class' => ' table table-responsive bordered table-sm'],

    'rowOptions' => function ($model) {
        if ($model->status == 0) {
            return ['class' => 'bg-warning'];
        }
    },

    'columns' => [

        ['class' => 'yii\grid\SerialColumn'],
        //'id',
        'full_name',

        'username',

        [

            'attribute' => 'status',
            //'filter' => ['Y'=>'Active', 'N'=>'Deactive'],
            'format' => 'raw',
            'value' => function ($model, $key, $index) {
                if ($model->status === 10) {
                    return '<span class="btn btn-sm text-success text-bold">ACTIVE</span>';
                } else {
                    return '<span class="btn btn-sm text-danger">INACTIVE</span>';
                }
            },
        ],

        [

            'format' => 'raw',
            'value' => function ($model, $key, $index) {
                if ($model->status === 10) {
                    return Html::a(
                        '<span class="bi bi-person-dash badge bg-danger">Disable</span>',
                        Yii::$app->urlManager->createUrl(['site/delete', 'id' => $model->id, md5('MOZYB'), 'edit' => 't', 'full_name' => $model->full_name, md5('MUJUN')]),
                        [
                            'title' => Yii::t('yii', 'disable'),
                            'data-confirm' => Yii::t('yii', 'Are you sure you want to disable  this user?'),
                            'data-method' => 'post', 'data-pjax' => '0',
                        ]
                    );
                } else {
                    return Html::a(
                        '<span class="bi bi-check  badge bg-success">Activate</span>',
                        Yii::$app->urlManager->createUrl(['site/update', 'id' => $model->id, md5('MOZYB'), 'edit' => 't', 'full_name' => $model->full_name, md5('MUJUN')]),
                        [
                            'title' => Yii::t('yii', 'Activate'),
                            'data-confirm' => Yii::t('yii', 'Are you sure you want to Activate this user?'),
                            'data-method' => 'post', 'data-pjax' => '0',
                        ]
                    );
                }
            },
        ],


        [
            'class' => 'yii\grid\ActionColumn',
            'header' => 'Password',
            'template' => '{update} {view} {role}',
            'buttons' => [
                'update' => function ($url, $model) {

                    if ($model->status == 10) {

                        return Html::a(
                            '<span class="bx bx-lock">Reset Password</span>',
                            Yii::$app->urlManager->createUrl(['site/request-password-reset-admin','rca'=> Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]),
                            [
                                'title' => Yii::t('yii', 'Activate'),
                                'data-confirm' => Yii::t('yii', 'Are you sure you want to reset password for this user??'),
                                'data-method' => 'post', 'data-pjax' => '0',
                            ]
                        );
                    } else {

                        return ' ';
                    }
                },
                'confirm' => function ($url, $model) {

                    if ($model->status == 0) {

                        return Html::a(
                            '| <span class="bx bx-lock">Confirmation Email</span>',
                            Yii::$app->urlManager->createUrl(['site/send-confirmation-email', 'rca1' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev'), 'rca2' => Yii::$app->getSecurity()->hashData($model->userid, 'gmtdev')]),
                            [
                                'title' => Yii::t('yii', 'Confirmation Email'),
                                'data-confirm' => Yii::t('yii', 'Are you sure you want to send confirmation email for this user??'),
                                'data-method' => 'post', 'data-pjax' => '0',
                            ]
                        );
                    }
                },

                'edit' => function ($url, $model) {

                    return Html::a(
                        ' | <span class="bx bx-home">Office</span>',
                        Yii::$app->urlManager->createUrl(['site/edit', 'id' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]),
                        [
                            'title' => Yii::t('yii', 'Activate'),
                            //'data-confirm' => Yii::t('yii', 'Are you sure you want to reset password for this user??'),
                            //'data-method' => 'post', 'data-pjax' => '0',
                        ]
                    );
                },


                'view' => function ($url, $model) {

                    return Html::a(
                        '| <span class="bi bi-eye">View </span>',
                        Yii::$app->urlManager->createUrl(['site/view-user', 'id' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]),
                        [
                            'title' => Yii::t('yii', 'View more'),
                            //'data-confirm' => Yii::t('yii', 'Are you sure you want to reset password for this user??'),
                            //'data-method' => 'post', 'data-pjax' => '0',
                        ]
                    );
                },

                // 'role' => function ($url, $model) {

                //     return Html::a(
                //         '| <span class="bx bx-user">ManageRoles</span>',
                //         Yii::$app->urlManager->createUrl(['site/roles', 'id' => Yii::$app->getSecurity()->hashData($model->id, 'gmtdev')]),
                //         [
                //             'title' => Yii::t('yii', 'Manage roles'),
                //             //'data-confirm' => Yii::t('yii', 'Are you sure you want to reset password for this user??'),
                //             //'data-method' => 'post', 'data-pjax' => '0',
                //         ]
                //     );
                // }



            ],

        ],
    ],


]);

?>