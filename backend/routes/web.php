<?php

use Illuminate\Support\Facades\Route;

Route::fallback(function () {
    return response()->json([
        'error' => [
            'code' => 404,
            'message' => 'Resource not found.'
        ]
    ], 404);
});