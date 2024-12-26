<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "account_codes".
 *
 * @property int $coid
 * @property string|null $category
 * @property string|null $code
 * @property string|null $name
 * @property string|null $descr
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class AccountCodes extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    const DEBIT_TRANSACTION = "DEBIT";
    const CREDIT_TRANSACTION = "CREDIT";
    const VOUCHER_TRANSACTION = "VOUCHER";
    const PAYMENT_TRANSACTION = "PAYMENT";
    const RECEIPT_TRANSACTION = "RECEIPT";
    const INVOICE_TRANSACTION = "INVOICE";
    const CURRENCY_USD = "USD";
    const CURRENCY_TZS = "TZS";
    const ENTRY_EXPENSE = "EXPENSE";
    const ENTRY_REVENUE = "REVENUE";
    const ENTRY_PAYABLES = "PAYABLES";
    const ENTRY_BANK = "BANK";
    const ENTRY_RECEIVABLE = "RECEIVABLE";

    public static function tableName()
    {
        return 'account_codes';
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
            [['descr'], 'string'],
            [['status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['category'], 'string', 'max' => 255],
            [['code'], 'string', 'max' => 100],
            [['name'], 'string', 'max' => 50],
            [['code'], 'unique'],
            [['name','code','category'], 'required'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'coid' => 'Coid',
            'category' => 'Account Category',
            'code' => 'Account Code',
            'name' => 'Account Name',
            'descr' => 'Description',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
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

    public static function getCodeCategory()
    {
        return [
            self::ENTRY_EXPENSE => self::ENTRY_EXPENSE,
            self::ENTRY_REVENUE =>  self::ENTRY_REVENUE,
            self::ENTRY_PAYABLES => self::ENTRY_PAYABLES,
            self::ENTRY_BANK => self::ENTRY_BANK,
            self::ENTRY_RECEIVABLE => self::ENTRY_RECEIVABLE,
        ];
    }

    public static function CurrentFinancialYear(){
        return 1;
    }

    public static function getAccountCodeById($codeId)
    {
        $acccode = Yii::$app->db->createCommand("SELECT coid,category,code,name FROM account_codes WHERE coid='$codeId' AND status=1")->queryOne();
        if ($acccode) {
            return $acccode;
        } else {
            return false;
        }
    }
}
