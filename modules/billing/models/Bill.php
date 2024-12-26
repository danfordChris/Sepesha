<?php

namespace app\modules\billing\models;

use Yii;
use app\models\User;
use app\BankAccounts;
use yii\db\Expression;
use app\models\Company;
use app\models\Customer;
use app\models\Products;
use yii\helpers\ArrayHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use app\modules\credit\models\CreditControl;

/**
 * This is the model class for table "bills".
 *
 * @property string $billid
 * @property int $cid
 * @property string $billno
 * @property int $business_id
 * @property string $bill_date
 * @property string $due_date
 * @property string $shipping
 * @property int $payment_info
 * @property string $other_info
 * @property int $tax_rate
 * @property string $terms
 * @property string $disc_amount
 * @property string $saales_person
 * @property string $total_amount
 * @property string $descr
 * @property string $payment_status
 * @property string $status
 * @property int $created_by
 * @property int $updated_by
 * @property string $created_at
 * @property string $updated_at
 */
class Bill extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'bills';
    }

    public function behaviors()
    {
         return [
             BlameableBehavior::class,
             [
                 'class'=>TimestampBehavior::class,
                 'value'=>new Expression('NOW()')
             ],
         ];
     }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['billid', 'cid', 'bill_date','currency','due_date','business_id'], 'required'],
            [['cid', 'business_id', 'payment_info', 'tax_rate', 'created_by', 'updated_by'], 'integer'],
            [['bill_date', 'due_date', 'created_at', 'updated_at'], 'safe'],
            [['shipping', 'other_info', 'terms', 'descr', 'payment_status', 'status'], 'string'],
            [['disc_amount', 'total_amount','erate'], 'number'],
            [['billid', 'saales_person'], 'string', 'max' => 190],
            [['billno'], 'string', 'max' => 255],
            [['billid'], 'unique'],
            [['due_date'], 'compare', 'compareAttribute' => 'bill_date', 'operator' => '>', 'message' => 'Due date must be greater than invoice date.'],
            [['refid'],'safe']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'billid' => 'Billid',
            'cid' => 'Customer',
            'billno' => 'Billno',
            'business_id' => 'Business',
            'bill_date' => 'Bill Date',
            'due_date' => 'Duedate',
            'shipping' => 'Shipping',
            'payment_info' => 'Payment Info',
            'other_info' => 'Other Info',
            'tax_rate' => 'Tax Rate',
            'terms' => 'Terms',
            'disc_amount' => 'Disc Amount',
            'saales_person' => 'Saales Person',
            'total_amount' => 'Total Amount',
            'descr' => 'Description',
            'payment_status' => 'Payment Status',
            'status' => 'Status',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'currency'=>'currency'
        ];
    }


    public static function getProductList()
    {
        $sql=Products::find()->where(['status'=>true])->all();
        $prod=ArrayHelper::map($sql,'product_id','product_item_model');
        return $prod;
    }


    public  function getCustomer()
    {

        return $this->hasOne(Customer::class,['id'=>'cid']);
    }


    public  function getBusiness()
    {

        return $this->hasOne(Company::class,['company_id'=>'business_id']);
    }

    public  function getBank()
    {

        return $this->hasOne(BankAccounts::class,['id'=>'payment_info']);
    }

    public  function getBillItems()
    {

        return $this->hasMany(BillItem::class,['billid'=>'billid']);
    }

    public  function getBillItemTotal()
    {

        $p= $this->hasMany(BillItem::class,['billid'=>'billid'])->where(['status'=>'ACTIVE'])->sum('quantity*unit_price');
        return $p??0;
    }

    public  function getTotaInvoicelPaid()
    {

        $p= $this->hasMany(CreditControl::class,['refno'=>'billno'])->where(['status'=>1,'ctype'=>'dbt','type'=>'invoice'])->sum('damount');
        return $p??0;
    }


    public  function getInvoiceBalance()
    {

        return $this->getBillItemTotal()-$this->getTotaInvoicelPaid();
    }


    public function getCreated(){
        return $this->hasOne(User::class,['id'=>'created_by']);
    }
    public function getUpdated(){
        return $this->hasOne(User::class,['id'=>'updated_by']);
    }



    public static function getBillCurrency(){
        return [
            'TZS'=>'TZS',
            'USD'=>'USD',
        ];

    }

    public function CustomerTransaction()
    {
    if(!$this->validate()) {
                return null;
            }
            $credtiControl = new CreditControl();
            $credtiControl->crdid =Yii::$app->security->generateRandomString(10);
            $credtiControl->cdate =$this->bill_date;
            $credtiControl->cid = $this->cid;
            $credtiControl->ctype ='crd';
            $credtiControl->damount =0;
            $credtiControl->oid   = $this->business_id;
            $credtiControl->descr ='invoice created';
            $credtiControl->camount =$this->getBillItemTotal();
            $credtiControl->refno =$this->billno;
            $credtiControl->type ='invoice';
            return $credtiControl->save() ? $credtiControl : null;
    }
}
