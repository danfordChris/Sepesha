<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

/**
 * This is the model class for table "mobile_phone_followups".
 *
 * @property int $id
 * @property int|null $intakeid
 * @property string|null $contact_date
 * @property int|null $empid
 * @property int|null $followup_type
 * @property string|null $notes_details
 * @property string|null $next_date
 * @property int|null $caregiverid
 * @property string|null $caregiver_name
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class MobilePhoneFollowup extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'mobile_phone_followups';
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
            [['intakeid', 'empid', 'followup_type', 'caregiverid', 'status', 'created_by', 'updated_by'], 'integer'],
            [['contact_date', 'next_date', 'created_at', 'updated_at'], 'safe'],
            [['notes_details'], 'string'],
            [['caregiver_name'], 'string', 'max' => 200],
            [['contact_date', 'next_date', 'notes_details', 'followup_type'], 'required']

        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'intakeid' => 'Intakeid',
            'contact_date' => 'Contact Date',
            'empid' => 'Empid',
            'followup_type' => 'Followup Type',
            'notes_details' => 'Notes Details',
            'next_date' => 'Next Date',
            'caregiverid' => 'Caregiverid',
            'caregiver_name' => 'Caregiver Name',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }
}
