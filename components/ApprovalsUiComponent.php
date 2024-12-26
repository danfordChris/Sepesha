<?php

namespace app\components;

use app\models\CustomHelper;
use Yii;
use app\models\Intake;
use yii\base\Component;
use yii\helpers\Html;

class ApprovalsUiComponent extends Component
{


    public function getView($mainModel, $id)
    {
        $approvalsWf = CustomHelper::getApprovalLogs($mainModel->wid, $id);
        return  Yii::$app->view->render('@app/components/_view_approvals', ['approvalsWf' => $approvalsWf, 'mainModel' => $mainModel]);
    }
}
