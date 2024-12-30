<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\Employee;
use yii\filters\VerbFilter;
use app\models\EmployeeSearch;
use app\models\Notification;
use app\models\User;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;
use yii\web\Response;
use yii\web\UploadedFile;

/**
 * EmployeeController implements the CRUD actions for Employee model.
 */
class EmployeeController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::class,
                ///'only' => ['logout', 'signup'],
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
                        'actions' => ['index', 'create', 'view', 'add-user'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('create_employee');
                        }
                    ],

                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update', 'add-user'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_employee');
                        }
                    ],

                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_employee');
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

    /**
     * Lists all Employee models.
     *
     * @return string
     */


    public function actionIndex()
    {
        // $this->Auth();
        $model = new Employee;
        $searchModel = new EmployeeSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Employee Added Successfully");
                    return $this->redirect(['index']);
                } else
                    Yii::$app->session->setFlash('danger', 'Failed to Add Employee!.');
            } else {

                $model->loadDefaultValues();
            }
        }

        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'model' => $model,
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionAddUser($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $employee = $this->findModel($number);
        $userexists = $employee->getUserStatus($employee->email);

        if (!$userexists) {
            $user = new User();

            if ($user->signup($employee)) {
                $employee->updateAttributes(['is_user' => 1]);
                $employee->save(false);
                Yii::$app->session->setFlash('success', "Employee Added as User Successfully");
                return $this->redirect('index');
            } else {
                Yii::$app->session->setFlash('success', "Failed to Add User");
                return $this->redirect('index');
            }
        } else {
            $emailtemplate = '<p>Hello ' . $employee->getFullName() . ',</strong></p>
            <p>You have been successfully registered to  <strong>' . 'Sepesha Backend System' . '</strong> </p>
            <p>. Please click the following link to confirm your email: ' . Yii::$app->urlManager->createAbsoluteUrl(['site/confirmemail', 'token' => $userexists->confirmation_token]) . '</p>';
            $subject = "Employee Registration at RCAMS";
            Notification::sendConfirmationEmailRepeat($employee, $userexists->confirmation_token, $userexists->email);
            Notification::emailnotificationaddeduser($emailtemplate, $subject, $employee, $userexists->email);
            $employee->updateAttributes(['is_user' => 1]);
            $employee->save(false);
            Yii::$app->session->setFlash('success', "Employee Added as User Successfully");
            return $this->redirect('index');
        }
    }

    /**
     * Displays a single Employee model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        return $this->render('view', [
            'model' => $this->findModel($number),
        ]);
    }

    /**
     * Creates a new Employee model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Employee();
        $createuser = new User();

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $profilePic = UploadedFile::getInstance($model, 'photo');

                if ($profilePic) {
                    $model->photo = time() . 'empphoto.' . $profilePic->extension;
                    $pic = $model->photo;
                }


                if ($model->save()) {
                    if ($profilePic) {
                        $profilePic->saveAs('uploads/employee/photo/' . $pic);
                    }
                    // if ($model->is_user == 1) {
                    //     $createuser->signup($model);
                    //     Yii::$app->session->setFlash('success', 'Employee successfully registered credentials were sent to ' . $model->email);
                    //     return $this->redirect(['index']);
                    // }
                    else {
                        Yii::$app->session->setFlash('success', 'Employee successfully registered');
                        return $this->redirect(['index']);
                    }
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Employee model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */

    public function actionUpdate($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $model = $this->findModel($number);
        $createuser = new User();

        $existing = $model->photo;

        $user_status = $model->is_user;

        $model->phone = substr($model->phone, 3);

        if ($this->request->isPost && $model->load($this->request->post())) {

            $profilePic = UploadedFile::getInstance($model, 'photo');
            // $profilePic = $_FILES['photo'];


            if ($profilePic) {
                $model->photo = time() . 'empphoto.' . $profilePic->extension;
                $pic = $model->photo;
            } else {
                $model->photo = $existing;
            }

            if ($model->save()) {
                if ($profilePic) {
                    $profilePic->saveAs('uploads/employee/photo/' . $pic);
                    return $this->redirect(['index']);
                }
                // if ($user_status != 1) {
                //     if ($model->is_user == 1) {
                //         $createuser->signup($model);
                //         Yii::$app->session->setFlash('success', "Employee: " . $model->getFullName() . "  Updated successfully as user credentials were sent to: " . $model->email);
                //         return $this->redirect(['index']);
                //     }
                // }
                else {
                    Yii::$app->session->setFlash('success', "Employee: " . $model->getFullName() . "  Updated successfully");
                    return $this->redirect(['index']);
                }
            } else
                Yii::$app->session->setFlash('danger', 'Failed to update details!.');
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Employee model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Employee model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Employee the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Employee::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }


    public function findUser($email)
    {
        if (($model = User::findOne(['email' => $email])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    public function actionGetEmployeeEmail($empId)
    {
        $employees = Employee::find()->where(['id' => $empId])->one();
        $employee = $employees['email'];

        Yii::$app->response->format = Response::FORMAT_JSON;
        return ['employee' => $employee];
    }
}
