<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "notifications".
 *
 * @property int $ntid
 * @property int|null $uid
 * @property string|null $custno
 * @property string|null $fphone
 * @property string|null $femail
 * @property string|null $temail
 * @property string|null $tphone
 * @property string|null $subject
 * @property string|null $sms_notice
 * @property string|null $email_notice
 * @property string|null $appl
 * @property int|null $created_by
 * @property string|null $created_date
 * @property string|null $esent
 * @property string|null $smssent
 * @property string|null $datesent
 * @property string|null $edatesent
 * @property string|null $smsrcode
 * @property string|null $smsrmsg
 * @property int|null $request_id
 * @property string|null $descr
 */
class Notification extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'notifications';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['uid', 'created_by', 'request_id'], 'integer'],
            [['sms_notice', 'email_notice'], 'string'],
            [['created_date', 'datesent', 'edatesent'], 'safe'],
            [['custno'], 'string', 'max' => 190],
            [['fphone', 'appl'], 'string', 'max' => 20],
            [['femail', 'temail'], 'string', 'max' => 60],
            [['tphone', 'subject', 'descr'], 'string', 'max' => 100],
            [['esent', 'smssent'], 'string', 'max' => 1],
            [['smsrcode', 'smsrmsg'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'ntid' => 'Ntid',
            'uid' => 'Uid',
            'custno' => 'Custno',
            'fphone' => 'Fphone',
            'femail' => 'Femail',
            'temail' => 'Temail',
            'tphone' => 'Tphone',
            'subject' => 'Subject',
            'sms_notice' => 'Sms Notice',
            'email_notice' => 'Email Notice',
            'appl' => 'Appl',
            'created_by' => 'Created By',
            'created_date' => 'Created Date',
            'esent' => 'Esent',
            'smssent' => 'Smssent',
            'datesent' => 'Datesent',
            'edatesent' => 'Edatesent',
            'smsrcode' => 'Smsrcode',
            'smsrmsg' => 'Smsrmsg',
            'request_id' => 'Request ID',
            'descr' => 'Descr',
        ];
    }

    public static function emailnotification($emailtemplate, $subject, $employee)
    {
        $notification = new Notification();
        $notification->uid = $employee->id;
        $notification->temail = $employee->email;
        $notification->femail = Yii::$app->params['notificationEmail'];
        $notification->email_notice = $emailtemplate;
        $notification->subject = $subject;
        $notification->notification_status = 0;
        $notification->appl = 'sepesha';
        $notification->esent = 'N';
        $notification->edatesent = null;
        return $notification->save(false) ? $notification : null;
    }

    public static function emailnotificationaddeduser($emailtemplate, $subject, $employee, $user_email)
    {
        $notification = new Notification();
        $notification->uid = $employee->id;
        $notification->temail = $user_email;
        $notification->femail = Yii::$app->params['notificationEmail'];
        $notification->email_notice = $emailtemplate;
        $notification->subject = $subject;
        $notification->notification_status = 0;
        $notification->appl = 'sepesha';
        $notification->esent = 'N';
        $notification->edatesent = null;
        return $notification->save(false) ? $notification : null;
    }

    public static function sendConfirmationEmail($user, $token)
    {


        return Yii::$app
            ->mailer
            ->compose(
                [
                    'html' => 'layouts/confirmationemail-html'
                ],
                ['user' => $user, 'token' => $token]
            )
            ->setFrom([Yii::$app->params['notificationEmail'] =>  'SEPESHA SYSTEM'])

            ->setTo($user->email)
            ->setSubject('Confirm your registration  with SEPESHA SYSTEM')

            ->send();
    }

    public static function sendConfirmationEmailRepeat($user, $token, $email)
    {


        return Yii::$app
            ->mailer
            ->compose(
                [
                    'html' => 'layouts/confirmationemail-html'
                ],
                ['user' => $user, 'token' => $token]
            )
            ->setFrom([Yii::$app->params['notificationEmail'] =>  'SEPESHA SYSTEM'])

            ->setTo($email)
            ->setSubject('Confirm your registration with SEPESHA SYSTEM')

            ->send();
    }
}