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
        Schema::create('support_ticket_messages', function (Blueprint $table) {
            $table->char('id', 36)->primary();
            $table->char('support_ticket_id', 36)->nullable();
            $table->foreign('support_ticket_id')->references('id')->on('support_tickets');
            $table->char('sender_id', 36)->index();
            $table->enum('sender_role', ['customer','agent','driver','vendor','support']);
            $table->text('message');
            $table->string('attachment')->nullable();
            $table->boolean('is_read')->default(false);
            $table->boolean('is_delivered')->default(false);
            $table->timestamps();
            $table->foreignIdFor(User::class, 'created_by')->nullable();
            $table->foreignIdFor(User::class, 'updated_by')->nullable();
            $table->softDeletes();
        });

        DB::statement("ALTER TABLE support_ticket_messages ENGINE=InnoDB");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('support_ticket_messages');
    }
};