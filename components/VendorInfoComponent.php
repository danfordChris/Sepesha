<?php

namespace app\components;

use Yii;
use app\models\Intake;
use yii\base\Component;
use yii\helpers\Html;

class VendorInfoComponent extends Component
{


    public function getView($id)
    {
        return  Yii::$app->view->render('@app/components/vendor_info', ['id' => $id]);
    }
}
