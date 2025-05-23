<?php

/** @var yii\web\View $this */
/** @var string $content */

use app\assets\OtikAsset;
use kartik\widgets\Alert;
use yii\bootstrap5\Breadcrumbs;
use yii\bootstrap5\Html;
use yii\bootstrap5\Nav;
use yii\bootstrap5\NavBar;

OtikAsset::register($this);
$this->registerCsrfMetaTags();
$this->registerMetaTag(['charset' => Yii::$app->charset], 'charset');
$this->registerMetaTag(['name' => 'viewport', 'content' => 'width=device-width, initial-scale=1, shrink-to-fit=no']);
$this->registerMetaTag(['name' => 'description', 'content' => $this->params['meta_description'] ?? '']);
$this->registerMetaTag(['name' => 'keywords', 'content' => $this->params['meta_keywords'] ?? '']);
$this->registerLinkTag(['rel' => 'icon', 'type' => 'image/x-icon', 'href' => Yii::getAlias('@web/favicon.ico')]);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" class="h-100">

<head>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>

<body>
    <div class="loader"></div>
    <div id="app">
        <?php $this->beginBody() ?>

        <!-- Page -->

        <section class="section">
       
            <?= $content ?>
        </section>

    </div>
    <!-- <a href="#top" id="back-to-top"><i class="las la-angle-double-up"></i></a> -->
    <?php $this->endBody() ?>
</body>

</html>
<?php $this->endPage() ?>