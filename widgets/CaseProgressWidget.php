<?php

namespace app\widgets;

use Yii;
use yii\base\Widget;
use yii\helpers\Html;
use yii\widgets\Pjax;
use app\models\CustomHelper;
use app\models\WorkflowTools;
use kartik\widgets\FileInput;
use kartik\widgets\ActiveForm;
use app\models\WorkflowDocuments;
use app\models\IntakeWorkflowTool;

class CaseProgressWidget extends Widget
{
    public $refno; // model instance passed from the view
    public $wid;
    public $stid = 1;
    public $intake_id;
    public function run()
    {
        $result = 0;
        $totalTools = WorkflowTools::find()->where(['wid' => $this->wid, 'stid' => $this->stid, 'status' => 1, 'mandatory' =>  1])->count();
        $totalFilledTool = IntakeWorkflowTool::find()
            ->where(['wid' => $this->wid, 'stid' => $this->stid, 'intake_id' => $this->intake_id])
            ->andWhere([
                'tool_id' => WorkflowTools::find()
                    ->select('id')
                    ->where([
                        'wid' => $this->wid,
                        'stid' => $this->stid,
                        'status' => 1,
                        'mandatory' => 1
                    ])
            ])
            ->select('tool_id')
            ->distinct()
            ->count();
        if ($totalTools > 0) {
            $result = $totalFilledTool / $totalTools * 100;
        }

        $currentStage = CustomHelper::getWorkflowStage($this->wid, $this->stid);
        $nextStage = CustomHelper::getWorkflowStage($this->wid, $this->stid + 1);
        $wf = CustomHelper::getWorkflowName($this->wid);
        $progress = '
         <div class="row">
         <h5 style="color:blue"> ' . strtoupper($wf) . '</h5> <hr>
             <div class="col">
                Current Stage :<br> ' . $currentStage . '
             </div>
            <div class="col-md-4">
             Current Progress:
              <div class="progress mb-0">
                      <div class="progress-bar bg-success" role="progressbar" data-width="' . $result . '%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> ' . number_format($result, 1) . '%</div>
                    </div>
             </div>
            </div>
            <br>
        <div class="row">
            </div>
            ';
        echo  $progress;
    }
}
