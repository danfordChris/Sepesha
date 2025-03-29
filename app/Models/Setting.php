<?php

namespace App\Models;

use App\Models\User;
use App\Models\FeeCategory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Setting extends Model
{
    use HasFactory;
    public $primaryKey = 'settingid';

    protected $fillable = [
        'settingid',

    ];


}