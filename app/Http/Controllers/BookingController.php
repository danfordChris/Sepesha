<?php

namespace App\Http\Controllers;

use App\Models\Attachment;
use App\Models\Booking;
use Illuminate\Support\Str;
use App\Models\CustomHelper;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class BookingController extends Controller
{
    //

    public function create(Request $request)
    {

        try {
            $validated = $request->validate(
                [
                    'customer_id' => 'required|uuid|exists:clients_info,auth_key',
                    'fee_category_id' => 'required|uuid|exists:fee_categories,id',
                    'pickup_photo' => ['required', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:2048'],
                    'discount_code' => 'string',
                    "referal_code" => 'string',
                    "recepient_name" => "string|required",
                    "recepient_phone" => "string|required",
                    "recepient_address" => "string",
                    'user_type' => 'required|in:driver,vendor,agent,customer',
                    "description" => "string|required",
                    "pickup_location" => "string|required",
                    "pickup_latitude" => "string|required",
                    "pickup_longitude" => "string|required",
                    "delivery_location" => "string|required",
                    "delivery_latitude" => "string|required",
                    "delivery_longitude" => "string|required",
                    "pickup_date" => "datetime|required",
                ],
                [
                    'pickup_photo.required' => 'Attachments are required.',
                    'pickup_photo.mimes' => 'Each attachment must be a file of type: jpg, jpeg, png, pdf.',
                    'pickup_photo.max' => 'Each attachment must not exceed 2MB in size.',
                ]
            );

            $validated['booking_reference'] = "SPS" . time() . mt_rand(100, 999999);
            $validated['pyment_mode'] = 'cash';
            $validated['type']= $validated['user_type'];

            // $alreadyAssigned = Booking::where('customer_id', $request->customer_id)
            //     ->where('status', 'pending')
            //     ->first();
            // if ($alreadyAssigned) {
            //     $msg = 'This driver is already assigned to the same vehicle.';
            //     return CustomHelper::response(false, $msg, 442);
            // }


            $vehicle = Booking::create($validated);
            if ($vehicle) {
                try {
                    $fileField = "pickup_photo";
                    if ($request->hasFile($fileField)) {
                        $file = $request->file($fileField);
                        $extension = $file->getClientOriginalExtension();
                        $fileName = time() . '_' . uniqid() . '.' . $extension;
                        $filePath = $file->storeAs('/attachments', $fileName);
                        $fullUrl = url("/storage/attachments/{$fileName}");
                        $vehicle->pickup_photo = $fullUrl;
                    } else {
                        return CustomHelper::response(false, "File not found: {$fileField}", 442);
                    }
                } catch (ValidationException $e) {
                    return CustomHelper::response(false, $e->getMessage(), 442);
                } catch (\Exception $e) {
                    return CustomHelper::response(false, "Error uploading file: " . $e->getMessage(), 500);
                }

                return response()->json([
                    'status' => true,
                    'message' => 'Booking created successfully.',
                    'data'  =>  Booking::with('category')->where('id', $vid)->first()
                ], 201);
            }
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }
}