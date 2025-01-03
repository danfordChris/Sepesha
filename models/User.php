<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use app\models\Offices;
use yii\db\ActiveRecord;
use app\models\Companies;
use yii\web\IdentityInterface;
use yii\base\NotSupportedException;
use yii\behaviors\TimestampBehavior;

/**
 * User model
 *
 * @property integer $id
 * @property string $username
 * @property string $password_hash
 * @property string $password_reset_token
 * @property string $email
 * @property string $auth_key
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 * @property string $password write-only password
 */
class User extends ActiveRecord implements IdentityInterface
{
    const STATUS_DELETED = 0;
    const STATUS_ACTIVE = 10;
    // USER TYPES
    const TYPE_ADMIN = 1;
    const TYPE_MANAGER = 2;
    const TYPE_OFFICER = 3;
    const TYPE_DRIVER = 4;
    const TYPE_ACCOUNT = 5;
    const TYPE_STOCK_CONTROLLER = 6;
    const TYPE_PROCURE = 7;

    public $employee;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%user}}';
    }

    /**
     * @inheritdoc
     */
    public function behaviors()

    {
        return [
            [
                'class' => TimestampBehavior::class,
                'value' => new Expression('NOW()'),
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['status', 'default', 'value' => self::STATUS_ACTIVE],
            ['status', 'in', 'range' => [self::STATUS_ACTIVE, self::STATUS_DELETED]],
            [['company_name', 'employee'], 'safe'],
            [['userid'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
        return static::findOne(['id' => $id, 'status' => self::STATUS_ACTIVE]);
    }

    public static function findIdentityNotConfirmed($id)
    {
        return static::findOne(['id' => $id]);
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        throw new NotSupportedException('"findIdentityByAccessToken" is not implemented.');
    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        return static::findOne(['username' => $username, 'status' => self::STATUS_ACTIVE]);
    }

    public static function findByUsernameNew($username)
    {
        return static::findOne(['username' => $username, 'status' => self::STATUS_DELETED]);
    }

    public static function findByEmail($email)
    {
        return static::findOne(['email' => $email, 'status' => self::STATUS_ACTIVE]);
    }

    /**
     * Finds user by password reset token
     *
     * @param string $token password reset token
     * @return static|null
     */
    public static function findByPasswordResetToken($token)
    {
        if (!static::isPasswordResetTokenValid($token)) {
            return null;
        }

        return static::findOne([
            'password_reset_token' => $token,
            'status' => self::STATUS_ACTIVE,
        ]);
    }

    /**
     * Finds out if password reset token is valid
     *
     * @param string $token password reset token
     * @return bool
     */
    public static function isPasswordResetTokenValid($token)
    {
        if (empty($token)) {
            return false;
        }

        $timestamp = (int) substr($token, strrpos($token, '_') + 1);
        $expire = Yii::$app->params['user.passwordResetTokenExpire'];
        return $timestamp + $expire >= time();
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->getPrimaryKey();
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->auth_key;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
     * Validates password
     *
     * @param string $password password to validate
     * @return bool if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return Yii::$app->security->validatePassword($password, $this->password_hash);
    }

    /**
     * Generates password hash from password and sets it to the model
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password_hash = Yii::$app->security->generatePasswordHash($password);
    }

    /**
     * Generates "remember me" authentication key
     */
    public function generateAuthKey()
    {
        $this->auth_key = Yii::$app->security->generateRandomString();
    }

    /**
     * Generates new password reset token
     */
    public function generatePasswordResetToken()
    {
        $this->password_reset_token = Yii::$app->security->generateRandomString() . '_' . time();
    }

    /**
     * Removes password reset token
     */
    public function removePasswordResetToken()
    {
        $this->password_reset_token = null;
    }



    public function  getStationid()
    {
        if (!Yii::$app->user->isGuest) {
            $value = \Yii::$app->user->identity->company_name;
            return $value;
        }
    }

    public  static function  UserRole()
    {
        if (!Yii::$app->user->isGuest) {
            $userid = \Yii::$app->user->identity->user_role;
            return $userid;
        }
    }

    public  static function  name()
    {
        if (!Yii::$app->user->isGuest) {
            $userid = \Yii::$app->user->identity->full_name;
            return $userid;
        }
    }


    public static function UserLevel()
    {

        if (!Yii::$app->user->isGuest) {
            $inid = \Yii::$app->user->identity->u_level;
            return $inid;
        } else {
            return '';
        }
    }

    public  function getStationName()
    {
        $officename = Offices::findOne(['id' => $this->getStationid()]);

        return isset($officename['business_name']) ? $officename['business_name'] : ' ';
    }

    public function getStationNames()
    {

        $p = $this->hasOne(Offices::class, ['id' => 'company_name']);
        return $p;
    }

    public function getStation()
    {

        $p = $this->hasOne(Offices::class, ['id' => 'company_name']);
        return $p;
    }

    public function getEmployee()
    {

        $p = $this->hasOne(Employee::class, ['id' => 'userid']);
        return $p;
    }


    public  static function CompanyName()
    {
        $p = Companies::find()->one();
        return $p->company_name;
    }


    public  static function Company()
    {
        $p = Companies::find()->one();
        return $p;
    }


    public  static function CompanyAddress()
    {
        $p = Companies::find()->one();
        return $p->company_address;
    }


    public  static function CompanyEmail()
    {
        $p = Companies::find()->one();
        return $p->company_email;
    }

    public  static function CompanyTin()
    {
        $p = Companies::find()->one();
        return $p->tin_no;
    }

    public static function User()
    {

        if (!Yii::$app->user->isGuest) {
            $inid = \Yii::$app->user->identity->username;
            return $inid;
        } else {
            return '';
        }
    }


    public static function getUserOptions()
    {
        return [
            Yii::t('app', self::TYPE_ADMIN) => Yii::t('app', 'Admin'),
            Yii::t('app', self::TYPE_MANAGER) => Yii::t('app', 'Manager'),
            Yii::t('app', self::TYPE_OFFICER) => Yii::t('app', 'Fleet Officer'),
            Yii::t('app', self::TYPE_DRIVER) => Yii::t('app', 'Driver'),
            Yii::t('app', self::TYPE_ACCOUNT) => Yii::t('app', 'Accountant'),
            Yii::t('app', self::TYPE_STOCK_CONTROLLER) => Yii::t('app', 'Stock Controller'),
            Yii::t('app', self::TYPE_PROCURE) => Yii::t('app', 'Procurement Officer'),
        ];
    }

    // public static function getJobTitles()
    // {
    //     $data = [];
    //     $rst = Yii::$app->db->createCommand("SELECT jtid,CONCAT(name) FROM jobtitles ORDER BY name")->queryAll(false);
    //     foreach ($rst as $rs) {
    //         $data[$rs[0]] = $rs[1];
    //     }


    //     return $data;
    // }


    // public function getJob()
    // {
    //     return $this->hasOne(JobTitle::class, ['jtid' => 'role_id']);
    // }

    // public function getUrole()
    // {
    //     return $this->hasMany(ModUserRole::class, ['empid' => 'id']);
    // }


    public static function  OfficeId()
    {
        if (!Yii::$app->user->isGuest) {
            $value = \Yii::$app->user->identity->company_name;
            return $value;
        }
    }


    public static function isReceivingOffice($foid)
    {
        $userOffice = explode(",", self::OfficeId());

        if (in_array($foid, $userOffice)) {
            return true;
        } else {
            return false;
        }
    }


    public static function hasRole($role)
    {

        if (!Yii::$app->user->isGuest) {
            $id = Yii::$app->user->identity->id;
            $roleId = Roles::findOne(['code' => $role])->rid;
            if ($roleId) {
                $q = "SELECT COUNT(id) FROM uroles ";
                $q .= "WHERE empid ='$id' AND rid='$roleId'  AND DATEDIFF(CURDATE(),fdate) >= 0 AND DATEDIFF(tdate,CURDATE()) >= 0";
                $role = Yii::$app->db->createCommand($q)->queryScalar();
                if ($role > 0) {
                    return 'OK';
                }
                return 'NOT OK';
            }
            return false;
        }

        return false;
    }

    public static function auth($role)
    {

        if (!Yii::$app->user->isGuest) {
            $id = Yii::$app->user->identity->id;
            $result = Roles::findOne(['code' => $role]);
            if ($result) {
                $q = "SELECT COUNT(id) FROM uroles ";
                $q .= "WHERE empid ='$id' AND rid='$result->rid'  AND DATEDIFF(CURDATE(),fdate) >= 0 AND DATEDIFF(tdate,CURDATE()) >= 0";
                $role = Yii::$app->db->createCommand($q)->queryScalar();
                if ($role > 0) {
                    return true;
                }
                return false;
            }
        }

        return false;
    }





    public function generateRandomPassword()
    {
        $letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $numbers = '0123456789';
        $specialChars = '!@#$%^&*()_-+=<>?';

        // Shuffle the letters, numbers, and special characters
        $shuffledLetters = str_shuffle($letters);
        $shuffledNumbers = str_shuffle($numbers);
        $shuffledSpecialChars = str_shuffle($specialChars);

        // Select the required components
        $password = $shuffledLetters[0] . // First letter
            $shuffledLetters[1] . // Second letter
            $shuffledLetters[2] . // Third letter
            $shuffledLetters[3] . // Fourth letter
            $shuffledLetters[4] . // Fifth letter
            $shuffledLetters[5] . // Sixth letter
            $shuffledNumbers[0] . // One number
            $shuffledSpecialChars[0]; // One special character

        // Shuffle the password to mix up the components
        $password = str_shuffle($password);

        return $password;
    }

    public function signup($employee)
    {

        if ($this->validate()) {

            $user = new User;

            $id  =  $employee->id;

            $user->userid = $id;
            $user->user_role = 1;
            $user->status = 0;
            $user->email = $employee->email;
            $user->username = strtolower($employee->fname . '.' . $employee->sname);
            $user->full_name = ucwords(strtolower($employee->fname . ' ' . $employee->mname . ' ' . $employee->sname));
            $user->generateAuthKey();
            $user->confirmation_token = Yii::$app->security->generateRandomString();
            $user->password_expiry = Settings::PasswordExpiry();
            if ($user->save(false)) {
                $emailtemplate = '<p>Hello ' . $employee->getFullName() . ',</strong></p>
                <p>You have been successfully registered to  <strong>' . 'Railway Children Africa(RCA) Management System' . '</strong> </p>
                <p>. Please click the following link to confirm your email: ' . Yii::$app->urlManager->createAbsoluteUrl(['../site/confirmemail', 'token' => $user->confirmation_token]) . '</p>';
                $subject = "Employee Registration at RCAMS";
                Notification::sendConfirmationEmail($employee, $user->confirmation_token);
                Notification::emailnotification($emailtemplate, $subject, $employee);

                return true;
            }
            return false;
        }
    }

    public function signupUser($employee, $employee_email)
    {

        if ($this->validate()) {

            $user = new User;

            $id  =  $employee->id;

            $user->userid = $id;
            $user->user_role = 1;
            $user->status = 0;
            $user->email = $employee_email;
            $user->username = strtolower($employee->fname . '.' . $employee->sname);
            $user->full_name = ucwords(strtolower($employee->fname . ' ' . $employee->mname . ' ' . $employee->sname));
            $user->generateAuthKey();
            $user->confirmation_token = Yii::$app->security->generateRandomString();
            $user->password_expiry = Settings::PasswordExpiry();
            if ($user->save()) {
                $emailtemplate = '<p>Hello ' . $employee->getFullName() . ',</strong></p>
                <p>You have been successfully registered to  <strong>' . 'SEPESHA SYSTEM' . '</strong> </p>
                <p>. Please click the following link to confirm your email: ' . Yii::$app->urlManager->createAbsoluteUrl(['../site/confirmemail', 'token' => $user->confirmation_token]) . '</p>';
                $subject = "New User Registration";
                Notification::sendConfirmationEmail($employee, $user->confirmation_token);
                Notification::emailnotificationaddeduser($emailtemplate, $subject, $employee, $employee_email);

                return true;
            }

            return false;
        }
    }

    public static function hasExpiredPassword()
    {
        if (\Yii::$app->user->identity->password_expiry < date('Y-m-d')) {
            return true;
        }

        return false;
    }



    public static function isAdmin()
    {
        $id = Yii::$app->user->id;
        $conn = Yii::$app->db;
        $q = "SELECT COUNT(empid) FROM uroles ";
        $q .= "WHERE empid ='$id' AND rid = '1' AND DATEDIFF(CURDATE(),fdate) >= 0 AND DATEDIFF(tdate,CURDATE()) >= 0";
        $role = $conn->createCommand($q)->queryScalar();
        if ($role > 0) {
            return true;
        }
        return false;
    }


    public static function URole()
    {
        $id = Yii::$app->user->id;
        $conn = Yii::$app->db;
        $q = "SELECT rid FROM uroles ";
        $q .= "WHERE empid = :id AND DATEDIFF(CURDATE(), fdate) >= 0 AND DATEDIFF(tdate, CURDATE()) >= 0";
        $roles = $conn->createCommand($q)->bindValue(':id', $id)->queryAll();
        if ($roles) {
            // Extract the 'rid' values from the query result
            return array_column($roles, 'rid');
        }
        return []; // Return an empty array if no roles are found
    }


    public  static function Menu($linkcode)
    {
        return Links::find()->where(['enabled' => 1, 'role_id' => self::URole(), 'link_code' => $linkcode])->one();
    }

    public  static function MenuLabel($linkcode)
    {
        $linkName = LinkNames::findOne(['access_name' => $linkcode]);
        return $linkName;
    }
}