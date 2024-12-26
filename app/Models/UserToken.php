<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserToken extends Model
{
    //

    use HasFactory;

    protected $table = 'user_access_tokens';
    protected $fillable = ['user_id','user_type', 'access_token ', 'refresh_token', 'refresh_expires_at', 'token_expires_at', 'created_at', 'updated_at'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}