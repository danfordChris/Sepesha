<?php

namespace App\Models;

use App\Models\User;
use App\Models\FeeCategory;
use App\Traits\CreatedUpdatedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Vehicle extends Model
{
    use HasFactory, SoftDeletes,HasUuids,CreatedUpdatedBy;
    protected $keyType = 'string';
    // Disable auto-incrementing for the UUID field
    public $incrementing = false;

    protected $fillable = [
        'id',
        'plate_number',
        'make',
        'model',
        'owner_id',
        'driver_id',
        'fee_category_id',
        'year',
        'color',
        'weight',
        'capacity',
        'status',
        'created_by',
        'updated_by',
        'latitude',
        'longitude',
        'location_updated_at'
    ];


    public function category()
    {
        return $this->hasOne(FeeCategory::class, 'id', 'fee_category_id');
    }

    public function driver()
    {
        return $this->hasOne(User::class, 'auth_key', 'driver_id');
    }


    public function attachments()
    {
        return $this->hasMany(Attachment::class,'refno','id');
    }

    protected $casts = [
        'id' => 'string',
        'year' => 'integer',
        'weight' => 'decimal:2',
        'capacity' => 'integer',
    ];
}