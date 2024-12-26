<?php

use app\models\Durations;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Durations $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="durations-form">

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

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description')->textarea(['rows' => 6]) ?>

    <?php if (!$model->isNewRecord) : ?>
                <?= $form->field($model, 'status')->dropDownList(Durations::getStatusOptions()) ?>
        <?php endif; ?>
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
