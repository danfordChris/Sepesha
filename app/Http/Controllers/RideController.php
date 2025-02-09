<?php

namespace App\Http\Controllers;

use App\Models\Ride;
use App\Models\User;
use App\Models\Booking;
use App\Events\SocketEvent;
use App\Events\RideAccepted;
use Illuminate\Http\Request;
use App\Events\RideRequested;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\BookingRequest;

class RideController extends Controller
{
    //


    private function emitSocketEvent($event, $data)
    {
        broadcast(new \App\Events\SocketEvent($event, $data))->toOthers();
    }

    public function bookRide(BookingRequest $request)
    {
        // $booking = Booking::create($request->validated());
        $this->emitSocketEvent('rideRequested', []);
        return response()->json(['message' => 'Booking created successfully', 'data' => []], 201);
    }


    public function updateRideStatus(Request $request)
    {
        $ride = Booking::find($request->ride_id);
        $ride->status = $request->status;
        $ride->save();
        $this->emitSocketEvent('rideStatusUpdated', $ride);
        return response()->json(['message' => 'Ride status updated.', 'ride' => $ride]);
    }


    public function triggerSocketEvent(Request $request)
    {
        $data = $request->validate([
            'event' => 'required|string',
            'data' => 'required|array',
        ]);
        broadcast(new SocketEvent($data['event'], $data['data']));
        return response()->json(['message' => 'Socket event triggered successfully']);
    }



    public function getDriversWithinRadius(Request $request)
    {
        $latitude = $request->latitude;
        $longitude = $request->longitude;
        $radius = $request->radius; // in kilometers
        $drivers = User::where('role', 'driver')
            ->select('*', DB::raw("(6371 * acos(cos(radians($latitude))
                * cos(radians(location->>'$.latitude'))
                * cos(radians(location->>'$.longitude') - radians($longitude))
                + sin(radians($latitude))
                * sin(radians(location->>'$.latitude')))) AS distance"))
            ->having('distance', '<=', $radius)
            ->get();

        return response()->json(['drivers' => $drivers]);
    }


    public function index()
    {
        return response()->json(Booking::paginate(10), 200);
    }

    public function show($id)
    {
        $booking = Booking::findOrFail($id);
        return response()->json($booking, 200);
    }

    public function update(BookingRequest $request, $id)
    {
        $booking = Booking::findOrFail($id);
        $booking->update($request->validated());
        return response()->json(['message' => 'Booking updated successfully', 'data' => $booking], 200);
    }

    public function destroy($id)
    {
        $booking = Booking::findOrFail($id);
        $booking->delete();
        return response()->json(['message' => 'Booking deleted successfully'], 200);
    }



    public function requestRide(Request $request)
    {
        // Your ride request logic here
        $rideRequest = [
            'user_id' => 1, // auth()->id(),
            'pickup_location' => $request->pickup_location,
            'destination' => $request->destination,
            'timestamp' => now()
        ];

        // Broadcast the event
        event(new RideRequested($rideRequest));

        return response()->json(['message' => 'Ride requested successfully']);
    }

    public function acceptRide(Request $request)
    {
        // Your ride acceptance logic here
        $rideData = [
            'ride_id' => $request->ride_id,
            'driver_id' => 1, // auth()->auth_key(),
            'status' => 'accepted'
        ];

        // Broadcast the event
        event(new RideAccepted($rideData));

        return response()->json(['message' => 'Ride accepted successfully']);
    }
}