<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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
            $data = $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'phone_number' => ['required', 'string', 'phone:AU'],
                'email' => ['required', 'string', 'email', 'max:255'],
                'message' => ['required', 'string'],
            ]);
        } catch (ValidationException $validationException) {
            return response()->json([
                "success" => false,
                "message" => $validationException->getMessage(),
                "data" => null,
                "error" => $validationException->errors(),
            ], 400);
        }

        $contactMessage = ContactMessage::create($data);

        dispatch(function () use ($contactMessage) {
            Mail::to('zacharylim2004@gmail.com')->queue(new ContactUsMail($contactMessage));
        })->afterResponse();

        Mail::to('zacharylim2004@gmail.com')->send(new ContactUsMail($contactMessage));

        return response()->json([
            "success" => true,
            "message" => trans("Message received successfully"),
            "data" => null,
            "error" => null,
        ]);
    }
}
