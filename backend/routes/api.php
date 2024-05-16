<?php

use App\Http\Controllers\ContactController;

use Illuminate\Support\Facades\Route;

Route::post('/contact', [ContactController::class, 'store']);

Route::middleware('throttle')->post('/contact-test', [ContactController::class, 'store']);

Route::fallback(function () {
    return response()->json([
        'error' => [
            'code' => 404,
            'message' => 'Resource not found.'
        ]
    ], 404);
});