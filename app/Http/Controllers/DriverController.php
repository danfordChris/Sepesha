<?php
use App\Models\User;
use App\Models\Vehicle;
use App\Models\Attachment;
use Illuminate\Support\Str;
use App\Models\CustomHelper;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\ValidationException;

class RegistrationController extends Controller
{
    public function registerDriverAndVehicle(Request $request)
    {
        DB::beginTransaction();

        try {
            // Validate driver data
            $driverData = $this->validateDriverData($request);

            // Create the driver
            $driver = $this->createDriver($driverData);

            // Handle OTP
            list($otp, $otpExpires) = $this->handleOtp($driver, $request->user_type);

            // Upload attachments
            $this->uploadDriverAttachments($request, $driver);

            // Validate and create vehicle if user type is driver
            $vehicle = null;
            if ($request->user_type === 'driver') {
                $vehicleData = $this->validateVehicleData($request, $driver);
                $vehicle = $this->createVehicle($vehicleData);
                $this->uploadVehicleAttachments($request, $vehicle);
            }

            DB::commit();

            return $this->successResponse($driver, $otp, $otpExpires, $vehicle);

        } catch (ValidationException $e) {
            DB::rollBack();
            return $this->validationErrorResponse($e);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->errorResponse($e);
        }
    }

    private function validateDriverData(Request $request)
    {
        return $request->validate([
            'first_name' => 'required|string',
            'middle_name' => 'nullable|string',
            'last_name' => 'required|string',
            'region_id' => 'required|numeric',
            'phonecode' => 'required|in:255',
            'email' => 'required|email|unique:clients_info,email',
            'referal_code' => 'nullable|string',
            'user_type' => 'required|in:driver,vendor,agent,customer',
            'business_description' => [
                $request->user_type === 'vendor' ? 'required' : 'nullable',
                'string',
            ],
            'profile_photo' => [
                $request->user_type === 'driver' ? 'required' : 'nullable',
                'file',
                'mimes:jpg,jpeg,png',
                'max:2048',
            ],
            'attachment' => [
                $request->user_type === 'driver' ? 'required' : 'nullable',
                'file',
                'mimes:jpg,jpeg,png,pdf',
                'max:2048',
            ],
            'password' => [
                'required',
                'string',
                'min:6',
                'confirmed',
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
        ]);
    }

    private function createDriver($data)
    {
        $data['password_hash'] = Hash::make($data['password']);
        $data['name'] = $data['first_name'];
        $data['country_id'] = 1;
        $data['mname'] = $data['middle_name'];
        $data['sname'];
         $data['sname'] = $data['last_name'];
        $data['reference_number'] = User::getRegistrationNumber($data['user_type']);
        $data['driver_license_number'] = $data['licence_number'] ?? null;
        $data['license_expiry_date'] = $data['licence_expiry'] ?? null;
        $data['auth_key'] = Str::uuid();
        $data['role'] = $data['user_type'];
        $data['entity_type'] = 'individual';
        $data['wid'] = $data['user_type'] == 'driver' ? 2 : 1;
        $data['status'] = 0;

        // Remove unnecessary fields
        unset($data['first_name'], $data['middle_name'], $data['last_name'], $data['password'], $data['licence_number'], $data['licence_expiry'], $data['user_type']);

        return User::create($data);
    }

    private function handleOtp($user, $userType)
    {
        $otp = $this->jwtService->generateOtp();
        $otpExpires = now()->addMinutes(4);

        User::updateOrCreate(
            ['auth_key' => $user->auth_key, 'role' => $userType],
            ['otp' => $otp, 'otp_expires_at' => $otpExpires]
        );

        return [$otp, $otpExpires];
    }

    private function uploadDriverAttachments(Request $request, $user)
    {
        $this->uploadAttachment($request, $user, 'profile_photo');
        $this->uploadAttachment($request, $user, 'attachment');
    }

    private function uploadAttachment(Request $request, $user, $fieldName)
    {
        if ($request->hasFile($fieldName)) {
            $file = $request->file($fieldName);
            $fileName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $filePath = $file->storeAs('attachments', $fileName, 'public');
            $user->update([$fieldName => "/storage/{$filePath}"]);
        }
    }

    private function validateVehicleData(Request $request, $driver)
    {
        return $request->validate([
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
            'fee_category_id' => 'required|uuid|exists:fee_categories,id',
            'owner_id' => 'required|uuid|exists:clients_info,auth_key',
            'attachments' => ['required', 'array', 'min:1'],
            'attachments.*.id' => ['required', 'exists:workflow_documents,id', 'integer'],
            'attachments.*.attachment' => ['required', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:2048'],
        ]);
    }

    private function createVehicle($data)
    {
        $data['id'] = Str::uuid();
        $data['status'] = 'N';
        $data['requserinput'] = 'N';
        $alreadyAssigned = Vehicle::where('driver_id', $data['driver_id'])
            ->where('plate_number', $data['plate_number'])
            ->first();
        if ($alreadyAssigned) {
            throw new \Exception('This driver is already assigned to the same vehicle.');
        }

        return Vehicle::create($data);
    }

    private function uploadVehicleAttachments(Request $request, $vehicle)
    {
        foreach ($request->attachments as $index => $attachmentData) {
            $fileField = "attachments.{$index}.attachment";

            if ($request->hasFile($fileField)) {
                $file = $request->file($fileField);
                $extension = $file->getClientOriginalExtension();
                $fileName = time() . '_' . uniqid() . '.' . $extension;

                $filePath = $file->storeAs('attachments', $fileName, 'public');
                $fullUrl = url("/storage/{$filePath}");

                $id = $attachmentData['id'];

                Attachment::create([
                    'attachment' => $fullUrl,
                    'refno' => $vehicle->id,
                    'name' => Attachment::documentType($vehicle->wid, $id)->name ?? 'NOTSET',
                    'type' => $id,
                    'module' => Vehicle::class,
                    'wid' => $vehicle->wid,
                    'stid' => $vehicle->stid,
                    'moduleId' => null,
                    'table_name' => $vehicle->getTable(),
                    'model_name' => Vehicle::class,
                ]);
            } else {
                throw new \Exception("File not found: {$fileField}");
            }
        }
    }

    private function successResponse($driver, $otp, $otpExpires, $vehicle = null)
    {
        $response = [
            'status' => true,
            'message' => 'Registration successful.',
            'data' => [
                'first_name' => $driver->name,
                'middle_name' => $driver->mname,
                'last_name' => $driver->sname,
                'phonecode' => $driver->phonecode,
                'phone_number' => $driver->phone,
                'email' => $driver->email,
                'profile_photo' => $driver->profile_photo,
                'attachment' => $driver->attachment,
                'user_type' => $driver->role,
                'uid' => $driver->auth_key,
                'otp' => $otp,
                'otp_expires_at' => $otpExpires
            ],
        ];

        if ($vehicle) {
            $response['data']['vehicle'] = Vehicle::with('category', 'attachments')->find($vehicle->id);
        }

        return response()->json($response, 201);
    }

    private function validationErrorResponse(ValidationException $e)
    {
        $firstError = collect($e->errors())->first()[0] ?? 'Validation failed';
        return CustomHelper::response(false, $firstError, 442);
    }

    private function errorResponse(\Exception $e)
    {
        return CustomHelper::response(false, "An error occurred: " . $e->getMessage(), 500);
    }
}