<?php

namespace App\Http\Controllers;


use App\Models\Vehicle;
use App\Models\CustomHelper;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class VehicleController extends Controller
{
    public function view(Request $request, $id){
        try {
            $data= Vehicle::with('category')->find($id);
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

    public function index(Request $request){
        try {
            $data= Vehicle::with('category')->get();
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