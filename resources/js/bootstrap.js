import axios from "axios";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allow your team to quickly build robust real-time web applications.
 */

import "./echo";

// Connect to Socket.IO server
 
const socket = io("<http://localhost:3000>");

// Request a ride
function requestRide(rideData) {
    socket.emit("requestRide", rideData);
}

// Listen for new ride requests (driver's app)
socket.on("newRideRequest", (data) => {
    console.log("New ride request:", data);
    // Update UI to show new ride request
});

// Accept a ride
function acceptRide(rideData) {
    socket.emit("acceptRide", rideData);
}

// Listen for ride acceptance (user's app)
socket.on("rideAccepted", (data) => {
    console.log("Ride accepted:", data);
    // Update UI to show ride accepted status
});
