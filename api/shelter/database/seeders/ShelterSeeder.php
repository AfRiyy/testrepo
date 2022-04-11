<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ShelterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Shelter::factory(10)->create();
    }
}
