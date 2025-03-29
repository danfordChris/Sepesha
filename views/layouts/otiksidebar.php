<?php

use app\models\CustomHelper;
use app\models\LinkNames;
use app\models\User;
use yii\bootstrap5\Html;
use yii\helpers\Url;
?>
<div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
            <a href="<?= Url::home(); ?>">
                <!-- class="header-logo"  -->
                <?= User::Company() ?  Html::img(Yii::$app->request->baseUrl . '/uploads/' . User::Company()->logo, ['class' => '', 'width' => 150, 'height' => 50]) : Yii::t('app', 'SET YOUR BUSINESS INFO') ?>
                <span class="logo-name" style="color:white"></span>
            </a>
        </div>
        <ul class="sidebar-menu">
            <li class="menu-header">MAIN MENU</li>

            <?php foreach (LinkNames::find()->where(['status' => true, 'isparent' => true, 'has_submenu' => false])->orderBy('order asc')->all() as $menu_nosub) : ?>

                <?php if (User::Menu($menu_nosub->access_name)) : ?>

                    <li>
                        <a href="<?= Url::toRoute($menu_nosub->url) ?>" class="nav-link">
                            <?= $menu_nosub->icon ?>
                            <span><?= User::MenuLabel($menu_nosub->access_name)->label ?></span></a>
                    </li>

                <?php endif; ?>
            <?php endforeach ?>

            <?php foreach (LinkNames::find()->where(['status' => true, 'isparent' => true, 'has_submenu' => true])->orderBy('order asc')->all() as $menu_withsub) : ?>
                <?php if (User::Menu($menu_withsub->access_name)) : ?>
                    <li>
                        <a href="#" class="menu-toggle nav-link has-dropdown">
                            <?= $menu_withsub->icon ?>
                            <span><?= User::MenuLabel($menu_withsub->access_name)->label ?> </span></a>
                        <ul class="dropdown-menu">
                            <?php foreach (LinkNames::find()->where(['status' => true, 'isparent' => false, 'has_submenu' => false, 'parentid' => $menu_withsub->id])->orderBy('order asc')->all() as $sub) : ?>
                                <?php if (User::Menu($sub->access_name)) : ?>
                                    <li><a class="nav-link"
                                            href="<?= Url::toRoute($sub->url) ?>"><span><?= User::MenuLabel($sub->access_name)->label ?></span></a>
                                    </li>
                                <?php endif; ?>
                            <?php endforeach ?>
                        </ul>
                    </li>
                <?php endif; ?>
            <?php endforeach ?>

            <?php if (User::isAdmin()) : ?>
                <li>
                    <a href="#" class="menu-toggle nav-link has-dropdown">
                        <?= CustomHelper::ICON_USER_CHECK ?>
                        <span>Approvals </span></a>
                    <ul class="dropdown-menu">
                        <li class="nav-link"><a href="<?= Url::toRoute(['/onboard/index']) ?>">
                                Driver Onboarding Request
                            </a>
                        </li>
                        <li class="nav-link"><a href="<?= Url::toRoute(['/onboard/vendor']) ?>">
                                Vendor Onboarding Request
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="#" class="menu-toggle nav-link has-dropdown">
                        <?= CustomHelper::ICON_USER_CHECK ?>
                        <span>Bookings </span></a>
                    <ul class="dropdown-menu">
                        <li class="nav-link"><a href="<?= Url::toRoute(['/bookings/index']) ?>">
                                Pending
                            </a>
                        </li>
                    </ul>
                </li>

            <?php endif ?>

            <?php if (User::Menu('gmt_reports_main')) : ?>
                <li class="dropdown">
                    <a href="#" class="menu-toggle nav-link has-dropdown">
                        <?= CustomHelper::ICON_REPORT ?>
                        <span><?= User::MenuLabel('gmt_reports_main')->label ?></span></a>
                    <ul class="dropdown-menu">
                        <li class="nav-link"><a href="<?= Url::toRoute(['/reports/index']) ?>">Service Summary
                                Tracking</a></li>
                        <li class="nav-link"><a href="<?= Url::toRoute(['/intake/report']) ?>"> Intake Report</a>
                        </li>
                        <li class="nav-link"><a href="<?= Url::toRoute(['/services/report']) ?>">Service Provision
                                report</a></li>
                        <li class="nav-link"><a href="<?= Url::toRoute(['/closures/transfer-report']) ?>"> Case Transfers
                                report</a>
                        </li>
                        <li class="nav-link"><a href="<?= Url::to(['#']); ?>">Reunification report</a></li>
                        <li class="nav-link"><a href="<?= Url::to(['#']); ?>">Dropout Report</a>
                        <li class="nav-link"><a href="<?= Url::toRoute(['/closures/report']) ?>">Case Closure report</a>
                        </li>
                        <li class="nav-link"><a
                                href="<?= Url::toRoute(['/fitperson-shelter-placement/report']) ?>">Shelter/Fit Person
                                placement </a></li>
                </li>

        </ul>

        </li>

    <?php endif; ?>



    <?php if (User::isAdmin()) : ?>

        <li>
            <a class="nav-link"
                href="<?= Url::toRoute(['/settings/view', 'rca' => Yii::$app->getSecurity()->hashData(1, 'gmtdev')]) ?>">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-sliders">
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg> Configurations</a>
        </li>

        <li>
            <a class="nav-link" href="<?= Url::toRoute(['/database/export']) ?>">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-database">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg> Data backup</a>


        </li>

    <?php endif ?>

    </ul>


    </aside>
</div>