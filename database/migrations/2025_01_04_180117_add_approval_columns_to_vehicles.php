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
        Schema::table('vehicles', function (Blueprint $table) {
            $table->char('driver_id', 36)->nullable();
            $table->foreign('driver_id')->references('auth_key')->on('clients_info');
            $table->foreignId('approved_by')->nullable()->constrained('user');
            $table->timestamp('approved_at')->nullable();
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->timestamp('location_updated_at')->nullable();
            $table->dateTime('assignment_start')->nullable();
            $table->dateTime('assignment_end')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vehicles', function (Blueprint $table) {
            $table->dropColumn('approved_by');
            $table->dropColumn('approved_at');
            $table->dropColumn('latitude');
            $table->dropColumn('longitude');
            $table->dropColumn('location_updated_at');
            $table->dropColumn('assignment_start');
            $table->dropColumn('assignment_end');
        });
    }
};