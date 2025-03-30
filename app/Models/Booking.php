<?php

namespace App\Models;

use App\Traits\CreatedUpdatedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booking extends Model
{
    use HasFactory, SoftDeletes, CreatedUpdatedBy;


    protected $keyType = 'string';
    // Disable auto-incrementing for the UUID field
    public $incrementing = false;
    protected $fillable = [
        'id',
        'customer_id',
        'agent_id',
        'driver_id',
        'vehicle_id',
        'vendor_id',
        'driver_assignment_id',
        'booking_reference',
        'fee_category_id',
        'discount_code',
        'discount_code_value',
        'referal_code',
        'referal_code_value',
        'recepient_name',
        'recepient_phone',
        'recepient_address',
        'type',
        'pyment_mode',
        'description',
        'weight',
        'base_rate_km',
        'base_price',
        'vehicle_multipplier',
        'vat',
        'other_charge',
        'driver_comission_rate',
        'vendor_comission_rate',
        'office_comission_rate',
        'agent_comission_rate',
        'driver_bonus',
        'vendor_bonus',
        'customer_bonus',
        'volume',
        'price',
        'discount',
        'distance_km',
        'amount',
        'currency',
        'pickup_location',
        'delivery_location',
        'pickup_latitude',
        'pickup_longitude',
        'delivery_latitude',
        'delivery_longitude',
        'pickup_date',
        'delivery_date',
        'scheduled_time',
        'pickup_photo',
        'delivery_photo',
        'status',
        'created_by',
        'updated_by',
        'cancel_by',
        'cancel_reason',
        'driver_commnet',
        'client_commnet',
        'rating'
    ];

    protected $casts = [
        'pickup_latitude' => 'decimal:2',
        'pickup_longitude' => 'decimal:2',
        'delivery_latitude' => 'decimal:2',
        'delivery_longitude' => 'decimal:2',
    ];

    public function category()
    {
        return $this->hasOne(FeeCategory::class, 'id', 'fee_category_id');
    }

    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id', 'auth_key');
    }

    public function agent()
    {
        return $this->belongsTo(User::class, 'agent_id', 'auth_key');
    }

    public function driver()
    {
        return $this->belongsTo(User::class, 'driver_id', 'auth_key');
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function vendor()
    {
        return $this->belongsTo(User::class, 'vendor_id', 'auth_key');
    }
}