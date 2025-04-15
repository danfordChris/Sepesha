<?php
namespace app\models;
use Yii;
use yii\base\Model;
use app\models\User;
/**
 * Password reset request form
 */
class PasswordResetRequestForm extends Model
{
    public $email;
    public $username;


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['email', 'trim'],
            ['email', 'required'],
            ['email', 'email'],
            ['email', 'exist',
                'targetClass' => '\app\models\User',
                'filter' => ['status' => User::STATUS_ACTIVE],
                'message' => 'There is no user with this email address.'
            ],
        ];
    }

    /**
     * Sends an email with a link, for resetting the password.
     *
     * @return bool whether the email was send
     */
    public function sendEmail()
    {
        /* @var $user User */
        $user = User::findOne([
            'status' => User::STATUS_ACTIVE,
            'email' => $this->email,
        ]);

        if (!$user) {
            return false;
        }

        if (!User::isPasswordResetTokenValid($user->password_reset_token)) {
            $user->generatePasswordResetToken();
            if (!$user->save(false)) {
                return false;
            }
        }

        return Yii::$app
            ->mailer
            ->compose(
                ['html' => 'layouts\passwordreset-html'],
                ['user' => $user]
            )
            ->setFrom([Yii::$app->params['notificationEmail'] => Yii::$app->name ])
            ->setTo($this->email)
            ->setSubject('Password reset for ' . Yii::$app->name)
            //->setHtmlBody('<p>We have received a password reset request ,please click link below to complete your password reset</p>')
            ->send();
    }
}