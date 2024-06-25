<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pricing_fields', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('field_name');
            $table->string('label');
            $table->string('short_label');
            $table->string('description');
            $table->decimal('price_per_unit');
            $table->unsignedTinyInteger('step');
            $table->enum('type', ['select', 'count']);
            $table->string('default_value')->nullable();
            $table->json('options')->nullable();
            $table->boolean('active')->default(true);
            $table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pricing_fields');
    }
};
