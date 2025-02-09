import "./bootstrap";
import Echo from "laravel-echo";
import io from "socket.io-client";

window.io = io;

window.Echo = new Echo({
    broadcaster: "socket.io",
    host: "http://127.0.0.1:3001",
});

window.Echo.channel("public-channel").listen(".rideRequested", (data) => {
    console.log("New ride request received:", data);
});

window.Echo.channel("channel-sms").listen(".rideRequested", (data) => {
    console.log("New ride request received:", data);
});
