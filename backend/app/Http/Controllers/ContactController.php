<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Propaganistas\LaravelPhone\PhoneNumber;

class ContactController extends Controller
{
    /**
     * Store a message from users in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'phone' => ['required', 'string', 'phone:AU'],
                'email' => ['required', 'string', 'email', 'max:255'],
                'message' => ['required', 'string'],
            ]);
        } catch (ValidationException $validationException) {
            return response()->json([
                "success" => false,
                "message" => $validationException->getMessage(),
                "data" => null,
                "error" => $validationException->errors()
            ], 400);
        }

        ContactMessage::create([
            "name" => $request->input('name', ''),
            "phone_number" => new PhoneNumber($request->input('phone', ''), 'AU'),
            "email" => $request->input('email', ''),
            "message" => $request->input('message', ''),
        ]);

        return response()->json([
            "success" => true,
            "message" => trans("Message received successfully"),
            "data" => null,
            "error" => null
        ]);
    }
}
