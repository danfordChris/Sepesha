<?php

namespace app\models;


use yii\db\Expression;
use app\models\Customers;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "banks".
 *
 * @property int $id
 * @property string|null $accname
 * @property string $account_no
 * @property string|null $bankname
 * @property string|null $banksname
 * @property string|null $currency
 * @property string|null $branch
 * @property string|null $swiftcode
 * @property string|null $address
 * @property int|null $status
 * @property string|null $start_date
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Banks extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'banks';
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
            [['banksname', 'bankname', 'banksname'], 'required'],

            [['status', 'created_by', 'updated_by'], 'integer'],
            [['start_date', 'created_at', 'updated_at','account_code','currency'], 'safe'],
            [['bankname', 'banksname', 'currency'], 'string', 'max' => 100],
            [['branch', 'swiftcode'], 'string', 'max' => 150],
            [['address'], 'string', 'max' => 250],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',

            'bankname' => 'Bank Name',
            'banksname' => 'Bank Abbreviation',

            'currency' => 'Currency',
            'branch' => 'Branch',
            'swiftcode' => 'Swift code',
            'address' => 'Address',
            'status' => 'Status',
            'start_date' => 'Start Date',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }


    public function getCustomer()
    {
        return $this->hasOne(Customer::class, ['customer_id' => 'customer_id']);
    }

    public function getStatuz()
    {
        if ($this->status == 1)
            return 'Active';
        else
            return 'Inactive';
    }
    public static function getStatusOptions()
    {
        return [
            '1' => 'Active',
            '0' => 'Inactive',

        ];
    }

    public static function getCurrency()
    {
        return [
            AccountCodes::CURRENCY_USD =>  AccountCodes::CURRENCY_USD,
            AccountCodes::CURRENCY_TZS =>  AccountCodes::CURRENCY_TZS,
        ];
    }

    public static function getBankList()
    {
        $res = self::find()->where(['status' => 1])->all();
        $result = ArrayHelper::map($res, 'id', function ($m) {
            return $m->banksname;
        });
        return $result;
    }
}