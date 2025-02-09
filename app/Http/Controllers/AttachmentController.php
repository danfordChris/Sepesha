<?php

namespace App\Http\Controllers;

use App\Models\Attachment;
use App\Models\CustomHelper;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AttachmentController extends Controller
{

    public function index(Request $request)
    {
        try {
            $data = Attachment::documentTypes();
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
}
