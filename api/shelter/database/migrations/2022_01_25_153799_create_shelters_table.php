<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSheltersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shelters', function (Blueprint $table) {
            $table->engine = "InnoDb";
            $table->charset = "utf8mb4";
            $table->collation = "utf8mb4_hungarian_ci";
            $table->id();
            $table->string('shelter_name');
            $table->string('shelter_zip')->nullable()->default("");
            $table->string('shelter_city')->nullable()->default("");
            $table->string('shelter_street_address')->nullable()->default("");
            $table->string('shelter_phone')->nullable()->default("");
            $table->string('shelter_website')->nullable()->default("");
            $table->string('shelter_facebook')->nullable()->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shelters');
    }
}
