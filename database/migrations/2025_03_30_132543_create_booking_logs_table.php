<?php

use App\Models\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {

    public function up()
    {
        Schema::create('booking_logs', function (Blueprint $table) {
            $table->id();
            $table->char('booking_id', 36)->nullable();
            $table->foreign('booking_id')->references('id')->on('bookings');
            $table->string('status')->nullable();
            $table->text('remarks')->nullable();
            $table->foreignIdFor(User::class, 'created_by')->nullable();
            $table->foreignIdFor(User::class, 'updated_by')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('booking_logs');
    }
};