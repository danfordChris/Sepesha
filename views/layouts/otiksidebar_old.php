<?php

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

            <?php if (User::Menu('gmt_dashboard_main')) : ?>
            <li>
                <a href="<?= Url::home(); ?>" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-monitor">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    <span><?= User::MenuLabel('gmt_dashboard_main') ?></span></a>
            </li>

            <?php endif; ?>

            <?php if (User::Menu('gmt_settings_main')) : ?>
            <li>
                <a href="#" class="menu-toggle nav-link has-dropdown">
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
                    </svg>

                    <span><?= User::MenuLabel('gmt_settings_main') ?> </span></a>
                <ul class="dropdown-menu">

                    <li><a class="nav-link"
                            href="<?= Url::toRoute(['/settings/view', 'rca' => Yii::$app->getSecurity()->hashData(1, 'gmtdev')]) ?>">Configurations</a>
                    </li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/country/index']) ?>">Countries</a></li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/district/index']) ?>">Districts</a></li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/employee/index']) ?>">Employees</a></li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/employee-category/index']) ?>">Employee
                            Categories</a></li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/office/index']) ?>">Offices</a></li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/regions/index']) ?>">Regions</a></li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/auth/signup']) ?>">Users</a></li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/companies/index']) ?>">Organization</a></li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/role/index']) ?>">Roles</a></li>
                    <!--  <li><a class="nav-link" href="<?= Url::toRoute(['/permission/index']) ?>">Permissions</a></li>
                    <li><a class="nav-link" href="<?= Url::toRoute(['/role-assignment/index']) ?>">Role Assignment</a> -->
                    <li><a href="<?= Url::to(['/link-names']); ?>">Manage Menu</a></li>


                    <?php if (User::Menu('gmt_system_menu_sub')) : ?>
                    <li><a class="nav-link"
                            href="<?= Url::to(['/links']); ?>"><?= User::MenuLabel('gmt_system_menu_sub') ?></a></li>
                    <?php endif; ?>

                    <?php if (User::Menu('gmt_system_roles_sub')) : ?>
                    <li><a class="nav-link"
                            href="<?= Url::toRoute('admin/strl-management') ?>"><span><?= User::MenuLabel('gmt_system_roles_sub') ?></span></a>
                    </li>
                    <?php endif; ?>

                    <?php if (User::Menu('gmt_entry_points_sub')) : ?>
                    <li><a class="nav-link"
                            href="<?= Url::to(['/entry-points']); ?>"><?= User::MenuLabel('gmt_entry_points_sub') ?></a>
                    </li>
                    <?php endif; ?>
                    <?php if (User::Menu('gmt_categories_sub')) : ?>
                    <li><a class="nav-link"
                            href="<?= Url::to(['/categories']); ?>"><?= User::MenuLabel('gmt_categories_sub') ?></a>
                    </li>
                    <?php endif; ?>



            </li>

        </ul>
        </li>

        <?php endif; ?>

        <?php if (User::Menu('gmt_beneficiary_main')) : ?>
        <li class="dropdown">
            <a href="#" class="menu-toggle nav-link has-dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-user-check">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
                <span><?= User::MenuLabel('gmt_beneficiary_main') ?></span></a>
            <ul class="dropdown-menu">
                <li class="nav-link"><a href="<?= Url::toRoute(['/beneficiary']) ?>">Add Benefeciary(short)</a></li>
                <li class="nav-link"><a href="<?= Url::toRoute(['/beneficiary']) ?>"> Add Beneficiary(Full)</a></li>
                <li class="nav-link"><a href="<?= Url::to(['/beneficiary']); ?>">Act Parent</a></li>
                <li class="nav-link"><a href="<?= Url::to(['/beneficiary']); ?>">Child Support Desk</a>
                <li class="nav-link"><a href="<?= Url::toRoute(['/beneficiary']) ?>"> All Beneficiaries</a></li>
        </li>
        </ul>
        </li>

        <?php endif; ?>



        <?php if (User::Menu('gmt_customers_sub')) : ?>
        <li>
            <a href="<?= Url::toRoute(['/customer/index']) ?>">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-user-check">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
                <span><?= User::MenuLabel('gmt_customers_sub') ?></span></a>
        </li>
        <?php endif; ?>

        <?php if (User::Menu('gmt_case_manage_main')) : ?>
        <li class="dropdown">
            <a href="#" class="menu-toggle nav-link has-dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-pie-chart">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
                <span>Reports</span></a>
            <ul class="dropdown-menu">

                <li class="nav-link"><a href="<?= Url::to(['/credit/customers/list']); ?>"> Customer Statement</a>
                </li>
                <li class="nav-link"><a href="<?= Url::to(['/credit/transactions/index']); ?>">Customer
                        Transactions</a> </li>
            </ul>
        </li>

        <?php endif; ?>


        <?php if (User::Menu('gmt_reports_main')) : ?>
        <li class="dropdown">
            <a href="#" class="menu-toggle nav-link has-dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-pie-chart">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
                <span>Reports</span></a>
            <ul class="dropdown-menu">

                <li class="nav-link"><a href="<?= Url::to(['/credit/customers/list']); ?>"> Customer Statement</a>
                </li>
                <li class="nav-link"><a href="<?= Url::to(['/credit/transactions/index']); ?>">Customer
                        Transactions</a> </li>
            </ul>
        </li>

        <?php endif; ?>
    </aside>
</div>