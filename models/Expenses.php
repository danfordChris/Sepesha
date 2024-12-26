<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\helpers\ArrayHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "expenses".
 *
 * @property int $id
 * @property string|null $catid
 * @property int|null $empid
 * @property int|null $busid
 * @property int|null $trip_id
 * @property int|null $location_id
 * @property int|null $oid
 * @property float|null $amount
 * @property string|null $descr
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Expenses extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'expenses';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [[ 'status', 'created_by', 'updated_by'], 'integer'],
            [['descr'], 'string'],
            [['created_at', 'updated_at','empid', 'busid', 'trip_id', 'location_id', 'oid'], 'safe'],
            [['catid'], 'string', 'max' => 50],
            [['catid','transact_date','amount'], 'required'],
            [['amount'],'number','min'=>0]
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'catid' => 'Category',
            'empid' => 'Payer',
            'busid' => 'Bus',
            'trip_id' => 'Trip',
            'location_id' => 'Location',
            'reference_no' => 'Reference Number',
            'transact_date' => 'Transaction Date',
            'oid' => 'Office',
            'amount' => 'Amount',
            'descr' => 'Description',
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
        if ($this->status == 10)
            return 'active';
        else
            return 'Inactive';
    }

    public static function getExpenseCategories()
    {
        $excategories = ExpensesCategory::find()->all();
        $result = ArrayHelper::map($excategories, 'id', 'name');
        return $result;
    }


    public function getExpenseCategory()
    {
        return $this->hasOne(ExpensesCategory::class, ['id' => 'catid']);
    }

    public static function getEmployees()
    {
        $employee = Employee::find()->all();
        $results = ArrayHelper::map($employee, 'id', function ($result) {
            return $result->fname . ' ' . $result->sname;
        });
        return $results;
    }


    public function getEmployee()
    {
        return $this->hasOne(Employee::class, ['id' => 'empid']);
    }

    public static function getTrips()
    {
        $employee = Trips::find()->all();
        $result = ArrayHelper::map($employee, 'id', 'trip_no');
        return $result;
    }


    public function getTrip()
    {
        return $this->hasOne(Trips::class, ['id' => 'trip_id']);
    }


    public static function getLocations()
    {
        $stops = TripStops::find()->all();
        $result = ArrayHelper::map($stops, 'id', 'name');
        return $result;
    }


    public function getLocation()
    {
        return $this->hasOne(TripStops::class, ['id' => 'location_id']);
    }


    public static function getBuses()
    {
        $buses = Bus::find()->all();
        $result = ArrayHelper::map($buses, 'id', 'regno');
        return $result;
    }


    public function getBus()
    {
        return $this->hasOne(Bus::class, ['id' => 'busid']);
    }

    public function getOffice()
    {
        return $this->hasOne(Office::class, ['id' => 'oid']);
    }
}
