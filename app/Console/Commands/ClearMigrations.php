<?php

namespace App\Console\Commands;

use App\Models\Booking;
use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Services\CommissionService;
use Illuminate\Support\Facades\Hash;

class ClearMigrations extends Command
{
    protected $signature = 'config:clear';
    protected $description = 'clear some already run migrations';
    public function handle()
    {

        DB::statement("DELETE FROM migrations WHERE  migration='2025_03_31_100608_add_owner_to_clients'");
        DB::statement("DELETE FROM migrations WHERE  migration='2025_03_31_085230_convert_tables_to_innodb'");
        $this->info("Migrations cleared from (ClearMigrations Console) , please re run:  php artisan migrate : ");
    }
}