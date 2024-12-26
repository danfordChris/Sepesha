<?php

use app\models\CustomHelper;
use kartik\widgets\ActiveForm;
use yii\helpers\Html;


/** @var yii\web\View $this */
/** @var app\models\Departments $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="departments-form">


<?php
    if ($model->isNewRecord) {
        $action = 'create';
        $parent = '#rcamodal';
        $md = 4;
    } else {

        $action = 'update?rca=' . Yii::$app->getSecurity()->hashData($model->did, 'gmtdev');
        $parent = '';
        $md = 3;
    }
    $form = ActiveForm::begin([
        'action' => [$action],
        'method' => 'post',

    ]); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'sname')->textInput(['maxlength' => true]) ?>



 
    <?php if (!$model->isNewRecord) : ?>
                <?= $form->field($model, 'status')->dropDownList(CustomHelper::getStatusOptions()) ?>
        <?php endif; ?>



    <div class="form-group">
       
   

       <?php if ($model->isNewRecord) : ?>
                   <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                   <?php echo Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-outline-info']); ?>
               <?php else : ?>
                <?= Html::a('<i class="fas fa-angle-double-left"></i>Back', ['index'], ['class' => 'btn btn-dark']) ?>
                   <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
               <?php endif; ?>
               </div>

    <?php ActiveForm::end(); ?>

</div>
