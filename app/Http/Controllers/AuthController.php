<?php
// app/Http/Controllers/AuthController.php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Models\UserToken;
use App\Models\CustomHelper;
use App\Services\JWTService;
use Illuminate\Http\Request;
use Pest\ArchPresets\Custom;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    private $jwtService;

    public function __construct(JWTService $jwtService)
    {
        $this->jwtService = $jwtService;
    }

    public function index()
    {
        return response()->json(['success' => 'data found'], 200);
    }


    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required|string',
                'user_type' => 'required|in:driver,vendor,agent,customer',
            ]);
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password_hash)) {
            return CustomHelper::response(false, 'Invalid credentials', 442);
        }


        $accessToken = $this->jwtService->createAccessToken($user, $request->user_type);
        $refreshToken = $this->jwtService->createRefreshToken();

        // Save the refresh token in the database
        UserToken::updateOrCreate(
            ['user_id' => $user->id, 'user_type' => $request->user_type],
            [
                'refresh_token' => $refreshToken,
                'refresh_expires_at' => Carbon::now()->addDays(30),
            ]
        );

        return response()->json([
            'status' => true,
            'message' => "OK",
            'access_token' => $accessToken,
            'refresh_token' => $refreshToken,
        ]);
    }

    public function refresh(Request $request)
    {
        $request->validate([
            'refresh_token' => 'required',
            'user_type' => 'required|in:driver,vendor,agent,customer',
        ]);

        $refreshToken = $request->refresh_token;
        $useType = $request->user_type;

        $tokenRecord = UserToken::where('refresh_token', $refreshToken)
            ->where('user_type', $useType)
            ->first();

        if (!$tokenRecord || $tokenRecord->refresh_expires_at < Carbon::now()) {
            return response()->json(['error' => 'Invalid or expired refresh token'], 401);
        }

        $user = $tokenRecord->user;
        // Generate a new access token
        $accessToken = $this->jwtService->createAccessToken($user, $useType);

        return response()->json([
            'access_token' => $accessToken,
        ]);
    }

    public function logout(Request $request)
    {
        try {
            $request->validate([
                'refresh_token' => 'required',
            ]);
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
        $refreshToken = $request->refresh_token;
        // Remove the refresh token from the database
        UserToken::where('refresh_token', $refreshToken)->delete();
        return CustomHelper::response(true, 'Logged out successfully',200);

    }
}