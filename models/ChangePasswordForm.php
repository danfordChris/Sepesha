<?php

namespace app\models;

use Yii;
use yii\base\InvalidParamException;
use yii\base\Model;
use app\models\User;
use kartik\password\StrengthValidator;
use yii\base\InvalidCallException;

/**
 * Change password form for current user only
 */
class ChangePasswordForm extends Model
{
    public $id;
    public $password;
    public $confirm_password;
    public $full_name;
    public $username;
    public $oldPassword;
    public $password_expiry;
    /**
     * @var \app\models\User
     */
    private $_user;

    /**
     * Creates a form model given a token.
     *
     * @param  string                          $token
     * @param  array                           $config name-value pairs that will be used to initialize the object properties
     * @throws \yii\base\InvalidParamException if token is empty or not valid
     */
    public function __construct($id, $config = [])
    {
        $this->_user = User::findIdentity($id);

        if (!$this->_user) {
            if (User::findIdentityNotConfirmed($id)) {
                $this->_user = User::findIdentityNotConfirmed($id);
            } else {
                throw new InvalidCallException('Unable to find user!');
            }
        }

        $this->id = $this->_user->id;
        $this->full_name = $this->_user->full_name;
        $this->username = $this->_user->username;
        parent::__construct($config);
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [

            [['password', 'confirm_password', 'oldPassword'], 'required'],
            [['password', 'confirm_password'], 'string', 'min' => 8],
            [
                'confirm_password', 'compare', 'compareAttribute' => 'password',
                'message' => 'Error ! New Password and confirm password Mismatch.'
            ],
            ['oldPassword', 'validateOldPassword'],
            ['password_expiry', 'safe'],

            //['password', 'validateNewPassword'],
            [['password'], StrengthValidator::class, 'preset' => Settings::config()->password_template],

        ];
    }

    /**
     * Changes password.
     *
     * @return boolean if password was changed.
     */
    public function changePassword()
    {
        $user = $this->_user;
        $user->setPassword($this->password);
        return $user->save(false);
    }


    public function changeExpiredPassword()
    {
        $user = $this->_user;
        $user->password_expiry = Settings::PasswordExpiry();
        $user->setPassword($this->password);
        return $user->save(false);
    }


    public function validateOldPassword($attribute, $params)
    {
        $user =  $this->_user;
        if (!$user || !$user->validatePassword($this->oldPassword)) {
            $this->addError($attribute, 'Incorrect old password.');
        }
    }


    public function validateNewPassword($attribute, $params)
    {
        if ($this->password === $this->oldPassword) {
            $this->addError($attribute, 'New password must be different from the old password.');
        }
    }


    // public function validateNewPassword($attribute, $params)
    // {
    //     $user =  $this->_user;
    //     if (!$user || !$user->validatePassword($this->password)) {
    //         $this->addError($attribute, 'New password must be different from the old password.');

    //     }
    // }
    
    
}