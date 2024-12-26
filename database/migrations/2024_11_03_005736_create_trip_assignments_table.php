<?php

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
        Schema::create('trip_assignments', function (Blueprint $table) {
            $table->char('id', 36)->primary();
            $table->char('booking_id', 36)->nullable();
            $table->foreign('booking_id')->references('id')->on('bookings');
            $table->char('driver_vehicle_id', 36)->nullable();
            $table->foreign('driver_vehicle_id')->references('id')->on('driver_vehicle_assignments');
            $table->char('driver_id', 36)->nullable();
            $table->char('vehicle_id', 36)->nullable();
            $table->foreign('driver_id')->references('auth_key')->on('clients_info');
            $table->foreign('vehicle_id')->references('id')->on('vehicles');
            $table->enum('status', ['assigned', 'intransit', 'completed', 'canceled', 'pending'])->default('pending');
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
        Schema::dropIfExists('trip_assignments');
    }
};