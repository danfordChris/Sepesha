<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use App\Models\CustomHelper;
use Illuminate\Http\Request;
use App\Models\SupportTicket;
use Illuminate\Support\Facades\DB;
use App\Models\SupportTicketMessage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class SupportTicketController extends Controller
{
    //


    public function index(Request $request)
    {
        try {
            $data = SupportTicket::with('messages')->where('sender_id', $request->auth_key)->limit(5)->orderBy('created_at', 'desc')->get();
            if ($data) {
                return CustomHelper::response(true, 'data found', 200, $data);
            } else {
                return CustomHelper::response(false, 'no data found', 442, $data);
            }
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }

    public function view(Request $request, $id)
    {
        try {
            $data = SupportTicket::with('messages')->where('sender_id', $request->auth_key)->where('id', $id)->first();
            if ($data) {
                return CustomHelper::response(true, 'data found', 200, $data);
            } else {
                return CustomHelper::response(false, 'no data found', 442, $data);
            }
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }


    public function store(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'subject' => 'required|string|max:255',
            'priority' => 'required|in:low,medium,high',
            'category' => 'nullable|string|max:255',
            'message' => 'required|string',
            'attachment' => 'nullable|file|mimes:jpg,png,pdf|max:2048',
        ]);

        if ($validator->fails()) {
            return CustomHelper::response(false, $validator->errors(), 442);
        }

        DB::beginTransaction();
        try {
            // Create Ticket
            $ticket = SupportTicket::create([
                'subject' => $request->subject,
                'status' => 'open',
                'sender_id' => $request->auth_key,
                'priority' => $request->priority,
                'category' => $request->category,
            ]);
            // Handle File Upload
            $attachmentPath = null;

            try {
                $fileField = "attachment";
                if ($request->hasFile('attachment')) {
                    $file = $request->file($fileField);
                    $extension = $file->getClientOriginalExtension();
                    $fileName = time() . '_' . uniqid() . '.' . $extension;
                    $filePath = $file->storeAs('/support', $fileName);
                    $attachmentPath = url("/storage/support/{$fileName}");
                }
            } catch (ValidationException $e) {
                return CustomHelper::response(false, $e->getMessage(), 442);
            } catch (\Exception $e) {
                return CustomHelper::response(false, "Error uploading file: " . $e->getMessage(), 500);
            }

            // Create First Message
            SupportTicketMessage::create([
                'support_ticket_id' => $ticket->id,
                'sender_id' => $request->auth_key,
                'sender_role' => $request->user_type,
                'message' => $request->message,
                'attachment' => $attachmentPath,
                'is_delivered' => true,
            ]);
            DB::commit();
            return CustomHelper::response(true, "Ticket created successfully!", 201, $ticket);
        } catch (ValidationException $e) {
            DB::rollBack();
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }
}
