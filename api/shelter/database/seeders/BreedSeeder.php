<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
class BreedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Breed::factory()->count(10)->create();
    }
}
