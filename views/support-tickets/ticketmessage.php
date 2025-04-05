<?php

use app\models\ClientInfo;
use kartik\form\ActiveForm;
use kartik\helpers\Html;
use yii\helpers\ArrayHelper;

?>




<div class="row">
    <div class="col-md-3 left-card">
        <div class="card">
            <div class="card-header" style="font-weight: bold; font-size: 1.1rem;">
                <i data-feather="user" style="margin-right: 5px;"></i> User Information
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <strong>Name:</strong><br> <?= Html::encode($model->clientInfo->fullName ?? "") ?>
                </li>
                <li class="list-group-item">
                    <strong>Email:</strong><br> <?= Html::encode($model->clientInfo->getEmail() ?? "") ?>
                </li>

                <li class="list-group-item">
                    <strong>Phone:</strong><br> <?= Html::encode($model->clientInfo->getPhoneNumber() ?? "") ?>
                </li>

                <li class="list-group-item">
                    <strong>Category:</strong><br> <?= Html::encode($model->clientInfo->role ?? "") ?>
                </li>

            </ul>
        </div>

        <div class="card">
            <div class="card-header" style="font-weight: bold; font-size: 1.1rem;">
                <i data-feather="clipboard" style="margin-right: 5px;"></i> Ticket Information
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <strong>Subject:</strong><br> <?= Html::encode($model->subject) ?>
                </li>
                <!-- <li class="list-group-item">
                    <strong>Category:</strong><br> <?= Html::encode($model->category) ?>
                </li> -->
                <li class="list-group-item">
                    <strong>Status:</strong><br>
                    <?php
                    $status = Html::encode($model->status);
                    if ($status == 'open') {
                        echo '<span class="badge bg-success">' . $status . '</span>';
                    } else {
                        echo '<span class="badge bg-danger">' . $status . '</span>';
                    }
                    ?>
                </li>
                <li class="list-group-item">
                    <strong>Priority:</strong><br> <?= Html::encode($model->priority) ?>
                </li>

            </ul>
        </div>
    </div>
    <div class="col-md-9 horizontal-card">


        <div class="card">
            <div class="card-body">
                <div class="card">
                    <div class="card-body">


                        <h5>


                            <div class="row">
                                <div class="col-md-9">
                                    <i data-feather="message-square"></i>
                                    <b>Message</b>
                                </div>
                                <div class="col-md-3">

                                    <button type="button" class="btn mb-2 float-end  btn-outline-info" data-bs-toggle="modal" data-bs-target="#rcamodal">
                                        <i class="fa fa-file"></i> View attachment</button>

                                </div>
                            </div>
                            <hr>
                        </h5>
                        <div style="background-color: #6777ef; padding: 10px; border-radius: 5px; display: inline-block; width: auto;color:white;">
                            <?php foreach ($messages as $msg) : ?>
                                <div style="font-size: 16px;">
                                <?= Html::encode(strip_tags($msg->message ?? "")) ?> <br>                                </div>
                                <div style="font-style: italic;color:black;font-size: 12px;">
                                    <?= Html::encode('Posted at ' . $msg->created_at ?? "") ?>

                                </div>

                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>

                <hr>

            </div>
        </div>


        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Reply</h5>



                <?php $form = ActiveForm::begin(); ?>
                <div class="row">
                    <?= $form->field($ticketmessageModel, 'message')->widget(\yii\redactor\widgets\Redactor::class, [
                        'clientOptions' => [
                            'imageManagerJson' => false,
                            'imageUpload' => false,
                            'fileUpload' => false,
                            'linkUpload' => false,
                            'lang' => 'en',
                        ]
                    ]) ?>
                </div>


                <div class="form-group">
                    <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
                </div>
                <?php ActiveForm::end(); ?>
            </div>

        </div>

    </div>
</div>

</div>


<div class="modal fade" id="rcamodal" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h4 class="modal-title mb-2 font-weight-bold text-white" id="formModal"><strong>Attachment</strong></h4>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <iframe src="<?= $model->attachment ?>" width="100%" height="600"></iframe>
            </div>
        </div>
    </div>
</div>