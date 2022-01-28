<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Breeds extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('breeds', function (Blueprint $table) {
            $table->engine = "InnoDb";
            $table->charset = "utf8mb4";
            $table->collation = "utf8mb4_hungarian_ci";
            $table->id();
            $table->string('bname');
            $table->foreignId('species_id')->constrained('species');
        });
        DB::table('breeds')->insert(array('bname'=>'kuvasz', 'species_id'=>1));
        DB::table('breeds')->insert(array('bname'=>'sziámi', 'species_id'=>2));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('breeds');
    }
}
