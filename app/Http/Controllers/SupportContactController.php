<?php

namespace App\Http\Controllers;

use App\Models\CustomHelper;
use Illuminate\Http\Request;
use App\Models\SupportContact;
use Illuminate\Validation\ValidationException;

class SupportContactController extends Controller
{

    public function index(Request $request){
        try {
            $data= SupportContact::where('status','1')->get();
            if($data){
                return CustomHelper::response(true, 'data found',200,$data);
            }else{
                return CustomHelper::response(false,'no data found', 442,$data);
            }

        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }

}