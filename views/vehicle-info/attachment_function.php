<?php

use app\widgets\AttachmentTableWidget;
use app\widgets\AttachmentWidget;
use yii\helpers\Html;

?>

<div class="card">
    <div class="card-header bg-danger" style="height: 50px;">
        <h6 class="text-white"> <i class="material-icons">library_books</i><?= Html::encode('Attachment List ') ?></h6>
        <span class="float-right" style="text-align: right;">
        </span>
    </div>
    <div class="card-body">
        <?= AttachmentTableWidget::widget(['refno' => $model->id,'canEdit'=>$model->requserinput]); ?>
    </div>


</div>

<div class="modal fade" id="rcamodal" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong> Related documents
                    </strong></h4>
            </div>
            <div class="modal-body">
                <div class="attachment-form mt-3">
                    <?= AttachmentWidget::widget(['attachmentModel' => $attachmentModel, 'wid' => $model->wid, 'stid' => 1,'refno'=>$model->id]) ?>
                </div>
            </div>
        </div>
    </div>
</div>