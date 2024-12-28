<?php

namespace App\Http\Controllers;


use App\Models\Vehicle;
use App\Models\CustomHelper;
use App\Models\FeeCategory;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class FeeCategoryController extends Controller
{



    public function index(Request $request){
        try {
            $data= FeeCategory::get();
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


    public function view(Request $request, $id){
        try {
            $data= FeeCategory::find($id);
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