<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "bank_accounts".
 *
 * @property int $id
 * @property string|null $accname
 * @property string $account_no
 * @property string|null $bankname
 * @property string|null $banksname
 * @property float|null $openbal
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
class BankAccounts extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */

    const CURRENCY_USD = "USD";
    const CURRENCY_TZS = "TZS";


    public static function tableName()
    {
        return 'bank_accounts';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['account_no','openbal','start_date','accname', 'bankname', 'currency','branch'], 'required'],
            [['openbal'], 'number'],
            [['status', 'created_by', 'updated_by'], 'integer'],
            [['start_date', 'created_at', 'updated_at'], 'safe'],
            [['accname', 'account_no'], 'string', 'max' => 100],
            [['bankname', 'banksname', 'currency'], 'string', 'max' => 50],
            [['branch', 'swiftcode'], 'string', 'max' => 150],
            [['address'], 'string', 'max' => 250],
            [['account_no'],'unique']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'accname' => 'Account Name',
            'account_no' => 'Account Number',
            'bankname' => 'Bank Name',
            'banksname' => 'Bank Abbreviation',
            'openbal' => 'Open Balance',
            'currency' => 'Currency',
            'branch' => 'Branch',
            'swiftcode' => 'Swift Code',
            'address' => 'Physical Address',
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

    public function getStatusName()
    {
        if ($this->status == 10)
            return 'active';
        else
            return 'Inactive';
    }

    public static function getCurrency()
    {
        return [
            self::CURRENCY_USD => self::CURRENCY_USD,
            self::CURRENCY_TZS => self::CURRENCY_TZS,

        ];
    }
}
