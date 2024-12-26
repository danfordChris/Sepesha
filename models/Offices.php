<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\helpers\ArrayHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "offices".
 *
 * @property integer $id
 * @property string $business_name
 */
class Offices extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'offices';
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
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['business_name'], 'required'],
            [['business_name'], 'unique'],
            [['business_name'], 'string', 'max' => 100],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'business_name' => 'Business Name',
        ];
    }


//         //get total collections paid
//     public function getCollectionSalesBefore()
// {
//     $station_id=$this->id;
//    $m=Collections::find()->where(['cancel_status'=>0,'station_id' =>$station_id])->sum('paid_amount');
//    return $m?$m:0;

// }

// //get credit sales for capital opening per station
// public function getCreditSalesOpeningForCapital()
// {
//     $station_id=$this->id;
//       $m=FuelCredits::find()->where(['cancel_status'=>0,'station_id' =>$station_id])->sum('credit_qty*credit_per_ltr');
//       return $m?$m:0;

// }

// public function getKianzioDeni()
// {

//     $station=$this->id;
//     //'station_id'=>'station_id','sale_date'=>'sale_date','customer_name'=>'sales_rep_id'])
//     //return $this->hasOne(TblPaymentItem::className(),['item_name' => 'trans_id','sc_id'=>'station_id','order_date'=>'sale_date']);
//     $val=CustomerAccount::find()->where(['station_id'=>$station,'trans_code'=>'str'])->sum('debit_amount');
//     return $val;
// }


// public function getDenilaLeoOpening(){
//     return ($this->getCreditSalesOpeningForCapital()+$this->getKianzioDeni())-$this->getCollectionSalesBefore();

// }



public static function getCityOptions()
{
    $sql=Cities::find()->all();
    $cityArray=ArrayHelper::map($sql,'id','name');
    return $cityArray;
}
public static function getOfficeList()
{
    $sql=self::find()->where(['status'=>true])->all();
    $office=ArrayHelper::map($sql,'id','business_name');
    return $office;
}

public static function getCountryOptions()
{
    $sql=Countries::find()->orderBy('country_id','asc')->all();
    $countryArray=ArrayHelper::map($sql,'country_id','country_name');
    return $countryArray;
}


public static function getCurrencyOptions()
{

    $List=['USD'=>'USD','TSH'=>'TSH'];
    return $List;
}



public static function getGengerOptions()
{

    $List=['male'=>'Male','female'=>'Female'];
    return $List;
}

public static function getMaritalStatusOptions()
{

    $List=['married'=>'Married','single'=>'Single','devorced'=>'Devorced'];
    return $List;
}

public function getLocation()
{
    return $this->hasOne(Location::class, ['lid' => 'location_id']);
}

public static function getOfficeOptions(){
    $data1=Offices::find()->all();
    $datalist=ArrayHelper::map($data1,'id','business_name');
    return $datalist;

    }

}
