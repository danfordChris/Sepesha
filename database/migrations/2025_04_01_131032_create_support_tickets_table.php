<?php

use App\Models\User;
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
        Schema::create('support_tickets', function (Blueprint $table) {
            $table->char('id', 36)->primary();
            $table->char('sender_id', 36)->nullable();
            $table->foreign('sender_id')->references('auth_key')->on('clients_info');
            $table->string('subject')->nullable()->default('Support Ticket');
            $table->text('message')->nullable();
            $table->string('category')->nullable();
            $table->enum('status', ['open', 'inprogress', 'closed', 'cancelled'])->default('open');
            $table->enum('priority', ['low', 'medium', 'high'])->default('medium');
            $table->string('attachment')->nullable();
            $table->timestamps();
            $table->foreignIdFor(User::class, 'created_by')->nullable();
            $table->foreignIdFor(User::class, 'updated_by')->nullable();
            $table->softDeletes();
        });

        DB::statement("ALTER TABLE support_tickets ENGINE=InnoDB");

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('support_tickets');
    }
};