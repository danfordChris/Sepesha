<?php

namespace app\components;

use Yii;
use app\models\Intake;
use yii\base\Component;
use yii\helpers\Html;

class DriverInfoComponent extends Component
{


    public function getView($id)
    {
        return  Yii::$app->view->render('@app/components/driver_info', ['id' => $id]);
    }
}
