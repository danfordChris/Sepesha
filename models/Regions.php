<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "regions".
 *
 * @property integer $region_id
 * @property string $name
 * @property string $region_country_name
 *
 * @property Cities[] $cities
 * @property Countries $regionCountryName
 */
class Regions extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'regions';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name'], 'string', 'max' => 100],
            [['name'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'rid' => 'ID',
            'name' => 'Region',
        ];
    }

    
}
