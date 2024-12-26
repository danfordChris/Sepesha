<?php
namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\User;
use yii\rbac\Role;

class RoleAssignmentController extends Controller
{
    public function actionIndex()
    {
        $auth = Yii::$app->authManager;
        $roles = $auth->getRoles();
        $users = User::find()->all();
        
        return $this->render('index', [
            'roles' => $roles,
            'users' => $users,
        ]);
    }

    public function actionAssign()
    {
        $auth = Yii::$app->authManager;
        $roleName = Yii::$app->request->post('role');
        $userId = Yii::$app->request->post('user');

        print_r($userId);
        exit;
        
        if ($roleName && $userId) {
            $role = $auth->getRole($roleName);
            $auth->assign($role, $userId);
            Yii::$app->session->setFlash('success', 'Role assigned successfully.');
        } else {
            Yii::$app->session->setFlash('error', 'Role or user not selected.');
        }

        return $this->redirect(['index']);
    }

    public function actionRevoke($userId, $roleName)
    {
        $auth = Yii::$app->authManager;
        $role = $auth->getRole($roleName);
        $auth->revoke($role, $userId);

        Yii::$app->session->setFlash('success', 'Role revoked successfully.');

        return $this->redirect(['index']);
    }
}