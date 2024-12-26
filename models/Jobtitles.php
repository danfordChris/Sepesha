<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "jobtitles".
 *
 * @property int $jtid
 * @property string|null $name
 * @property string|null $sname
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Jobtitles extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'jobtitles';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name','sname'],'required'],
            [['name'], 'string', 'max' => 150],
            [['sname'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'jtid' => 'Jtid',
            'name' => 'Name',
            'sname' => 'Sname',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }

    
    public static function getStatusOptions()
{
    return [
        '1' => 'active',
        '0' => 'Inactive',

    ];
}


public function getUpdatedBy()
{
    return $this->hasOne(User::class, ['id' => 'updated_by']);
}


public function getCreatedBy()
{
    return $this->hasOne(User::class, ['id' => 'created_by']);
}
}
