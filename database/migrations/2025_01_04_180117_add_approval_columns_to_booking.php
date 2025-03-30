<?php

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
        Schema::table('bookings', function (Blueprint $table) {
            $table->char('cancel_by', 36)->nullable();
            $table->foreign('cancel_by')->references('auth_key')->on('clients_info');
            $table->text('cancel_reason')->nullable();
            $table->text('driver_commnet')->nullable();
            $table->text('client_commnet')->nullable();
            $table->string('pay_chanel')->nullable();
            $table->integer('rating')->default(0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bookings', function (Blueprint $table) {
            $table->dropColumn('cancel_by');
            $table->dropColumn('cancel_reason');
            $table->dropColumn('driver_commnet');
            $table->dropColumn('client_commnet');
            $table->dropColumn('rating');
        });
    }
};