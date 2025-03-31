<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
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
        $ownerInfo = DB::select("SELECT * FROM clients_info WHERE reference_number = ?", ['SPS2025']);
        $data = [
            'role' => 'owner',
            'entity_type' => 'company',
            'reference_number' => 'SPS2025',
            'name' => 'SEPESHA',
            'sname' => 'LTD',
            'email' => 'info@sepesha.com',
            'phonecode' => '255',
            'phone' => '222333444',
            'password_hash' => Hash::make('sepesha@2025'),
            'password' => Hash::make('sepesha@2025'),
            'password_expiry' => '2090-01-01',
            'login_attempts' => 0,
            'privacy_checked' =>1,
            'auth_key' => 'be5de00b-926b-45b2-a9b6-9eccd8cba461',
            'rating' => '0.00',
            'total_rides' => '0',
            'total_ratings' => '0',
            'total_deliveries' => '0',
            'is_verified' => '1',
            'wallet_balance_tzs' => '0.00',
            'wallet_balance_usd' => '0.00',
            'status' => '10',
            'requserinput' => 'Y',
            'created_by' => '1',
            'updated_by' => '1',
            'created_at' => now(),
            'updated_at' => now(),
            'country_id' => 1,
            'region_id' => 1
        ];
        if (empty($ownerInfo)) {
            DB::table('clients_info')->insert($data);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table) {
            //
        });
    }
};