<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class DriverReview extends Model
{
    use SoftDeletes;

    public $incrementing = false;
    protected $keyType = 'char';

    protected $fillable = [
        'id',
        'driver_id',
        'user_type',
        'user_id',
        'booking_id',
        'rating',
        'review',

    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }

    // Relationships
    public function driver()
    {
        return $this->belongsTo(User::class, 'driver_id', 'auth_key');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'auth_key');
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class, 'booking_id', 'id');
    }
    
}