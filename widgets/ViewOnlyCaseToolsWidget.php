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

class ViewOnlyCaseToolsWidget extends Widget
{
    public $refno; // model instance passed from the view
    public $wid;
    public $stid = 1;
    public function run()
    {

        $toolsData = WorkflowTools::find()->where(['wid' => $this->wid, 'status' => 1])->all();
        echo '<div class="card">
        <div class="body">
            <div id="mail-nav">
                <h5 class="b-b p-10 text-strong">All Related Case Tools</h5>
                <ul class="" id="mail-folders">';
        foreach ($toolsData as $tool) {
            $totalCount = IntakeWorkflowTool::find()->where(['wid' => $this->wid, 'workflow_refno' => $this->refno, 'tool_id' => $tool->id])->count();
            $activeClass = (Yii::$app->controller->id === $tool->casetoolName->ctrl && Yii::$app->controller->action->id === $tool->casetoolName->action) ? 'active' : '';
            echo '<li class="' . $activeClass . '">';
            echo '<a href="' . Yii::$app->urlManager->createUrl([$tool->casetoolName->ctrl . '/' . $tool->casetoolName->action, 'tool' => $tool->id, 'ref' => $this->refno]) . '" title="Sent">';
            echo '<i class="fas fa-file fas-2x"></i> ' . $tool->casetoolName->name;
            if ($tool->mandatory == 1) {
                echo '<span class="text-danger">*</span> ';
            }
            $count = $totalCount > 0 ? '<span class="badge bg-primary"> ' . $totalCount . '</span>' : '';
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
