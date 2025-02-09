// require("dotenv").config();
// const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");
// const jwt = require("jsonwebtoken");
const cors = require("cors");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: "http://127.0.0.1:8000",
//         methods: ["GET", "POST"],
//     },
// });

// // Middleware for authentication
// // io.use((socket, next) => {
// //     const token = socket.handshake.auth.token;

// //     if (!token) {
// //         return next(new Error("Authentication error"));
// //     }

// //     try {
// //         const payload = jwt.verify(token, process.env.JWT_SECRET);
// //         socket.user = payload;
// //         next();
// //     } catch (err) {
// //         next(new Error("Invalid token"));
// //     }
// // });

// // Socket events
// io.on("connection", (socket) => {
//     console.log(`User connected: ${socket.user.id}`);

//     socket.on("rideRequested", (data) => {
//         console.log("Ride requested:", data);
//         socket.broadcast.emit("rideRequested", data);
//     });

//     socket.on("disconnect", () => {
//         console.log(`User disconnected: ${socket.user.id}`);
//     });
// });

// // Start server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Socket.IO server running on port ${PORT}`);
// });

//================================================================

// const server = require('http').createServer();
// const io = require('socket.io')(server, {
//     cors: {
//         origin: "*",
//         methods: ["GET", "POST"]
//     }
// });

// io.on('connection', (socket) => {
//     console.log('Client connected');

//     // Listen for ride requests
//     socket.on('requestRide', (data) => {
//         io.emit('newRideRequest', data);
//     });

//     // Listen for ride acceptance
//     socket.on('acceptRide', (data) => {
//         io.emit('rideAccepted', data);
//     });

//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });

// server.listen(3000, () => {
//     console.log('Socket.IO server running on port 3000');
// });

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:8000", // Your Laravel app's URL
        methods: ["GET", "POST"],
    },
});
const port = 3001;

app.use(cors()); // Enable CORS

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("my-event", (data) => {
        // Listen for events from the client
        console.log("Received:", data);

        // Broadcast the event to all connected clients (including the sender)
        io.emit("my-event", data); // Or socket.broadcast.emit to exclude the sender

        // Or, emit to a specific room:
        // io.to('my-room').emit('my-event', data);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(port, () => {
    console.log(`Socket.IO server running on port ${port}`);
});
