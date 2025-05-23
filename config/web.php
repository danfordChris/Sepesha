<?php

use app\models\Settings;
use yii\symfonymailer\Mailer;

$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';

$config = [
    'id' => 'SEPESHA',
    'name' => 'SEPESHA',
    'timeZone' => 'Africa/Dar_es_Salaam',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],


    'on beforeAction' => function ($event) {
        \app\components\UserActivityLogEventHandler::handleAction($event, Yii::$app->userActivityLogger);
    },

    'components' => [
        'settings' => [
            'class' => 'app\components\SettingsComponent',
        ],

        'driver' => [
            'class' => 'app\components\DriverInfoComponent',
        ],

        'vendor' => [
            'class' => 'app\components\VendorInfoComponent',
        ],

        'approvals' => [
            'class' => 'app\components\ApprovalsUiComponent',
        ],

        'intaketools' => [
            'class' => 'app\components\IntakeToolsComponent',
        ],

        'kalaExport' => [
            'class' => 'app\components\ExportComponent',
        ],
        'kalaPanel' => [
            'class' => 'app\components\PanelComponent',
        ],

        'authManager' => [
            'class' => 'yii\rbac\DbManager',
            // uncomment if you want to cache RBAC items hierarchy
            // 'cache' => 'cache',
        ],

        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'ITRrggog9H_txPuWaAK2PlstEsEk__Gd',
        ],
        'TransportExport' => [
            'class' => 'app\components\ExportComponent',
        ],

        'userActivityLogger' => [
            'class' => 'app\components\UserActivityLogger',
        ],

        'toastAlert' => [
            'class' => 'app\components\ToastAlert',
        ],

        // 'formatter' => [
        //     'class' => 'yii\i18n\Formatter',
        //     'timeZone' => 'Africa/Dar_es_Salaam',
        //      // Set your desired time zone here
        // ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => false,
            'authTimeout' => 1800,

        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],

        // 'mailer' => [
        //     'class' => 'yii\symfonymailer\Mailer',
        //     'viewPath' => '@app/mail',
        //     'useFileTransport' => false,
        //     'transport' => [
        //         'scheme' => 'smtps',
        //         'host' => 'mail.sepesha.com',
        //         'username' => 'info@sepesha.com',
        //         'password' => 'sepesha@info24',
        //         'port' => 465, // Corrected to an integer
        //         'encryption' => 'tls',
        //     ],

        // ],

        'mailer' => [
            'class' => 'app\components\CustomMailer',
            'viewPath' => '@app/mail',
            'useFileTransport' => false, // Set to false to send real emails
        ],

        'log' => [
            //'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\DbTarget',
                    'levels' => ['error', 'warning', 'info'],
                    'logTable' => 'logs', // Your log table name
                    'logVars' => [], // Additional variables to be logged (if needed)
                ],
            ],
        ],
        'db' => $db,

        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'enableStrictParsing' => false,
            'rules' => [
                'auth/logout' => 'site/logout',
                'auth/login' => 'site/login',
                'auth/reset-password' => 'site/reset-password',
                'auth/signup' => 'site/signup',
                'auth/confirmemail' => 'site/confirmemail',
                'auth/request-password-reset' => 'site/request-password-reset',
                'auth/request-password-reset-admin' => 'site/request-password-reset-admin',
                'auth/profile-change' => 'site/profile-change',
                'dashboard' => 'site/index',
                'attachment/ajax-delete/<id:\d+>' => 'attachment/ajax-delete',
                // Other rules...
            ],

        ],

        'assetManager' => [
            'bundles' => [
                'yii\web\JqueryAsset' => [
                    'depends' => [
                        'app\assets\OtikAsset',
                    ],
                ],
                // 'kartik\grid\GridExportAsset' => [
                //     'depends' => [
                //         'yii\bootstrap4\BootstrapAsset',
                //     ],
                // ],
            ],

        ],

    ],
    'modules' => [

        'redactor' => 'yii\redactor\RedactorModule',

        'gridview' => [
            'class' => 'kartik\grid\Module'
        ],

        'credit' => [
            'class' => 'app\modules\credit\Module',
        ],

        'pdfjs' => [
            'class' => '\yii2assets\pdfjs\Module',
        ],

        'billing' => [
            'class' => 'app\modules\billing\Module',
        ],


    ],




    'params' => $params,
];

// Set default configuration for all GridView instances
Yii::$container->set('kartik\grid\GridView', [
    'responsiveWrap' => false,
]);

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;