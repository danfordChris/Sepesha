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
            [['plate_number', 'make', 'model', 'owner_id', 'fee_category_id', 'driver_id'], 'required'],
            [['id'], 'string'],
            [['year', 'deleted_at', 'created_at', 'updated_at'], 'safe'],
            [['weight'], 'number'],
            [['capacity', 'created_by', 'updated_by'], 'integer'],
            [['color', 'status'], 'string', 'max' => 191],
            [['fee_category_id'], 'string', 'max' => 50],
            [['plate_number'], 'unique'],
            [['id'], 'unique'],
            [['year'], 'string', 'max' => 4, 'min' => 4],
            [
                'plate_number',
                'match',
                'pattern' => '/^(T\d{3}[A-Z]{3}|MC\d{3}[A-Z]{3})$/',
                'message' => 'The number must match the format for vehicle or motorcycle plate number.'
            ],
            [['plate_number'], 'string', 'max' => 8, 'min' => 7],
            [['model'], 'string', 'max' => 15, 'min' => 2]
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
            'fee_category_id' => Yii::t('app', 'Category'),
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
        if ($this->isNewRecord) {
            $this->id = CustomHelper::getUuid();
        }

        return parent::beforeSave($insert);
    }



    public function getFee()
    {
        return $this->hasOne(FeeCategory::class, ['id' => 'fee_category_id']);
    }

    public function getDriver()
    {
        return $this->hasOne(ClientInfo::class, ['auth_key' => 'driver_id']);
    }


    public function getWf()
    {
        return $this->hasOne(Workflow::class, ['wid' => 'wid']);
    }

    public function getWorkFlowStage()
    {
        return $this->hasOne(WfStages::class, ['sno' => 'stid', 'wid' => 'wid']);
    }

}