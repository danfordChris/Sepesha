<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\helpers\ArrayHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "employee".
 *
 * @property int $id
 * @property string $fname
 * @property string|null $mname
 * @property string $sname
 * @property string|null $category
 * @property string|null $gender
 * @property string|null $idno
 * @property string|null $idtype
 * @property string|null $marital_status
 * @property string|null $registered_date
 * @property string|null $dob
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $photo
 * @property string|null $sig
 * @property string|null $salary
 * @property int|null $oid
 * @property int|null $physical_address
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Employee extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'employee';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['fname', 'category', 'section_id', 'department_id', 'registered_date', 'gender', 'idno', 'idtype', 'phone', 'marital_status', 'email', 'sname'], 'required'],
            [['registered_date', 'dob', 'created_at', 'updated_at', 'is_user'], 'safe'],
            [['oid', 'status', 'created_by', 'updated_by'], 'integer'],
            [['fname', 'mname', 'sname', 'gender', 'idno', 'idtype', 'email', 'photo', 'sig', 'salary'], 'string', 'max' => 250],
            [['category'], 'string', 'max' => 50],
            [['email'], 'email'],
            [['email'], 'unique'],
            [['marital_status'], 'string', 'max' => 255],
            [['phone'], 'string', 'min' => 9, 'max' => 9],
            [['phone'], 'chkPhone'],
            [['phone'], 'integer'],
            [['photo'], 'image', 'extensions' => 'jpg, png, jpeg', 'minWidth' => 100, 'maxWidth' => 1500,  'minHeight' => 100, 'maxHeight' => 1500, 'maxSize' => 1024 * 1024 * 1],


        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'fname' => 'First Name',
            'mname' => 'Middle Name',
            'sname' => 'Surname',
            'category' => 'Job Title',
            'gender' => 'Gender',
            'idno' => 'ID Number',
            'idtype' => 'ID Type',
            'marital_status' => 'Marital Status',
            'registered_date' => 'Registered Date',
            'section_id' => 'Section',
            'department_id' => 'Department',
            'dob' => 'Date of Birth',
            'phone' => 'Phone',
            'email' => 'Email',
            'photo' => 'Photo',
            'sig' => 'Signature',
            'salary' => 'Salary',
            'oid' => 'Office',
            'physical_address' => 'Physical Address',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }

    public function behaviors()

    {
        return [
            [
                'class' => TimestampBehavior::class,
                'value' => new Expression('NOW()'),
            ],
            [
                'class' => BlameableBehavior::class,
            ],
        ];
    }

    public function getStatusName()
    {
        if ($this->status == 10)
            return 'active';
        else
            return 'Inactive';
    }


    public static function getStatusNames($id)
    {
        $statuses = self::getStatusName();
        return $statuses[$id] ?? 'Not Set';
    }

    public static function getMaritalStatus()
    {
        return [
            'single' => 'Single',
            'married' => 'Married',
            'divorced' => 'Divorced',
            'widowed' => 'Widowed',

        ];
    }

    public static function getGender()
    {
        return [
            'Male' => 'Male',
            'Female' => 'Female',
        ];
    }

    public static function getIdtype()
    {
        return [
            'license' => 'Driving License',
            'voter id' => 'Voter Card',
            'national id' => 'Nida',
        ];
    }

    public function chkPhone($attribute, $params)
    {
        $mobile = trim($this->phone);
        if (preg_match('/^[1-9][0-9]{8}$/', $mobile) !== 1) {
            $this->addError('phone', 'The Mobile number provided is invalid ,must not start with zero or 255 and length must be nine(9).');
        }
    }

    public function getFullName()
    {
        $fullname = $this->fname . ' ' . $this->mname . ' ' . $this->sname;
        return $fullname ?? '';
    }

    public static function getJobTitles()
    {
        $customers = Jobtitle::find()->all();
        $result = ArrayHelper::map($customers, 'jtid', 'name');
        return $result;
    }


    public function getJobTitle()
    {
        return $this->hasOne(Jobtitle::class, ['jtid' => 'category']);
    }

    public function getArrivalMode()
    {
        return $this->hasOne(Categories::class, ['id' => 'mode_arrival']);
    }

    public static function getDepartments()
    {
        $departments = Department::find()->all();
        $result = ArrayHelper::map($departments, 'did', 'name');
        return $result;
    }


    public function getDepartment()
    {
        return $this->hasOne(Department::class, ['did' => 'department_id']);
    }

    public static function getSections()
    {
        $Sections = Section::find()->all();
        $result = ArrayHelper::map($Sections, 'sid', 'name');
        return $result;
    }


    public function getSection()
    {
        return $this->hasOne(Section::class, ['sid' => 'section_id']);
    }

    public static function getOffices()
    {
        $office = Office::find()->all();
        $result = ArrayHelper::map($office, 'id', 'name');
        return $result;
    }


    public function getOffice()
    {
        return $this->hasOne(Office::class, ['id' => 'oid']);
    }


    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {
            if ($this->isNewRecord) {
                $this->phone = '255' . $this->phone;
            } else {
                $phone =  trim($this->phone, '255');
                $this->phone = '255' . $phone;
            }
            return true;
        }
        return false;
    }

    public static function getStatusOptions()
    {
        return [
            '10' => 'Yes',
            '0' => 'No',

        ];
    }

    public static function getOptions()
    {
        return [
            '1' => 'Yes',
            '0' => 'No',

        ];
    }

    public static function getEnable()
    {
        return [
            '1' => 'Active',
            '0' => 'Inactive',

        ];
    }

    public static function getEmployee($token)
    {
        $user = User::find()->where(['confirmation_token' => $token])->one();
        if ($user) {
            $user->userid;
        }
    }

    public static function getAllEmployees()
    {

        $employees = Employee::find()->where(['is_user' => 0])->all();

        $result = ArrayHelper::map($employees, 'id', function ($employee) {
            return strtolower($employee->fname . ' ' . $employee->sname);
        });

        return $result;
    }

    public function getUserStatus($employeemail)
    {
        $status = User::find()->where(['email' => $employeemail])->one();
        if ($status) {
            return $status;
        } else {
            return false;
        }
    }


    /**
     * Gets the name of the option by ID.
     * @param int $id
     * @return string
     */
    public static function getOptionName($id)
    {
        $options = self::getOptions();
        return $options[$id] ?? 'Not Set';
    }

    public function getCreatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'created_by']);
    }

    public function getUpdatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'updated_by']);
    }
}
