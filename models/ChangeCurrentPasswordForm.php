<?php

namespace app\models;

use Yii;
use yii\base\Model;
use app\models\User;
use kartik\password\StrengthValidator;
use yii\base\InvalidCallException;
use yii\base\InvalidParamException;

/**
 * Password reset form
 */
class ChangeCurrentPasswordForm extends Model
{

    /**
     * @var \app\models\User
     */
    public $id;
    public $password;
    public $full_name;
    public $username;
    public $cur_password;
    public $confirm_password;
    private $_user;

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
     * Creates a form model given a token.
     *

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['password', 'confirm_password'], 'required'],
            ['password', 'string', 'min' => 8],
            [['password'], StrengthValidator::class, 'preset' => 'normal'],
            ['cur_password', 'validateCurrentPassword'],
            ['confirm_password', 'compare', 'compareAttribute' => 'password', 'message' => 'Passwords do not match.'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'verif_password' => 'Confirm Password',

        ];
    }



    public function changePassword($username)
    {
        if (!$this->validate()) {
            return false;
        }

        $user = User::findByUsernameNew($username);

        if (!$user) {
            return false;
        }

        $user->password_hash = Yii::$app->security->generatePasswordHash($this->password);

        return $user->save(false);
    }


    public function validateCurrentPassword($attribute, $params)
    {
        $user = Yii::$app->user->identity;

        if ($user) {
            if (!Yii::$app->security->validatePassword($this->cur_password, $user->password_hash)) {
                $this->addError($attribute, 'Incorrect current password.');
            }
        }
    }

    public function validatePassword($attribute, $params)
    {
        if (preg_match('/[0-9]/', $this->$attribute) && preg_match('/[a-zA-Z]{6,}/', $this->$attribute) && preg_match('/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/', $this->$attribute)) {
            return true;
        }

        $this->addError($attribute, 'Password must contain at least 6 letters, 1 number and 1 special letter.');
    }
}
