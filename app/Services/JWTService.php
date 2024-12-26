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
        $this->key = env('JWT_SECRET');
    }

    public function createAccessToken(User $user, $user_type)
    {
        $payload = [
            'iss' => 'http://example.org',
            // 'aud' => 'http://example.com',
            // 'nbf' => 1357000000,
            'sub' => $user->id,
            'user_type' => $user_type,
            'iat' => Carbon::now()->timestamp,
            'exp' => Carbon::now()->addMinutes(60)->timestamp, // 1 hour expiration
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
}