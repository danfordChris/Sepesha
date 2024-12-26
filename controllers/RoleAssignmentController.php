<?php
namespace app\controllers;

use app\models\AuthRole;
use app\models\AuthRoleAssignment;
use Yii;
use yii\web\Controller;
use app\models\User; // Assuming you have a User model
use yii\filters\AccessControl;
use yii\filters\VerbFilter;

class RoleAssignmentController extends Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::class,
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('admin');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'create', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('create_role_assignment');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_role_assignment');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_role_assignment');
                        }
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }
    public function actionIndex()
    {
        $roles = AuthRole::getAllRoles();
        $users = User::find()->all();
        $model = new AuthRoleAssignment();

        return $this->render('index', ['roles' => $roles, 'users' => $users,'model' => $model]);
    }

    public function actionAssign()
    {
        $model = new AuthRoleAssignment();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', 'Role assigned successfully.');
        }

        return $this->redirect(['index']);
    }

    public function actionRevoke($userId, $roleName)
    {
        $model = new AuthRoleAssignment();
        $model->userId = $userId;
        $model->roleName = $roleName;

        if ($model->delete()) {
            Yii::$app->session->setFlash('success', 'Role revoked successfully.');
        }

        return $this->redirect(['index']);
    }
}