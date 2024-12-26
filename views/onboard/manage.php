<?php

use app\widgets\AttachmentTableWidget;
use app\widgets\AttachmentWidget;
use app\widgets\CaseToolsWidget;
use app\widgets\GeneralCaseToolsWidget;
use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Intake $model */

$this->title = 'YLWS Link Association';
$this->params['breadcrumbs'][] = ['label' => 'Intakes', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="intake-view">
    <div class="card">
        <div class="card-body">
            <?php //= Yii::$app->beneficiary->getView($model) ?>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <!-- component goes here -->
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
            <div class="card">
                <div class="card-body">
                    <h5 style="font-weight:bold;" class="text-decoration-italic">YLWS Link Association</h5>

                    <?= $this->render('_form_update', [
                        'model' => $model,
                    ]) ?>
                    <?= AttachmentTableWidget::widget(['refno' => $model->refno]); ?>
                    <?= Yii::$app->approvals->getView($model) ?>
                </div>
            </div>
        </div>
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
                    <?= AttachmentWidget::widget(['attachmentModel' => $attachmentModel, 'wid' => $model->wid, 'stid' => $model->stid]) ?>
                </div>
            </div>
        </div>
    </div>
</div>