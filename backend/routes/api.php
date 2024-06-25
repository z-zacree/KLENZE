<?php

use App\Http\Controllers\ContactController;
use App\Models\PricingField;
use Illuminate\Support\Facades\Route;

Route::middleware("throttle")->post('/contact', [ContactController::class, 'store']);

Route::get('/pricing-fields', function () {
    return PricingField::all();
});