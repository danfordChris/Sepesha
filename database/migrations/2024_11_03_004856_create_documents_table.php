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
        Schema::create('documents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('owner_id')->nullable()->constrained('document_types');
            $table->integer('document_type_id')->nullable()->constrained('document_types');
            $table->string('document_number')->nullable();
            $table->string('description')->nullable();
            $table->string('file_path');
            $table->date('expiry_date')->nullable();
            $table->string('status')->default('active')->comment('active, expired, pending');
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
        Schema::dropIfExists('documents');
    }
};