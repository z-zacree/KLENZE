<?php

use App\Http\Controllers\ContactController;

use Illuminate\Support\Facades\Route;

Route::middleware("throttle")->post('/contact', [ContactController::class, 'store']);