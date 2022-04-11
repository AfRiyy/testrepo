<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
        'name' => $this->faker->firstName(),
        'breeds_id' => rand(1,10),
        'age' => rand(1,14),
        'gender' => rand(0, 1),
        'adopted'  => rand(0, 1),
        'shelters_id' => rand(1,10) ,
        'picture_path' => "/images/pet/pet.jpg",
        'neutered' => rand(0, 1)
        ];
    }
}
