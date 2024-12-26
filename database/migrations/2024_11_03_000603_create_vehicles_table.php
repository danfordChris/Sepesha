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
        Schema::create('vehicles', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('plate_number')->unique();
            $table->string('make');
            $table->string('model');
            $table->year('year')->nullable();
            $table->decimal('weight')->nullable()->default(0);
            $table->foreignUuid('fee_category_id')->nullable()->constrained('fee_categories');
            $table->string('color')->nullable();
            $table->integer('capacity')->nullable();
            $table->foreignUuid('owner_id')->constrained('clients_info','auth_key');
            $table->string('status')->default('available');
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
        Schema::dropIfExists('vehicles');
    }
};