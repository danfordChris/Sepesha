<?php

namespace App\Http\Controllers;


use App\Models\Vehicle;
use App\Models\CustomHelper;
use App\Models\FeeCategory;
use App\Models\Welcome;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class WelcomeController extends Controller
{



    public function index(Request $request){
        try {
            $data= Welcome::select('id','name as title', 'photo', 'type as reference','description','order')->get();;
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