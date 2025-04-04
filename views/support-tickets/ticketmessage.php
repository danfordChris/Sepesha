<?php
use app\models\ClientInfo;
use kartik\form\ActiveForm;
use kartik\helpers\Html;
use yii\helpers\ArrayHelper;

$customerList = ClientInfo::getCustomerList();
$emailList = ClientInfo::getCustomerEmailByAuthKey();
$fullName = ArrayHelper::getValue($customerList, $supportticketmessageModel->sender_id, 'Full Name not found');
$email = ArrayHelper::getValue($emailList, $supportticketmessageModel->sender_id, 'Email not found');
?>


<div class="row">
    <div class="col-md-3 left-card">
        <div class="card">
            <div class="card-header" style="font-weight: bold; font-size: 1.8rem;">
                <i data-feather="clipboard" style="margin-right: 5px;"></i> Ticket Information
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <strong>Subject:</strong><br> <?= Html::encode($model->subject) ?>
                </li>
                <li class="list-group-item">
                    <strong>Category:</strong><br> <?= Html::encode($model->category) ?>
                </li>
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
                <h4 class="card-title">Sender Role # <?= Html::encode($supportticketmessageModel->sender_role) ?></h4>
                <div class="card">
                    <div class="card-body">


                        <h5>
                            <i data-feather="message-square"></i>
                            <b>Message</b>
                            <hr>
                        </h5>
                        <div style="background-color: rgb(50, 19, 190); padding: 10px; border-radius: 5px; display: inline-block; width: auto;color:white;">
                            <?= Html::encode($supportticketmessageModel->message) ?>
                        </div>
                    </div>
                </div>

                <hr>
                Posted by <?= Html::encode($supportticketmessageModel->created_by) ?> on <?= Yii::$app->formatter->asDatetime($supportticketmessageModel->created_at) ?>


            </div>
        </div>


        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Reply</h5>
                <?php $form = ActiveForm::begin(); ?>


                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Full Name</label>
                            <?= Html::textInput('full_name', $fullName, ['class' => 'form-control', 'disabled' => true]) ?>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Email</label>
                            <?= Html::textInput('email', $email, ['class' => 'form-control', 'disabled' => true]) ?>
                        </div>
                    </div>
                </div>

                <div class="row">
                    form
                </div>
            </div>
            <?php ActiveForm::end(); ?>
        </div>

    </div>
</div>

</div>