<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker;
class ShelterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker_hu = Faker\Factory::create('hu_HU');
        return [
        "shelter_name" => $this->faker->company(),
        "shelter_zip" => rand(1,9999),
        "shelter_city" => $faker_hu->smallerCity(),
        "shelter_street_address" => $faker_hu->address(),
        "shelter_phone" => $faker_hu->phoneNumber(),
        "shelter_website" => $this->faker->url(),
        "shelter_facebook" => "facebook.com/".$this->faker->word()
        ];
    }
}
