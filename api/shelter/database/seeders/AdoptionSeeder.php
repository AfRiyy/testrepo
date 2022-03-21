<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AdoptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Adoption::factory()->make([
            "date"=> $this->faker->date(),
            "pets_id"=> 3,
            "users_id"=> 1
        ]);
        Adoption::factory()->make([
            "date"=> $this->faker->date(),
            "pets_id"=> 5,
            "users_id"=> 3
        ]);
        Adoption::factory()->make([
            "date"=> $this->faker->date(),
            "pets_id"=> 7,
            "users_id"=> 6
        ]);
    }
}
