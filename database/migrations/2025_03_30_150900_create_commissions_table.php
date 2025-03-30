<?php
use App\Models\User;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommissionsTable extends Migration
{
    public function up()
    {
        Schema::create('commissions', function (Blueprint $table) {
            $table->id();
            $table->char('customer_id', 36)->nullable();
            $table->foreign('customer_id')->references('auth_key')->on('clients_info');
            $table->dateTime('transact_date')->nullable();
            $table->string('business_type',50);  //vendor ,customer ,owner
            $table->char('transact_id', 36)->nullable();
            $table->string('name', 100)->nullable();
            $table->char('entryid', 36)->nullable();
            $table->string('entry_type', 50)->nullable()->comment('CREDIT, DEBIT');
            $table->string('category', 50)->nullable()->comment('voucher, invoice, payment, receipt');
            $table->string('account_code', 50)->nullable();
            $table->integer('quantity')->default(1);
            $table->string('uom', 20)->nullable();
            $table->decimal('vat', 10, 2)->default(0.00);
            $table->decimal('unit_price', 12, 2)->default(0.00);
            $table->decimal('dramount', 30, 2)->default(0.00);
            $table->decimal('cramount', 30, 2)->default(0.00);
            $table->string('currency', 50)->nullable();
            $table->decimal('erate', 10, 2)->nullable()->default(1);
            $table->text('descr')->nullable();
            $table->integer('fyid')->nullable();
            $table->string('reference_no', 50)->nullable();
            $table->char('status', 2)->default('N');
            $table->integer('wid')->nullable();
            $table->integer('stid')->default(1);
            $table->string('wfstatus', 100)->nullable();
            $table->char('requserinput', 2)->default('N');
            $table->foreignIdFor(User::class, 'created_by')->nullable();
            $table->foreignIdFor(User::class, 'updated_by')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('commissions');
    }
}