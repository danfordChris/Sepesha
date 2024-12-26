<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "vehicles".
 *
 * @property string $id
 * @property string $plate_number
 * @property string $make
 * @property string $model
 * @property string|null $year
 * @property float|null $weight
 * @property string|null $fee_category_id
 * @property string|null $color
 * @property int|null $capacity
 * @property int $owner_id
 * @property string $status
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property string|null $deleted_at
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class Vehicle extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'vehicles';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['plate_number', 'make', 'model', 'owner_id'], 'required'],
            [['id'], 'string'],
            [['year', 'deleted_at', 'created_at', 'updated_at'], 'safe'],
            [['weight'], 'number'],
            [['capacity', 'owner_id', 'created_by', 'updated_by'], 'integer'],
            [['plate_number', 'make', 'model', 'color', 'status'], 'string', 'max' => 191],
            [['fee_category_id'], 'string', 'max' => 50],
            [['plate_number'], 'unique'],
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
            'plate_number' => Yii::t('app', 'Plate Number'),
            'make' => Yii::t('app', 'Make'),
            'model' => Yii::t('app', 'Model'),
            'year' => Yii::t('app', 'Year'),
            'weight' => Yii::t('app', 'Weight'),
            'fee_category_id' => Yii::t('app', 'Fee Category'),
            'color' => Yii::t('app', 'Color'),
            'capacity' => Yii::t('app', 'Capacity'),
            'owner_id' => Yii::t('app', 'Owner'),
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



    public function getFee()
    {
        return $this->hasOne(FeeCategory::class, ['id' => 'fee_category_id']);
    }
}