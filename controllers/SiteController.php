<?php

namespace app\controllers;

use Yii;
use app\models\User;
use yii\web\Response;
use yii\helpers\Jason;
use app\models\Offices;
use yii\web\Controller;
use app\models\Customer;
use app\models\Companies;
use app\models\LoginForm;
use app\models\SignupForm;
use app\models\UserSearch;
use app\models\ContactForm;
use yii\filters\VerbFilter;
use yii\widgets\ActiveForm;
use InvalidArgumentException;
use yii\filters\AccessControl;
use app\models\CompaniesSearch;
use yii\data\ActiveDataProvider;
use app\models\ResetPasswordForm;
use app\models\ChangePasswordForm;
use app\models\ChangeCurrentPasswordForm;
use yii\web\NotFoundHttpException;
use yii\web\ForbiddenHttpException;
use yii\web\BadRequestHttpException;
use app\models\PasswordResetRequestForm;
use app\components\UserActivityLogBehavior;
use app\models\Employee;
use app\models\Notification;
use app\models\Password;
use app\models\PasswordResetRequestFormAdmin;
use app\models\Settings;
use app\models\WellbeingSubdomainsOption;

/**
 * Site controller
 */
class SiteController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'userActivity' => [
                'class' => UserActivityLogBehavior::class,
            ],

            'access' => [
                'class' => AccessControl::class,
                ///'only' => ['logout', 'signup'],
                'rules' => [

                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],

                    [
                        'actions' => ['request-password-reset', 'reset-password', 'confirm', 'confirmemail', 'login'],
                        'allow' => true,
                        'roles' => ['?'],
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
     * @inheritdoc
     */


    /*action status*/
    public function actions()
    {
        return [

            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],



        ];
    }
    /*action status*/

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {

        if (User::hasExpiredPassword()) {
            return $this->redirect(['password-expired']);
        }
        return $this->render('index', []);
    }


    /**
     * Login action.
     *
     * @return string
     */


    public function checkAttempts($email)
    {
        $user = User::findByEmail($email);
        if ($user) {
            if ($user->login_attempts == Settings::config()->login_attempts) {
                Yii::$app->session->setFlash('danger', 'Your account is blocked , you exceeded login attempts');
                return $this->goBack();
            } else {
                Yii::$app->session->setFlash('warning', 'Login attempts ' . $user->login_attempts);
            }
        }
    }


    public function actionLogin()
    {
        $this->layout = "login";

        $compname = Companies::find()->One();
        $model = new LoginForm();

        if (Yii::$app->request->isAjax) {
            if ($model->load(Yii::$app->request->post())) {
                \Yii::$app->response->format = Response::FORMAT_JSON;
                return ActiveForm::validate($model);
            }
        }


        if ($model->load(Yii::$app->request->post())) {

            //  $this->checkAttempts($model->email);
            if ($model->login()) {

                $user = User::findByEmail(Yii::$app->user->identity->email);
                if ($user) {
                    $user->login_attempts = 0;
                    $user->save(false);
                }
                $inname = \Yii::$app->user->identity->full_name ?? '';
                Yii::$app->session->setFlash('success', "Welcome  " . " " . "<b>" . $inname . "</b>" . "   !");
                return $this->goBack();
            } else {
                $this->checkAttempts($model->email);
                return $this->render('login', [
                    'model' => $model,
                    'compname' => $compname,
                ]);
            }
        } else {
            return $this->render('login', [
                'model' => $model,
                'compname' => $compname,
            ]);
        }
    }


    public function actionConfirmemail($token)
    {
        $this->layout = "login";
        $user = User::findOne(['confirmation_token' => $token]);

        // return var_dump($user->id);

        if ($user) {

            $model = new  ChangeCurrentPasswordForm($user->id);
            if ($model->load(Yii::$app->request->post()) && $model->changePassword($user->username) && $model->validate()) {
                Yii::$app->session->setFlash('info', " Your email is successfully confirmed you can now create a password !");
                $user->updateAttributes(['status' => 10]);
                $user->save(false);

                $pass = new Password();
                $pass->password_hash = $user->password_hash;
                $pass->uid = $user->id;
                $pass->duration = time();
                $pass->save();

                Yii::$app->session->setFlash('info', " Your registration is now complete, you can now login!");
                return $this->redirect(['site/login',]);
            } else {
                return $this->render('addPassword', [
                    'model' => $model,
                ]);
            }
        } else {

            throw new ForbiddenHttpException('Invalid token.');
        }
    }

    /**
     * Logout action.
     *
     * @return string
     */
    public function actionLogout()
    {
        $user = User::findByEmail(Yii::$app->user->identity->email);
        if ($user) {
            $user->login_attempts = 0;
            $user->save(false);
        }
        Yii::$app->user->logout();
        Yii::$app->session->setFlash('success', "You have been successfully logged out.!");
        return $this->redirect(['site/login']);
    }


    public function actionSignup()
    {

        $searchModel = new UserSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
        $model = new User();
        if (Yii::$app->request->isAjax) {
            if ($model->load(Yii::$app->request->post())) {
                \Yii::$app->response->format = Response::FORMAT_JSON;
                return ActiveForm::validate($model);
            }
        }
        if ($model->load(Yii::$app->request->post())) {
            $employee = $this->findEmployee($model->employee);

            if ($model->signupUser($employee, $_POST['User']['email'])) {
                $name = $employee->fullName;
                $employee->updateAttributes(['is_user' => 1]);
                $employee->save(false);
                Yii::$app->session->setFlash('success', "New user '" . $name . "' registered with email sent to: " . $_POST['User']['email']);

                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('danger', "Failed to add user !");
                return $this->refresh();
            }
        }


        return $this->render('signup', [
            'model' => $model,
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
    }

    /**
     * Requests password reset.
     *
     * @return mixed
     */
    public function actionRequestPasswordReset()
    {

        $this->layout = "login";
        $model = new PasswordResetRequestForm;
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                Yii::$app->session->setFlash('success', 'Check your email for further instructions.');
                return $this->goHome();
            } else {
                Yii::$app->session->setFlash('error', 'Sorry, we are unable to reset password for the provided email address.');
            }
        }

        return $this->render('forgot_pwd', [
            'model' => $model,
        ]);
    }

    public function actionRequestPasswordResetAdmin($rca)
    {
        $number = Yii::$app->getSecurity()->validateData($rca, 'gmtdev');

        $user = $this->findModel($number);
        $employee = $this->findEmployee($user->userid);

        $model = new PasswordResetRequestFormAdmin();
        if ($model->sendEmail($user)) {
            $emailtemplate = '<p>Hello ' . $employee->getFullName() . ',</strong></p>
                <p>Click the following link to reset your password at  <strong>' . Yii::$app->name  . '</strong> </p>
                <p>. ' . Yii::$app->urlManager->createAbsoluteUrl(['site/reset-password', 'token' => $user->password_reset_token]) . '</p>';
            $subject = 'Password reset for ' . Yii::$app->name;
            Notification::emailnotificationaddeduser($emailtemplate, $subject, $employee, $user->email);

            Yii::$app->session->setFlash('success', 'A reset link has been sent to email: ' . $user->email);
            return $this->goHome();
        } else {
            Yii::$app->session->setFlash('error', 'Sorry, we are unable to reset password for the provided email address.');
        }

        return $this->render('signup', [
            'model' => $model,
        ]);
    }

    public function actionSendConfirmationEmail($rca1, $rca2)
    {

        $userkey = Yii::$app->getSecurity()->validateData($rca1, 'gmtdev');
        $employeekey = Yii::$app->getSecurity()->validateData($rca2, 'gmtdev');

        $user = $this->findModel($userkey);
        $employee = $this->findEmployee($employeekey);

        $user->confirmation_token = Yii::$app->security->generateRandomString();
        $user->save(false);

        $emailtemplate = '<p>Hello ' . $employee->getFullName() . ',</strong></p>
        <p>You have been successfully registered to  <strong>' . 'SEPESHA SYSTEM' . '</strong> </p>
        <p>. Please click the following link to confirm your email: ' . Yii::$app->urlManager->createAbsoluteUrl(['site/confirmemail', 'token' => $user->confirmation_token]) . '</p>';
        $subject = "SEPESHA User Registration";
        Notification::sendConfirmationEmailRepeat($employee, $user->confirmation_token, $user->email);
        Notification::emailnotificationaddeduser($emailtemplate, $subject, $employee, $user->email);

        return $this->redirect('signup');
    }
    /**
     * Resets password.
     *
     *
     * @param string $token
     * @return mixed
     * @throws BadRequestHttpException
     */
    public function actionResetPassword($token)
    {
        // if(User::UserLevel()!=52 || User::UserRole()!=1) throw new ForbiddenHttpException('You are not allowed to to perform this action !');
        $this->layout = "login";
        try {
            $model = new ResetPasswordForm($token);
        } catch (InvalidArgumentException $e) {
            throw new BadRequestHttpException($e->getMessage());
        }

        if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->resetPassword()) {
            Yii::$app->session->setFlash('success', 'New password saved.');

            return $this->goHome();
        }

        return $this->render('resetPassword', [
            'model' => $model,
        ]);
    }

    public function actionChangePassword($id)
    {
        $model = new  ChangePasswordForm($id);
        if ($model->load(Yii::$app->request->post()) && $model->changePassword() && $model->validate()) {
            Yii::$app->session->setFlash('info', " Password saved successfully !");
            return $this->redirect(['signup', 'id' => $model->id]);
        } else {
            return $this->render('changePassword', [
                'model' => $model,

            ]);
        }
    }



    public function actionProfileChange()
    {
        $model = new  ChangePasswordForm(Yii::$app->user->id);
        if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->changePassword()) {
            Yii::$app->session->setFlash('info', " Password saved successfully !");
            return $this->redirect(['index']);
        } else {
            return $this->render('changePassword', [
                'model' => $model,

            ]);
        }
    }

    public function actionPasswordExpired()
    {
        $this->layout = 'login';
        $model = new  ChangePasswordForm(Yii::$app->user->id);
        if (Yii::$app->request->isAjax) {
            if ($model->load(Yii::$app->request->post())) {
                \Yii::$app->response->format = Response::FORMAT_JSON;
                return ActiveForm::validate($model);
            }
        }
        $model->password_expiry = Settings::PasswordExpiry();
        if ($model->load(Yii::$app->request->post()) && $model->changeExpiredPassword() && $model->validate()) {

            Yii::$app->session->setFlash('info', " Password changed successfully !");
            return $this->redirect(['index']);
        } else {
            return $this->render('changeExpiredPassword', [
                'model' => $model,

            ]);
        }
    }

    protected function findModel($id)
    {
        if (($model = User::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    public function actionView($id)
    {

        $model = new  ChangePasswordForm($id);
        if ($model->load(Yii::$app->request->post()) && $model->changePassword() && $model->validate()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('view', [
                'model' => $model,

            ]);
        }
    }

    public function actionDelete($id)
    {

        $model = $this->findModel($id);
        $model->status = 0;
        $model->updated_at = date('Y-m-d H:i:s');
        Yii::$app->session->setFlash('success', " User disabled successful!");
        $model->update();

        return $this->redirect(['signup']);
    }



    public function actionUpdate($id)
    {

        $model = $this->findModel($id);
        $model->status = 10;
        $model->login_attempts = 0;
        $model->updated_at = date('Y-m-d H:i:s');
        $model->update();
        Yii::$app->session->setFlash('success', " User enabled successful!");
        return $this->redirect(['signup']);
    }


    public function actionPie()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => User::find(),
            'pagination' => false
        ]);

        return $this->render('pie', [
            'dataProvider' => $dataProvider
        ]);
    }

    public function actionEdit($id)
    {

        $dataId = Yii::$app->getSecurity()->validateData($id, 'gmtdev');
        $model = $this->findModel($dataId);
        $model->updated_at = date('Y-m-d H:i:s');
        $model->company_name = explode(',', $model->company_name);
        if ($model->load(Yii::$app->request->post())) {
            if ($model->company_name) {
                $model->company_name = implode(',', $model->company_name);
            }
            if ($model->save(false)) {
                Yii::$app->session->setFlash('success', "Updated !");
                return $this->redirect(['signup']);
            } else {
                Yii::$app->session->setFlash('danger', "Failed to edit !");
                return $this->render('edit', [
                    'model' => $model,
                ]);
            }
        }

        return $this->render('edit', [
            'model' => $model,
        ]);
    }

    public function actionViewUser($id)
    {
        $dataId = Yii::$app->getSecurity()->validateData($id, 'gmtdev');
        $model = $this->findModel($dataId);
        return $this->render('view', [
            'model' => $model,
        ]);
    }

    public function actionRoles($id)
    {
        $dataId = Yii::$app->getSecurity()->validateData($id, 'gmtdev');
        $model = $this->findModel($dataId);
        return $this->render('roles', [
            'model' => $model,
        ]);
    }

    protected function findEmployee($id)
    {
        if (($model = Employee::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }


    public function actionFetchDistricts()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $districtid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getDistrictsFromDatabase($districtid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getDistrictsFromDatabase($regionId)
    {
        $districts = Yii::$app->db->createCommand('SELECT did, name FROM districts WHERE rid=:regionId')->bindValue('regionId', $regionId)->queryAll();
        $result = [];

        foreach ($districts as $district) {
            $result[] = ['id' => $district['did'], 'name' => $district['name']];
        }

        return $result;
    }

    public function actionFetchDepartments()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $sectionid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getSectionsFromDatabase($sectionid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getSectionsFromDatabase($departmentId)
    {
        $sections = Yii::$app->db->createCommand('SELECT sid, name FROM sections WHERE did=:departmentId')->bindValue('departmentId', $departmentId)->queryAll();
        $result = [];

        foreach ($sections as $section) {
            $result[] = ['id' => $section['sid'], 'name' => $section['name']];
        }

        return $result;
    }


    public function actionFetchCategories()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $sectionid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getBeneficiaryCategoriesFromDatabase($sectionid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getBeneficiaryCategoriesFromDatabase($programId)
    {
        $sections = Yii::$app->db->createCommand('SELECT id, name FROM categories WHERE program_id=:programId AND status=1')->bindValue('programId', $programId)->queryAll();
        $result = [];

        foreach ($sections as $section) {
            $result[] = ['id' => $section['id'], 'name' => $section['name']];
        }

        return $result;
    }


    public function actionFetchIdentifiers()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $typeid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getIdentifiersFromDatabase($typeid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getIdentifiersFromDatabase($types)
    {
        $methods = Yii::$app->db->createCommand('SELECT id, name FROM customers WHERE type=:types')->bindValue('types', $types)->queryAll();
        $result = [];

        foreach ($methods as $method) {
            $result[] = ['id' => $method['id'], 'name' => $method['name']];
        }

        return $result;
    }

    public function actionFetchSheltersFitperson()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $typeid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getStakeHoldersFromDatabase($typeid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getStakeHoldersFromDatabase($types)
    {
        $methods = Yii::$app->db->createCommand('SELECT id, name FROM customers WHERE type=:types')->bindValue('types', $types)->queryAll();
        $result = [];

        foreach ($methods as $method) {
            $result[] = ['id' => $method['id'], 'name' => $method['name']];
        }

        return $result;
    }

    public function actionFetchGoals()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $typeid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getGoalsFromDatabase($typeid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getGoalsFromDatabase($goal)
    {
        $methods = Yii::$app->db->createCommand('SELECT id, goal FROM care_plans_targets_goals WHERE careplantargetid=:goal')->bindValue('goal', $goal)->queryAll();
        $result = [];

        foreach ($methods as $method) {
            $result[] = ['id' => $method['id'], 'name' => $method['goal']];
        }

        return $result;
    }

    public function actionFetchStages()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $typeid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getStagesFromDatabase($typeid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getStagesFromDatabase($workflow)
    {
        $methods = Yii::$app->db->createCommand('SELECT id,sno, sname FROM wfstages WHERE wid=:workflow')->bindValue('workflow', $workflow)->queryAll();
        $result = [];

        foreach ($methods as $method) {
            $result[] = ['id' => $method['sno'], 'name' => $method['sname']];
        }

        return $result;
    }

    public function actionFetchQuestions()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $typeid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getQuestionsFromDatabase($typeid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getQuestionsFromDatabase($domain)
    {
        $methods = Yii::$app->db->createCommand('SELECT id,name FROM wellbeing_subdomains WHERE domain_id=:domain')->bindValue('domain', $domain)->queryAll();
        $result = [];

        foreach ($methods as $method) {
            $result[] = ['id' => $method['id'], 'name' => $method['name']];
        }

        return $result;
    }


    public function actionFetchOptions()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $out = [];

        if (isset($_POST['depdrop_parents'])) {
            $parents = $_POST['depdrop_parents'];
            if ($parents != null) {
                $typeid = Yii::$app->request->post('depdrop_parents')[0];
                $out = $this->getOptionsFromDatabase($typeid);
                return ['output' => $out, 'selected' => ''];
            }
        }


        return ['output' => $out, 'selected' => ''];
    }


    public function getOptionsFromDatabase($subdomain)
    {
        $methods = Yii::$app->db->createCommand('SELECT id,name FROM wellbeing_subdomains_options WHERE subdomain_id=:subdomain')->bindValue('subdomain', $subdomain)->queryAll();
        $result = [];

        foreach ($methods as $method) {
            $result[] = ['id' => $method['id'], 'name' => $method['name']];
        }

        return $result;
    }
}
