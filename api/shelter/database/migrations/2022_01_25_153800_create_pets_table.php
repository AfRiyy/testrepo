<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->engine = "InnoDb";
            $table->charset = "utf8mb4";
            $table->collation = "utf8mb4_hungarian_ci";
            $table->id();
            $table->string('name');
            $table->foreignId('breeds_id')->constrained('breeds');
            $table->integer('age');
            $table->boolean('gender');
            $table->boolean('adopted');
            $table->foreignId('shelters_id')->constrained('shelters');
            $table->string('picture_path');
            $table->boolean('neutered');
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
        Schema::dropIfExists('pets');
    }
}
