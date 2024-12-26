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
use app\models\WorkflowTools;
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
$intakeRefno = isset($this->params['intakeRefno']) ? $this->params['intakeRefno'] : '';
$beneficiaryName = isset($this->params['beneficiaryName']) ? $this->params['beneficiaryName'] : '';
$beneficiaryPhotoStart =  '/theme2/img/users/userphoto.jpg';
$beneficiaryPhoto = isset($this->params['beneficiaryPhoto']) ? $this->params['beneficiaryPhoto'] : '';
$beneficiaryPhoto = !empty($beneficiaryPhoto) ? $beneficiaryPhoto : $beneficiaryPhotoStart;



function activeLink($controllerId, $actionId)
{
    $activeIntake = (Yii::$app->controller->id == $controllerId && Yii::$app->controller->action->id == $actionId) ? 'active' : '';
    return  $activeIntake;
}


 
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
                <!-- <section class="section"> -->

                <section class="section-body">
                    <?= $this->render('otikrightsidebar') ?>
                    <!-- <section class="section"> -->
                    <?php //= Yii::$app->toastAlert->showAlerts();
                    ?>
                    <?= NotiflixToast::widget(); ?>
                    <?php //= Alert::widget()
                    ?>

                    <div class="row">


                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">

                            <div class="card">
                                <div class="author-box">
                                    <div class="">
                                        <div class="author-box-center mt-3">
                                            <img alt="image"
                                                src="<?= Yii::$app->request->baseUrl . $beneficiaryPhoto ?>"
                                                class="rounded-circle author-box-picture">
                                            <div class="clearfix"></div>
                                            <div class="author-box-name">
                                                <a href="#"> <?= $beneficiaryName ?? '' ?></a>
                                            </div>
                                            <div class="author-box-job">Beneficiary</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="body">
                                    <div id="mail-nav">
                                        <h5 class="b-b p-10 text-strong">Planning</h5>
                                        <ul class="" id="mail-folders">
                                            <li class="<?= activeLink('intake', 'submit-beneficiary-intake') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['intake/submit-beneficiary-intake', 'intake' => $intakeRefno]) ?>"
                                                    title="Inbox">Intake Information
                                                </a>
                                            </li>
 
                                            <li class="<?= activeLink('csi-assessments', 'index') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['csi-assessments/index', 'intake' => $intakeRefno]) ?>"
                                                    title="Sent"> CSI Assessment</a>
                                            </li>
                                            <li class="<?= activeLink('care-plan', 'index') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['care-plan/index', 'intake' => $intakeRefno]) ?>"
                                                    title="Draft">Initial Care Plan</a>
                                            </li>

                                            <li class="<?= activeLink('attachment', 'index-intake') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['attachment/index-intake', 'intake' => $intakeRefno]) ?>"
                                                    title="Draft">Attachments</a>
                                            </li>

                                            <li class="<?= activeLink('fitperson-shelter-placement', 'index') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['fitperson-shelter-placement/index', 'intake' => $intakeRefno]) ?>"
                                                    title="Draft">Fitperson/Shelter Placement</a>
                                            </li>

                                            <li class="<?= activeLink('reintegration-assessment', 'index') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['reintegration-assessment/index', 'intake' => $intakeRefno]) ?>"
                                                    title="Draft">Reintegration Assessment</a>
                                            </li>

                                            <li class="<?= activeLink('case-closures', 'index') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['case-closure/index', 'intake' => $intakeRefno]) ?>"
                                                    title="Draft">Case Closure</a>
                                            </li>


                                        </ul>
                                        <h5 class="b-b p-10 text-strong">Implementation</h5>
                                        <ul class="" id="mail-folders">


                                            <li>
                                                <a href="javascript:;">
                                                    <i class="material-icons col-red">local_offer</i>Reunifications</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <i class="material-icons col-blue">local_offer</i>Care plan</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <i
                                                        class="material-icons col-orange">local_offer</i>Implementation/Service
                                                    provision</a>
                                            </li>
                                            <li class="<?= activeLink('one-on-one-session', 'index-intake') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['one-on-one-session/index-intake', 'intake' => $intakeRefno]) ?>"
                                                    title="Household"><i
                                                        class="material-icons col-orange">local_offer</i>One on One Session
                                                    Plans</a>
                                            </li>
                                            <li class="<?= activeLink('household-visit-plan', 'index') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['household-visit-plan/index', 'intake' => $intakeRefno]) ?>"
                                                    title="Household"><i
                                                        class="material-icons col-danger">local_offer</i>Household Visit
                                                    Plans</a>
                                            </li>
                                            <li class="<?= activeLink('mobile-phone-followup', 'index') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['mobile-phone-followup/index', 'intake' => $intakeRefno]) ?>"
                                                    title="Mobile"><i
                                                        class="material-icons col-grey">local_offer</i>Phone
                                                    Register</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <i class="material-icons col-green">local_offer</i>Case Transfer</a>
                                            </li>

                                            <li>
                                                <a href="javascript:;">
                                                    <i class="material-icons col-green">local_offer</i>Graduation</a>
                                            </li>

                                            <li>
                                                <a href="javascript:;">
                                                    <i class="material-icons col-blue-grey">local_offer</i>Case
                                                    closer</a>
                                            </li>
                                            <li class="<?= activeLink('beneficiary-dropout', 'index') ?>">
                                                <a href="<?= Yii::$app->urlManager->createUrl(['beneficiary-dropout/create', 'intake' => $intakeRefno]) ?>"
                                                    title="Dropout"><i
                                                        class="material-icons col-danger">local_offer</i>Drop Out</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                            <div class="card">
                                <div class="card-body">
                                    <?= $content ?>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
                <!-- </section> -->
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