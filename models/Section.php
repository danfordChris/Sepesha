<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "sections".
 *
 * @property int $sid
 * @property int $did
 * @property string $name
 * @property string|null $sname
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Section extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'sections';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['did', 'name'], 'required'],
            [['did', 'status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name', 'sname'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'sid' => Yii::t('app', 'Sid'),
            'did' => Yii::t('app', 'Department'),
            'name' => Yii::t('app', 'Name'),
            'sname' => Yii::t('app', 'Short name'),
            'status' => Yii::t('app', 'Status'),
            'created_at' => Yii::t('app', 'Created At'),
            'created_by' => Yii::t('app', 'Created By'),
            'updated_at' => Yii::t('app', 'Updated At'),
            'updated_by' => Yii::t('app', 'Updated By'),
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


    public static function getDepartmentList(){
        $dp=Department::find()->all();
        $DepartmentData=ArrayHelper::map($dp,'did','name');
        return $DepartmentData;
        }
}
