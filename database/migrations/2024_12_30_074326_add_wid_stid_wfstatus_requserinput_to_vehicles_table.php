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
            $table->integer('wid')->default(3)->nullable();  
            $table->integer('stid')->default(1)->nullable(); 
            $table->string('wfstatus')->nullable();          
            $table->string('requserinput')->default('Y')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vehicles', function (Blueprint $table) {
            $table->dropColumn('wid');          
            $table->dropColumn('stid');        
            $table->dropColumn('wfstatus');     
            $table->dropColumn('requserinput');
        });
    }
};
