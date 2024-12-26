<?php

use app\models\Beneficiary;
use app\models\Programs;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;
use yii\helpers\Html;


/** @var yii\web\View $this */
/** @var app\models\Programs $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="programs-form">

<?php
    if ($model->isNewRecord) {
        $action = 'create';
        $parent = '#rcamodal';
        $md = 4;
    } else {

        $action = 'update?rca=' . Yii::$app->getSecurity()->hashData($model->id, 'gmtdev');
        $parent = '';
        $md = 3;
    }
    $form = ActiveForm::begin([
        'action' => [$action],
        'method' => 'post',

    ]); ?>

    <div class="row">
        <div class="col-md-12">
        <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
        </div>
      
    </div>
<div class="row">
    <div class="col-md-12">
    <?= $form->field($model, 'description')->textarea(['rows' => 6]) ?>
    </div>
    
</div>
<div class="">
    <?php if (!$model->isNewRecord) : ?>
                <?= $form->field($model, 'status')->dropDownList(Programs::getStatusOptions()) ?>
        <?php endif; ?>
    </div>






<div class="form-group">
       <?php if ($model->isNewRecord) : ?>
                   <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                   <?php echo Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-outline-info']); ?>
               <?php else : ?>
                   <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
                   <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
               <?php endif; ?>
               </div>

    <?php ActiveForm::end(); ?>
</div>
