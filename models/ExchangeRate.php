<?php

namespace app\models;

use Exception;
use Yii;
use yii\base\InvalidConfigException;
use yii\base\InvalidValueException;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\web\NotAcceptableHttpException;

/**
 * This is the model class for table "exchange_rates".
 *
 * @property int $id
 * @property float|null $gepg_rate
 * @property float|null $internal_rate
 * @property int|null $status
 */
class ExchangeRate extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'exchange_rates';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['gov_rate', 'internal_rate'], 'number'],

            ['gov_rate', 'required'],
            [['status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'gepg_rate' => 'Rate',
            'internal_rate' => 'Internal Rate',
            'status' => 'Status',
            'start_date' => 'Start Date',
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

    public static  function getExchangeRate($currency)
    {
        if ($currency == 'TZS') {
            return 1;
        } else {
            $rate = self::find()->orderBy('id desc')->one();
            if ($rate) {
                return $rate->gepg_rate;
            }
            throw new NotAcceptableHttpException('Exchange is not set ,please set  exchange rate !');
        }
    }
}