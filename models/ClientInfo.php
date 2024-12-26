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
            [['phonecode', 'phone','referal_code'], 'safe'],
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
      return $this->name .' '.$this->mname .' ' .$this->sname;

    }

    public  function getPhoneNumber()
    {
      return '+'. $this->phonecode .$this->phone;

    }


    public function getWorkFlowStage()
    {
        return $this->hasOne(WfStages::class, ['sno' => 'stid', 'wid' => 'wid']);
    }

    public function getWf()
    {
        return $this->hasOne(Workflow::class, ['wid' => 'wid']);
    }


}