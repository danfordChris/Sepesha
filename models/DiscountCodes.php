<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

/**
 * This is the model class for table "discount_codes".
 *
 * @property int $id
 * @property float $value
 * @property string $type Allowed values: percent, amount
 * @property string $category Allowed values: driver, customer
 * @property string $code
 * @property string|null $descr
 * @property string|null $start_date
 * @property string|null $end_date
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class DiscountCodes extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'discount_codes';
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

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['value', 'type', 'category', 'code', 'user_id'], 'required'],
            [['value'], 'number'],
            [['descr'], 'string'],
            [['start_date', 'end_date', 'created_at', 'updated_at', 'user_id'], 'safe'],
            [['status', 'created_by', 'updated_by'], 'integer'],
            [['type', 'category'], 'string', 'max' => 10],
            [['code'], 'string', 'max' => 255],
            [['code'], 'unique'],
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
            'user_id' => 'Client name',
            'value' => 'Discount Value(%)',
            'type' => 'Type',
            'category' => 'Category',
            'code' => 'Discount Code',
            'descr' => 'Description',
            'start_date' => 'Start Date',
            'end_date' => 'End Date',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
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


    public function getFullName()
    {
        $fullname = $this->fname . ' ' . $this->mname . ' ' . $this->sname;
        return $fullname ?? '';
    }


    public function getClientInfo()
    {
        return $this->hasOne(ClientInfo::class, ['auth_key' => 'user_id']);
    }
}