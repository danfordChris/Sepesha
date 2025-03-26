<?php

namespace App\Http\Controllers;


use App\Models\Vehicle;
use App\Models\Attachment;
use Illuminate\Support\Str;
use App\Models\CustomHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class VehicleController extends Controller
{




    public function create(Request $request)
    {


        // return response()->json([
        //     'status' => true,
        //     'message' => 'vehicle data in request',
        //     'data'  => $request->all()
        // ], 201);


        try {
            $validated = $request->validate(
                [
                    'plate_number' => [
                        'required',
                        'string',
                        'max:8',
                        'min:7',
                        'regex:/^(T\d{3}[A-Z]{3}|MC\d{3}[A-Z]{3})$/',
                        'unique:vehicles,plate_number',
                    ],
                    'make' => 'required|string|max:50',
                    'model' => 'required|string|max:15|min:2',
                    'year' => 'required|string|size:4',
                    'color' => 'nullable|string|max:191',
                    'weight' => 'nullable|numeric',
                    'capacity' => 'nullable|integer',
                    'longitude' => 'nullable|string|max:191',
                    'latitude' => 'nullable|string|max:191',
                    'created_by' => 'required|integer',
                    'driver_id' => 'required|uuid|exists:clients_info,auth_key',
                    'fee_category_id' => 'required|uuid|exists:fee_categories,id',
                    'owner_id' => 'required|uuid|exists:clients_info,auth_key',
                    'created_by' => 'required|integer|exists:clients_info,id',
                    'attachments' => ['required', 'array', 'min:1'],
                    'attachments.*.id' => ['required', 'exists:workflow_documents,id', 'integer'],
                    'attachments.*.attachment' => ['required', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:2048'],
                ],
                [
                    'attachments.required' => 'Attachments are required.',
                    'attachments.array' => 'Attachments must be an array.',
                    'attachments.*.id.required' => 'Each attachment must have an ID.',
                    'attachments.*.attachment.required' => 'Each attachment must have a file.',
                    'attachments.*.attachment.mimes' => 'Each attachment must be a file of type: jpg, jpeg, png, pdf.',
                    'attachments.*.attachment.max' => 'Each attachment must not exceed 2MB in size.',
                ]
            );

            $validated['id'] = Str::uuid();
            $validated['status'] = 'N';
            $alreadyAssigned = Vehicle::where('driver_id', $request->driver_id)
                ->where('plate_number', $request->plate_number)
                ->first();
            if ($alreadyAssigned) {
                $msg = 'This driver is already assigned to the same vehicle.';
                return CustomHelper::response(false, $msg, 442);
            }
            $vehicle = Vehicle::create($validated);
            $vid = $vehicle->id;
            $wid = $vehicle->wid;
            if ($vehicle) {

                return response()->json([
                    'status' => true,
                    'message' => 'vehicle data saved in DB',
                    'data'  => $vehicle
                ], 201);


                // try {
                //     foreach ($validated['attachments'] as $index => $attachmentData) {
                //         $fileField = "attachments.{$index}.attachment";
                //         if ($request->hasFile($fileField)) {
                //             $file = $request->file($fileField);
                //             $extension = $file->getClientOriginalExtension(); // Get the file extension
                //             $fileName = time() . '_' . uniqid() . '.' . $extension; // Append extension
                //             $filePath = $file->storeAs('/attachments', $fileName);
                //             $fileUrl =Storage::url($filePath);
                //             $fullUrl = url($fileUrl);
                //             $id = $attachmentData['id'];

                //             $attachments = Attachment::create([
                //                 'attachment' => $fullUrl,
                //                 'refno' => $vid,
                //                 'name' => Attachment::documentType($wid, $id)->name ?? 'NO DOC',
                //                 'type' => $id,
                //                 'module' => Vehicle::class,
                //                 'wid' => $vehicle->wid,
                //                 'stid' => $vehicle->stid,
                //                 'moduleId' => null,
                //                 'table_name' => $vehicle->getTable(),
                //                 'model_name' => Vehicle::class,
                //             ]);
                //         }
                //     }
                // } catch (ValidationException $e) {
                //     foreach ($e->errors() as $error) {
                //         return CustomHelper::response(false, $error[0], 442);
                //     }
                // }

                try {
                    foreach ($validated['attachments'] as $index => $attachmentData) {
                        $fileField = "attachments.{$index}.attachment";

                        if ($request->hasFile($fileField)) {
                            $file = $request->file($fileField);
                            $extension = $file->getClientOriginalExtension();
                            $fileName = time() . '_' . uniqid() . '.' . $extension;

                            // Store file in the public directory (ensure 'public' is set in config/filesystems.php)
                            // $filePath = $file->storeAs('/storage/attachments', $fileName);
                            $filePath = $file->storeAs('/attachments', $fileName);

                            // Generate full URL with /public/
                            $fullUrl = url("/storage/attachments/{$fileName}");

                            $id = $attachmentData['id'];
                            //$name = $attachmentData['name'];

                            $attachments = Attachment::create([
                                'attachment' => $fullUrl, // Store full URL
                                'refno' => $vid,
                                'name' => Attachment::documentType($wid, $id)->name ?? 'NOTSET',
                                'type' => $id,
                                'module' => Vehicle::class,
                                'wid' => $vehicle->wid,
                                'stid' => $vehicle->stid,
                                'moduleId' => null,
                                'table_name' => $vehicle->getTable(),
                                'model_name' => Vehicle::class,
                            ]);
                        } else {
                            return CustomHelper::response(false, "File not found: {$fileField}", 442);
                        }
                    }
                } catch (ValidationException $e) {
                    return CustomHelper::response(false, $e->getMessage(), 442);
                } catch (\Exception $e) {
                    return CustomHelper::response(false, "Error uploading file: " . $e->getMessage(), 500);
                }
                $data = [];
                $data[] = $vehicle;
                $data[] = ['attachments' => $attachments];
                return response()->json([
                    'status' => true,
                    'message' => 'Vehicle created successfully.',
                    'data'  =>  Vehicle::with('category')->with('attachments')->where('id', $vid)->first()
                ], 201);
            }
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }

    public function update(Request $request, $id)
    {
        try {

            $vehicle = Vehicle::findOrFail($id);
            $validated = $request->validate([
                'plate_number' => [
                    'required',
                    'string',
                    'max:8',
                    'min:7',
                    'regex:/^(T\d{3}[A-Z]{3}|MC\d{3}[A-Z]{3})$/',
                    'unique:vehicles,plate_number,' . $vehicle->id,
                ],
                'longitude' => 'nullable|string|max:191',
                'latitude' => 'nullable|string|max:191',
                'make' => 'required|string|max:50',
                'model' => 'required|string|max:15|min:2',
                'owner_id' => 'required|uuid',
                'driver_id' => 'required|uuid',
                'fee_category_id' => 'required|integer',
                'year' => 'required|string|size:4',
                'color' => 'nullable|string|max:191',
                'weight' => 'nullable|numeric',
                'capacity' => 'nullable|integer',
                'status' => 'nullable|string|max:191',
                'updated_by' => 'required|integer'
            ]);

            $vehicle->update($validated);
            return response()->json([
                'status' => true,
                'message' => 'Vehicle updated successfully.',
                'data' => $vehicle,
            ], 201);
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }

    //by Vehicle ID
    public function view(Request $request, $id)
    {
        try {
            $data = Vehicle::with('category')->with('attachments')->where('id', $id)->first();
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


    public function viewByDriver(Request $request, $id)
    {
        try {
            $data = Vehicle::with('category')->with('attachments')->where('driver_id', $id)->first();
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


    public function index(Request $request)
    {
        try {
            $data = Vehicle::with('category')->with('attachments')->get();
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
}