<?php

namespace app\components;

use Yii;
use yii\base\Behavior;
use yii\base\Event;
use yii\web\Controller;

class UserActivityLogBehavior extends Behavior
{
    public function events()
    {
        return [
            Controller::EVENT_BEFORE_ACTION => 'logUserActivity',
        ];
    }

    public function logUserActivity($event)
    {
        $controller = $this->owner->id;
        $action = $event->action->id;
        $userId = Yii::$app->user->id ?? null;

        Yii::$app->userActivityLogger->logUserActivity($userId, $action, $controller);
    }
}
