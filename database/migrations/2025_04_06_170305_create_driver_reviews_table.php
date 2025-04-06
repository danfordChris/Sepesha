<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriverReviewsTable extends Migration
{
    public function up(): void
    {
        Schema::create('driver_reviews', function (Blueprint $table) {
            $table->char('id', 36)->primary(); // UUID
            $table->char('driver_id', 36);
            $table->char('user_type', 36)->nullable();
            $table->char('user_id', 36);
            $table->char('booking_id', 36)->nullable();
            $table->tinyInteger('rating')->unsigned();
            $table->text('review')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('driver_id')->references('auth_key')->on('clients_info')->onDelete('cascade');
            $table->foreign('user_id')->references('auth_key')->on('clients_info')->onDelete('cascade');
            $table->foreign('booking_id')->references('id')->on('bookings')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('driver_reviews');
    }
}