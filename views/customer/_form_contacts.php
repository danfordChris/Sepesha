<?php

use app\models\Beneficiary;
use app\models\Bus;
use yii\helpers\Html;
use app\models\Customer;
use app\models\CustomHelper;
use app\models\Employee;
use kartik\depdrop\DepDrop;
use kartik\select2\Select2;
use kartik\widgets\ActiveForm;
use yii\helpers\Url;
use yii\web\UrlRule;

/** @var yii\web\View $this */
/** @var app\models\Customer $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="customer-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-4">
            <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'phone')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'relationship')->widget(Select2::class, [
                'data' => CustomHelper::getContactRelationships(),
                'options' => ['placeholder' => 'Select Relationship--','required'=>true],
                'pluginOptions' => [
                    'allowClear' => true,
                ],
            ])->label('Relationship') ?>

        </div>

    </div>

    <div class="row">

        <div class="col-md-4">
            <?= $form->field($model, 'pobox')->textInput() ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'region')->widget(Select2::class, [
                'data' => Beneficiary::getRegions(),
                'options' => ['id' => 'region-dropdown', 'placeholder' => 'Select Region'],
                'pluginOptions' => [
                    'allowClear' => true,
                    'dropdownParent' => '#exampleModalCenter',

                ],
            ])->label('Region')


            ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'district')->widget(DepDrop::class, [
                'options' => ['id' => 'district-dropdown', 'placeholder' => 'Select District'],
                'data' => Beneficiary::getDistricts(),
                'type' => DepDrop::TYPE_SELECT2,
                'pluginOptions' => [
                    'depends' => ['region-dropdown'],
                    'url' => Url::to(['site/fetch-districts']),
                    'allowClear' => true,

                ],
            ])->label('District') ?>

        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <?= $form->field($model, 'email')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="col-md-4">
            <?= $form->field($model, 'physical_address')->textInput(['maxlength' => true]) ?>

        </div>
        <?php if (!$model->isNewRecord) : ?>
            <div class="col-md-3">
                <?= $form->field($model, 'status')->widget(Select2::class, [
                    'data' => Employee::getStatusOptions(),
                    'options' => ['placeholder' => 'Select Status', 'required' => true],
                    'pluginOptions' => [
                        'allowClear' => true,
                    ],
                ])

                ?>
            </div>
        <?php endif; ?>
        <div class="col-md-4 mt-4">
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