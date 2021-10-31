<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_info', function (Blueprint $table) {
            $table->id();
            $table->integer('acno')->nullable();
            $table->string('user_vpn', 20)->nullable();
            $table->string('agreement_number', 45)->nullable();
            $table->integer('total_annualleave')->default('12');
            $table->integer('workschedule')->default('0');
            $table->string('reduction',8)->nullable();
            $table->integer('total_reduction')->default('0');
            $table->integer('gross_salary')->default('0');
            $table->integer('tax')->default('0');
            $table->integer('net_salary')->default('0');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_info');
    }
}
