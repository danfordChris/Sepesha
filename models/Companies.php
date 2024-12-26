<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "companies".
 *
 * @property integer $company_id
 * @property string $company_name
 * @property string $company_email
 * @property string $company_address
 * @property string $logo
 * @property string $company_start_date
 * @property string $company_created_date
 * @property string $company_status
 */
class Companies extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'companies';
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
            [['company_name', 'company_email', 'company_address', 'company_status'], 'required'],
            [['logo', 'tin_no', 'status', 'company_start_date'], 'safe'],
            [['company_email'], 'email'],
            [['company_name', 'company_email'], 'string', 'max' => 100],
            [['company_address'], 'string', 'max' => 255],
            [['logo'], 'image', 'extensions' => 'jpg, png, jpeg', 'minWidth' => 100, 'maxWidth' => 1500,  'minHeight' => 100, 'maxHeight' => 1500, 'maxSize' => 2048 * 2048 * 1],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'company_id' => 'Business',
            'company_name' => 'Business Name',
            'company_email' => 'Business Email',
            'company_address' => 'Business Address',
            'logo' => 'Logo',
            'tin_no' => 'TIN NO.',
            'company_start_date' => 'Registered at',
            'company_created_date' => 'Business Created Date',
            'company_status' => 'Short Name',
        ];
    }

    public function getImageurl()
    {
        return \Yii::$app->request->BaseUrl . '@web/uploads/' . $this->getLogo();
    }

    public function getLogo()
    {

        $value = Companies::find()->one();
        return  $value->logo;
    }

    public function getCreatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'created_by']);
    }

    public function getUpdatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'updated_by']);
    }

    public static function getStatusOptions()
    {
        return [
            '1' => 'active',
            '0' => 'Inactive',

        ];
    }

    public function getStatusName()
    {
        if ($this->status == 1)
            return 'active';
        else
            return 'Inactive';
    }
}
