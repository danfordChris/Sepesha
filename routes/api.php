<?php

use app\controllers\FeesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeeCategoryController;
use App\Http\Controllers\VehicleController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


// Route::post('login', [AuthController::class, 'login']);
// Route::post('refresh-token', [AuthController::class, 'refreshToken'])->middleware('auth:api');
// Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');

Route::middleware('jwt.auth')->get('/user', function (Request $request) {
    return response()->json(['user' => $request->user, 'success' => true, 'code' => 200]);
});


// routes/api.php


// Public Routes
Route::post('index', [AuthController::class, 'index']);
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('refresh', [AuthController::class, 'refresh']);
Route::post('logout', [AuthController::class, 'logout']);

// Protected Routes
Route::middleware(['auth.jwt:driver,vendor,agent,customer'])->group(function () {

    Route::get('/vehicle/{id}', [VehicleController::class, 'view']);
    Route::get('/vehicles', [VehicleController::class, 'index']);
    Route::get('/category/{id}', [FeeCategoryController::class, 'view']);
    Route::get('/categories', [FeeCategoryController::class, 'index']);

    Route::get('/dashboard', function (Request $request) {
        return response()->json([
            'message' => 'Welcome to your dashboard',
            'user_id' => $request->user_id,
            'user_type' => $request->user_type,

        ]);
    });
});

// Driver-Specific Routes
Route::middleware(['auth.jwt:driver'])->group(function () {
    Route::get('/driver/operations', function (Request $request) {
        return response()->json([
            'message' => 'Driver operations endpoint',
            'user_id' => $request->user_id,
            'use_type' => $request->use_type,
        ]);
    });
});

// Vendor-Specific Routes
Route::middleware(['auth.jwt:vendor'])->group(function () {
    Route::get('/vendor/reports', function (Request $request) {
        return response()->json([
            'message' => 'Vendor reports endpoint',
            'user_id' => $request->user_id,
            'user_type' => $request->user_type,
        ]);
    });
});

// Agent-Specific Routes
Route::middleware(['auth.jwt:agent'])->group(function () {
    Route::get('/agent/tasks', function (Request $request) {
        return response()->json([
            'message' => 'Agent tasks endpoint',

        ]);
    });
});

// Customer-Specific Routes
Route::middleware(['auth.jwt:customer'])->group(function () {
    Route::get('/customer/orders', function (Request $request) {
        return response()->json([
            'message' => 'Customer orders endpoint',

        ]);
    });
});
