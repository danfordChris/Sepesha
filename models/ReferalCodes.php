<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "referal_codes".
 *
 * @property int $id
 * @property string|null $user_id
 * @property string|null $user_type
 * @property string|null $code
 * @property float|null $value
 * @property string|null $start_date
 * @property string|null $end_date
 * @property string|null $descr
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class ReferalCodes extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'referal_codes';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['value'], 'number'],
            [['start_date', 'end_date', 'created_at', 'updated_at'], 'safe'],
            [['descr'], 'string'],
            [['status', 'created_by', 'updated_by'], 'integer'],
            [['user_id', 'user_type', 'code'], 'string', 'max' => 255],
            [['code'],'unique'],
            [['value', 'start_date', 'end_date', 'descr', 'code'], 'required'],
            [['start_date', 'end_date'], 'date', 'format' => 'yyyy-MM-dd'], 
            ['end_date', 'compare', 'compareAttribute' => 'start_date', 'operator' => '>=', 'message' => 'End Date must be greater than or equal to Start Date'], 
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'Employee name',
            'user_type' => 'User Type',
            'code' => 'Referal Code',
            'value' => 'Referal (%)',
            'start_date' => 'Start Date',
            'end_date' => 'End Date',
            'descr' => 'Description',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
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



    public function getCreatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'created_by']);
    }

    public function getUpdatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'updated_by']);
    }

    public function getUser()
    {
        return $this->hasOne(User::class, ['id' => 'user_id']);
    }
}
