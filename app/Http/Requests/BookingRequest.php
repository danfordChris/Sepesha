<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'customer_id' => 'nullable|exists:clients_info,auth_key',
            'agent_id' => 'nullable|exists:clients_info,auth_key',
            'driver_id' => 'nullable|exists:clients_info,auth_key',
            'vehicle_id' => 'nullable|exists:vehicles,id',
            'vendor_id' => 'nullable|exists:clients_info,auth_key',
            'booking_reference' => 'required|unique:bookings,booking_reference',
            'fee_category_id' => 'nullable|exists:fee_categories,id',
            'discount_code' => 'nullable|string|max:50',
            'discount_code_value' => 'nullable|numeric|min:0',
            'referal_code' => 'nullable|string|max:50',
            'referal_code_value' => 'nullable|numeric|min:0',
            'recepient_name' => 'nullable|string|max:190',
            'recepient_phone' => 'nullable|string|max:30',
            'recepient_address' => 'nullable|string|max:190',
            'type' => 'nullable|string|max:50',
            'pyment_mode' => 'nullable|string|max:20',
            'description' => 'nullable|string',
            'weight' => 'required|numeric|min:0',
            'base_rate_km' => 'nullable|numeric|min:0',
            'base_price' => 'nullable|numeric|min:0',
            'vehicle_multipplier' => 'nullable|numeric|min:0',
            'vat' => 'nullable|numeric|min:0',
            'other_charge' => 'nullable|numeric|min:0',
            'distance_km' => 'nullable|numeric|min:0',
            'amount' => 'nullable|numeric|min:0',
            'currency' => 'nullable|string|max:10',
            'pickup_location' => 'required|string|max:255',
            'delivery_location' => 'required|string|max:255',
            'pickup_date' => 'required|date',
            'delivery_date' => 'nullable|date|after_or_equal:pickup_date',
            'status' => 'nullable|in:pending,assigned,intransit,completed,canceled',
        ];
    }
}