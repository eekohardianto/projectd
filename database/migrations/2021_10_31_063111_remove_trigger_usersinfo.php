<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveTriggerUsersinfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('CREATE TRIGGER Tr_RemoveUserInfoSeq AFTER DELETE ON `users` FOR EACH ROW

        BEGIN

           DELETE FROM users_info WHERE id=OLD.id;

           DELETE FROM tbl_sequence WHERE users_id=OLD.id;

        END');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER `Tr_RemoveUserInfoSeq`');
    }
}
