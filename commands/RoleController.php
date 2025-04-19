<?php

namespace app\commands;

use Yii;
use yii\console\Controller;
use yii\db\Migration;

class RoleController extends  Controller
{
    public function actionInit()
    {
        $q = "DELETE FROM migration WHERE  version='m240531_212422_create_uroles_table'";
        Yii::$app->db->createCommand($q)->execute();
        echo "successful removed please run: 'php yii migrate' to re create new data";
    }
}