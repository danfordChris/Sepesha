<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "programs".
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $description
 * @property int|null $beneficiary_id
 * @property int|null $empid
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Programs extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'programs';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['description'], 'string'],
            [['beneficiary_id', 'empid', 'status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'required'],
            [['name'], 'string', 'max' => 150],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'description' => 'Description',
            'beneficiary_id' => 'Beneficiary',
            'empid' => 'Employee',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }
    
public static function getEmployeeList(){
    $dp=Employee::find()->all();
    $EmployeeData=ArrayHelper::map($dp,'id','empid');
    return $EmployeeData;
    }


    public static function getStatusOptions()
{
    return [
        '1' => 'active',
        '0' => 'Inactive',

    ];
}



}
