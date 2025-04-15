<?php
namespace app\models;

use yii\base\Model;
use app\models\User;
use yii\base\InvalidParamException;
use kartik\password\StrengthValidator;
use yii\base\InvalidArgumentException;

/**
 * Password reset form
 */
class ResetPasswordForm extends Model
{
    public $password;

    /**
     * @var \app\models\User
     */
    private $_user;
    public $username;
    public $confirm_password;


    /**
     * Creates a form model given a token.
     *
     * @param string $token
     * @param array $config name-value pairs that will be used to initialize the object properties
     * @throws \yii\base\InvalidParamException if token is empty or not valid
     */
    public function __construct($token, $config = [])
    {
        if (empty($token) || !is_string($token)) {
            throw new InvalidArgumentException('Password reset token cannot be blank.');
        }
        $this->_user = User::findByPasswordResetToken($token);
        if (!$this->_user) {
            throw new InvalidArgumentException('Wrong password reset token.');
        }
        parent::__construct($config);
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['password','confirm_password'], 'required'],
            ['password', 'string', 'min' => 8],
            [
                'confirm_password', 'compare', 'compareAttribute' => 'password',
                'message' => 'Error ! New Password and confirm password Mismatch.'
            ],
            [['password'], StrengthValidator::class, 'preset' => Settings::config()->password_template],

        ];
    }

    /**
     * Resets password.
     *
     * @return bool if password was reset.
     */
    public function resetPassword()
    {
        $user = $this->_user;
        $user->setPassword($this->password);
        $user->removePasswordResetToken();

        return $user->save(false);
    }
}