<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PricingField>
 */
class PricingFieldFactory extends Factory
{
    /**
     * The current type of field being used by the factory.
     */
    protected static ?string $field_type;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'active' => true
        ];
    }
}
