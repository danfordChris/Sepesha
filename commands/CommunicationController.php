<?php

namespace app\commands;

use Yii;
use Throwable;
use yii\db\Migration;
use yii\console\Controller;

class CommunicationController extends  Controller
{

    public function actionTestEmail()
    {
        Yii::$app->mailer->compose()
            ->setTo(['mosesmberwa@gmail.com'])
            ->setFrom([Yii::$app->params['notificationEmail'] => 'SEPESHA TEST EMAIL'])
            ->setSubject('TEST SEPESHA EMAIL')
            ->setTextBody('We are testing if SEPESHA mail  work')
            ->send();
    }


    public function actionSendEmail()
    {
        $q = "SELECT ntid,temail,subject,email_notice,femail FROM notifications WHERE esent ='N'";
        $rst = Yii::$app->db->createCommand($q)->queryAll(false);
        foreach ($rst as $rs) {
            $mail = Yii::$app->mailer->compose()->setFrom([Yii::$app->params['notificationEmail'] => Yii::$app->name]);
            $mail->setTo($rs[1]);
            $mail->setSubject($rs[2]);
            $mail->setHtmlBody($rs[3]);
            // if (!empty($rs[5])) {
            //     $mail->attach($rs[5]);
            // }
            try {
                if ($mail->send()) {
                    Yii::$app->db->createCommand("UPDATE notifications SET esent ='Y', edatesent = NOW() WHERE ntid ='$rs[0]'")->execute();
                }
            } catch (Throwable $e) {
                //do nothing
                Yii::error('Failed to send email: ' . $e->getMessage());
            }
        }
    }
}
