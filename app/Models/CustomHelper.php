<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomHelper extends Model
{
    public static function response($status,$message,$code,$data=null)
    {
        return response()->json([
            'status' => $status,
            'message' => $message,
            'code' => $code,
            'data'=>$data
        ], $code);
    }


}