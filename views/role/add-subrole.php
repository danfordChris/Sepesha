<?php

use app\models\Roles;
use yii\helpers\Html;
use kartik\widgets\Select2;
use kartik\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\SubRole */
/* @var $form yii\widgets\ActiveForm */

$this->title = 'Add SubRole';
$this->params['breadcrumbs'][] = ['label' => 'Roles', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="subrole-add card card-body card-info">
    <h2>Add subroles to Main Role : <span class="text-danger"> <?= $model->name ?></span></h2>

    <div class="subrole-form">

        <?php $form = ActiveForm::begin(); ?>
        <i class="text-danger"> <?= $form->errorSummary($model); ?></i>
        <?= $form->field($subRole, 'roleList')->widget(Select2::class, [
            'data' => Roles::getRolesOther($model->rid),
            'theme' => Select2::THEME_BOOTSTRAP,
            'options' => ['placeholder' => '--select--', 'multiple' => true], 'pluginOptions' => ['allowClear' => true,],
        ]); ?>
        <div class="form-group">
            <?= Html::a('<i class="fas fa-angle-double-left"></i>Back', ['index'], ['class' => 'btn btn-dark']) ?>

            <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
        </div>

        <?php ActiveForm::end(); ?>

    </div>


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

</div>