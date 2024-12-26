<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $roles yii\rbac\Role[] */
/* @var $users app\models\User[] */

$this->title = 'Role Assignment';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="role-assignment-index">
    <h1><?= Html::encode($this->title) ?></h1>



    <div class="role-assignment-form">
        <?php $form = ActiveForm::begin(['action' => ['assign']]); ?>

        <?= $form->field($model, 'roleName')->dropDownList(
            \yii\helpers\ArrayHelper::map($roles, 'name', 'name'),
            ['prompt' => 'Select Role']
        ) ?>

        <?= $form->field($model, 'userId')->dropDownList(
            \yii\helpers\ArrayHelper::map($users, 'id', 'username'),
            ['prompt' => 'Select User']
        ) ?>

        <div class="form-group">
            <?= Html::submitButton('Assign', ['class' => 'btn btn-success']) ?>
        </div>

        <?php ActiveForm::end(); ?>
    </div>

    <h2>Assigned Roles</h2>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>User</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($users as $user): ?>
            <?php $roles = \app\models\AuthRoleAssignment::getUserRoles($user->id); ?>
            <?php foreach ($roles as $role): ?>
            <tr>
                <td><?= Html::encode($user->username) ?></td>
                <td><?= Html::encode($role->name) ?></td>
                <td>
                    <?= Html::a('Revoke', ['revoke', 'userId' => $user->id, 'roleName' => $role->name], [
                                'class' => 'btn btn-danger',
                                'data-method' => 'post',
                                'data-confirm' => 'Are you sure you want to revoke this role?'
                            ]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>