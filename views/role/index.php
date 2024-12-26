<?php

use app\models\User;
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
                <th>Module</th>
                <th>Type</th>
                <th>Code</th>
                <th>Actions</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($roles as $role) : ?>
                <tr>

                    <td><?= Html::encode($role->name) ?></td>
                    <td>
                        <?= Html::encode($role->module) ?>
                    </td>
                    <td>
                        <?= Html::encode($role->type) ?>
                    </td>

                    <td>
                        <?= Html::encode($role->code) ?>
                    </td>
                    <td>
                        <?php if ($role->type == 'main') : ?>
                            <?= Html::a('Add SubRole', ['add-subrole', 'roleId' => $role->rid], ['class' => 'btn btn-info text-white']) ?>
                        <?php endif ?>
                        <?= Html::a('<i class="fas fa-edit"></i> Update', ['update', 'rid' => $role->rid], ['class' => 'btn btn-primary']) ?>

                    </td>

                    <td>
                        <?php
                        $badgeColor = ($role->status == 'active' || $role->status == 1) ? 'success' : 'danger';
                        $status = ($role->status == 'active' || $role->status == 1) ? 'Active' : 'Inactive';
                        $badge = Html::tag('span', $status, ['class' => 'badge badge-' . $badgeColor]);
                        echo $badge;
                        ?>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>