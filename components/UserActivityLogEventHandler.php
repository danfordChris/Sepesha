<?php

namespace app\components;

use Yii;
use yii\base\Event;

class UserActivityLogEventHandler
{
    public static function handleAction($event, $userActivityLogger)
    {
        if ($event->action && $event->action->controller) {
            $controller = $event->action->controller->id;
            $action = $event->action->id;
            $userId = Yii::$app->user->id ?? null;
            Yii::$app->userActivityLogger->logUserActivity($userId, $action, $controller);
        } else {
            Yii::warning('Action or controller is null in UserActivityLogEventHandler');
        }
    }
}
