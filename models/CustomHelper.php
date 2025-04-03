<?php

namespace app\models;

use Yii;
use DateTime;
use yii\base\Model;
use yii\helpers\ArrayHelper;
use Symfony\Component\Uid\Ulid;
use yii\web\NotFoundHttpException;
use PhpOffice\PhpSpreadsheet\Calculation\DateTimeExcel\WorkDay;
use yii\helpers\Html;

class CustomHelper extends Model
{
    const ICON_USER_CHECK = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>';
    const ICON_SETTINGS = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>';
    const ICON_DASHBOARD = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>';
    const ICON_USERS = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
    const ICON_REPORT = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>';
    const ICON_CHART = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-doughnut-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>';

    const ICON_APPROVAL = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>';

    const ICON_MAP = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
    const ICON_DB = ' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-database">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>';

    const ICON_EMAIL = ' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-database">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>';


    const MAP ='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';

    const TRANSACTION= '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hard-drive"><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line></svg>';

    const DISCOUNT= '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>';

    

    const CASE_INTAKE_WORKFLOW = 1;
    const CASE_CLOSURE_WORKFLOW = 2;
    const CASE_TRANSFER_WORKFLOW = 3;
    const YLWS_ASSOCIATION_WORKFLOW = 4;
    const YLWS_NO_ASSOCIATION_WORKFLOW = 5;
    const REUNIFICATION_LOCAL_WORKFLOW = 6;
    const REUNIFICATION_LONG_DISTANCE_WORKFLOW = 7;
    const CAREPLAN_WORKFLOW = 8;
    const YLWS_GRADUATION_WORKFLOW = 9;
    const CLWS_GRADUATION_WORKFLOW = 10;
    const ACT_PARENT_WORKFLOW = 11;
    const REMAIN_ON_STREET = 100;

    public static function getStatusOptions()
    {
        return [
            '1' => 'Active',
            '0' => 'Inactive',
        ];
    }


    public static function getYesNoOptions()
    {
        return [
            '1' => 'Yes',
            '0' => 'No',
        ];
    }


    public static  function menuicons()
    {
        return [
            self::ICON_DASHBOARD => 'DASHBOARD',
            self::ICON_SETTINGS => 'SETTINGS',
            self::ICON_USER_CHECK => 'AUTH',
            self::ICON_USERS  => 'BENEFICIARIES',
            self::ICON_APPROVAL  => 'APPROVALS',
            self::ICON_REPORT => 'REPORTS'
        ];
    }


    public static function getBloodGroups()
    {
        return [
            'A+' => 'A+',
            'A-' => 'A-',
            'B+' => 'B+',
            'B-' => 'B-',
            'AB+' => 'AB+',
            'AB-' => 'AB-',
            'O+' => 'O+',
            'O-' => 'O-',
        ];
    }

    public static function getDurationUnits()
    {
        return [
            'days' => 'Day(s)',
            'weeks' => 'Week(s)',
            'months' => 'Month(s)',
            'years' => 'Year(s)',

        ];
    }


    public static function getLocations()
    {
        return [
            '1' => 'On the Street',
            '2' => 'Fit person/Shelter',
            '3' => 'At home',

        ];
    }

    public static function getCareplanTypes()
    {
        return [
            '1' => 'Pre',
            '2' => 'Post',

        ];
    }


    public static function educationLevels()
    {
        $query = Categories::find()->where(['type' => 'education_level'])->orderBy('id')->all();
        $result = ArrayHelper::map($query, 'id', 'name');
        return $result;
    }

    public static function getWorkflowDocuments($workflow)
    {
        $query = WorkflowDocuments::find()->where(['wid' => $workflow, 'mandatory' => 0])->all();
        $result = ArrayHelper::map($query, 'id', function ($query) {
            return $query->documenttypeName->name ?? '';
        });
        return $result;
    }

    public static function getMandatoryWorkflowDocuments($workflow)
    {
        $query = WorkflowDocuments::find()->where(['wid' => $workflow, 'mandatory' => 1])->all();
        $result = ArrayHelper::map($query, 'id', 'name');
        return $result;
    }

    public static function getCurrentAge($age)
    {
        $birth_date = strtotime($age);
        $now = time();
        $age = $now - $birth_date;
        $a = $age / 60 / 60 / 24 / 365.25;
        return floor($a);
    }

    public static function getUnits()
    {
        return [
            'days' => 'Day(s)',
            'weeks' => 'Week(s)',
            'months' => 'Month(s)',
            'years' => 'Year(s)',

        ];
    }

    public static function getFollowups()
    {
        return [
            '1' => 'Contact by Phone Follow up',
            '2' => 'Counselling by Phone',
            '3' => 'Family Called for Support',

        ];
    }

    public static function getPlacementTypes()
    {
        return [
            '26' => 'Shelter',
            '27' => 'Fit Person',
        ];
    }

    public static function getDropoutStatus()
    {
        return [
            '1' => 'At Home/Reunified',
            '2' => 'Child Under Fit Person',
            '3' => 'Sheltered',
            '4' => 'From Youth Association'

        ];
    }

