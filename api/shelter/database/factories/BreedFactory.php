<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BreedFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            "bname"=> $this->faker->LastName(),
            "species_id" => rand(1,2),
            "updated_at" => time(),
            "created_at" => time(),
        ];
    }
}
