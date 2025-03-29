<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Setting;
use App\Models\Attachment;
use App\Models\FeeCategory;
use Illuminate\Support\Str;
use App\Models\CustomHelper;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class BookingController extends Controller
{
    //


    public function index(Request $request)
    {
        try {
            $data = Booking::with('category')->with('customer')->where('status', 'pending')->get();
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

    public function bookingById(Request $request, $id)
    {
        try {
            $data = Booking::with('category')->with('customer')->where('id', $id)->first();
            if ($data !== null) {
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


    public function bookingByCustomerVendorAndStatus(Request $request)
    {

        try {

            $validated = $request->validate(
                [
                    'customer_id' => 'required|uuid|exists:clients_info,auth_key',
                    'status' => 'required|in:pending,assigned,intransit,completed,cancelled',
                ],

            );


            $data = Booking::with('category')->with('customer')->where('customer_id', $request->customer_id)->where('status', $request->status)->get();
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


    public function bookingByDriverAndStatus(Request $request)
    {


        try {

            $validated = $request->validate(
                [
                    'driver_id' => 'required|uuid|exists:clients_info,auth_key',
                    'status' => 'required|in:pending,assigned,intransit,completed,cancelled',
                ],

            );

            $data = Booking::with('category')->with('customer')->where('driver_id', $request->driver_id)->where('status', $request->status)->get();
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


    public function create(Request $request)
    {

        try {
            $picklat = (float)$request->pickup_latitude;
            $validated = $request->validate(
                [
                    'customer_id' => 'required|uuid|exists:clients_info,auth_key',
                    'fee_category_id' => 'required|uuid|exists:fee_categories,id',
                    'pickup_photo' => ['image', 'mimes:jpg,jpeg,png', 'max:2048'],
                    'discount_code' => 'string',
                    "referal_code" => 'string',
                    "recepient_name" => "string|required",
                    "recepient_phone" => "string|required",
                    "recepient_address" => "string",
                    'user_type' => 'required|in:vendor,customer',
                    "description" => "string|required",
                    "pickup_location" => "string|required",
                    "delivery_location" => "string|required",
                    "pickup_date" => "required|date_format:Y-m-d\TH:i:s",
                    'pickup_latitude' => ['required', 'numeric', 'between:-90,90'],
                    'pickup_longitude' => ['required', 'numeric', 'between:-180,180'],
                    'delivery_latitude' => ['required', 'numeric', 'between:-90,90'],
                    'delivery_longitude' => ['required', 'numeric', 'between:-180,180'],
                    'distance_km' => 'required|numeric',
                ],
                [
                    //'pickup_photo.required' => 'Photo are required.',
                    'pickup_photo.mimes' => 'Photo must be a image of type: jpg, jpeg, png.',
                    'pickup_photo.max' => 'Photo must not exceed 2MB in size.',
                ]
            );

            $fee = FeeCategory::where('id', $request->fee_category_id)->first();
            $setting = Setting::findOrFail(1);

            if ($request->user_type == 'vendor') {
                $vendorComission = $setting->driver_commission;
            } else {
                $vendorComission = 0;
            }

            $officeComission = 100 - ($setting->driver_commission + $vendorComission);
            $priceKm = (float)$fee->price_per_km;
            $basePrice = (float)$fee->base_price;
            $multipplier = (float)$fee->vehicle_multiplier;
            $distance = (float)$request->distance_km;
            $total_fleet_amount = ($priceKm * $multipplier * $distance) + $basePrice;

            $validated['id'] = Str::uuid();
            $validated['vendor_id'] =  $request->customer_id;
            $validated['pickup_latitude'] =  $picklat;
            $validated['base_rate_km'] = $priceKm;
            $validated['base_price'] = $basePrice;
            $validated['vehicle_multipplier'] = $multipplier;
            $validated['vat'] = $setting->vat ?? 0;
            $validated['weight'] = 0;
            $validated['other_charge'] = 0;
            $validated['weight'] = 0;
            $validated['driver_comission_rate'] = $setting->driver_commission / 100;
            $validated['vendor_comission_rate'] = $vendorComission / 100;
            $validated['office_comission_rate'] =  $officeComission / 100;
            $validated['agent_comission_rate'] = 0;
            $validated['driver_bonus'] = 0;
            $validated['vendor_bonus'] = 0;
            $validated['customer_bonus'] = 0;
            $validated['discount'] = 0;
            $validated['amount'] = $total_fleet_amount ?? 0;
            $validated['booking_reference'] = "SPS" . time() . mt_rand(100, 999999);
            $validated['pyment_mode'] = 'cash';
            $validated['pickup_latitude'] = (float) $validated['pickup_latitude'];
            $validated['type'] = $validated['user_type'];

            // $alreadyAssigned = Booking::where('customer_id', $request->customer_id)
            //     ->where('status', 'pending')
            //     ->first();
            // if ($alreadyAssigned) {
            //     $msg = 'This driver is already assigned to the same vehicle.';
            //     return CustomHelper::response(false, $msg, 442);
            // }

            $booking = Booking::create($validated);
            if ($booking) {
                try {
                    $fileField = "pickup_photo";
                    if ($request->hasFile($fileField)) {
                        $file = $request->file($fileField);
                        $extension = $file->getClientOriginalExtension();
                        $fileName = time() . '_' . uniqid() . '.' . $extension;
                        $filePath = $file->storeAs('/cargo', $fileName);
                        $fullUrl = url("/storage/cargo/{$fileName}");
                        $booking->pickup_photo = $fullUrl;
                        $booking->save();
                    }
                } catch (ValidationException $e) {
                    return CustomHelper::response(false, $e->getMessage(), 442);
                } catch (\Exception $e) {
                    return CustomHelper::response(false, "Error uploading file: " . $e->getMessage(), 500);
                }

                return response()->json([
                    'status' => true,
                    'message' => 'Booking created successfully.',
                    'data'  =>  Booking::with('category')->where('id', $booking->id)->first()
                ], 201);
            }
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }





    public function updateBooking(Request $request, $id)
    {
        try {
            $vehicle = Booking::findOrFail($id);
            $validated = $request->validate([
                'driver_id' => 'required|uuid|exists:clients_info,auth_key',
                'vehicle_id' => 'required|uuid|exists:vehicles,id',
                'status' => 'required|in:pending,assigned,intransit,completed,cancelled',
            ]);
            $validated['driver_assignment_id'] = $request->vehicle_id;
            $vehicle->update($validated);
            return response()->json([
                'status' => true,
                'message' => 'Booking updated successfully.',
                'data' => $vehicle,
            ], 201);
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }
}
