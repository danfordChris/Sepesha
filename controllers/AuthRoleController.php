<?php

namespace app\controllers;

use app\models\AuthRole;
use Yii;
use yii\web\Controller;
use app\models\Role;
use app\models\User;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;

class AuthRoleController extends Controller
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
        $roles = AuthRole::getAllRoles();
        return $this->render('index', ['roles' => $roles]);
    }

    public function actionCreate()
    {
        $model = new AuthRole();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        }

        return $this->render('create', ['model' => $model]);
    }

    public function actionUpdate($name)
    {
        $role = AuthRole::find($name);
        $model = new AuthRole();
        $model->name = $role->name;
        $model->description = $role->description;

        if ($model->load(Yii::$app->request->post()) && $model->update($name)) {
            return $this->redirect(['index']);
        }

        return $this->render('update', ['model' => $model]);
    }

    public function actionDelete($name)
    {
        $model = new AuthRole();
        $model->delete($name);
        return $this->redirect(['index']);
    }
}
