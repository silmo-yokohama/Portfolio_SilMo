<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Work>
 */
class WorkFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    $createdAt = $this->faker->dateTimeBetween('-6 month', '-2 month');
    $updatedAt = $this->faker->dateTimeBetween('-2 month', '-1 day');

    return [
      'name' => $this->faker->company(),
      'image_path' => '/images/no-image.png',
      'created_at' => $createdAt->format('Y-m-d H:i:s'),
      'updated_at' => $updatedAt->format('Y-m-d H:i:s'),
    ];
  }
}
