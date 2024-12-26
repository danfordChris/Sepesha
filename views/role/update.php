<?php

use app\models\CustomHelper;
use yii\helpers\Html;
use kartik\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Role */
/* @var $form yii\widgets\ActiveForm */
/* @var $subRoles app\models\SubRole[] */

$this->title = 'Update Role: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Roles', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'rid' => $model->rid]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="role-update card">

    <div class="card-body">


        <h2>Roles Management for Main Role : <span class="text-danger"> <?= $model->name ?></span></h2>


        <div class="role-form">

            <?php $form = ActiveForm::begin(); ?>
            <div class="row">
                <div class="col">
                    <?= $form->field($model, 'name')->textInput(['maxlength' => true, 'readOnly' => false]) ?>
                    <?= $form->field($model, 'module')->textInput(['maxlength' => true, 'placeholder' => 'eg.eg BANK ACCOUNTS']) ?>
                </div>

                <div class="col">
                    <?= $form->field($model, 'type')->dropDownList(['main' => 'main', 'other' => 'other'], ['prompt' => Yii::t('app', '--- Select type ---')]) ?>
                    <?php if (!$model->isNewRecord) : ?>
                    <?= $form->field($model, 'status')->dropDownList(CustomHelper::getStatusOptions()) ?>
                    <?php endif; ?>
                </div>
            </div>

            <div class="form-group">
                <?= Html::a('<i class="fas fa-angle-double-left"></i> Back', ['index'], ['class' => 'btn btn-dark']) ?>

                <?= Html::submitButton('Update Role', ['class' => 'btn btn-success'])
                ?>
            </div>

            <?php ActiveForm::end(); ?>
        </div>
        <hr>
        <p>
            <?php if ($model->type == 'main') : ?>
            <?= Html::a('Add SubRole', ['add-subrole', 'roleId' => $model->rid], ['class' => 'btn btn-info text-white']) ?>
            <?php endif ?>
        </p>

        <?php if ($model->type == 'main') : ?>
        <h4>Added Subroles </h4>
        <hr>
        <div class="table-responsive">
            <table class="table  table-hover dataTable" id="save-stage" style="width: 100%;"
                aria-describedby="save-stage_info">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($subRoles as $subRole) : ?>
                    <tr>
                        <td><?= Html::encode($subRole->name) ?></td>
                        <td>
                            <?= Html::a('Remove', ['delete-subrole', 'id' => $subRole->id], [
                                        'class' => 'btn btn-danger btn-xs text-white',
                                        'data' => [
                                            'confirm' => 'Are you sure you want to delete this item?',
                                            'method' => 'post',
                                        ],
                                    ]) ?>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>

        </div>
        <?php endif ?>


    </div>
</div>