<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "account_entries".
 *
 * @property int $id
 * @property int|null $transact_id
 * @property string|null $name
 * @property string|null $entry_type
 * @property string|null $account_code
 * @property float|null $dramount
 * @property float|null $cramount
 * @property string|null $descr
 * @property string|null $reference_no
 * @property int|null $customer_id
 * @property int|null $status
 * @property string|null $transact_date
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class AccountEntriesInvoice extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'account_entries';
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
            [['customer_id', 'created_by', 'updated_by','fyid'], 'integer'],
            [['dramount', 'cramount'], 'number'],
            [['descr'], 'string'],
            [['transact_date', 'created_at', 'updated_at','status'], 'safe'],
            [['name', 'entry_type', 'account_code', 'reference_no'], 'string', 'max' => 50],
           // [['id'], 'default', 'value' => Yii::$app->security->generateRandomString(10)],
            [['cramount','entryid'],'required'],
            [['id'],'unique'],
            [['wid', 'stid', 'wfstatus', 'requserinput', 'status',], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'transact_id' => 'Transact ID',
            'name' => 'Name',
            'entry_type' => 'Entry Type',
            'account_code' => 'Account Code',
            'dramount' => 'Amount',
            'cramount' => 'Amount',
            'descr' => 'Description',
            'reference_no' => 'Reference No',
            'customer_id' => 'Customer ID',
            'status' => 'Status',
            'transact_date' => 'Transaction Date',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
            'entryid'=>'Entry Item',
            'fyid'=>'Financial Year',
        ];
    }

    public function getStatuz()
    {
        if ($this->status == 1)
            return 'active';
        else
            return 'Active';
    }
    public static function getStatusOptions()
    {
        return [
            '1' => 'active',
            '0' => 'Inactive',

        ];
    }


    public function getCode()
    {
        return $this->hasOne(AccountCodes::class, ['coid' => 'entryid']);
    }


    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert))
        {
            if ($this->isNewRecord) {
                $this->id=Yii::$app->security->generateRandomString(10);
            }
            return true;
        }
        return false;
    }

 public static function SaveEntry($entry_type,$account_code,$codeid,$codename,$entrycategory,$descr,$transact_date,$currency,$customer_id,$transactionid,$cramount,$dramount)
 {
         $modelEntry = new AccountEntries();
         $modelEntry->id =Yii::$app->security->generateRandomString(10);
         $modelEntry->entry_type = $entry_type;
         $modelEntry->account_code = $account_code;
         $modelEntry->entryid = $codeid;
         $modelEntry->name = $codename;
         $modelEntry->category = $entrycategory;
         $modelEntry->descr = $descr;
         $modelEntry->transact_date = $transact_date;
         $modelEntry->currency = $currency;
         $modelEntry->customer_id=$customer_id;
         $modelEntry->transact_id=$transactionid;
         $modelEntry->cramount = $cramount;
         $modelEntry->dramount = $dramount;
         $modelEntry->fyid=AccountCodes::CurrentFinancialYear();
         return $modelEntry->save() ? true : false;
 }


}