    public static function getReintegrationOptions()
    {
        return [
            self::REUNIFICATION_LOCAL_WORKFLOW => 'Reunification Local',
            self::REUNIFICATION_LONG_DISTANCE_WORKFLOW => 'Reunification Long Distance',
        ];
    }

    public static function getCountries()
    {
        $query = Country::find()->orderBy('country_id')->all();
        $result = ArrayHelper::map($query, 'country_id', 'name');
        return $result;
    }

    public static function getFullName($USER)
    {
        $query = User::find()->where(['id' => $USER])->one();
        $name = $query->full_name ?? '';
        return $name;
    }

    public static function getFullNames($USER)
    {
        $query = ClientInfo::find()->where(['id' => $USER])->one();
          $name = $query ? (($query->name ?? '') . ' ' . ($query->sname ?? '')) : '';
        return $name;
    }

    public static function getClientName($USER)
    {
        $query = ClientInfo::find()->where(['id' => $USER])->one();
          $name = $query ? (($query->name ?? '') . ' ' . ($query->sname ?? '')) : '';
        return $name;
    }

    public static function getEmployeeName($USER)
    {
        $query = Employee::find()->where(['id' => $USER])->one();
        $name = $query->fname ?? '';
        return $name;
    }

    public static function getEmployeeDetails($USER)
    {
        $query = Employee::find()->where(['id' => $USER])->one();
        return $query ?? null;
    }

    public static function getVehicles()
    {
        $query = Vehicle::find()->all();
        $result = ArrayHelper::map($query, 'id', 'plate_number');
        return $result;
    }




    public static function getAllEmployees()
    {
        $employees = Employee::find()->where(['is_user' => 1, 'status' => 10])->all();
        $result = ArrayHelper::map($employees, 'id', function ($employee) {
            return strtolower($employee->fname . ' ' . $employee->sname);
        });
        return $result;
    }


    public static function getActiveEmployees()
    {
        $employees = Employee::find()->where(['status' => 10])->all();
        $result = ArrayHelper::map($employees, 'id', function ($employee) {
            return strtolower($employee->fname . ' ' . $employee->sname);
        });

        return $result;
    }


    public static function getModeArrival()
    {
        $query = Categories::find()->where(['type' => 'arrival_mode'])->orderBy('name')->all();
        $result = ArrayHelper::map($query, 'id', 'name');
        return $result;
    }


    public static function getServices()
    {
        $query = Services::find()->where(['type' => 2])->orderBy('name')->all();
        $result = ArrayHelper::map($query, 'id', 'name');
        return $result;
    }

    public static function getService()
    {
        $query = Services::find()->where(['type' => 1])->orderBy('name')->all();
        $result = ArrayHelper::map($query, 'id', 'name');
        return $result;
    }



    public static function getContact()
    {
        $query = Categories::find()->where(['type' => 'contact'])->orderBy('name')->all();
        $result = ArrayHelper::map($query, 'id', 'name');
        return $result;
    }



    public static function getRelationships()
    {
        $query = ContactRelationship::find()->orderBy('name')->all();
        $result = ArrayHelper::map($query, 'id', 'name');
        return $result;
    }

    public static function getContactRelationships()
    {
        $region =  ContactRelationship::find()->orderBy('name')->all();
        $result = ArrayHelper::map($region, 'id', 'name');
        return $result;
    }

    public static function getAccompaniedStatus()
    {
        return [
            '0' => 'Alone',
            '1' => 'Accompanied',
        ];
    }

    public static function getHealthStatus()
    {
        return [
            '0' => 'Normal',
            '1' => 'Sickly',
        ];
    }





    public static function getWorkflows()
    {
        $region =  Workflow::find()->orderBy('wid')->all();
        $result = ArrayHelper::map($region, 'wid', 'name');
        return $result;
    }


    public static function getWorkflowStage($wid, $stid, $userinput = 'N')
    {

        $wf = Workflow::findOne($wid)->stages ?? '';
        $stage = WfStages::find()->where(['wid' => $wid, 'sno' => $stid])->one();
        $stname = $stage->sname ?? '';

        if ($stid > $wf) {
            return '<b class="badge bg-green">Approved</b>';
        } elseif ($userinput == 'Y') {
            return "<b class='badge bg-dark'>Pending Submission</b>";
        }
        return "<b class='badge bg-dark'>$stname</b>" ?? 'no workflow configure !';
    }

    public static function getVehicleStatus($status)
    {

        if ($status == 'A') {
            return '<div class="badge badge-success">Active</div>';
        }
        return '<div class="badge badge-danger">Inactive</div>';
    }



    public static function getWorkflowName($wid)
    {

        $wf = Workflow::findOne($wid)->name ?? '';
        if ($wf) {
            return "<b class=''>$wf</b>" ?? 'no workflow configure !';
        }
    }


