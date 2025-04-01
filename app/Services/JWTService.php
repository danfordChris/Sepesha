<?php
// app/Services/JWTService.php

namespace App\Services;

use Carbon\Carbon;
use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Models\CustomHelper;
use Illuminate\Http\Response;

class JWTService
{
    private $key;

    public function __construct()
    {
        $this->key = env('JWT_SECRET')??'6tVxA17jaFKQd3bFB5UIzLz/s24xdZpjX2V0y3uncoY=';
    }

    public function createAccessToken(User $user, $user_type)
    {
        $payload = [
            'iss' => 'https://kiungo.sepesha.com',
            // 'aud' => 'http://example.com',
            // 'nbf' => 1357000000,
            'sub' => $user->id,
            'iat' => Carbon::now()->timestamp,
            //'exp' => Carbon::now()->addMinutes(60)->timestamp, // 1 hour expiration
            'exp' => Carbon::now()->addDays(2)->timestamp, // 1 hour expiration
            'user_type' => $user_type,
            'auth_key'=>$user->auth_key,
            'data' => [
                'first_name' => $user->name,
                'middle_name' => $user->mname,
                'last_name' => $user->sname,
                'phone_number' => $user->phone,
                'phonecode' => $user->phonecode,
                'email' => $user->email,
                'privacy_checked' => $user->privacy_checked,
                'uid'=>$user->auth_key
            ]
        ];

        return JWT::encode($payload, $this->key, 'HS256');
    }

    public function createRefreshToken()
    {
        $payload = [
            'iat' => Carbon::now()->timestamp,
            'exp' => Carbon::now()->addDays(30)->timestamp, // 30 days expiration
        ];

        return JWT::encode($payload, $this->key, 'HS256');
    }

    public function decode($token)
    {
        try {
            return JWT::decode($token, new Key($this->key, 'HS256'));
        } catch (\Exception $e) {
            return false;
            //return CustomHelper::response(false, $e->getMessage(), Response::HTTP_UNAUTHORIZED);
        }
    }

    public function validateToken($token)
    {

        try {
            $decoded = $this->decode($token);
            return $decoded && $decoded->exp > Carbon::now()->timestamp;
        } catch (\Exception $e) {
            return CustomHelper::response(false, $e->getMessage(), Response::HTTP_UNAUTHORIZED);
        }
    }



    public static function generateOTP()
    {
        // random_int(100000, 999999);
        return random_int(1000, 9999);
    }
}