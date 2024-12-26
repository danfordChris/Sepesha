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
        Schema::create('client_bank_accounts', function (Blueprint $table) {
            $table->char('id', 36)->primary();
            $table->char('client_id', 36)->nullable();
            $table->foreign('client_id')->references('auth_key')->on('clients_info');
            $table->string('bank_name');
            $table->string('account_number')->unique();
            $table->string('account_name');
            $table->string('account_type')->nullable()->comment('Account type: mobile, savings, checking');
            $table->string('routing_number')->nullable();
            $table->string('swift_code')->nullable()->comment('SWIFT/BIC code for international transfers');
            $table->boolean('is_primary')->default(false);
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
        Schema::dropIfExists('client_bank_accounts');
    }
};