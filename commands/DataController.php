<?php

namespace app\commands;

use Yii;
use yii\console\Controller;
use yii\db\Migration;

class DataController extends  Controller
{
    public function actionInit()
    {
        $q = "DELETE FROM migration WHERE  version='m240531_203224_create_system_sidemenus_data'";
        Yii::$app->db->createCommand($q)->execute();

        $q = "DELETE FROM migration WHERE  version='m240914_170838_workflows_data'";
        Yii::$app->db->createCommand($q)->execute();

        $q = "DELETE FROM migration WHERE  version='m241009_180913_insert_default_tables_data'";
        Yii::$app->db->createCommand($q)->execute();
        $q = "DELETE FROM migration WHERE  version='m240914_130306_insert_case_tools'";
        Yii::$app->db->createCommand($q)->execute();

        echo "successful removed please run: 'php yii migrate' to re create new data";
    }
}
