<?php
use app\models\WorkflowDocuments;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;
use yii\helpers\Html;


/** @var yii\web\View $this */
/** @var app\models\WorkflowDocuments $model */
/** @var yii\widgets\ActiveForm $form */
?>
<div class="workflow-documents-form">

<?php
    if ($model->isNewRecord) {
        $action = 'create';
        $parent = '#rcamodal';
        $md = 4;
    } else {

        $action = 'update?rca=' . Yii::$app->getSecurity()->hashData($model->docuid, 'gmtdev');
        $parent = '';
        $md = 3;
    }
    $form = ActiveForm::begin([
        'action' => [$action],
        'method' => 'post',

    ]); ?>

<div class="row">
    <div class="col-md-6">
    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    </div>
    <div class="col-md-6">
    <?= $form->field($model, 'type')->textInput() ?>

    </div>
</div>

<div class="row">
    <div class="col-md-12">
    <?= $form->field($model, 'descr')->textarea(['rows' => 6]) ?>

    </div>
</div>



    <div class="row">

<?php if (!$model->isNewRecord) : ?>
    <div class="col-md-3">
        <?= $form->field($model, 'status')->widget(Select2::class, [
            'data' => WorkflowDocuments::getStatusOptions(),
            'options' => ['placeholder' => 'Select Status', 'required' => true],
            'pluginOptions' => [
                'allowClear' => true,
            ],
        ])

        ?>
    </div>
<?php endif; ?>
<div class="col-md-3 mt-4">
    <?php if ($model->isNewRecord) : ?>
        <button type="button" class=" btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
        <?php echo Html::submitButton(Yii::t('app', 'Create'), ['class' => 'btn btn-outline-info']); ?>
    <?php else : ?>
        <?php echo Html::a('<i class="fa fa-arrow-left"></i> Back', ['index'], ['class' => 'btn btn-secondary']); ?>
        <?php echo Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']); ?>
    <?php endif; ?>
</div>

</div>

    <?php ActiveForm::end(); ?>

</div>
