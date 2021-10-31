<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTriggerUsersinfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('CREATE TRIGGER Tr_CreateUserInfoSeq AFTER INSERT ON `users` FOR EACH ROW

        BEGIN

           INSERT INTO users_info SET id=NEW.id;
           INSERT INTO tbl_sequence SET seq_id="DAC", users_id=NEW.id;
           INSERT INTO tbl_sequence SET seq_id="ANL", users_id=NEW.id;

        END');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER `Tr_CreateUserInfoSeq`');
    }
}
