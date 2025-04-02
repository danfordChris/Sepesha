<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\helpers\ArrayHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use app\modules\credit\models\CreditControl;

/**
 * This is the model class for table "customers".
 *
 * @property int $id
 * @property string $name
 * @property string|null $type
 * @property string|null $country
 * @property string|null $region
 * @property int|null $pobox
 * @property string|null $physical_address
 * @property string|null $phone
 * @property string|null $email
 * @property int|null $district
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Customer extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'customers';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'phone', 'region', 'district'], 'required'],
            [['email'], 'email'],
            [['phone'], 'string', 'min' => 9, 'max' => 9],
            [['phone', 'pobox'], 'number'],
            [['type','pobox', 'district','region', 'status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name', 'country', 'region', 'phone', 'email'], 'string', 'max' => 100],
            [['physical_address'], 'string', 'max' => 255],
            [['phone'], 'chkPhone'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'type' => 'Type',
            'country' => 'Country',
            'region' => 'Region',
            'pobox' => 'P.O.Box',
            'physical_address' => 'Physical Address',
            'phone' => 'Phone',
            'email' => 'Email',
            'district' => 'District',
            'status' => 'Status',
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
        if ($this->status == 1)
            return 'active';
        else
            return 'Inactive';
    }


    public static function getRegions()
    {
        $district = Regions::find()->all();
        $result = ArrayHelper::map($district, 'rid', 'name');
        return $result;
    }


    public function getRegionz()
    {
        return $this->hasOne(Regions::class, ['rid' => 'region']);
    }

    public static function getDistricts()
    {
        $district = District::find()->all();
        $result = ArrayHelper::map($district, 'did', 'name');
        return $result;
    }


    public function getDistrictz()
    {
        return $this->hasOne(District::class, ['did' => 'district']);
    }


    public function getCategoryType()
    {
        return $this->hasOne(Categories::class, ['id' => 'type']);
    }

    public static function getCustomerCount()
    {
        $count = Customer::find()->count();
        return $count;
    }

    public function chkPhone($attribute, $params)
    {
        $mobile = trim($this->phone);
        if (preg_match('/^[1-9][0-9]{8}$/', $mobile) !== 1) {
            $this->addError('phone', 'The Mobile number provided is invalid ,must not start with zero or 255 and length must be nine(9).');
        }
    }


    public static function getCustomerList()
    {
        $cust = self::find()->all();
        $list = ArrayHelper::map($cust, 'id', 'name');
        return $list;
    }

    

    public static function getCustomerListActive()
    {
        $cust = self::find()->where(['status' => 1])->asArray()->all();
        $list = ArrayHelper::map($cust, 'id', 'name');
        return $list;
    }

    public function getBalance()
    {
        $np = $this->hasMany(CreditControl::class, ['cid' => 'id'])->where(['status' => 1])->sum('camount-damount');
        return $np ? $np : 0;
    }

    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {
            if ($this->isNewRecord) {
                $this->phone = '255' . $this->phone;
            } else {
                // Check if the '255' prefix is present and remove it if found
                if (strpos($this->phone, '255') === 0) {
                    $this->phone = substr($this->phone, 3); // Remove the '255' prefix
                }
                // Add '255' prefix back to the phone number
                $this->phone = '255' . $this->phone;
            }
            return true;
        }
        return false;
    }

    public function getCreatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'created_by']);
    }

    public function getUpdatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'updated_by']);
    }

  public function getContact()
    {
        return $this->hasOne(Categories::class, ['id' => 'name']);
    }

}