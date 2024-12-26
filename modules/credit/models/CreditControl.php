<?php

namespace app\modules\credit\models;

use Yii;
use yii\db\Expression;
use app\models\Customer;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
/**
 * This is the model class for table "crdtransaction".
 *
 * @property string $crdid
 * @property string $cdate
 * @property string $camount
 * @property string $damount
 * @property int $oid
 * @property int $cid
 * @property string $descr
 * @property string $ctype
 * @property string $refno
 * @property string $recptno
 * @property int $status
 * @property int $created_by
 * @property int $updated_by
 * @property string $created_at
 * @property string $updated_at
 */
class CreditControl extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public $date_to;
    public $date_from;
    public static function tableName()
    {
        return 'crdtransaction';
    }
    public function behaviors()
    {
        return [
            BlameableBehavior::class,
            [
                'class' => TimestampBehavior::class,
                'value' => new Expression('NOW()'),
            ],
        ];
    }
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['crdid', 'cdate', 'cid', 'ctype','camount','descr'], 'required'],
            [['created_at', 'updated_at','date_to','date_from'], 'safe'],
            [['camount'], 'number','min'=>1],
            [['oid', 'cid', 'status', 'created_by', 'updated_by'], 'integer'],
            [['descr'], 'string'],
            [['crdid'], 'string', 'max' => 100],
            [['ctype'], 'string', 'max' => 5],
            [['refno', 'recptno'], 'string', 'max' => 200],
            [['crdid','refno'], 'unique'],
            [['cdate'],'date','format'=>'php:Y-m-d']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'crdid' => 'Crdid',
            'cdate' => 'Tarehe',
            'camount' => 'Kiasi alichopoka(Amount)',
            'damount' => 'Debit Amount',
            'oid' => 'Oid',
            'cid' => 'Customer',
            'descr' => 'Description',
            'ctype' => 'type',
            'refno' => 'Refno',
            'recptno' => 'Recptno',
            'status' => 'Status',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

        //CUSTOMER BALANCE ACCOUNT
        public function getCredit(){
            $p=CreditControl::find()->where(['cid'=>$this->cid,'status'=>1,'ctype'=>'crd'])->andWhere(["<=","created_at",$this->created_at])->sum("camount");
             return $p?$p:0;
         }

           public function getDebit(){
             $p=CreditControl::find()->where(['cid'=>$this->cid,'status'=>1])->andWhere(['=','ctype','dbt'])->andWhere(["<=","created_at",$this->created_at])->sum("damount");
             return $p?$p:0;
         }


         public function getTotalBalance(){
            return $this->getCredit()-$this->getDebit();
         }

    public static function getBalance ($cust){
        $np=self::find()->select(['sum(camount-damount)'])->where(['cid'=>$cust,'status'=>1]);
        return $np?$np:0;
    }

    public function getCustomer(){
        return $this->hasOne(Customer::class,['id'=>'cid']);
    }



}
