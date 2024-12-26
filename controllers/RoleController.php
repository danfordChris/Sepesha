<?php

namespace app\controllers;

use Yii;
use app\models\Role;
use app\models\User;
use app\models\Roles;
use app\models\SubRole;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;

class RoleController extends Controller
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
                            return  User::auth('create_roles');
                        }
                    ],

                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_roles');
                        }
                    ],

                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_roles');
                        }
                    ],


                ],
            ],

            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }


    public function actionIndex()
    {
        $roles = Roles::find()->with('subRoles')->orderBy('type')->all();
        return $this->render('index', [
            'roles' => $roles,
        ]);
    }

    public function actionCreate()
    {
        $model = new Roles();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Data saved Successfully");
            return $this->redirect(['index']);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionUpdate($rid)
    {
        $model = $this->findModel($rid);
        $subRoles = SubRole::find()->where(['rid' => $model->rid])->all();
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', "Data saved Successfully");
            return $this->redirect(['update', 'rid' => $model->rid]);
        }

        return $this->render('update', [
            'model' => $model,
            'subRoles' => $subRoles,
        ]);
    }

    public function actionDelete($id)
    {
        $model = $this->findModel($id);
        $model->status = 0;
        $model->save();
        // $subrole = SubRole::findOne(['rid' => $id]);
        // $subrole->deleteAll();
        Yii::$app->session->setFlash('success', "Data saved Successfully");
        return $this->redirect(['index']);
    }

    protected function findModel($id)
    {
        if (($model = Roles::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    public function actionAddSubrole($roleId)
    {
        $model = $this->findModel($roleId);
        $subRole = new SubRole();
        $subRoles = SubRole::find()->where(['rid' => $model->rid])->all();

        if ($subRole->load(Yii::$app->request->post())) {
            $selectedValues = $subRole->roleList;
            foreach ($selectedValues as $value) {
                $subRole = new SubRole();
                $subRole->roleList = $value;
                $subRole->rid = $roleId;
                $subRole->name = $value;
                if (!$subRole->save()) {
                    // return json_encode($subRole->errors);
                    Yii::$app->session->setFlash('warning', "Item not saved");
                    //return $this->redirect(['update', 'rid' => $roleId]);
                    return $this->render('add-subrole', [
                        'subRole' => $subRole,
                        'model' => $model,
                        'subRoles' => $subRoles,

                    ]);
                }
            }
            Yii::$app->session->setFlash('success', "Data saved Successfully");
            return $this->redirect(['add-subrole', 'roleId' => $roleId]);
        }

        return $this->render('add-subrole', [
            'model' => $model,
            'subRole' => $subRole,
            'subRoles' => $subRoles,
        ]);
    }

    public function actionDeleteSubrole($id)
    {
        $subRole = SubRole::findOne($id);
        if ($subRole) {
            $roleId = $subRole->rid;
            $subRole->delete();
            Yii::$app->session->setFlash('success', "role removed Successfully");
            return $this->redirect(['index']);
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
