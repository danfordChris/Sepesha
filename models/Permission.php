<?php
namespace app\models;

use Yii;
use yii\base\Model;
use yii\helpers\ArrayHelper;

class Permission extends Model
{
    public $name;
    public $description;
    public $rule_name;
    public $availableRules; // Property to hold available rules

    public function rules()
    {
        return [
            [['name', 'description'], 'required'],
            [['name', 'description'], 'string', 'max' => 64],
            [['name'], 'unique', 'targetClass' => '\yii\rbac\DbManager', 'targetAttribute' => 'name'],
            [['rule_name'],'string']
        ];
    }

    public function attributeLabels()
    {
        return [
            'name' => 'Permission Name',
            'description' => 'Description',
            'rule_name' => 'Rule Name',
        ];
    }

    public function save()
    {
        $auth = Yii::$app->authManager;
        $permission = $auth->createPermission($this->name);
        $permission->description = $this->description;
        $permission->ruleName =$this->rule_name;
        return $auth->add($permission);
    }

    public function update($name)
    {
        $auth = Yii::$app->authManager;
        $permission = $auth->getPermission($name);
        $permission->name = $this->name;
        $permission->description = $this->description;
        $permission->ruleName = $this->rule_name;
        return $auth->update($name, $permission);
    }

    public function delete($name)
    {
        $auth = Yii::$app->authManager;
        $permission = $auth->getPermission($name);
        return $auth->remove($permission);
    }

    public static function find($name)
    {
        $auth = Yii::$app->authManager;
        return $auth->getPermission($name);
    }

    public static function getAllPermissions()
    {
        $auth = Yii::$app->authManager;
        return $auth->getPermissions();
    }


    public function init()
    {
        parent::init();
        $rules = Yii::$app->authManager->getRules();
        
        if (empty($rules)) {
            Yii::error('No rules found in the authManager.');
        } else {
            Yii::info('Rules found: ' . print_r($rules, true));
        }

        // Populate available rules
        $this->availableRules = ArrayHelper::map($rules, 'name', 'name');
    }
}