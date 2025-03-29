<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "bookings".
 *
 * @property string $id
 * @property string|null $customer_id
 * @property string|null $agent_id
 * @property string|null $driver_id
 * @property string|null $vehicle_id
 * @property string|null $vendor_id
 * @property string|null $driver_assignment_id
 * @property string $booking_reference
 * @property string|null $fee_category_id
 * @property string|null $discount_code
 * @property float|null $discount_code_value
 * @property string|null $referal_code
 * @property float|null $referal_code_value
 * @property string|null $recepient_name
 * @property string|null $recepient_phone
 * @property string|null $recepient_address
 * @property string|null $type
 * @property string|null $pyment_mode
 * @property string|null $description
 * @property float $weight
 * @property float $base_rate_km
 * @property float $base_price
 * @property float $vehicle_multipplier
 * @property float $vat
 * @property float $other_charge
 * @property float $driver_comission_rate
 * @property float $vendor_comission_rate
 * @property float $office_comission_rate
 * @property float $agent_comission_rate
 * @property float $driver_bonus
 * @property float $vendor_bonus
 * @property float $customer_bonus
 * @property float|null $volume
 * @property float|null $price
 * @property float|null $discount
 * @property float $distance_km
 * @property float $amount
 * @property string $currency
 * @property string $pickup_location
 * @property string $delivery_location
 * @property float|null $pickup_latitude
 * @property float|null $pickup_longitude
 * @property float|null $delivery_latitude
 * @property float|null $delivery_longitude
 * @property string $pickup_date
 * @property string|null $delivery_date
 * @property string|null $scheduled_time
 * @property string|null $pickup_photo
 * @property string|null $delivery_photo
 * @property string $status
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property string|null $deleted_at
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class Booking extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'bookings';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'booking_reference', 'weight', 'base_rate_km', 'base_price', 'vehicle_multipplier', 'vat', 'other_charge', 'driver_comission_rate', 'vendor_comission_rate', 'office_comission_rate', 'agent_comission_rate', 'driver_bonus', 'vendor_bonus', 'customer_bonus', 'distance_km', 'amount', 'pickup_location', 'delivery_location', 'pickup_date'], 'required'],
            [['discount_code_value', 'referal_code_value', 'weight', 'base_rate_km', 'base_price', 'vehicle_multipplier', 'vat', 'other_charge', 'driver_comission_rate', 'vendor_comission_rate', 'office_comission_rate', 'agent_comission_rate', 'driver_bonus', 'vendor_bonus', 'customer_bonus', 'volume', 'price', 'discount', 'distance_km', 'amount', 'pickup_latitude', 'pickup_longitude', 'delivery_latitude', 'delivery_longitude'], 'number'],
            [['description', 'status'], 'string'],
            [['pickup_date', 'delivery_date', 'scheduled_time', 'deleted_at', 'created_at', 'updated_at'], 'safe'],
            [['created_by', 'updated_by'], 'integer'],
            [['id', 'customer_id', 'agent_id', 'driver_id', 'vehicle_id', 'vendor_id', 'driver_assignment_id', 'fee_category_id'], 'string', 'max' => 36],
            [['booking_reference', 'currency', 'pickup_location', 'delivery_location'], 'string', 'max' => 191],
            [['discount_code', 'referal_code', 'type'], 'string', 'max' => 50],
            [['recepient_name', 'recepient_address'], 'string', 'max' => 190],
            [['recepient_phone'], 'string', 'max' => 30],
            [['pyment_mode'], 'string', 'max' => 20],
            [['pickup_photo', 'delivery_photo'], 'string', 'max' => 200],
            [['booking_reference'], 'unique'],
            [['id'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'customer_id' => 'Client',
            'agent_id' => 'Agent ',
            'driver_id' => 'Driver',
            'vehicle_id' => 'Vehicle',
            'vendor_id' => 'Vendor',
            'driver_assignment_id' => 'Driver Assignment ',
            'booking_reference' => 'Booking Reference',
            'fee_category_id' => 'Fee Category',
            'discount_code' => 'Discount Code',
            'discount_code_value' => 'Discount Code Value',
            'referal_code' => 'Referal Code',
            'referal_code_value' => 'Referal Code Value',
            'recepient_name' => 'Recepient Name',
            'recepient_phone' => 'Recepient Phone',
            'recepient_address' => 'Recepient Address',
            'type' => 'Client Type',
            'pyment_mode' => 'Pyment Mode',
            'description' => 'Description',
            'weight' => 'Weight',
            'base_rate_km' => 'Base Rate Km',
            'base_price' => 'Base Price',
            'vehicle_multipplier' => 'Vehicle Multipplier',
            'vat' => 'Vat',
            'other_charge' => 'Other Charge',
            'driver_comission_rate' => 'Driver Comission Rate',
            'vendor_comission_rate' => 'Vendor Comission Rate',
            'office_comission_rate' => 'Office Comission Rate',
            'agent_comission_rate' => 'Agent Comission Rate',
            'driver_bonus' => 'Driver Bonus',
            'vendor_bonus' => 'Vendor Bonus',
            'customer_bonus' => 'Customer Bonus',
            'volume' => 'Volume',
            'price' => 'Price',
            'discount' => 'Discount',
            'distance_km' => 'Distance Km',
            'amount' => 'Amount',
            'currency' => 'Currency',
            'pickup_location' => 'Pickup Location',
            'delivery_location' => 'Delivery Location',
            'pickup_latitude' => 'Pickup Latitude',
            'pickup_longitude' => 'Pickup Longitude',
            'delivery_latitude' => 'Delivery Latitude',
            'delivery_longitude' => 'Delivery Longitude',
            'pickup_date' => 'Pickup Date',
            'delivery_date' => 'Delivery Date',
            'scheduled_time' => 'Scheduled Time',
            'pickup_photo' => 'Pickup Photo',
            'delivery_photo' => 'Delivery Photo',
            'status' => 'Status',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'deleted_at' => 'Deleted At',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

    public function getFee()
    {
        return $this->hasOne(FeeCategory::class, ['id' => 'fee_category_id']);
    }

    public function getDriver()
    {
        return $this->hasOne(ClientInfo::class, ['auth_key' => 'driver_id']);
    }

    public function getCustomer()
    {
        return $this->hasOne(ClientInfo::class, ['auth_key' => 'customer_id']);
    }

    public function getVehicle()
    {
        return $this->hasOne(Vehicle::class, ['id' => 'vehicle_id']);
    }
}