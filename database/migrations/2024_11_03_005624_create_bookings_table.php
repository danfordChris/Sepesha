<?php

use App\Models\FeeCategory;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('bookings', function (Blueprint $table) {
            $table->char('id', 36)->primary();
            $table->char('customer_id', 36)->nullable();
            $table->foreign('customer_id')->references('auth_key')->on('clients_info');
            $table->char('agent_id', 36)->nullable();
            $table->foreign('agent_id')->references('auth_key')->on('clients_info');
            $table->char('driver_id', 36)->nullable();
            $table->foreign('driver_id')->references('auth_key')->on('clients_info');
            $table->char('vehicle_id', 36)->nullable();
            $table->foreign('vehicle_id')->references('id')->on('vehicles');
            $table->char('vendor_id', 36)->nullable();
            $table->foreign('vendor_id')->references('auth_key')->on('clients_info');
            $table->char('driver_assignment_id', 36)->nullable();
            $table->foreign('driver_assignment_id')->references('id')->on('driver_vehicle_assignments');
            $table->string('booking_reference')->unique();
            $table->char('fee_category_id', 36)->nullable();
            $table->foreign('fee_category_id')->references('id')->on('fee_categories');
            $table->string('discount_code', 50)->nullable();
            $table->decimal('discount_code_value', 10, 2)->nullable();
            $table->string('referal_code', 50)->nullable();
            $table->decimal('referal_code_value', 10, 2)->nullable();
            $table->string('recepient_name', 190)->nullable();
            $table->string('recepient_phone', 30)->nullable();
            $table->string('recepient_address', 190)->nullable();
            $table->string('type', 50)->nullable();
            $table->string('pyment_mode', 20)->nullable();
            $table->text('description')->nullable();
            $table->decimal('weight', 10, 2);
            $table->decimal('base_rate_km', 10, 2);
            $table->decimal('base_price', 10, 2);
            $table->decimal('vehicle_multipplier', 10, 2);
            $table->decimal('vat', 10, 2);
            $table->decimal('other_charge', 10, 2);
            $table->decimal('driver_comission_rate', 10, 2);
            $table->decimal('vendor_comission_rate', 10, 2);
            $table->decimal('office_comission_rate', 10, 2);
            $table->decimal('agent_comission_rate', 10, 2);
            $table->decimal('driver_bonus', 10, 2);
            $table->decimal('vendor_bonus', 10, 2);
            $table->decimal('customer_bonus', 10, 2);
            $table->decimal('volume', 10, 2)->nullable();
            $table->decimal('price', 15, 2)->nullable()->default(0.00);
            $table->decimal('discount', 15, 2)->nullable()->default(0.00);
            $table->decimal('distance_km', 10, 2);
            $table->decimal('amount', 10, 2);
            $table->string('currency')->default('TZS');
            $table->string('pickup_location');
            $table->string('delivery_location');
            $table->decimal('pickup_latitude', 10, 8)->nullable();
            $table->decimal('pickup_longitude', 11, 8)->nullable();
            $table->decimal('delivery_latitude', 10, 8)->nullable();
            $table->decimal('delivery_longitude', 11, 8)->nullable();
            $table->dateTime('pickup_date');
            $table->dateTime('delivery_date')->nullable();
            $table->dateTime('scheduled_time')->nullable();
            $table->string('pickup_photo', 200)->nullable();
            $table->string('delivery_photo', 200)->nullable();
            $table->enum('status', ['pending', 'assigned', 'intransit', 'completed', 'cancelled'])->default('pending');
            $table->foreignIdFor(User::class, 'created_by')->nullable();
            $table->foreignIdFor(User::class, 'updated_by')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};