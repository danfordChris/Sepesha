<?php

use kartik\helpers\Html;

?>


<div class="row">
    <div class="col-md-3 left-card">
        <div class="card">
            <div class="card-header" style="font-weight: bold; font-size: 1.1rem;">
                Ticket Information
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
                <h5 class="card-title">View Ticket # <?= Html::encode($model->id) ?></h5>
                Sender Role: <b><?= Html::encode($supportticketmessageModel->sender_role) ?></b>


            </div>

        </div>

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Combined Card</h5>


            </div>

        </div>
    </div>

</div>