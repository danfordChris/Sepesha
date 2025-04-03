<?php

namespace app\models;

use Yii;

use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "clients_info".
 *
 * @property integer $name
 * @property string $sname

 */
class ClientInfo extends \yii\db\ActiveRecord
{
  /**
   * @inheritdoc
   */
  public static function tableName()
  {
    return 'clients_info';
  }

  /**
   * @inheritdoc
   */
  public function rules()
  {
    return [
      [['name', 'sname', 'mname'], 'required'],
      [['phonecode', 'phone', 'referal_code'], 'safe'],
    ];
  }

  /**
   * @inheritdoc
   */

  public function attributeLabels()
  {
    return [
      'sname' => 'Last Name',
      'name' => 'First Name',

    ];
  }

  public  function getFullName()
  {
    return $this->name . ' ' . $this->mname . ' ' . $this->sname;
  }

  public  function getFirstName()
  {
    return $this->name ?? "";
  }

  public  function getMiddleName()
  {
    return $this->mname ?? "";
  }

  public  function getLastame()
  {
    return $this->sname ?? "";
  }
  public  function getDob()
  {
    return $this->dob ?? "";
  }


  public  function getReferenceNumber()
  {
    return $this->reference_number ?? "";
  }


  public  function getEmail()
  {
    return $this->email ?? "";
  }
  public  function getVendorphoto()
  {
    return $this->profile_photo ?? "";
  }

  public  function getPhoneNumber()
  {
    return '+' . $this->phonecode . $this->phone;
  }

  public function getWorkFlowStage()
  {
    return $this->hasOne(WfStages::class, ['sno' => 'stid', 'wid' => 'wid']);
  }

  public function getWf()
  {
    return $this->hasOne(Workflow::class, ['wid' => 'wid']);
  }


  // public static function getCustomerList()
  // {
  //   $cust = self::find()->all();
  //   $list = ArrayHelper::map($cust, 'auth_key', 'name');
  //   return $list;
  // }
  public static function getCustomerList()
  {
    $cust = self::find()->all();
    $list = ArrayHelper::map($cust, 'auth_key', function ($model) {
      return $model->name . ' ' . $model->sname;
    });
    return $list;
  }


  public static function getCustomerListActive()
  {
    $cust = self::find()->where(['status' => 1])->asArray()->all();
    $list = ArrayHelper::map($cust, 'auth_key', 'name');
    return $list;
  }
}
