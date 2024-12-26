<?php

namespace app\components;

use Yii;
use app\models\Intake;
use yii\base\Component;
use yii\helpers\Html;

class BeneficiaryInfoComponent extends Component
{


    public function getView($dataIntake)
    {
        return  Yii::$app->view->render('@app/components/url_info', ['dataIntake' => $dataIntake]);
    }
}
