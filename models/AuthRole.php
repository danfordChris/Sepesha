<?php
namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use yii\rbac\DbManager;

class AuthRole extends Model
{
    public $name;
    public $description;

    public function rules()
    {
        return [
            [['name', 'description'], 'required'],
            [['name', 'description'], 'string', 'max' => 64],
            [['name'], 'unique', 'targetClass' => '\yii\rbac\DbManager', 'targetAttribute' => 'name'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'name' => 'Role Name',
            'description' => 'Description',
        ];
    }

    public function save()
    {
        $auth = Yii::$app->authManager;
        $role = $auth->createRole($this->name);
        $role->description = $this->description;
        return $auth->add($role);
    }

    public function update($name)
    {
        $auth = Yii::$app->authManager;
        $role = $auth->getRole($name);
        $role->name = $this->name;
        $role->description = $this->description;
        return $auth->update($name, $role);
    }

    public function delete($name)
    {
        $auth = Yii::$app->authManager;
        $role = $auth->getRole($name);
        return $auth->remove($role);
    }

    public static function find($name)
    {
        $auth = Yii::$app->authManager;
        return $auth->getRole($name);
    }

    public static function getAllRoles()
    {
        $auth = Yii::$app->authManager;
        return $auth->getRoles();
    }
}