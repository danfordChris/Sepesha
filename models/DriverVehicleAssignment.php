<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use app\models\CustomHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "driver_vehicle_assignments".
 *
 * @property string $id
 * @property int $driver_id
 * @property string $vehicle_id
 * @property float|null $latitude
 * @property float|null $longitude
 * @property string|null $location_updated_at
 * @property string|null $assignment_start
 * @property string|null $assignment_end
 * @property string $status
 * @property string $approval_status Approval status: pending, approved, rejected
 * @property int|null $approved_by
 * @property string|null $approved_at
 * @property string|null $approval_comments
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property string|null $deleted_at
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class DriverVehicleAssignment extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'driver_vehicle_assignments';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['driver_id', 'vehicle_id'], 'required'],
            [['approved_by', 'created_by', 'updated_by'], 'integer'],
            [['latitude', 'longitude'], 'number'],
            [['location_updated_at', 'assignment_start', 'assignment_end', 'approved_at', 'deleted_at', 'created_at', 'updated_at'], 'safe'],
            [['id'], 'string', 'max' => 50],
            [['status', 'approval_status', 'approval_comments'], 'string', 'max' => 191],
            [['id'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'driver_id' => Yii::t('app', 'Driver '),
            'vehicle_id' => Yii::t('app', 'Your Vehicle'),
            'latitude' => Yii::t('app', 'Latitude'),
            'longitude' => Yii::t('app', 'Longitude'),
            'location_updated_at' => Yii::t('app', 'Location Updated At'),
            'assignment_start' => Yii::t('app', 'Assignment Start'),
            'assignment_end' => Yii::t('app', 'Assignment End'),
            'status' => Yii::t('app', 'Status'),
            'approval_status' => Yii::t('app', 'Approval Status'),
            'approved_by' => Yii::t('app', 'Approved By'),
            'approved_at' => Yii::t('app', 'Approved At'),
            'approval_comments' => Yii::t('app', 'Approval Comments'),
            'created_by' => Yii::t('app', 'Created By'),
            'updated_by' => Yii::t('app', 'Updated By'),
            'deleted_at' => Yii::t('app', 'Deleted At'),
            'created_at' => Yii::t('app', 'Created At'),
            'updated_at' => Yii::t('app', 'Updated At'),
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


    public function beforeSave($insert)
    {
        if ($this->isNewRecord){
            $this->id = CustomHelper::getUuid();
        }
        return parent::beforeSave($insert);
    }


    public function getCreatedUser()
    {
        return $this->hasOne(ClientInfo::class, ['id' => 'created_by']);
    }

    public function getVehicle()
    {
        return $this->hasOne(Vehicle::class, ['id' => 'vehicle_id']);
    }

    public function getUpdatedUser()
    {
        return $this->hasOne(ClientInfo::class, ['id' => 'updated_by']);
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