<?php

use yii\helpers\Html;
use app\models\CustomHelper;

/** @var yii\web\View $this */
/** @var app\models\Vehicle $model */

$this->title = Yii::t('app', 'Information for Vehicle: {name}', [
    'name' => $model->plate_number,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Vehicles'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>

<div>
    <div class="card">
        <div class="card-header">
            <h4><?= Html::encode($this->title) ?> |
                <?= CustomHelper::getWorkflowStage($model->wid, $model->stid, $model->requserinput) ?? '' ?> |
                <?= CustomHelper::getVehicleStatus($model->status) ?? ''?>

            </h4>
        </div>
        <div class="card-body">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                        aria-controls="home" aria-selected="true"> <i class="fa fa-truck"></i> My Vehicle</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                        aria-controls="profile" aria-selected="false" tabindex="-1"><i class="fa fa-user-edit"></i>
                        Update my profile</a>
                </li>

            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="vehicle-update">
                        <div class="">
                            <div class="">
                                <?= Yii::$app->driver->getView($model->id) ?>
                            </div>
                        </div>

                        <?php if (!$model->isNewRecord): ?>
                        <?= $this->render('attachment_function', [
                                'model' => $model,
                                'attachmentModel' => $attachmentModel
                            ]) ?>
                        <?php endif ?>
                        <div class="">
                            <div class="">

                                <h6 class="bg-danger text-white card-header card-title "
                                    style="background-color:#1B5E20;height:3em;"><i class="fa fa-truck"> </i>&nbsp;
                                    <?= Html::encode($this->title)  ?>
                                    | &nbsp;<?= CustomHelper::getWorkflowStage($model->wid, $model->stid, $model->requserinput)
                                                ?? '' ?>

                                </h6>

                                <?= $this->render('_form', [
                                    'model' => $model,
                                    'attachmentModel' => $attachmentModel
                                ]) ?>




                            </div>
                        </div>


                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <?= $this->render('/auth/profile', [
                        'model' => $modelUser,
                        'attachmentModel' => $attachmentModel
                    ]) ?>
                </div>

            </div>
        </div>
    </div>
</div>