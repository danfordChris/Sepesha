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

    <?php if (Yii::$app->session->hasFlash('success')): ?>
    <div class="alert alert-success">
        <?= Yii::$app->session->getFlash('success') ?>
    </div>
    <?php elseif (Yii::$app->session->hasFlash('error')): ?>
    <div class="alert alert-danger">
        <?= Yii::$app->session->getFlash('error') ?>
    </div>
    <?php endif; ?>

    <div class="role-assignment-form">

        <?php $form = ActiveForm::begin(['action' => ['assign']]); ?>

        <?= $form->field(new \yii\base\DynamicModel(['role']), 'role')->dropDownList(
            \yii\helpers\ArrayHelper::map($roles, 'name', 'name'),
            ['prompt' => 'Select Role']
        )->label('Role') ?>

        <?= $form->field(new \yii\base\DynamicModel(['user']), 'user')->dropDownList(
            \yii\helpers\ArrayHelper::map($users, 'id', 'username'),
            ['prompt' => 'Select User']
        )->label('User') ?>

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
            <?php $assignedRoles = Yii::$app->authManager->getRolesByUser($user->id); ?>
            <?php foreach ($assignedRoles as $role): ?>
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