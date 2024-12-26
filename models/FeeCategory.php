<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "fee_categories".
 *
 * @property string $id
 * @property string $name
 * @property string|null $description
 * @property string|null $vehicle_multiplier
 * @property string|null $base_price
 * @property string|null $price_per_km
 * @property string $status
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property string|null $deleted_at
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class FeeCategory extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'fee_categories';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'description', 'vehicle_multiplier', 'base_price', 'price_per_km'], 'required'],
            [['created_by', 'updated_by'], 'integer'],
            [['deleted_at', 'created_at', 'updated_at'], 'safe'],
            [['id'], 'string', 'max' => 40],
            [['name', 'description', 'vehicle_multiplier', 'base_price', 'price_per_km', 'status'], 'string', 'max' => 191],
            [['id'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Name'),
            'description' => Yii::t('app', 'Description'),
            'vehicle_multiplier' => Yii::t('app', 'Vehicle Multiplier'),
            'base_price' => Yii::t('app', 'Base Price'),
            'price_per_km' => Yii::t('app', 'Price Per Km'),
            'status' => Yii::t('app', 'Status'),
            'created_by' => Yii::t('app', 'Created By'),
            'updated_by' => Yii::t('app', 'Updated By'),
            'deleted_at' => Yii::t('app', 'Deleted At'),
            'created_at' => Yii::t('app', 'Created At'),
            'updated_at' => Yii::t('app', 'Updated At'),
        ];
    }

    public function behaviors()

    {
        return [
            [
                'class' => TimestampBehavior::class,
                'value' => new Expression('NOW()'),
            ],
            [
                'class' => BlameableBehavior::class,
            ],
        ];
    }


    public function beforeSave($insert)
    {
        if ($this->isNewRecord){
            $this->id = CustomHelper::getUuid();
        }

        return parent::beforeSave($insert);
    }
}