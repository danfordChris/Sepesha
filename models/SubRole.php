<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;

class SubRole extends ActiveRecord
{
    public static function tableName()
    {
        return 'subroles';
    }

    public $roleList;

    public function rules()
    {
        return [
            [['roleList', 'rid'], 'required'],
            [['rid'], 'integer'],
            [['name'], 'string', 'max' => 255],
            [['rid'], 'exist', 'skipOnError' => true, 'targetClass' => Roles::class, 'targetAttribute' => ['rid' => 'rid']],
            [['rid', 'name'], 'unique', 'targetAttribute' => ['rid', 'name'], 'message' => 'Role  has already been asigned'],

        ];
    }

    public function attributeLabels()
    {
        return [
            'rid' => 'Role',
            'name' => 'Role Name',
            'roleList' => 'Role Name',

        ];
    }

    public function getRole()
    {
        return $this->hasOne(Roles::class, ['rid' => 'rid']);
    }
}
