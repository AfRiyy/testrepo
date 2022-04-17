<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AdoptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "date" => $this->faker->date(),
            "pets_id" => rand(1, 10),
            "users_id" => rand(1, 10)
        ];
    }
}
