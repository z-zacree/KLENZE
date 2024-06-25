<?php

namespace Database\Seeders;

use App\Models\PricingField;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PricingFieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PricingField::factory()->create([
            'step' => 1,
            'field_name' => 'propertyType',
            'label' => 'Type of Property',
            'short_label' => 'Property Type',
            'description' => 'Does not affect the cost, but it helps our cleaners prepare for their job more efficiently.',
            'price_per_unit' => 0,
            'type' => 'select',
            'options' => [
                'APARTMENT' => 'Apartment',
                'HOUSE' => 'House',
                'OTHERS' => 'Others',
            ]
        ]);

        PricingField::factory()->create([
            'step' => 1,
            'field_name' => 'storeyCount',
            'label' => 'Number of storeys',
            'short_label' => 'Storeys',
            'description' => 'Does not affect the cost, but it helps us select the appropriate cleaners fit for the job.',
            'price_per_unit' => 0,
            'type' => 'count',
            'default_value' => '1',
        ]);

        PricingField::factory()->create([
            'step' => 2,
            'field_name' => 'bedroomCount',
            'label' => 'Number of bedrooms',
            'short_label' => 'Bedrooms',
            'description' => 'Offices/Studies count as Bedrooms.',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 2,
            'field_name' => 'bathroomCount',
            'label' => 'Number of bathrooms',
            'short_label' => 'Bathrooms',
            'description' => 'Consists of a Shower, Toilet Bowl and/or Sink.',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 2,
            'field_name' => 'powderRoomCount',
            'label' => 'Number of powder rooms',
            'short_label' => 'Powder Rooms',
            'description' => 'Consists of Toilet Bowl and/or Sink only. (No Shower)',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 2,
            'field_name' => 'livingRoomCount',
            'label' => 'Number of living areas',
            'short_label' => 'Living Areas',
            'description' => 'Cleaning costs cover a single living area. Additional fee for multiples.',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 2,
            'field_name' => 'kitchenCount',
            'label' => 'Number of kitchen areas',
            'short_label' => 'Kitchen Areas',
            'description' => 'Cleaning costs cover a single kitchen area. Additional fee for multiples.',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 2,
            'field_name' => 'outdoorCount',
            'label' => 'Number of balcony/outdoor areas',
            'short_label' => 'Balcony/Outdoor Areas',
            'description' => 'Any external outdoor extension area',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 3,
            'field_name' => 'linenDoubleCount',
            'label' => 'Number of linen sheets - Queen/King',
            'short_label' => 'Linen - Queen/King',
            'description' => '3x sheets Queen linen, 4x Pillowcases, 2x Bath Towels',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 3,
            'field_name' => 'linenSingleCount',
            'label' => 'Number of linen sheets - Single',
            'short_label' => 'Linen - Single',
            'description' => '3x sheets Single linen, 2x Pillowcases, 1x Bath Towel',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 4,
            'field_name' => 'showerPack',
            'label' => 'Number of shower packs',
            'short_label' => 'Shower packs',
            'description' => '1x Shampoo, 1x Conditioner, 1x Body Wash, 3x Toilet Paper rolls',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 4,
            'field_name' => 'bathroomPack',
            'label' => 'Number of bathroom packs',
            'short_label' => 'Bathroom packs',
            'description' => '1x bath mat, 1x Hand towel',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 4,
            'field_name' => 'completeBathroomSet',
            'label' => 'Number of Complete Bathroom Sets',
            'short_label' => 'Complete Bathroom Sets',
            'description' => 'Shower pack + Bathroom pack',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 4,
            'field_name' => 'towelPack',
            'label' => 'Number of Towel packs',
            'short_label' => 'Towel packs',
            'description' => '2x Bath Towel',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 5,
            'field_name' => 'kitchenPack',
            'label' => 'Number of Kitchen packs',
            'short_label' => 'Kitchen packs',
            'description' => '1x Sponge, 1x Wipe, 1x Laundry Powder, 1x Dishwashing Liquid, 3x Bin Liners',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 5,
            'field_name' => 'beveragesPack',
            'label' => 'Number of Beverages packs',
            'short_label' => 'Beverages packs',
            'description' => '1x Milk, 2x Tea, 2x Coffee, 2x Sugar',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);

        PricingField::factory()->create([
            'step' => 5,
            'field_name' => 'completeKitchenSet',
            'label' => 'Number of Complete Kitchen sets',
            'short_label' => 'Complete Kitchen sets',
            'description' => 'Kitchen pack + Beverages pack',
            'price_per_unit' => 0,
            'type' => 'count',
        ]);
    }
}
