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
        Schema::create('wallet_transactions', function (Blueprint $table) {
            $table->char('id',36)->primary();
            $table->char('wallet_id', 36)->nullable();
            $table->foreign('wallet_id')->references('id')->on('client_wallets');
            $table->char('client_id', 36)->nullable();
            $table->foreign('client_id')->references('auth_key')->on('clients_info');
            $table->string('transaction_type')->comment('Type of transaction: deposit, withdrawal, refund');
            $table->decimal('amount', 15, 2);
            $table->decimal('balance_before', 15, 2);
            $table->decimal('balance_after', 15, 2);
            $table->string('currency')->default('TZS');
            $table->string('status')->default('completed')->comment('Status: pending, completed, failed');
            $table->text('description')->nullable();
            $table->date('transaction_date');
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
        Schema::dropIfExists('wallet_transactions');
    }
};