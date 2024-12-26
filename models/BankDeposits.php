<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\helpers\ArrayHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "bank_deposits".
 *
 * @property int $id
 * @property int|null $accid
 * @property int|null $deposit_by
 * @property float|null $amount
 * @property string|null $expense_date
 * @property string|null $deposit_date
 * @property string|null $descr
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class BankDeposits extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'bank_deposits';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['accid', 'deposit_by', 'status', 'created_by', 'updated_by'], 'integer'],
            // [['amount'], 'number'],
            [['expense_date', 'deposit_date', 'created_at', 'updated_at'], 'safe'],
            [['descr'], 'string'],
            [['amount'],'number','min'=>0],
            [['deposit_date','accid','amount','billdate','tripid'],'required']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'accid' => 'Bank Account',
            'deposit_by' => 'Deposited By',
            'amount' => 'Amount',
            'expense_date' => 'Expense Date',
            'deposit_date' => 'Deposit Date',
            'descr' => 'Description',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
            'tripid'=>'Bus Trip',
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

    public static function getBankAccounts()
    {
        $bank = BankAccounts::find()->all();
        $result = ArrayHelper::map($bank, 'id', function ($banks) {
            return $banks->accname . ' (' . $banks->account_no.')';
        });
        return $result;
    }


    public function getBankAccount()
    {
        return $this->hasOne(BankAccounts::class, ['id' => 'accid']);
    }

    public function getDepositor()
    {
        return $this->hasOne(Employee::class, ['id' => 'deposit_by']);
    }


}