    public static function stageEnded($wid, $stid)
    {

        $wf = Workflow::findOne($wid)->stages ?? '';
        $stage = WfStages::find()->where(['wid' => $wid, 'sno' => $stid])->one();

        if ($stid > $wf) {
            return false;
        }

        return true;
    }



    public static function saveNewDocument($file, $docLocation)
    {
        $uploadDir = Yii::getAlias('@webroot/' . $docLocation);
        $fileName = Yii::$app->security->generateRandomString() . '.' . $file->extension;
        $filePath = $uploadDir . $fileName;
        // Create the directory if it doesn't exist
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        // Save the file to the server
        $file->saveAs($filePath);

        return $filePath;
    }


    public static function getApprovalLogs($wid, $refno)
    {
        return  Approval::find()->where(['wid' => $wid, 'reqid' => $refno])->orderBy('created_at desc')->all();
    }


    public static function getCreatedBy($user)
    {
        $users = User::find()->where(['id' => $user])->one();
        return $users->full_name ?? '';
    }

    public function getCreatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'created_by']);
    }

    public function getUpdatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'updated_by']);
    }

    public static function getUpdatedBy($user)
    {
        $users = User::find()->where(['id' => $user])->one();
        return $users->full_name ?? '';
    }




    public static function getStatusName($status)
    {
        if ($status === 'A')
            return 'Approved';
        elseif ($status === 'N')
            return 'Pending';
        elseif ($status === 'R')
            return 'Rejected';
        elseif ($status === 1)
            return 'Active';
        elseif ($status === 0)
            return 'Inactive';
        elseif ($status === 'C')
            return 'Cancelled';
    }


    public static function getStatus()
    {
        return [
            'A' => 'Approved',
            'N' => 'Pending',
            'R' => 'Rejected',
            'C' => 'Cancelled',

        ];
    }


    public static function reintegrationWith()
    {

        return    [
            'biological_parent' => 'Biological Parent',
            'alternative_caregiver' => 'Alternative Caregiver',

        ];
    }


    public static function getIntakeWorkflowStages()
    {

        $beneficiaries = WfStages::find()->where(['wid' => 1])->all();
        $Data = ArrayHelper::map($beneficiaries, 'id', 'sname');
        return $Data;
    }



    public static function AllowToolEditing($wid, $stid)
    {

        $allowToolEdting = WfStages::findOne(['wid' => $wid, 'sno' => $stid, 'status' => 'active'])->isEditable;
        if ($allowToolEdting == 1) {
            return true;
        }
        return false;
    }


    public static function MandatoryWorkflowToolsAreFilled($workflow, $stage, $intakeId)
    {
        $totalTools = WorkflowTools::find()->where(['wid' => $workflow, 'stid' => $stage, 'status' => 1, 'mandatory' =>  1])->count();
        $totalFilledTool = IntakeWorkflowTool::find()
            ->where(['wid' => $workflow, 'stid' => $stage, 'intake_id' => $intakeId])
            ->andWhere([
                'tool_id' => WorkflowTools::find()
                    ->select('id')
                    ->where([
                        'wid' => $workflow,
                        'stid' => $stage,
                        'status' => 1,
                        'mandatory' => 1
                    ])
            ])
            ->select('tool_id')
            ->distinct()
            ->count();

        if ($totalTools > $totalFilledTool) {
            return false;
        }
        return true;
    }


    public static function CheckReferencePage($modelName, $reference)
    {
        $modelClass = $modelName;

        if (($model = $modelClass::findOne(['refno' => $reference])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }

    public static function getRefererUrl()
    {
        $refer = $_SERVER['HTTP_REFERER'];
        $trimmedUrl = preg_replace("#^.*/rcaappdev/#", "", $refer);

        return $trimmedUrl;
    }

    public static function getCurrentUrl()
    {
        $refer = $_SERVER['REQUEST_URI'];
        $trimmedUrl = preg_replace("#^.*/rcaappdev/#", "", $refer);

        return $trimmedUrl;
    }

    public static function getUserIcon(){

        return Html::tag('i', '', [
            'class' => 'fa fa-user-circle fa-2x',
            'style' => 'width: 50px; height: 50px; display: inline-block; object-fit: cover;',
            'contentOptions' => ['class' => 'align-middle'],
        ]);
    }

    public static function setMainUrl()
    {
        $controller = Yii::$app->controller->id;
        $action = Yii::$app->controller->action->id;

        if ($controller && $action) {
            $session = Yii::$app->session;
            $session->set('controller', $controller);
            $session->set('action', $action);

            return true;
        }

        return null;
    }

    public static function getBeneficiaryServiceAttachment($service)
    {

        $beneficiaries = Attachment::find()->where(['table_key' => $service])->one();
        if (!empty($beneficiaries->attachment ?? '')) {
            return '/rcaappdev/' . $beneficiaries->attachment;
        } else {
            return null;
        }
    }


    public static function getUuid()
    {

        return  \Ramsey\Uuid\Uuid::uuid4()->toString();
    }

}