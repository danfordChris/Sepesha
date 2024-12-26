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
        Schema::create('fee_categories', function (Blueprint $table) {
            $table->char('id',36)->primary();
            $table->string('name');
            $table->string('photo')->nullable();
            $table->string('icon')->nullable();
            $table->string('description')->nullable();
            $table->string('vehicle_multiplier')->nullable();
            $table->string('base_price')->nullable();
            $table->string('price_per_km')->nullable();
            $table->string('status',50)->default('active');
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
        Schema::dropIfExists('fee_categories');
    }
};