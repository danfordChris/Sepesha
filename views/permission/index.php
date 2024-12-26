<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $permissions yii\rbac\Permission[] */

$this->title = 'Permissions';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="permission-index">
    <h1><?= Html::encode($this->title) ?></h1>

    <p><?= Html::a('Create Permission', ['create'], ['class' => 'btn btn-success']) ?></p>

    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($permissions as $permission): ?>
            <tr>
                <td><?= Html::encode($permission->name) ?></td>
                <td><?= Html::encode($permission->description) ?></td>
                <td>
                    <?= Html::a('Update', ['update', 'name' => $permission->name], ['class' => 'btn btn-primary']) ?>
                    <?= Html::a('Delete', ['delete', 'name' => $permission->name], ['class' => 'btn btn-danger', 'data-method' => 'post', 'data-confirm' => 'Are you sure you want to delete this item?']) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>