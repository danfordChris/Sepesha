<?php

namespace app\widgets;

use app\models\CustomHelper;
use Yii;
use yii\base\Widget;
use yii\helpers\Url;

class MainLinkWidget extends Widget
{
    public $wid;

    public function run()
    {
        $activeClass = (Yii::$app->controller->id === $_SESSION['controller'] && Yii::$app->controller->action->id === $_SESSION['action']) ? 'active' : '';

        $params = [$_SESSION['controller'] . '/' . $_SESSION['action']];
        if ($this->wid == CustomHelper::CASE_INTAKE_WORKFLOW) {
            $params['intake'] = $_SESSION['ref'];
        } else {
            $params['ref'] = $_SESSION['ref'];
        }

        $url = Url::to($params);

        echo '<div class="card">
                <div class="body">
                    <div id="mail-nav">
                        <h5 class="b-b p-10 text-strong " style="color:#0000FF !important;">View</h5>
                        <ul class="" id="mail-folders">
                            <li class="' . $activeClass . '">
                                <a href="' . $url . '" title="View">
                                    <i class="fas fa-calendar me-1"></i>' . CustomHelper::getControllerName($_SESSION['controller'], $this->wid) . '
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
              </div>';
    }
}
