<?php
// app/Http/Controllers/AuthController.php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Models\UserToken;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use App\Models\CustomHelper;
use App\Services\JWTService;
use Illuminate\Http\Request;
use Pest\ArchPresets\Custom;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    private $jwtService;

    public function __construct(JWTService $jwtService)
    {
        $this->jwtService = $jwtService;
    }



    public function index($id)
    {
        try {
            $data = User::where('auth_key', $id)->get()->makeHidden(['id', 'otp', 'otp_expires_at', 'attachment', 'password_expiry', 'auth_key', 'password_reset_token', 'userid', 'confirmation_token']);
            if ($data) {
                return CustomHelper::response(true, 'data found', 200, $data);
            } else {
                return CustomHelper::response(false, 'no data found', 442, $data);
            }
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }


    public function updateProfile(Request $request, $id)
    {

         try {

            $user = User::where('auth_key', $id)->first()->makeHidden(['id', 'otp', 'otp_expires_at', 'attachment', 'password_expiry', 'auth_key', 'password_reset_token', 'userid', 'confirmation_token']);

            if (!$user) {
                return CustomHelper::response(false, 'User is not found', 404);
            }


            $request->validate(
                [
                    'profile_photo' => ['required', 'image', 'mimes:jpg,jpeg,png', 'max:2048'],
                ],
                [
                    'profile_photo.required' => 'Photo is required.',
                    'profile_photo.mimes' => 'Photo must be a image of type: jpg, jpeg, png.',
                    'profile_photo.max' => 'Photo must not exceed 2MB in size.',
                ]
            );
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }


        try {
            $fileField = "profile_photo";
            if ($request->hasFile($fileField)) {
                $file = $request->file($fileField);
                $extension = $file->getClientOriginalExtension();
                $fileName = time() . '_' . uniqid() . '.' . $extension;
                $filePath = $file->storeAs('/profile_photos', $fileName);
                $fullUrl = url("/storage/profile_photos/{$fileName}");
                $user->update([
                    'profile_photo' => $fullUrl,

                ]);
            }
        } catch (ValidationException $e) {
            return CustomHelper::response(false, $e->getMessage(), 442);
        } catch (\Exception $e) {
            return CustomHelper::response(false, "Error uploading file: " . $e->getMessage(), 500);
        }

        return response()->json([
            'status' => true,
            'message' => "User profile updated successfully",
            'data' => $user
        ]);
    }


    public function register(Request $request)
    {


        try {
            $validatedData = $request->validate(
                [
                    'first_name' => 'required|string',
                    'middle_name' => 'nullable|string',
                    'last_name' => 'required|string',
                    'last_name' => 'required|string',
                    'phonecode' => 'required|in:255',
                    'email' => 'required|email|unique:clients_info,email',
                    'referal_code' => 'nullable|string',
                    'user_type' => 'required|in:driver,vendor,agent,customer',

                    'password' => [
                        'required',
                        'string',
                        'min:6',
                        'confirmed',           // Ensures password matches password_confirmation
                        // 'regex:/[a-z]/',       // At least one lowercase letter
                        //'regex:/[A-Z]/',       // At least one uppercase letter
                        //  'regex:/[0-9]/',       // At least one digit
                        // 'regex:/[@$!%*?&]/',   // At least one special character
                    ],

                    'phone' => [
                        'required',
                        'numeric',
                        'digits:9',
                        'unique:clients_info,phone',
                        function ($attribute, $value, $fail) {
                            if (preg_match('/^(0|255)/', $value)) {
                                $fail('The phone number must not start with 0 or 255.');
                            }
                        },
                    ],

                    'privacy_checked' => 'required|accepted',
                    'licence_number' => 'nullable|required_if:user_type,driver|string|max:50',
                    'licence_expiry' => 'nullable|required_if:user_type,driver|date|after:today',

                ],
                [
                    'licence_number.required_if' => 'The licence number is required when registering as a driver.',
                    'licence_expiry.required_if' => 'The licence expiry date is required when registering as a driver.',
                    'licence_expiry.after' => 'The licence expiry date must be a future date.',
                    'privacy_checked' => [
                        'required' => 'You must check the privacy agreement.',
                        'accepted' => 'The privacy agreement must be accepted.'
                    ],
                ],

            );

            // Create the user
            $validatedData['password_hash'] = Hash::make($validatedData['password']);
            $validatedData['name'] = $validatedData['first_name'];
            $validatedData['mname'] = $validatedData['middle_name'];
            $validatedData['sname'] = $validatedData['last_name'];
            $validatedData['reference_number'] = User::getRegistrationNumber($validatedData['user_type']);
            $validatedData['driver_license_number'] = $validatedData['licence_number'];
            $validatedData['license_expiry_date'] = $validatedData['licence_expiry'];
            $validatedData['auth_key'] = Str::uuid();
            $validatedData['role'] = $validatedData['user_type'];
            $validatedData['entity_type'] = 'individual';
            $validatedData['wid'] = $validatedData['user_type'] == 'driver' ? 2 : 1;
            $validatedData['status'] = 0;
            Arr::forget($validatedData, ['first_name', 'middle_name', 'last_name', 'password', 'licence_number', 'licence_expiry', 'user_type']);

            //  return $validatedData;
            $user = User::create($validatedData);
            // Optionally, create an access token or perform other actions

            $otp = $this->jwtService->generateOtp();
            $optExpires  = date('Y-m-d H:i:s', strtotime('+240 seconds'));;

            User::updateOrCreate(
                ['auth_key' => $user->auth_key, 'role' => $request->user_type],
                [
                    'otp' => $otp,
                    'otp_expires_at' => $optExpires
                ]
            );

            if ($user) {
                return response()->json([
                    'status' => true,
                    'message' => 'Registration successful.',
                    'data' => [
                        'first_name' => $user->name,
                        'middle_name' => $user->mname,
                        'last_name' => $user->sname,
                        'phonecode' => $user->phonecode,
                        'phone_number' => $user->phone,
                        'email' => $user->email,
                        'user_type' => $user->role,
                        'uid' => $user->auth_key,
                        'otp' => $otp,
                        'otp_expires_at' => $optExpires

                    ],

                ], 201);
            }
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }


    public function login(Request $request)
    {
        try {
            $request->validate(
                [
                    'phone' => 'required|integer',
                    'user_type' => 'required|in:driver,vendor,agent,customer',
                ],



            );
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }

        $user = User::where('phone', $request->phone)
            ->where('role', $request->user_type)
            ->first();

        $otp = $this->jwtService->generateOtp();
        $optExpires   = date('Y-m-d H:i:s', strtotime('+180 seconds'));;

        if (!$user) {
            return CustomHelper::response(false, 'Invalid credentials', 404);
        }

        $user->update([
            'otp' => $otp,
            'otp_expires_at' => $optExpires
        ]);

        return response()->json([
            'status' => true,
            'message' => "OPT Created successfully",
            'data' => [
                'phone_number' => $user->phone,
                'user_type' => $user->role,
                'otp' => $otp,
                'otp_expires_at' => $optExpires
            ]
        ]);
    }


    public function resendOtp(Request $request)
    {
        try {
            $request->validate([
                'phone' => 'required|integer',
                'user_type' => 'required|in:driver,vendor,agent,customer',
            ]);
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }

        $user = User::where('phone', $request->phone)
            ->where('role', $request->user_type)
            ->first();

        $otp = $this->jwtService->generateOtp();
        $optExpires   = date('Y-m-d H:i:s', strtotime('+180 seconds'));;

        if (!$user) {
            return CustomHelper::response(false, 'Invalid credentials', 404);
        }

        $user->update([
            'otp' => $otp,
            'otp_expires_at' => $optExpires
        ]);

        return response()->json([
            'status' => true,
            'message' => "OPT Created successfully",
            'data' => [
                'phone_number' => $user->phone,
                'user_type' => $user->role,
                'otp' => $otp,
                'otp_expires_at' => $optExpires
            ]
        ]);
    }




    public function verifyOtp(Request $request)
    {

        try {
            $request->validate([
                'phone' => 'required|integer',
                'otp' => 'required|digits:4',
                'user_type' => 'required|in:driver,vendor,agent,customer',

            ]);
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }

        $user = User::where('phone', $request->phone)
            ->where('role', $request->user_type)
            //  ->where('status', 10)
            ->first();


        if (!$user) {
            return CustomHelper::response(false, 'Invalid credentials', 404);
        }

        $otp = User::where('auth_key', $user->auth_key)->where('otp', $request->otp)->first();

        // if (!$otp || Carbon::now()->greaterThan($otp->otp_expires_at)) {
        //     return CustomHelper::response(false, 'Invalid or expired OTP', 400);
        // }

        if (!$otp || (strtotime($user->otp_expires_at) < time())) {
            return CustomHelper::response(false, 'Invalid or expired OTP', 400);
        }

        $user->update(['status' => 10]);

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
            'message' => "OTP verified successfully",
            'access_token' => $accessToken,
            'refresh_token' => $refreshToken,
            'uid' => $user->auth_key,
            // 'opt' => $user->otp,
            // 'otp_expires_at' => $user->otp_expires_at
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
        return CustomHelper::response(true, 'Logged out successfully', 200);
    }
}