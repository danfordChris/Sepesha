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
        Schema::create('trip_ratings', function (Blueprint $table) {
            $table->char('id',36)->primary();
            $table->char('booking_id', 36)->nullable();
            $table->foreign('booking_id')->references('id')->on('bookings');
            $table->char('driver_id', 36)->nullable();
            $table->foreign('driver_id')->references('auth_key')->on('clients_info');
            $table->char('customer_id', 36)->nullable();
            $table->foreign('customer_id')->references('auth_key')->on('clients_info');
            $table->integer('rating')->nullable();
            $table->text('comment')->nullable();
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
        Schema::dropIfExists('trip_ratings');
    }
};