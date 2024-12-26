<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\helpers\ArrayHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "vouchers".
 *
 * @property int $vid
 * @property int $vno
 * @property int|null * @property int|null $customer_id
 * @property string|null $entry_id
 * @property string|null $voucher_type
 * @property int|null $debit
 * @property int|null $credit
 * @property int|null $descr
 * @property int|null $amount
 * @property int|null $checked_by
 * @property int|null $prepared_by
 * @property int|null $authorized_by
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Invoice extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */

    public static function tableName()
    {
        return 'transact_main';
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
            [['customer_id', 'amount', 'descr', 'transact_date', 'currency', 'wid', 'vid'], 'required'],
            [['customer_id', 'amount', 'checked_by', 'prepared_by', 'authorized_by', 'created_by', 'updated_by', 'fyid', 'bank_id'], 'integer'],
            [['created_at', 'updated_at', 'due_date', 'erate'], 'safe'],
            [['descr', 'refno', 'transact_type'], 'string', 'max' => 250],
            [['amount'], 'number', 'min' => 0],
            [['wid', 'stid', 'wfstatus', 'requserinput', 'status',], 'safe'],
            //[['vid'], 'default', 'value' => Yii::$app->security->generateRandomString(10)],
            [['vid'], 'unique'],

        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'vid' => 'Transaction ID',
            'refno' => 'Voucher Number',
            'customer_id' => 'Vendor',
            'currency' => 'Currency',
            'transact_type' => 'Transaction Type',
            'descr' => 'Description',
            'fyid' => 'Financial Year',
            'amount' => 'Amount',
            'checked_by' => 'Checked By',
            'prepared_by' => 'Prepared By',
            'authorized_by' => 'Authorized By',
            'status' => 'Status',
            'transact_date' => 'transaction date',
            'due_date' => 'Due Date',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
            'bank_id' => 'Bank',
        ];
    }

    public static function getCustomers()
    {
        $customer = Customers::find()->all();
        $result = ArrayHelper::map($customer, 'customer_id', 'customer_name');
        return $result;
    }

    public function getCustomer()
    {
        return $this->hasOne(Customers::class, ['customer_id' => 'customer_id']);
    }

    public function getStage()
    {
        return $this->hasOne(WfStages::class, ['wid' => 'wid', 'sno' => 'stid']);
    }

    public function getBank()
    {
        return $this->hasOne(Banks::class, ['id' => 'bank_id']);
    }

    public static function getEntryCategory($category)
    {
        $codes = AccountCodes::find()->where(['category' => $category])->all();
        $result = ArrayHelper::map($codes, 'coid', function ($code) {
            return $code->code . ' (' . $code->name . ')';
        });
        return $result;
    }


    public static function getEntryCategoryCode($category)
    {
        $codes = AccountCodes::find()->where(['category' => $category])->all();
        $result = ArrayHelper::map($codes, 'code', function ($code) {
            return $code->code . ' (' . $code->name . ')';
        });
        return $result;
    }



    public function getSumReceiptAmount()
    {
        return $this->hasMany(AccountEntries::class, ['transact_id' => 'vid'])->where(['status' => ['A', 'N'], 'category' => AccountCodes::RECEIPT_TRANSACTION])->sum('dramount');
    }

    public function getInvoiceBalance()
    {
        return $this->amount - $this->getSumReceiptAmount();
    }


    public static function getAccountCode($cc)
    {
        $acccode = Yii::$app->db->createCommand("SELECT coid,category,code,name FROM account_codes where category='$cc' AND status=1 LIMIT 1")->queryOne();
        if ($acccode) {
            return $acccode;
        } else {
            return false;
        }
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

    public static function getGroups()
    {
        return [
            '1' => '1',
            '2' => '2',
            '3' => '3',

        ];
    }

    public static function getCurrency()
    {
        return [
            AccountCodes::CURRENCY_USD =>  AccountCodes::CURRENCY_USD,
            AccountCodes::CURRENCY_TZS =>  AccountCodes::CURRENCY_TZS,
        ];
    }

    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert))  //call parent method so that the events are fired appropriately
        {
            if ($this->isNewRecord) {
                $this->refno = $this->randomInvoiceNumber();
                $this->transact_type = AccountCodes::INVOICE_TRANSACTION;
                $this->fyid = AccountCodes::CurrentFinancialYear();
            } else {
                $this->refno = $this->refno;
            }

            return true;
        }
        return false;
    }


    public function  randomInvoiceNumber()
    {

        $currentYear = date('y');
        $type = AccountCodes::INVOICE_TRANSACTION;
        // Retrieve the latest  number from the database
        $latestNumberQuery = "SELECT count(vid) AS max_number FROM transact_main WHERE  DATE_FORMAT(created_at, '%y')= '$currentYear' AND transact_type='$type' ";
        $latestNumber = Yii::$app->db->createCommand($latestNumberQuery)->queryScalar();
        //  $latestNumber = $row['max_number'];
        if ($latestNumber === null) {
            // No  number for the current year, start with 1
            $newNumber = 1;
            $pvNumber = $currentYear . str_pad($newNumber, 2, '0', STR_PAD_LEFT);
        } else {
            // Increment the latest  number by 1
            $newNumber = intval($latestNumber) + 1;
            $pvNumber = $currentYear . str_pad($newNumber, 2, '0', STR_PAD_LEFT);
        }
        // Format the  number using the current year and the new number

        return  'INV' . $pvNumber;
    }

    


    public function getCreated()
    {
        return $this->hasOne(User::class, ['empid' => 'created_by']);
    }
}