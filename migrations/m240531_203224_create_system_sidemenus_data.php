<?php

use app\models\CustomHelper;
use yii\db\Migration;

/**
 * Class m240531_203224_create_system_sidemenus_data
 */
class m240531_203224_create_system_sidemenus_data extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->execute('TRUNCATE TABLE link_names');
        $this->execute('TRUNCATE TABLE tbl_links');
        $this->execute('TRUNCATE TABLE module');

        $this->batchInsert(
            'link_names',
            ['order', 'icon', 'label', 'access_name', 'description', 'module', 'isparent', 'url', 'has_submenu', 'parentid'],
            [
                [1, CustomHelper::ICON_DASHBOARD, 'Dashboard', 'gmt_dashboard_main', 'main dashboard', 2, 1, '/dashboard', 0, ''],
                [2, CustomHelper::ICON_SETTINGS, 'Settings', 'gmt_settings_main', 'settings menu', 1, 1, '#', 1, ''],
                [3, CustomHelper::ICON_USER_CHECK, 'Authorization', 'gmt_authorization_main', 'user Authorization', 3, 1, '#', 1, ''],
                [4, CustomHelper::ICON_REPORT, 'Reports', 'gmt_reports_main', 'main reports', 4, 1, '#', 1, ''],

                //settings
                ['', null, 'Business', 'gmt_company_main', 'company information', 1, 0, '/companies/index', 0, 2],
                ['', null, 'Employees', 'gmt_employee_sub', 'employee information', 1, 0, '/employee/index', 0, 2],
                ['', null, 'Branch', 'gmt_offices_sub', 'office branch', 1, 0, '/office/index', 0, 2],
                 ['', null, 'Country', 'gmt_country_sub', 'country menu', 1, 0, '/country/index', 0, 2],
                ['', null, 'Regions', 'gmt_cities_sub', 'City menu', 1, 0, '/regions/index', 0, 2],
                ['', null, 'District', 'gmt_district_sub', 'district menu', 1, 0, '/district/index', 0, 2],
                ['', null, 'Manage Side menu', 'gmt_side_menu_main', 'add , remove system side menus', 1, 0, '/link-names/index', 0, 2],
                ['', null, 'System Roles', 'gmt_roles_main', 'system roles', 1, 0, '/role/index', 0, 2],
                ['', null, 'Manage Workflow', 'gmt_workflow_roles_main', 'system workflow roles and stages', 1, 0, '/admin/wf-main', 0, 2],

                ['', null, 'Departments', 'gmt_departments_sub', 'departments', 1, 0, '/departments/index', 0, 2],

                ['', null, 'Sections', 'gmt_sections_sub', 'sections', 1, 0, '/sections/index', 0, 2],
                ['', null, 'Job Titles', 'gmt_jobtitles_sub', 'job titles', 1, 0, '/jobtitles/index', 0, 2],
                ['', null, 'Banks', 'gmt_banks_sub', 'banks', 1, 0, '/banks/index', 0, 2],
                ['', null, 'Pricing/Fees', 'gmt_fee_category_sub', 'fee category', 1, 0, '/fees/index', 0, 2],

                ['', null, 'Service Types', 'gmt_service_types_sub', 'workflow-tools', 1, 0, '/services/index', 0, 2],
                ['', null, 'Documents Settings', 'gmt_case_tools_sub', 'case tools/forms', 1, 0, '/case-tools/index', 0, 2],
                ['', null, 'Workflow Documents', 'gmt_workflow_docs_sub', 'workflow documents', 1, 0, '/workflow-documents/index', 0, 2],
                ['', null, 'App Images', 'gmt_app_images_sub', 'applications images', 1, 0, '/splash-screens/index', 0, 2],

                //authorization
                [31, null, 'Users', 'gmt_users_sub', 'system users', 1, 0, '/auth/signup', 0, 3],
                [32, null, 'User Roles', 'gmt_asign_roles_sub', 'assign  roles to  user', 1, 0, '/admin/strl-management', 0, 3],
                [33, null, 'Approval Roles', 'gmt_assign_worklow_roles_sub', 'assign workflow roles to  user', 1, 0, '/admin/wfrl-management', 0, 3],
                [34, null, 'Menu Access', 'gmt_menu_access_sub', 'left menu access', 1, 0, '/links/index', 0, 3],

                //reports
            ]
        );
        $this->batchInsert(
            'tbl_links',
            ['link_name', 'link_code', 'enabled', 'role_id'],
            [
                [NULL, 'gmt_dashboard_main', 1, 1],
                [NULL, 'gmt_settings_main', 1, 1],
                [NULL, 'gmt_authorization_main', 1, 1],
                [NULL, 'gmt_company_main', 1, 1],
                [NULL, 'gmt_employee_sub', 1, 1],
                [NULL, 'gmt_sub', 1, 1],
                [NULL, 'gmt_users_sub', 1, 1],
                [NULL, 'gmt_Country_sub', 1, 1],
                [NULL, 'gmt_cities_sub', 1, 1],
                [NULL, 'gmt_district_sub', 1, 1],
                [NULL, 'gmt_menu_access_sub', 1, 1],
                [NULL, 'gmt_side_menu_main', 1, 1],
                [NULL, 'gmt_asign_roles_sub', 1, 1],
                [NULL, 'gmt_roles_main', 1, 1],
                [NULL, 'gmt_categories_sub', 1, 1],
                [NULL, 'gmt_assign_worklow_roles_sub', 1, 1],
                [NULL, 'gmt_workflow_roles_main', 1, 1],
                [NULL, 'gmt_case_tools_sub', 1, 1],
                [NULL, 'gmt_workflow_docs_sub', 1, 1],
                [NULL, 'gmt_workflow_tools_sub', 1, 1],
                [NULL, 'gmt_service_types_sub', 1, 1],
                [NULL, 'gmt_departments_sub', 1, 1],
                [NULL, 'gmt_sections_sub', 1, 1],
                [NULL, 'gmt_jobtitles_sub', 1, 1],
                [NULL, 'gmt_banks_sub', 1, 1],
                [NULL, 'gmt_fee_category_sub', 1, 1],
                [NULL, 'gmt_app_images_sub', 1, 1],
                [NULL, 'gmt_offices_sub', 1, 1],

            ]

        );

        $this->batchInsert(
            'module',
            ['name'],
            [
                ['SETTINGS'],
                ['DASHBOARD'],
                ['BUSINESS'],
                ['REPORT'],

            ]
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->delete('link_names', ['id' => range(1, 1000)]);
        $this->delete('tbl_links', ['id' => range(1, 1000)]);
        $this->delete('module', ['id' => range(1, 1000)]);
    }
}