<?php

use app\models\CarePlan;
use app\models\CustomHelper;
use app\models\User;
use yii\helpers\Html;
use app\widgets\AttachmentTableWidget;
use app\widgets\AttachmentWidget;

?>
<div class="mains">
    <div class="card">
        <div class="card-body">
            <?= Yii::$app->vendor->getView($mainModel->id) ?>
        </div>
    </div>

    <div class="row">


        <div class="">
            <div class="card">
                <div class="card-body">
                    <!-- <h5 style="font-weight:bold;" class="text-decoration-italic">YLWS with no Link Association</h5> -->

                    <?= Yii::$app->approvals->getView($mainModel,$mainModel->auth_key) ?>

                    <?= AttachmentTableWidget::widget(['refno' =>$mainModel->auth_key]); ?>

                    <?= $this->render('_form_approvals', [
                            'mainModel' => $mainModel,
                            'modelApproval' => $modelApproval,
                        ]) ?>



                </div>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="rcamodal2" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong> Related documents
                    </strong></h4>
            </div>
            <div class="modal-body">
                <div class="attachment-form mt-3">
                    <?= AttachmentWidget::widget(['attachmentModel' => $attachmentModel, 'wid' => $mainModel->wid, 'stid' => $mainModel->stid]) ?>
                </div>
            </div>
        </div>
    </div>
</div>