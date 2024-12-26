<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $roles app\models\Role[] */

$this->title = 'Roles';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="role-index card card-body">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Role', ['create'], ['class' => 'btn btn-success text-white']) ?>
    </p>

    <table class="table table-bordered table-stripped" id="save-stage" style="width: 100%;">
        <thead>
            <tr>
                <th>Name</th>
                <th>SubRoles</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($roles as $role) : ?>
            <tr>
                <td><?= Html::encode($role->name) ?></td>
                <td>
                    <?php foreach ($role->subRoles as $index => $subRole) : ?>
                    <?= $index + 1 ?>.
                    <?= Html::encode($subRole->name) ?>
                    <?= Html::a('<i class="fa fa-remove"></i>', ['delete-subrole', 'id' => $subRole->id], [
                                'class' => 'fa fa-trash text-danger',
                                'data' => [
                                    'confirm' => 'Are you sure you want to delete this item?',
                                    'method' => 'post',
                                ],
                            ]) ?>
                    <br>
                    <?php endforeach; ?>
                    <?= Html::a('Add SubRole', ['add-subrole', 'roleId' => $role->rid], ['class' => 'btn btn-primary btn-xs']) ?>
                </td>
                <td>
                    <?= Html::a('Update', ['update', 'rid' => $role->rid], ['class' => 'btn btn-primary']) ?>
                    <?= Html::a('Deactivate', ['delete', 'rid' => $role->rid], [
                            'class' => 'btn btn-danger text-white',
                            'data' => [
                                'confirm' => 'Are you sure you want to disable this item?',
                                'method' => 'post',
                            ],
                        ]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>