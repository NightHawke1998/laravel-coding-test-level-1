<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $starts_at = Carbon::createFromTimestamp($this->faker->dateTimeBetween($startDate = '+2 days', $endDate = '+1 week')->getTimeStamp());

        $ends_at = Carbon::createFromFormat('Y-m-d H:i:s', $starts_at)->addDays($this->faker->numberBetween(1, 8));

        return [
            'name' => $this->faker->name(),
            'startAt' => $starts_at,
            'endAt' => $ends_at
        ];
    }
}
