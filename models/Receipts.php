<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\helpers\ArrayHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "receipts".
 *
 * @property int $recid
 * @property int $recno
 * @property int|null $customer_id
 * @property int|null $amount
 * @property float|null $balance
 * @property int|null $desc
 * @property string|null $ref_no
 * @property string|null $control_no
 * @property int|null $issue_by
 * @property int|null $appr_by
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Receipts extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'receipts';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            // [['recno'], 'required'],
            [['recno', 'customer_id', 'amount','debit', 'credit','issue_by', 'appr_by', 'status', 'created_by', 'updated_by'], 'integer'],
            [['balance'], 'number'],
            [['created_at', 'updated_at'], 'safe'],
            [['ref_no','desc','currency', 'control_no'], 'string', 'max' => 150],
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

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'recid' => 'Recid',
            'recno' => 'Receipt Number',
            'customer_id' => 'Customer Name',
            'amount' => 'Amount',
            'balance' => 'Balance',
            'debit' => 'Debit',
            'credit' => 'Credit',
            'currency' => 'Currency',
            'desc' => 'Description',
            'ref_no' => 'Reference Number',
            'control_no' => 'Control Number',
            'issue_by' => 'Issued By',
            'appr_by' => 'Approved By',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
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

    public function getStatuz()
    {
        if ($this->status == 1)
            return 'active';
        else
            return 'not-active';
    }
    public static function getStatusOptions()
    {
        return [
            '1' => 'active',
            '0' => 'not active',

        ];
    }

    public static function getCurrency()
    {
        return [
            'usd' => 'USD',
            'tzs' => 'TZS',

        ];
    }

    public static function getDebits()
    {
        $codes = AccountCodes::find()->where(['lower(name)'=>'bank'])->all();
        $result = ArrayHelper::map($codes, 'coid', function ($code) {
            return $code->code . ' (' . $code->name.')';
        });
        return $result;
    }

    public static function getCredits()
    {
        $codes = AccountCodes::find()->where(['lower(name)'=>'receivable'])->all();
        $result = ArrayHelper::map($codes, 'coid', function ($code) {
            return $code->code . ' (' . $code->name.')';
        });
        return $result;
    }

    public function getDebited()
    {
        return $this->hasOne(AccountCodes::class, ['coid' => 'debit']);
    }

    public function getCredited()
    {
        return $this->hasOne(AccountCodes::class, ['coid' => 'credit']);
    }

    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert))  
        {
            if ($this->isNewRecord) {
                $this->recno = $this->randomReceiptNo();
                $this->ref_no = strtoupper(Yii::$app->security->generateRandomString(13));
            } 
            // else {
            //     $this->recno = '255' . $this->buyer_phone;
            // }
            return true;
        }
        return false;
    }
    
    public function  randomReceiptNo()
    {
        $limit = 2;
        $rand_num = rand(pow(10, $limit - 1), pow(10, $limit) - 1);
        $add_time = time() . rand(99, 10);
        $final_unique_id = 'EC'.$add_time.$rand_num;
        return $final_unique_id;
    }
}
