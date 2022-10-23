<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ReminderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'note' => $this->faker->sentence(),
            'schedule_at' => $this->faker->dateTime(),
        ];
    }
}
