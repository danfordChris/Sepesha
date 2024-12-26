<?php

namespace app\widgets;

use app\models\IntakeWorkflowTool;
use app\models\WorkflowDocuments;
use app\models\WorkflowTools;
use Yii;
use yii\base\Widget;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;
use kartik\widgets\FileInput;
use yii\widgets\Pjax;

class CaseToolsWidget extends Widget
{
    public $refno; // model instance passed from the view
    public $wid;
    public $stid = 1;
    public function run()
    {

        // function activeLink($controllerId, $actionId)
        // {
        //     $activeIntake = (Yii::$app->controller->id == $controllerId && Yii::$app->controller->action->id == $actionId) ? 'active' : '';
        //     return  $activeIntake;
        // }

        $toolsData = WorkflowTools::find()->where(['wid' => $this->wid, 'stid' => $this->stid, 'status' => 1, 'mandatory' => 1])->all();
        echo '<div class="card">
        <div class="body">
            <div id="mail-nav">
                <h5 class="b-b p-10 text-strong; text-primary">Mandatory Case Tools</h5>
                <ul class="" id="mail-folders">';

        $checked = null;
        foreach ($toolsData as $tool) {

            $totalCount = IntakeWorkflowTool::find()->where(['wid' => $this->wid, 'workflow_refno' => $this->refno, 'tool_id' => $tool->id])->count();
            if ($totalCount > 0) {
                $checked = '<i class="text-success fa fa-check"></i> ';
            }

            $activeClass = (Yii::$app->controller->id === $tool->casetoolName->ctrl && Yii::$app->controller->action->id === $tool->casetoolName->action) ? 'active' : '';
            echo '<li class="' . $activeClass . '">';

            echo '<a class="text-primary" href="' . Yii::$app->urlManager->createUrl([$tool->casetoolName->ctrl . '/' . $tool->casetoolName->action, 'tool' => $tool->id, 'ref' => $this->refno]) . '" title="Sent">';
            echo '<i class="fas fa-file fas-2x"></i> ' . $tool->casetoolName->name;
            if ($tool->mandatory == 1) {
                echo '<span class="text-danger">*</span> ';
            }
            $count = $totalCount > 0 ? '<span class="" style="font-weight:bold;color:green"> - (' . $totalCount . ') </span>' . '   <i class="text-success fa fa-check"></i> ' : '';
            echo  $count;
            echo '</a>';
            echo '</li>';
        }

        echo '  </ul>
            </div>
        </div>
    </div>';
    }
}
