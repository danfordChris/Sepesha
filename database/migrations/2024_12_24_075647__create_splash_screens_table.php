<?php

use App\Models\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('splash_screens', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('photo')->nullable();
            $table->string('type')->nullable();
            $table->string('order')->nullable();
            $table->string('description')->nullable();
            $table->enum('category', ['splash1', 'splash2', 'splash3', 'sigup'])->nullable();
            $table->enum('app', ['customer', 'driver'])->nullable();
            $table->boolean('status')->default(1);
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
        Schema::dropIfExists('splash_screens');
    }
};