<?php

namespace App\Http\Controllers;


use App\Models\Vehicle;
use App\Models\CustomHelper;
use App\Models\FeeCategory;
use App\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class RegionsController extends Controller
{


    public function index(Request $request){

        return $request->all();
        
        try {
            $data= Region::where('status',10)->get();
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