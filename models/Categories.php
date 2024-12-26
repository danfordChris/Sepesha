<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "categories".
 *
 * @property int $id
 * @property string|null $type
 * @property string|null $name
 * @property string|null $description
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Categories extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'categories';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name','sname'], 'required'],
            [['type'], 'string'],
            [['status', 'created_by', 'updated_by','program_id'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 150],
            [['description'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'type' => 'Type',
            'name' => 'Name',
            'program_id'=>'Program',
            'sname'=>'Short name',
            'description' => 'Description',
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

public static function getCategoriesTypeList()
{
    return [
        'beneficiary' => 'Beneficiary',
        'contact' => 'Stakeholder/Contacts',
        'arrival_mode'=>'CSD Mode of Arrival',
        'referer'=>'CYLWS Referrer',
        'how_cyp_identified'=>'How CYP Identified',
        'education_level'=>'Education level'

    ];
}

 

}