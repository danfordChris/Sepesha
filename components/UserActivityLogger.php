<?php

namespace app\components;

use Yii;
use yii\base\Component;
use yii\helpers\VarDumper;

class UserActivityLogger extends Component
{
    public function logUserActivity($userId, $action, $controller = null)
    {
        $model = new \app\models\UserActivityLog();
        $model->user_id = $userId;
        $model->action = $action;
        $model->controller = $controller ?? Yii::$app->controller->id;
        $model->user_ip = Yii::$app->request->userIP; // Get user IP
        $model->user_agent = Yii::$app->request->userAgent; // Get user agent
    
        
    }
}

