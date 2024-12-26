<?php
namespace app\models;
use Yii;
use yii\base\Model;
use app\models\User;
use app\models\Offices;

/**
 * Signup form
 */
class SignupForm extends Model
{
    public $username;
    public $email;
    public $password;
    public $full_name;
    public $u_level;
    public $user_role;
    public $company_name;
    const KITUNG_LU=88;
    public $password_expiry;
    public $login_attempts;
 
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['username', 'trim'],
            ['username', 'required'],
            ['username', 'unique', 'targetClass' => '\app\models\User',
            'message' => 'This username has already been taken.'],
            ['username', 'string', 'min' => 4, 'max' => 255],

            ['email', 'trim'],
            ['email', 'required'],
            ['email', 'email'],
            ['email', 'email'],
            ['email', 'string', 'max' => 255],
            ['email', 'unique', 'targetClass' => '\app\models\User',
            'message' => 'This email address has already been taken.'],

            ['password', 'required'],
            ['password', 'string', 'min' => 8],
            ['full_name', 'required'],
            // ['user_role', 'required'],
            ['company_name', 'required'],
            [['password_expiry','login_attempts'],'safe']
        ];
    }



    public function attributeLabels()
    {
        return [

            'company_name' => Yii::t('app', 'Office'),
             'user_role' => Yii::t('app', 'Access Level'),


        ];
    }



    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function signup()
    {
        if (!$this->validate()) {
            return null;
        }
        $user = new User();
        $user->username = $this->username;
        $user->email = $this->email;
        $user->setPassword($this->password);
        $user->generateAuthKey();
        $user->user_role = $this->user_role;
        $user->full_name = $this->full_name;
        $user->company_name = $this->company_name;
        $user->password_expiry = Settings::PasswordExpiry();

        return $user->save() ? $user : null;
    }

 


}