<?php

use yii\helpers\Html;
use app\models\Offices;
use app\models\Companies;
use app\models\Customers;
use kartik\select2\Select2;
use app\models\MonthSummary;
use yii\helpers\ArrayHelper;
use kartik\widgets\ActiveForm;
use kartik\widgets\DatePicker;

/**
 * @var yii\web\View $this
 * @var app\models\Companies $model
 * @var yii\widgets\ActiveForm $form
 */
?>

<div class="companies-search">





    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>


    <div id="accordion">
        <div class="accordion">
            <div class="accordion-body collapse" id="panel-body-1" data-parent="#accordion">
                <div class="card">
                    <div class="card-body">
                        <div class="row">

                            <div class="col-md-3">
                                <?= $form->field($model, 'company_id')->dropDownList(ArrayHelper::map(Companies::find()->all(), 'company_id', 'company_name'), ['prompt' => 'Select Company..']) ?>
                            </div>
                            <div class="col-md-3 mt-4">
                                <div class="form-group">
                                    <?= Html::submitButton('<span class=" fa fa-search fa-1x"> Search</span>', ['class' => 'btn btn-primary']) ?>
                                    <?= Html::a('<i class="fa fa-history"></i> Reset ', ['index'], ['class' => 'btn btn-info']); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <?php ActiveForm::end(); ?>

</div>