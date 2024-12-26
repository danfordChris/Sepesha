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
        $table->char('id', 36)->primary();  
        $table->string('plate_number')->unique();
        $table->string('make');
        $table->string('model');
        $table->year('year')->nullable();
        $table->decimal('weight')->nullable()->default(0);
        $table->char('fee_category_id', 36)->nullable();
        $table->foreign('fee_category_id')->references('id')->on('fee_categories');
        $table->string('color')->nullable();
        $table->integer('capacity')->nullable();
        $table->char('owner_id', 36);
        $table->foreign('owner_id')->references('auth_key')->on('clients_info');
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