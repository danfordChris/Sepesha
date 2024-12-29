<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $keyType = 'string';

    // Disable auto-incrementing for the UUID field
    public $incrementing = false;


    public function category()
{
    return $this->hasOne(FeeCategory::class,'id','fee_category_id');
}
}