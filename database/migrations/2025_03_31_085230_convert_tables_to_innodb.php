<?php

use Illuminate\Support\Facades\DB;
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

        DB::statement("ALTER TABLE bookings ENGINE=InnoDB");
        DB::statement("ALTER TABLE clients_info ENGINE=InnoDB");
        DB::statement("ALTER TABLE commissions ENGINE=InnoDB");
        DB::statement("ALTER TABLE vehicles ENGINE=InnoDB");
       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {}
};