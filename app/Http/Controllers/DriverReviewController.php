<?php

namespace App\Http\Controllers;

use App\Models\CustomHelper;
use App\Models\DriverReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class DriverReviewController extends Controller
{


    public function index($id)
    {
        try {
            $stats = DriverReview::where('driver_id', $id)
                ->selectRaw('COUNT(*) as total_reviews, AVG(rating) as average_rating')
                ->first();

                $reviews = DriverReview::with(['user' => function ($query) {
                    $query->selectRaw('auth_key,auth_key as reviewer_id, profile_photo as reviewer_photo, CONCAT(name, " ", sname) as reviewer_name');
                }])
                ->where('driver_id', $id)
                ->orderBy('created_at', 'desc')
                ->get();


            $data = [
                'driver_id' => $id,
                'total_reviews' => $stats->total_reviews,
                'average_rating' => round($stats->average_rating, 1),
                'reviews' => $reviews,
            ];

            //DriverReview::where('driver_id', $id)->get();
            if ($data) {
                return CustomHelper::response(true, 'data fetched successfully', 200, $data);
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

        try {
            $validated = $request->validate([
                'driver_id' => 'required|exists:clients_info,auth_key',
                'rating' => 'required|integer|min:1|max:5',
                'review' => 'nullable|string',
            ]);

            $validated['user_id'] = $request->auth_key;
            $validated['user_type'] = $request->user_type;

            $review = DriverReview::create($validated);
            if ($review) {
                return response()->json([
                    'status' => true,
                    'message' => 'Review created successfully.',
                    'data'  =>  $review
                ], 201);
            }
        } catch (ValidationException $e) {
            foreach ($e->errors() as $error) {
                return CustomHelper::response(false, $error[0], 442);
            }
        }
    }
}