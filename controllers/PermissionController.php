<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\AuthRole;
use app\models\Permission;
use app\models\User;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;

class PermissionController extends Controller
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
        $permissions = Permission::getAllPermissions();
        return $this->render('index', ['permissions' => $permissions]);
    }

    public function actionCreate()
    {
        $model = new Permission();
        $roles = AuthRole::getAllRoles();
        // if ($model->load(Yii::$app->request->post()) && $model->save()) {
        //     return $this->redirect(['index']);
        // }

        //    return json_encode( Yii::$app->authManager->getRules());
        //    exit;

        if ($model->load(Yii::$app->request->post())) {
            $auth = Yii::$app->authManager;
            $permission = $auth->createPermission($model->name);
            $permission->description = $model->description;
            $permission->ruleName = 'admin1';
            if ($auth->add($permission)) {
                Yii::$app->session->setFlash('success', 'Permission created successfully.');
                return $this->redirect(['index']); // Redirect to permission index page
            } else {
                Yii::$app->session->setFlash('error', 'Failed to create permission.');
            }
        }


        return $this->render('create', ['model' => $model, 'roles' => $roles]);
    }


    public function actionUpdate($name)
    {
        $roles = AuthRole::getAllRoles();
        $permission = Permission::find($name);
        $model = new Permission();
        $model->name = $permission->name;
        $model->description = $permission->description;
        $model->rule_name = $permission->rule_name;

        if ($model->load(Yii::$app->request->post()) && $model->update($name)) {
            return $this->redirect(['index']);
        }

        return $this->render('update', ['model' => $model, 'roles' => $roles]);
    }

    public function actionDelete($name)
    {
        $model = new Permission();
        $model->delete($name);
        return $this->redirect(['index']);
    }
}
