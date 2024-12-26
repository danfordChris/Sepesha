<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "roles".
 *
 * @property int $rid
 * @property string|null $name
 * @property string|null $module
 * @property int|null $cby
 * @property string|null $cdate
 * @property int|null $eby
 * @property string|null $edate
 */
class Roles extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    const admin = 1;
    public static function tableName()
    {
        return 'roles';
    }

    /**
     * {@inheritdoc}
     */

    public function rules()
    {
        return [
            [['name', 'type', 'code', 'module'], 'required'],
            [['created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at', 'status'], 'safe'],
            [['name'], 'string', 'max' => 100],
            [['module'], 'string', 'max' => 20],
            [['name', 'code'], 'unique']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'rid' => 'Role',
            'name' => 'Role Name',
            'module' => 'Module',

        ];
    }


    public static function appliedSubRoles($id)
    {

        $conn = Yii::$app->db;
        $q = "SELECT name FROM subroles WHERE rid = :id AND status=1";
        $roles = $conn->createCommand($q)->bindValue(':id', $id)->queryAll();
        if ($roles) {
            // Extract the 'nane' values from the query result
            return array_column($roles, 'name');
        }
        return []; // Return an empty array if no roles are found
    }


    public static function getRolesList()
    {
        return  ArrayHelper::map(Roles::find()->where(['status' => 1, 'type' => 'main'])->all(), 'rid', 'name');
    }

    public static function getRolesListOther()
    {
        return  ArrayHelper::map(Roles::find()->where(['status' => 1, 'type' => 'other'])->all(), 'rid', 'name');
    }

    public static function getRolesOther($mainRoleId)
    {
        return  ArrayHelper::map(Roles::find()->where(['status' => 1, 'type' => 'other'])->andWhere(['NOT IN', 'name', self::appliedSubRoles($mainRoleId)])->all(), 'name', 'name');
    }

    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {

            if ($this->isNewRecord) {
                $this->created_by = Yii::$app->user->id;
                $this->module = strtoupper($this->module);
                $this->created_at = new \yii\db\Expression('NOW()');
            } else {
                $this->updated_by = Yii::$app->user->id;
                $this->module = strtoupper($this->module);
                $this->updated_at = new \yii\db\Expression('NOW()');
            }
            return true;
        }
        return false;
    }

    public function getSubRoles()
    {
        return $this->hasMany(SubRole::class, ['rid' => 'rid']);
    }
}
