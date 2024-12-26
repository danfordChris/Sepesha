<?php
$this->registerJsFile('');

Yii::$app->assetManager->bundles['yii\\bootstrap5\\BootstrapAsset'] = [
    'css' => [],
];
Yii::$app->assetManager->bundles['yii\\bootstrap5\\BootstrapPluginAsset'] = false;

$this->registerCssFile('@web/css/bootstrap5.css');

// $this->registerJsFile('@web/js/bootstrap4.js', [
//     'depends' => [\yii\web\JqueryAsset::class],
// ]);
