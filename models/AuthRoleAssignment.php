<?php
namespace app\models;

use Yii;
use yii\base\Model;

class AuthRoleAssignment extends Model
{
    public $userId;
    public $roleName;
    public $role;
    public $user;

    public function rules()
    {
        return [
            [['userId', 'roleName'], 'required'],
            [['userId'], 'integer'],
            [['roleName'], 'string', 'max' => 64],
        ];

        // return [
        //     [['role', 'user'], 'required'],
        // ];
    }

    

    public function attributeLabels()
    {
        return [
            'userId' => 'User',
            'roleName' => 'Role Name',
        ];
    }

    public function save()
    {
        $auth = Yii::$app->authManager;
        $role = $auth->getRole($this->roleName);
        return $auth->assign($role, $this->userId);
    }

    public function delete()
    {
        $auth = Yii::$app->authManager;
        $role = $auth->getRole($this->roleName);
        return $auth->revoke($role, $this->userId);
    }

    public static function getUserRoles($userId)
    {
        $auth = Yii::$app->authManager;
        return $auth->getRolesByUser($userId);
    }
}