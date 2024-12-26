<?php

namespace app\widgets;

use app\models\WorkflowDocuments;
use app\models\WorkflowTools;
use Yii;
use yii\base\Widget;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;
use kartik\widgets\FileInput;
use yii\widgets\Pjax;

class AttachmentWidget extends Widget
{
    public $attachmentModel; // model instance passed from the view
    public $wid;
    public $stid;
    public function run()
    {
        Pjax::begin();


        $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]);

        echo $form->errorSummary($this->attachmentModel);
        echo $form->field(
            $this->attachmentModel,
            'type'
        )->dropDownList(WorkflowDocuments::getDocumentByWorkflowAndStage($this->wid, $this->stid), ['prompt' =>
        '--select--']);
        echo $form->field($this->attachmentModel, 'attachment')->label(false)->widget(FileInput::class, [
            'pluginOptions' => [
                'allowedFileExtensions' => ['pdf'],
                'width' => '300px',
                'showCaption' => false,
                'dropZoneEnabled' =>
                false,
                'showRemove' => false,
                'showUpload' => false,
                'showCancel' => false,
                'browseClass' => 'btn btn-dark btn-block',
                'browseIcon' => '<i class="fa fa-upload"></i> ',
                'browseLabel' => $this->attachmentModel->isNewRecord ? '&nbsp;&nbsp;Add
attachment (doc ,xls , or pdf maximum 2MB)-optional' : '&nbsp;&nbsp;Re Upload document(doc ,xls , or pdf maximum 2MB)'
            ]
        ]);
        echo '<button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal"> Cancel </button> ';
        echo Html::submitButton('Upload', ['class' => 'btn btn-info']);
        ActiveForm::end();
        Pjax::end();
    }
}
