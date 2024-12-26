<?php

namespace app\components;

use Yii;
use app\models\Intake;
use app\models\WorkflowTools;
use yii\base\Component;
use yii\helpers\Html;

class IntakeToolsComponent extends Component
{

    public function getView($wid, $stid = null, $refno)
    {

        $toolsData = WorkflowTools::find()->where(['wid' => $wid, 'stid' => $stid])->where(['status' => 1, 'mandatory' => 1])->all();
        return  Yii::$app->view->render('@app/components/_view_workflow_tools', ['toolsData' => $toolsData, 'refno' => $refno]);
    }

    public function getViewNonMandatory($wid, $stid = null, $refno)
    {

        $toolsData = WorkflowTools::find()->where(['wid' => $wid])->where(['status' => 1, 'mandatory' => 1])->all();
        return  Yii::$app->view->render('@app/components/_view_workflow_tools', ['toolsData' => $toolsData, 'refno' => $refno, 'lazima' => false]);
    }
}