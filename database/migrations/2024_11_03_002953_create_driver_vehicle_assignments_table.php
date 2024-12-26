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
        Schema::create('driver_vehicle_assignments', function (Blueprint $table) {
            $table->char('id', 36)->primary();
            $table->char('driver_id', 36)->nullable();
            $table->char('vehicle_id', 36)->nullable();
            $table->foreign('driver_id')->references('auth_key')->on('clients_info');
            $table->foreign('vehicle_id')->references('id')->on('vehicles');
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->timestamp('location_updated_at')->nullable();
            $table->dateTime('assignment_start')->nullable();
            $table->dateTime('assignment_end')->nullable();
            $table->string('status')->default('active');
            $table->integer('wid')->default(2)->nullable();
            $table->integer('stid')->default(1)->nullable();
            $table->string('requserinput')->default('Y')->nullable();
            $table->string('wfstatus')->nullable();
            $table->string('attachment')->nullable();
            $table->string('approval_status')->default('pending')->comment('Approval status: pending, approved, rejected');
            $table->foreignId('approved_by')->nullable()->constrained('clients_info');
            $table->timestamp('approved_at')->nullable();
            $table->text('approval_comments')->nullable();
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
        Schema::dropIfExists('driver_vehicle_assignments');
    }
};