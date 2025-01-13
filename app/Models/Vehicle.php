<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Vehicle extends Model
{
    protected $keyType = 'string';

    // Disable auto-incrementing for the UUID field
    public $incrementing = false;


    public function category()
{
    return $this->hasOne(FeeCategory::class,'id','fee_category_id');
}

public function driver()
{
    return $this->hasOne(User::class,'auth_key','driver_id');
}


}