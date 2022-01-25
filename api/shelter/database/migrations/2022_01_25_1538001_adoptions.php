<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Adoptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adoptions', function (Blueprint $table) {
        $table->engine = "InnoDb";
        $table->charset = "utf8mb4";
        $table->collation = "utf8mb4_hungarian_ci";
        $table->id();
        $table->Date('date');
        $table->foreignId('pets_id');
        $table->foreignId('users_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adoptions');
    }
}
