<?php

/** @var yii\web\View $this */
/** @var string $content */

use yii\web\View;
use app\models\User;
use app\assets\JAsset;
use app\widgets\Alert;
// use app\assets\AppAsset;
// use yii\widgets\ActiveFormAsset;
use yii\bootstrap5\Nav;
use yii\bootstrap5\Html;
use yii\web\JqueryAsset;
use app\assets\OtikAsset;
use yii\bootstrap5\NavBar;
use app\widgets\NotifyToast;
use app\widgets\NotiflixToast;
use yii\bootstrap5\Breadcrumbs;

// Register your custom jQuery asset bundle


//  $this->registerJsFile('theme2/js/nicescroll.js', ['position' => yii\web\View::POS_HEAD]);

// ActiveFormAsset::register($this);
// OtikAsset::register($this);
JAsset::register($this);
// AppAsset::register($this);


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

    <?php $this->beginBody() ?>
    <div id="app">
        <div class="main-wrapper main-wrapper-1">
            <?= $this->render('otiknavbar') ?>
            <?= $this->render('otiksidebar') ?>
            <div class="main-content">
                <?= $this->render('breadcrumb') ?>

                <section class="section-body">
                    <?= $this->render('otikrightsidebar') ?>
                    <?php //= Yii::$app->toastAlert->showAlerts(); 
                    ?>
                    <?= NotiflixToast::widget(); ?>
                    <?php //= Alert::widget() 
                    ?>

                    <?= $content ?>
                </section>
            </div>


            <?= $this->render('otikfooter') ?>
        </div>
    </div>

    <style>
        .theme-green .navbar {
            background-color: #8dc540 !important;
        }

        .theme-green .btn-success {
            box-shadow: 0 2px 6px #8edc9c;
            background-color: #8dc540;
            border-color: #8dc540;
            color: #fff;
        }

        .theme-green .btn-primary {
            background-color: #0000ff;
            border-color: rgba(0, 0, 0, 0) !important;
            color: #fff;
        }

        .badge.badge-success {
            background-color: #8dc540;
        }

        .theme-green .page-item.active .page-link {
            color: #fff;
            background-color: #8dc540;
            border-color: #8dc540;
        }

        .theme-green .settingSidebar .settingPanelToggle {
            color: #fff;
            background-color: #8dc540;
        }

        .bg-success {
            color: #fff;
            background-color: #8dc540 !important;
        }
    </style>

    <?php $this->endBody() ?>
</body>

</html>
<?php $this->endPage() ?>