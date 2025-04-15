<?php
namespace app\models;
use Yii;
use yii\base\Model;
use app\models\User;
/**
 * Password reset request form
 */
class PasswordResetRequestFormAdmin extends Model
{
    public $email;


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['email', 'trim'],
            // ['email', 'required'],
            ['email', 'email'],

        ];
    }

    /**
     * Sends an email with a link, for resetting the password.
     *
     * @return bool whether the email was send
     */
    public function sendEmail($user)
    {
        /* @var $user User */

        if (!User::isPasswordResetTokenValid($user->password_reset_token)) {
            $user->generatePasswordResetToken();
            if (!$user->save()) {
                return false;
            }
        }
        return true;
        // return Yii::$app
        //     ->mailer
        //     ->compose(
        //         ['html' => 'layouts\passwordreset-html'],
        //         ['user' => $user]
        //     )
        //     ->setFrom([Yii::$app->params['notificationEmail'] => Yii::$app->name ])
        //     ->setTo($user->email)
        //     ->setSubject('Password reset for ' . Yii::$app->name)
        //     //->setHtmlBody('<p>We have received a password reset request ,please click link below to complete your password reset</p>')
        //     ->send();
    }
}