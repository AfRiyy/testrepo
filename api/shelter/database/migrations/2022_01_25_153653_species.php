<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Species extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('species', function (Blueprint $table) {
        $table->engine = "InnoDb";
        $table->charset = "utf8mb4";
        $table->collation = "utf8mb4_hungarian_ci";
        $table->id();
        $table->string('sname');
        });
        DB::table('species')->insert(array('sname'=>'kutya'));
        DB::table('species')->insert(array('sname'=>'házi macska'));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('species');
    }
}
