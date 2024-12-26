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
    $table->uuid('id')->primary();
    $table->foreignUuid('booking_id')->constrained('bookings');
    $table->foreignUuid('driver_vehicle_id')->constrained('driver_vehicle_assignments')->nullable();
    $table->foreignUuid('driver_id')->constrained('clients_info','auth_key')->nullable();
    $table->foreignUuid('vehicle_id')->constrained('vehicles')->nullable();
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