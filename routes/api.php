<?php

use app\controllers\FeesController;
use App\Http\Controllers\AttachmentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\FeeCategoryController;
use App\Http\Controllers\RideController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\WelcomeController;
use App\Models\Booking;
use Pusher\Pusher;


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


// Route::post('login', [AuthController::class, 'login']);
// Route::post('refresh-token', [AuthController::class, 'refreshToken'])->middleware('auth:api');
// Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');

Route::middleware('jwt.auth')->get('/user', function (Request $request) {
    return response()->json(['user' => $request->user, 'success' => true, 'code' => 200]);
});



Route::get('/send-message', function () {
    broadcast(new \App\Events\MessageSent('Hello, this is a test message!'));
    return 'Message broadcasted!';
});


Route::get('/realtime-example', function () {
    return view('realtime-example'); // Create a Blade view
});



// Route::post('/send-message', function (Request $request) {
//     $options = array(
//         'cluster' => 'mt1', // Your Soketi cluster (if applicable)
//         'encrypted' => true
//     );

//     $pusher = new Pusher(
//         env('SOKETI_KEY'), // Your Soketi key
//         env('SOKETI_SECRET'), // Your Soketi secret
//         env('SOKETI_APP_ID'), // Your Soketi app ID
//         $options
//     );

//     $data['message'] = $request->input('message');
//     $pusher->trigger('my-channel', 'my-event', $data); // Trigger the event

//     return response()->json(['message' => 'Message sent']);
// });


//Route::post('/request-ride', [RideController::class, 'requestRide']);
//Route::post('/accept-ride', [RideController::class, 'acceptRide']);

//Route::post('/book-ride', [RideController::class, 'bookRide']);



// routes/api.php


// Public Routes
Route::post('index', [AuthController::class, 'index']);
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('verify-otp', [AuthController::class, 'verifyOtp']);
Route::post('resend-otp', [AuthController::class, 'resendOtp']);
Route::post('refresh', [AuthController::class, 'refresh']);
Route::post('logout', [AuthController::class, 'logout']);
Route::get('get-started', [WelcomeController::class, 'index']);

Route::post('socket', [RideController::class, 'triggerSocketEvent']);

// Protected Routes
Route::middleware(['auth.jwt:driver,vendor,agent,customer'])->group(function () {
    Route::get('/user/{id}', [AuthController::class, 'index']);
    Route::get('/vehicle/{id}', [VehicleController::class, 'view']);
    Route::get('/vehicles', [VehicleController::class, 'index']);
    Route::get('/vehicle/driver/{id}', [VehicleController::class, 'viewByDriver']);
    Route::post('/vehicle', [VehicleController::class, 'create']);
    Route::put('/vehicle/{id}', [VehicleController::class, 'update']);

    Route::post('/user/update-profile/{id}', [AuthController::class, 'updateProfile']);

    Route::post('/request-ride', [BookingController::class, 'create']);
    Route::get('/update-ride/{id}', [BookingController::class, 'updateBooking']);
    Route::get('/bookings', [BookingController::class, 'index']);
    Route::get('/booking/get-customer-vendor-bookings', [BookingController::class, 'bookingByCustomerVendorAndStatus']);
    Route::get('/booking/get-driver-bookings', [BookingController::class, 'bookingByDriverAndStatus']);
    Route::get('/booking/{id}', [BookingController::class, 'bookingById']);
    Route::get('/attachment-categories', [AttachmentController::class, 'index']);

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
