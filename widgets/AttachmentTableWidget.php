<?php

namespace app\widgets;

use Yii;
use yii\base\Widget;
use yii\helpers\Url;
use yii\helpers\Html;
use app\models\Attachment;
use app\models\CustomHelper;

class AttachmentTableWidget extends Widget
{
    public $attachments;
    public $refno;

    public function run()
    {
        $this->registerJs(); // Register JavaScript for AJAX
        $this->attachments = Attachment::find()->where(['refno' => $this->refno])->all();
        if (!empty($this->attachments)) {
            echo '<div class="group2">';
            echo '<div class="table-responsive">';
            echo '<h6 style="font-weight:bold;" class="text-decoration-italic">Related Documents
            </h6>';
            echo "<table class='table table-bordered table-sm'>";
            echo "<thead>";
            echo "<tr>";
            echo "<th>Document Name</th>";
            //  echo "<th>Type</th>";
            // echo "<th>Description</th>";
            // echo "<th>Owner ID</th>";
            // echo "<th>Module</th>";
            echo "<th>Added By</th>";
            echo "<th>Added at</th>";
            echo "<th>Actions</th>";
            echo "</tr>";
            echo "</thead>";
            echo "<tbody>";

            foreach ($this->attachments as $attachment) {
                echo "<tr id='attachment-row-{$attachment->id}'>";
                echo "<td width='40%'>" . Html::encode($attachment->name) . "</td>";
                //  echo "<td>" . Html::encode($attachment->doc->documenttypeName->name) . "</td>";
                // echo "<td>" . Html::encode($attachment->description) . "</td>";
                // echo "<td>" . Html::encode($attachment->owner_id) . "</td>";
                // echo "<td>" . Html::encode($attachment->module) . "</td>";
                // echo "<td>" . Html::encode($attachment->status == 1 ? 'Active' : 'Inactive') . "</td>";
                echo "<td width='20%'>" . Html::encode(CustomHelper::getFullName($attachment->created_by)) . "</td>";
                echo "<td width='20%'>" . Html::encode($attachment->created_at) . "</td>";
                echo "<td width='20%'>";
                echo Html::a(' <i class="fas fa-file-pdf"></i> View document', '#', [
                    'class' => 'btn btn-primary btn-sm',
                    'data-bs-toggle' => 'modal',
                    'data-bs-target' => '#attachmentModal-' . $attachment->id,
                ]);
                echo " ";
                echo Html::a('<i class="fas fa-times"></i> remove', '#', [
                    'class' => 'btn btn-secondary btn-sm delete-attachment',
                    'data-id' => $attachment->id,
                    'data-url' => Url::to(['attachment/ajax-delete', 'id' => $attachment->id]),
                ]);

                echo "</td>";
                echo "</tr>";

                $this->renderModal($attachment);
            }

            echo "</tbody>";
            echo "</table>";
            echo "</div>";
            echo "</div>";
        } else {
            echo "<p style='font-weight:bold;color:red'>No attachments for this workflow.</p>";
        }
    }

    protected function renderModal($attachment)
    {
        // The modal content stays the same as in the previous step
        echo "
        <div class='modal fade' id='attachmentModal-{$attachment->id}' tabindex='-1' role='dialog' aria-labelledby='attachmentModalLabel-{$attachment->id}' aria-hidden='true'>
            <div class='modal-dialog modal-lg' role='document'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <h5 class='modal-title' id='attachmentModalLabel-{$attachment->id}'>" . Html::encode($attachment->name) . "</h5>
                        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                    <div class='modal-body'>
                     <embed src='" . Yii::getAlias('@web' . '/' . $attachment->attachment) . "' type='application/pdf' width='100%' height='500px'/>
                    </div>
                    <div class='modal-footer'>
                        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
                    </div>
                </div>
            </div>
        </div>
        ";
    }

    protected function registerJs()
    {
        $js = <<<JS
            // Use jQuery to handle the delete action via AJAX
            $('.delete-attachment').on('click', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                var id = $(this).data('id');

                if (confirm('Are you sure you want to delete this attachment?')) {
                    $.ajax({
                        url: url,
                        type: 'POST',
                        success: function(response) {
                            if (response.success) {
                                $('#attachment-row-' + id).remove(); // Remove row on success
                                alert(response.message);
                            } else {
                                alert(response.message);
                            }
                        },
                        error: function() {
                            alert('Error occurred while deleting attachment.');
                        }
                    });
                }
            });
JS;

        $this->getView()->registerJs($js);
    }
}
